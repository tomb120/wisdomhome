__d(function(e,r,t,n,c){'use strict';var o=r(c[0]),a=function(e){return'object'!=typeof e||e instanceof Date||null===e},i={MAX_MERGE_DEPTH:36,isTerminal:a,normalizeMergeArg:function(e){return void 0===e||null===e?{}:e},checkMergeArrayArgs:function(e,r){o(Array.isArray(e)&&Array.isArray(r),'Tried to merge arrays, instead got %s and %s.',e,r)},checkMergeObjectArgs:function(e,r){i.checkMergeObjectArg(e),i.checkMergeObjectArg(r)},checkMergeObjectArg:function(e){o(!a(e)&&!Array.isArray(e),'Tried to merge an object, instead got %s.',e)},checkMergeIntoObjectArg:function(e){o(!(a(e)&&'function'!=typeof e||Array.isArray(e)),'Tried to merge into an object, instead got %s.',e)},checkMergeLevel:function(e){o(e<36,"Maximum deep merge depth exceeded. You may be attempting to merge circular structures in an unsupported way.")},checkArrayStrategy:function(e){o(void 0===e||e in i.ArrayStrategies,"You must provide an array strategy to deep merge functions to instruct the deep merge how to resolve merging two arrays.")},ArrayStrategies:{Clobber:'Clobber',Concat:'Concat',IndexByIndex:'IndexByIndex'}};t.exports=i},120,[21]);