__d(function(e,o,a,r,t){'use strict';var n=o(t[0]);a.exports=function(e,o,a){if(o){var r=e.displayName||e.name||'unknown',t=e.__propTypesSecretDontUseThesePlease||e.propTypes;if(t){var s=o.NativeProps;for(var i in s){var p;if(!(t[i]||n[i]||a&&a[i]))throw p=t.hasOwnProperty(i)?'`'+r+'` has incorrectly defined propType for native prop `'+o.uiViewClassName+'.'+i+'` of native type `'+s[i]:'`'+r+'` has no propType for native prop `'+o.uiViewClassName+'.'+i+'` of native type `'+s[i]+'`',p+="\nIf you haven't changed this prop yourself, this usually means that your versions of the native code and JavaScript code are out of sync. Updating both should make this error go away.",new Error(p)}}}}},152,[132]);