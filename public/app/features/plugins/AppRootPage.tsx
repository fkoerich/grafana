// Libraries
import React, { Component } from 'react';
import { AppEvents, AppPlugin, AppPluginMeta, NavModel, PluginType } from '@grafana/data';
import { createHtmlPortalNode, InPortal, OutPortal, HtmlPortalNode } from 'react-reverse-portal';

import Page from 'app/core/components/Page/Page';
import { getPluginSettings } from './PluginSettingsCache';
import { importAppPlugin } from './plugin_loader';
import { getNotFoundNav, getWarningNav, getExceptionNav } from 'app/core/nav_model_srv';
import { appEvents } from 'app/core/core';
import PageLoader from 'app/core/components/PageLoader/PageLoader';
import { GrafanaRouteComponentProps } from 'app/core/navigation/types';

interface RouteParams {
  pluginId: string;
}

interface Props extends GrafanaRouteComponentProps<RouteParams> {}

interface State {
  loading: boolean;
  portalNode: HtmlPortalNode;
  plugin?: AppPlugin | null;
  nav?: NavModel;
}

export function getAppPluginPageError(meta: AppPluginMeta) {
  if (!meta) {
    return 'Unknown Plugin';
  }
  if (meta.type !== PluginType.app) {
    return 'Plugin must be an app';
  }
  if (!meta.enabled) {
    return 'Application Not Enabled';
  }
  return null;
}

class AppRootPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      portalNode: createHtmlPortalNode(),
    };
  }

  shouldComponentUpdate(nextProps: Props) {
    return nextProps.location.pathname.startsWith('/a/');
  }

  async componentDidMount() {
    const { params } = this.props.match;
    try {
      const app = await getPluginSettings(params.pluginId).then((info) => {
        const error = getAppPluginPageError(info);
        if (error) {
          appEvents.emit(AppEvents.alertError, [error]);
          this.setState({ nav: getWarningNav(error) });
          return null;
        }
        return importAppPlugin(info);
      });
      this.setState({ plugin: app, loading: false });
    } catch (err) {
      this.setState({
        plugin: null,
        loading: false,
        nav: process.env.NODE_ENV === 'development' ? getExceptionNav(err) : getNotFoundNav(),
      });
    }
  }

  onNavChanged = (nav: NavModel) => {
    this.setState({ nav });
  };

  render() {
    const { location, queryParams } = this.props;
    const { loading, plugin, nav, portalNode } = this.state;

    if (plugin && !plugin.root) {
      // TODO? redirect to plugin page?
      return <div>No Root App</div>;
    }

    return (
      <>
        <InPortal node={portalNode}>
          {plugin && plugin.root && (
            <plugin.root
              meta={plugin.meta}
              query={queryParams}
              path={location.pathname}
              onNavChanged={this.onNavChanged}
            />
          )}
        </InPortal>
        {nav ? (
          <Page navModel={nav}>
            <Page.Contents isLoading={loading}>
              <OutPortal node={portalNode} />
            </Page.Contents>
          </Page>
        ) : (
          <>
            <OutPortal node={portalNode} />
            {loading && <PageLoader />}
          </>
        )}
      </>
    );
  }
}

export default AppRootPage;
