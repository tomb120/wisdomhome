__d(function(e,t,n,o,i){'use strict';var a=t(i[0]).NativeAnimatedModule,r=t(i[1]),d=t(i[2]),s=1,c=1,m=void 0,u={createAnimatedNode:function(e,t){v(),a.createAnimatedNode(e,t)},startListeningToAnimatedNodeValue:function(e){v(),a.startListeningToAnimatedNodeValue(e)},stopListeningToAnimatedNodeValue:function(e){v(),a.stopListeningToAnimatedNodeValue(e)},connectAnimatedNodes:function(e,t){v(),a.connectAnimatedNodes(e,t)},disconnectAnimatedNodes:function(e,t){v(),a.disconnectAnimatedNodes(e,t)},startAnimatingNode:function(e,t,n,o){v(),a.startAnimatingNode(e,t,n,o)},stopAnimation:function(e){v(),a.stopAnimation(e)},setAnimatedNodeValue:function(e,t){v(),a.setAnimatedNodeValue(e,t)},setAnimatedNodeOffset:function(e,t){v(),a.setAnimatedNodeOffset(e,t)},flattenAnimatedNodeOffset:function(e){v(),a.flattenAnimatedNodeOffset(e)},extractAnimatedNodeOffset:function(e){v(),a.extractAnimatedNodeOffset(e)},connectAnimatedNodeToView:function(e,t){v(),a.connectAnimatedNodeToView(e,t)},disconnectAnimatedNodeFromView:function(e,t){v(),a.disconnectAnimatedNodeFromView(e,t)},dropAnimatedNode:function(e){v(),a.dropAnimatedNode(e)},addAnimatedEventToView:function(e,t,n){v(),a.addAnimatedEventToView(e,t,n)},removeAnimatedEventFromView:function(e,t,n){v(),a.removeAnimatedEventFromView(e,t,n)}},f={opacity:!0,transform:!0,shadowOpacity:!0,shadowRadius:!0,scaleX:!0,scaleY:!0,translateX:!0,translateY:!0},l={translateX:!0,translateY:!0,scale:!0,scaleX:!0,scaleY:!0,rotate:!0,rotateX:!0,rotateY:!0,perspective:!0},p={inputRange:!0,outputRange:!0,extrapolate:!0,extrapolateRight:!0,extrapolateLeft:!0};function v(){d(a,'Native animated module is not available')}var A=!1;n.exports={API:u,addWhitelistedStyleProp:function(e){f[e]=!0},addWhitelistedTransformProp:function(e){l[e]=!0},addWhitelistedInterpolationParam:function(e){p[e]=!0},validateStyles:function(e){for(var t in e)if(!f.hasOwnProperty(t))throw new Error("Style property '"+t+"' is not supported by native animated module")},validateTransform:function(e){e.forEach(function(e){if(!l.hasOwnProperty(e.property))throw new Error("Property '"+e.property+"' is not supported by native animated module")})},validateInterpolation:function(e){for(var t in e)if(!p.hasOwnProperty(t))throw new Error("Interpolation property '"+t+"' is not supported by native animated module")},generateNewNodeTag:function(){return s++},generateNewAnimationId:function(){return c++},assertNativeAnimatedModule:v,shouldUseNativeDriver:function(e){return e.useNativeDriver&&!a?(A||(console.warn("Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. More info: https://github.com/facebook/react-native/issues/11094#issuecomment-263240420"),A=!0),!1):e.useNativeDriver||!1},get nativeEventEmitter(){return m||(m=new r(a)),m}}},187,[23,75,21]);