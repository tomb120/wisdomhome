__d(function(e,i,n,t,o){Object.defineProperty(t,"__esModule",{value:!0});var d=i(o[0]),u=d.PixelRatio.get(),r=d.Dimensions.get('window').height,s=d.Dimensions.get('window').width;t.default=function(e){return u>=2&&u<3?s<360?.95*e:r<667?e:r>=667&&r<=735?1.15*e:1.25*e:u>=3&&u<3.5?s<=360?e:r<667?1.15*e:r>=667&&r<=735?1.2*e:1.27*e:u>=3.5?s<=360?e:r<667?1.2*e:r>=667&&r<=735?1.25*e:1.4*e:e}},521,[20]);