__d(function(t,e,a,s,i){'use strict';var n=(function(){function t(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments[1];babelHelpers.classCallCheck(this,t);var n=e(i[0]);this.data=n.createFromParts(a,s).data}return babelHelpers.createClass(t,[{key:"slice",value:function(t,a){var s=e(i[0]),n=this.data,r=n.offset,o=n.size;return'number'==typeof t&&(t>o&&(t=o),r+=t,o-=t,'number'==typeof a&&(a<0&&(a=this.size+a),o=a-t)),s.createFromOptions({blobId:this.data.blobId,offset:r,size:o})}},{key:"close",value:function(){e(i[0]).release(this.data.blobId),this.data=null}},{key:"data",set:function(t){this._data=t},get:function(){if(!this._data)throw new Error('Blob has been closed and is no longer available');return this._data}},{key:"size",get:function(){return this.data.size}},{key:"type",get:function(){return this.data.type||''}}]),t})();a.exports=n},79,[80]);