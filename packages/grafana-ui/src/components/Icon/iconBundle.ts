import { cacheStore } from '@leeoniya/react-inlinesvg';

// inlined static cache
import u001 from '!!raw-loader!../../../../../public/img/icons/unicons/angle-double-down.svg';
import u002 from '!!raw-loader!../../../../../public/img/icons/unicons/angle-double-right.svg';
import u003 from '!!raw-loader!../../../../../public/img/icons/unicons/angle-down.svg';
import u004 from '!!raw-loader!../../../../../public/img/icons/unicons/angle-left.svg';
import u005 from '!!raw-loader!../../../../../public/img/icons/unicons/angle-right.svg';
import u006 from '!!raw-loader!../../../../../public/img/icons/unicons/angle-up.svg';
import u007 from '!!raw-loader!../../../../../public/img/icons/unicons/apps.svg';
import u008 from '!!raw-loader!../../../../../public/img/icons/unicons/arrow.svg';
import u009 from '!!raw-loader!../../../../../public/img/icons/unicons/arrow-down.svg';
import u010 from '!!raw-loader!../../../../../public/img/icons/unicons/arrow-from-right.svg';
import u011 from '!!raw-loader!../../../../../public/img/icons/unicons/arrow-left.svg';
import u012 from '!!raw-loader!../../../../../public/img/icons/unicons/arrow-random.svg';
import u013 from '!!raw-loader!../../../../../public/img/icons/unicons/arrow-right.svg';
import u014 from '!!raw-loader!../../../../../public/img/icons/unicons/arrow-up.svg';
import u015 from '!!raw-loader!../../../../../public/img/icons/unicons/arrows-h.svg';
//import u016 from '!!raw-loader!../../../../../public/img/icons/unicons/asc.svg';
import u017 from '!!raw-loader!../../../../../public/img/icons/unicons/backward.svg';
import u018 from '!!raw-loader!../../../../../public/img/icons/unicons/bars.svg';
import u019 from '!!raw-loader!../../../../../public/img/icons/unicons/bell.svg';
import u020 from '!!raw-loader!../../../../../public/img/icons/unicons/bell-slash.svg';
import u021 from '!!raw-loader!../../../../../public/img/icons/unicons/bolt.svg';
import u022 from '!!raw-loader!../../../../../public/img/icons/unicons/book.svg';
import u023 from '!!raw-loader!../../../../../public/img/icons/unicons/book-open.svg';
import u024 from '!!raw-loader!../../../../../public/img/icons/unicons/brackets-curly.svg';
import u025 from '!!raw-loader!../../../../../public/img/icons/unicons/bug.svg';
import u026 from '!!raw-loader!../../../../../public/img/icons/unicons/building.svg';
import u027 from '!!raw-loader!../../../../../public/img/icons/unicons/calculator-alt.svg';
import u028 from '!!raw-loader!../../../../../public/img/icons/unicons/calendar-alt.svg';
import u029 from '!!raw-loader!../../../../../public/img/icons/unicons/camera.svg';
import u030 from '!!raw-loader!../../../../../public/img/icons/unicons/channel-add.svg';
import u031 from '!!raw-loader!../../../../../public/img/icons/unicons/chart-line.svg';
import u032 from '!!raw-loader!../../../../../public/img/icons/unicons/check.svg';
import u033 from '!!raw-loader!../../../../../public/img/icons/unicons/check-circle.svg';
import u034 from '!!raw-loader!../../../../../public/img/icons/unicons/circle.svg';
import u035 from '!!raw-loader!../../../../../public/img/icons/unicons/clipboard-alt.svg';
import u036 from '!!raw-loader!../../../../../public/img/icons/unicons/clock-nine.svg';
//import u037 from '!!raw-loader!../../../../../public/img/icons/unicons/clock-o.svg';
//import u038 from '!!raw-loader!../../../../../public/img/icons/unicons/close.svg';
import u039 from '!!raw-loader!../../../../../public/img/icons/unicons/cloud.svg';
import u040 from '!!raw-loader!../../../../../public/img/icons/unicons/cloud-download.svg';
import u041 from '!!raw-loader!../../../../../public/img/icons/unicons/code-branch.svg';
import u042 from '!!raw-loader!../../../../../public/img/icons/unicons/cog.svg';
import u043 from '!!raw-loader!../../../../../public/img/icons/unicons/columns.svg';
import u044 from '!!raw-loader!../../../../../public/img/icons/unicons/comment-alt.svg';
import u045 from '!!raw-loader!../../../../../public/img/icons/unicons/comment-alt-share.svg';
import u046 from '!!raw-loader!../../../../../public/img/icons/unicons/comments-alt.svg';
import u047 from '!!raw-loader!../../../../../public/img/icons/unicons/compass.svg';
import u048 from '!!raw-loader!../../../../../public/img/icons/unicons/copy.svg';
import u049 from '!!raw-loader!../../../../../public/img/icons/unicons/cube.svg';
import u050 from '!!raw-loader!../../../../../public/img/icons/unicons/dashboard.svg';
import u051 from '!!raw-loader!../../../../../public/img/icons/unicons/database.svg';
import u052 from '!!raw-loader!../../../../../public/img/icons/unicons/document-info.svg';
//import u053 from '!!raw-loader!../../../../../public/img/icons/unicons/down.svg';
import u054 from '!!raw-loader!../../../../../public/img/icons/unicons/download-alt.svg';
import u055 from '!!raw-loader!../../../../../public/img/icons/unicons/draggabledots.svg';
import u056 from '!!raw-loader!../../../../../public/img/icons/unicons/edit.svg';
import u057 from '!!raw-loader!../../../../../public/img/icons/unicons/ellipsis-v.svg';
import u058 from '!!raw-loader!../../../../../public/img/icons/unicons/envelope.svg';
import u059 from '!!raw-loader!../../../../../public/img/icons/unicons/exchange-alt.svg';
import u060 from '!!raw-loader!../../../../../public/img/icons/unicons/exclamation-triangle.svg';
import u061 from '!!raw-loader!../../../../../public/img/icons/unicons/external-link-alt.svg';
import u062 from '!!raw-loader!../../../../../public/img/icons/unicons/eye.svg';
import u063 from '!!raw-loader!../../../../../public/img/icons/unicons/eye-slash.svg';
import u064 from '!!raw-loader!../../../../../public/img/icons/unicons/file-alt.svg';
import u065 from '!!raw-loader!../../../../../public/img/icons/unicons/file-blank.svg';
import u066 from '!!raw-loader!../../../../../public/img/icons/unicons/filter.svg';
import u067 from '!!raw-loader!../../../../../public/img/icons/unicons/folder.svg';
import u068 from '!!raw-loader!../../../../../public/img/icons/unicons/folder-open.svg';
import u069 from '!!raw-loader!../../../../../public/img/icons/unicons/folder-plus.svg';
import u070 from '!!raw-loader!../../../../../public/img/icons/unicons/folder-upload.svg';
import u071 from '!!raw-loader!../../../../../public/img/icons/unicons/forward.svg';
//import u072 from '!!raw-loader!../../../../../public/img/icons/unicons/grafana_com.svg';
import u073 from '!!raw-loader!../../../../../public/img/icons/unicons/graph-bar.svg';
import u074 from '!!raw-loader!../../../../../public/img/icons/unicons/history.svg';
import u075 from '!!raw-loader!../../../../../public/img/icons/unicons/home-alt.svg';
//import u076 from '!!raw-loader!../../../../../public/img/icons/unicons/icon.svg';
//import u077 from '!!raw-loader!../../../../../public/img/icons/unicons/icon-test.svg';
import u078 from '!!raw-loader!../../../../../public/img/icons/unicons/import.svg';
import u079 from '!!raw-loader!../../../../../public/img/icons/unicons/info.svg';
import u080 from '!!raw-loader!../../../../../public/img/icons/unicons/info-circle.svg';
//import u081 from '!!raw-loader!../../../../../public/img/icons/unicons/key.svg';
import u082 from '!!raw-loader!../../../../../public/img/icons/unicons/key-skeleton-alt.svg';
import u083 from '!!raw-loader!../../../../../public/img/icons/unicons/keyboard.svg';
import u084 from '!!raw-loader!../../../../../public/img/icons/unicons/link.svg';
import u085 from '!!raw-loader!../../../../../public/img/icons/unicons/list-ul.svg';
import u086 from '!!raw-loader!../../../../../public/img/icons/unicons/lock.svg';
import u087 from '!!raw-loader!../../../../../public/img/icons/unicons/minus.svg';
import u088 from '!!raw-loader!../../../../../public/img/icons/unicons/minus-circle.svg';
import u089 from '!!raw-loader!../../../../../public/img/icons/unicons/mobile-android.svg';
import u090 from '!!raw-loader!../../../../../public/img/icons/unicons/monitor.svg';
import u091 from '!!raw-loader!../../../../../public/img/icons/unicons/pause.svg';
import u092 from '!!raw-loader!../../../../../public/img/icons/unicons/pen.svg';
import u093 from '!!raw-loader!../../../../../public/img/icons/unicons/play.svg';
import u094 from '!!raw-loader!../../../../../public/img/icons/unicons/plug.svg';
import u095 from '!!raw-loader!../../../../../public/img/icons/unicons/plus.svg';
import u096 from '!!raw-loader!../../../../../public/img/icons/unicons/plus-circle.svg';
import u097 from '!!raw-loader!../../../../../public/img/icons/unicons/power.svg';
import u098 from '!!raw-loader!../../../../../public/img/icons/unicons/presentation-play.svg';
import u099 from '!!raw-loader!../../../../../public/img/icons/unicons/process.svg';
import u100 from '!!raw-loader!../../../../../public/img/icons/unicons/question-circle.svg';
import u101 from '!!raw-loader!../../../../../public/img/icons/unicons/repeat.svg';
import u102 from '!!raw-loader!../../../../../public/img/icons/unicons/rocket.svg';
import u103 from '!!raw-loader!../../../../../public/img/icons/unicons/save.svg';
import u104 from '!!raw-loader!../../../../../public/img/icons/unicons/search.svg';
import u105 from '!!raw-loader!../../../../../public/img/icons/unicons/search-minus.svg';
import u106 from '!!raw-loader!../../../../../public/img/icons/unicons/search-plus.svg';
import u107 from '!!raw-loader!../../../../../public/img/icons/unicons/share-alt.svg';
import u108 from '!!raw-loader!../../../../../public/img/icons/unicons/shield.svg';
//import u109 from '!!raw-loader!../../../../../public/img/icons/unicons/sign-in.svg';
import u110 from '!!raw-loader!../../../../../public/img/icons/unicons/signal.svg';
import u111 from '!!raw-loader!../../../../../public/img/icons/unicons/signin.svg';
import u112 from '!!raw-loader!../../../../../public/img/icons/unicons/signout.svg';
import u113 from '!!raw-loader!../../../../../public/img/icons/unicons/sitemap.svg';
import u114 from '!!raw-loader!../../../../../public/img/icons/unicons/slack.svg';
import u115 from '!!raw-loader!../../../../../public/img/icons/unicons/sliders-v-alt.svg';
import u116 from '!!raw-loader!../../../../../public/img/icons/unicons/sort-amount-down.svg';
import u117 from '!!raw-loader!../../../../../public/img/icons/unicons/sort-amount-up.svg';
import u118 from '!!raw-loader!../../../../../public/img/icons/unicons/square-shape.svg';
import u119 from '!!raw-loader!../../../../../public/img/icons/unicons/star.svg';
import u120 from '!!raw-loader!../../../../../public/img/icons/unicons/step-backward.svg';
//import u121 from '!!raw-loader!../../../../../public/img/icons/unicons/success.svg';
import u122 from '!!raw-loader!../../../../../public/img/icons/unicons/sync.svg';
import u123 from '!!raw-loader!../../../../../public/img/icons/unicons/table.svg';
import u124 from '!!raw-loader!../../../../../public/img/icons/unicons/tag-alt.svg';
import u125 from '!!raw-loader!../../../../../public/img/icons/unicons/times.svg';
import u126 from '!!raw-loader!../../../../../public/img/icons/unicons/trash-alt.svg';
import u127 from '!!raw-loader!../../../../../public/img/icons/unicons/unlock.svg';
//import u128 from '!!raw-loader!../../../../../public/img/icons/unicons/up.svg';
import u129 from '!!raw-loader!../../../../../public/img/icons/unicons/upload.svg';
import u130 from '!!raw-loader!../../../../../public/img/icons/unicons/user.svg';
import u131 from '!!raw-loader!../../../../../public/img/icons/unicons/users-alt.svg';
//import u132 from '!!raw-loader!../../../../../public/img/icons/unicons/warning.svg';
import u133 from '!!raw-loader!../../../../../public/img/icons/unicons/wrap-text.svg';

import c001 from '!!raw-loader!../../../../../public/img/icons/custom/gf-bar-alignment-after.svg';
import c002 from '!!raw-loader!../../../../../public/img/icons/custom/gf-bar-alignment-before.svg';
import c003 from '!!raw-loader!../../../../../public/img/icons/custom/gf-bar-alignment-center.svg';
import c004 from '!!raw-loader!../../../../../public/img/icons/custom/gf-interpolation-linear.svg';
import c005 from '!!raw-loader!../../../../../public/img/icons/custom/gf-interpolation-smooth.svg';
import c006 from '!!raw-loader!../../../../../public/img/icons/custom/gf-interpolation-step-after.svg';
import c007 from '!!raw-loader!../../../../../public/img/icons/custom/gf-interpolation-step-before.svg';
import c008 from '!!raw-loader!../../../../../public/img/icons/custom/gf-logs.svg';

import m001 from '!!raw-loader!../../../../../public/img/icons/mono/favorite.svg';
import m002 from '!!raw-loader!../../../../../public/img/icons/mono/grafana.svg';
import m003 from '!!raw-loader!../../../../../public/img/icons/mono/heart.svg';
import m004 from '!!raw-loader!../../../../../public/img/icons/mono/heart-break.svg';
import m005 from '!!raw-loader!../../../../../public/img/icons/mono/panel-add.svg';
import m006 from '!!raw-loader!../../../../../public/img/icons/mono/reusable-panel.svg';

/*
fa fa-bullhorn
fa fa-mail-forward
fa fa-pagelines
fa fa-spinner
fa fa-windows
*/

const iconRoot = '/public/img/icons/';
const unicons = 'unicons/';
const custom = 'custom/';
const mono = 'mono/';

function cacheItem(content: string, subdir: string, name: string) {
  cacheStore[iconRoot + subdir + name + '.svg'] = { content, status: 'loaded', queue: [] };
}

cacheItem(u001, unicons, 'angle-double-down');
cacheItem(u002, unicons, 'angle-double-right');
cacheItem(u003, unicons, 'angle-down');
cacheItem(u004, unicons, 'angle-left');
cacheItem(u005, unicons, 'angle-right');
cacheItem(u006, unicons, 'angle-up');
cacheItem(u007, unicons, 'apps');
cacheItem(u008, unicons, 'arrow');
cacheItem(u009, unicons, 'arrow-down');
cacheItem(u010, unicons, 'arrow-from-right');
cacheItem(u011, unicons, 'arrow-left');
cacheItem(u012, unicons, 'arrow-random');
cacheItem(u013, unicons, 'arrow-right');
cacheItem(u014, unicons, 'arrow-up');
cacheItem(u015, unicons, 'arrows-h');
//cacheItem(u016, unicons, 'asc');
cacheItem(u017, unicons, 'backward');
cacheItem(u018, unicons, 'bars');
cacheItem(u019, unicons, 'bell');
cacheItem(u020, unicons, 'bell-slash');
cacheItem(u021, unicons, 'bolt');
cacheItem(u022, unicons, 'book');
cacheItem(u023, unicons, 'book-open');
cacheItem(u024, unicons, 'brackets-curly');
cacheItem(u025, unicons, 'bug');
cacheItem(u026, unicons, 'building');
cacheItem(u027, unicons, 'calculator-alt');
cacheItem(u028, unicons, 'calendar-alt');
cacheItem(u029, unicons, 'camera');
cacheItem(u030, unicons, 'channel-add');
cacheItem(u031, unicons, 'chart-line');
cacheItem(u032, unicons, 'check');
cacheItem(u033, unicons, 'check-circle');
cacheItem(u034, unicons, 'circle');
cacheItem(u035, unicons, 'clipboard-alt');
cacheItem(u036, unicons, 'clock-nine');
//cacheItem(u037, unicons, 'clock-o');
//cacheItem(u038, unicons, 'close');
cacheItem(u039, unicons, 'cloud');
cacheItem(u040, unicons, 'cloud-download');
cacheItem(u041, unicons, 'code-branch');
cacheItem(u042, unicons, 'cog');
cacheItem(u043, unicons, 'columns');
cacheItem(u044, unicons, 'comment-alt');
cacheItem(u045, unicons, 'comment-alt-share');
cacheItem(u046, unicons, 'comments-alt');
cacheItem(u047, unicons, 'compass');
cacheItem(u048, unicons, 'copy');
cacheItem(u049, unicons, 'cube');
cacheItem(u050, unicons, 'dashboard');
cacheItem(u051, unicons, 'database');
cacheItem(u052, unicons, 'document-info');
//cacheItem(u053, unicons, 'down');
cacheItem(u054, unicons, 'download-alt');
cacheItem(u055, unicons, 'draggabledots');
cacheItem(u056, unicons, 'edit');
cacheItem(u057, unicons, 'ellipsis-v');
cacheItem(u058, unicons, 'envelope');
cacheItem(u059, unicons, 'exchange-alt');
cacheItem(u060, unicons, 'exclamation-triangle');
cacheItem(u061, unicons, 'external-link-alt');
cacheItem(u062, unicons, 'eye');
cacheItem(u063, unicons, 'eye-slash');
cacheItem(u064, unicons, 'file-alt');
cacheItem(u065, unicons, 'file-blank');
cacheItem(u066, unicons, 'filter');
cacheItem(u067, unicons, 'folder');
cacheItem(u068, unicons, 'folder-open');
cacheItem(u069, unicons, 'folder-plus');
cacheItem(u070, unicons, 'folder-upload');
cacheItem(u071, unicons, 'forward');
//cacheItem(u072, unicons, 'grafana_com');
cacheItem(u073, unicons, 'graph-bar');
cacheItem(u074, unicons, 'history');
cacheItem(u075, unicons, 'home-alt');
//cacheItem(u076, unicons, 'icon');
//cacheItem(u077, unicons, 'icon-test');
cacheItem(u078, unicons, 'import');
cacheItem(u079, unicons, 'info');
cacheItem(u080, unicons, 'info-circle');
//cacheItem(u081, unicons, 'key');
cacheItem(u082, unicons, 'key-skeleton-alt');
cacheItem(u083, unicons, 'keyboard');
cacheItem(u084, unicons, 'link');
cacheItem(u085, unicons, 'list-ul');
cacheItem(u086, unicons, 'lock');
cacheItem(u087, unicons, 'minus');
cacheItem(u088, unicons, 'minus-circle');
cacheItem(u089, unicons, 'mobile-android');
cacheItem(u090, unicons, 'monitor');
cacheItem(u091, unicons, 'pause');
cacheItem(u092, unicons, 'pen');
cacheItem(u093, unicons, 'play');
cacheItem(u094, unicons, 'plug');
cacheItem(u095, unicons, 'plus');
cacheItem(u096, unicons, 'plus-circle');
cacheItem(u097, unicons, 'power');
cacheItem(u098, unicons, 'presentation-play');
cacheItem(u099, unicons, 'process');
cacheItem(u100, unicons, 'question-circle');
cacheItem(u101, unicons, 'repeat');
cacheItem(u102, unicons, 'rocket');
cacheItem(u103, unicons, 'save');
cacheItem(u104, unicons, 'search');
cacheItem(u105, unicons, 'search-minus');
cacheItem(u106, unicons, 'search-plus');
cacheItem(u107, unicons, 'share-alt');
cacheItem(u108, unicons, 'shield');
//cacheItem(u109, unicons, 'sign-in');
cacheItem(u110, unicons, 'signal');
cacheItem(u111, unicons, 'signin');
cacheItem(u112, unicons, 'signout');
cacheItem(u113, unicons, 'sitemap');
cacheItem(u114, unicons, 'slack');
cacheItem(u115, unicons, 'sliders-v-alt');
cacheItem(u116, unicons, 'sort-amount-down');
cacheItem(u117, unicons, 'sort-amount-up');
cacheItem(u118, unicons, 'square-shape');
cacheItem(u119, unicons, 'star');
cacheItem(u120, unicons, 'step-backward');
//cacheItem(u121, unicons, 'success');
cacheItem(u122, unicons, 'sync');
cacheItem(u123, unicons, 'table');
cacheItem(u124, unicons, 'tag-alt');
cacheItem(u125, unicons, 'times');
cacheItem(u126, unicons, 'trash-alt');
cacheItem(u127, unicons, 'unlock');
//cacheItem(u128, unicons, 'up');
cacheItem(u129, unicons, 'upload');
cacheItem(u130, unicons, 'user');
cacheItem(u131, unicons, 'users-alt');
//cacheItem(u132, unicons, 'warning');
cacheItem(u133, unicons, 'wrap-text');

cacheItem(c001, custom, 'gf-bar-alignment-after');
cacheItem(c002, custom, 'gf-bar-alignment-before');
cacheItem(c003, custom, 'gf-bar-alignment-center');
cacheItem(c004, custom, 'gf-interpolation-linear');
cacheItem(c005, custom, 'gf-interpolation-smooth');
cacheItem(c006, custom, 'gf-interpolation-step-after');
cacheItem(c007, custom, 'gf-interpolation-step-before');
cacheItem(c008, custom, 'gf-logs');

cacheItem(m001, mono, 'favorite');
cacheItem(m002, mono, 'grafana');
cacheItem(m003, mono, 'heart');
cacheItem(m004, mono, 'heart-break');
cacheItem(m005, mono, 'panel-add');
cacheItem(m006, mono, 'reusable-panel');
