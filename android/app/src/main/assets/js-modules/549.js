__d(function(t,e,r,n,u){Object.defineProperty(n,"__esModule",{value:!0});var a=function(t,e){return t*e},i=function(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))},c=n.getElementVisibleWidth=function(t,e,r){return e>=0?e+t<=r?t:r-e:t-e},o=function(t,e,r,n,u){switch(e){case 0:case 3:return t<1?10:t>n?n-10:t;case 1:case 2:var a=n-t;return a>=u?t:t-(u-a+10);default:return 0}};n.default=function(t,e,r,n,u,f,s,d,l){var h=[t+c(r,t,u)/2,e+n/2],p=[u,h[1]],v=[h[0],f],M=[0,h[1]],_=i(h,[h[0],0]),w=i(h,p),b=i(h,v),m=i(h,M),y=n/2,g=[[-1,-1],[1,-1],[1,1],[-1,1]],j=[[-s,-d],[0,-d],[0,0],[-s,0]],q=[a(_,m),a(_,w),a(w,b),a(b,m)].map(function(t,e){return{area:t,id:e}}).sort(function(t,e){return e.area-t.area})[0].id,x=(l?h[0]-18*g[q][0]:h[0])+(.001*g[q][0]+j[q][0]);return{x:o(x,q,h[0],u,s),y:h[1]+(y*g[q][1]+j[q][1])+(l?10*g[q][1]:0)}}},549,[]);