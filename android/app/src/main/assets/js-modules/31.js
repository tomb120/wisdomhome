__d(function(t,n,r,e,s){'use strict';var i=n(s[0]),o={OS:'android',get Version(){var t=i.PlatformConstants;return t&&t.Version},get isTesting(){var t=i.PlatformConstants;return t&&t.isTesting},get isTV(){var t=i.PlatformConstants;return t&&'tv'===t.uiMode},select:function(t){return'android'in t?t.android:t.default}};r.exports=o},31,[23]);