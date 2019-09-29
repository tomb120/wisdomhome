__d(function(e,t,r,n,a){'use strict';var i=t(a[0]),o=t(a[1]),s=t(a[2]),l=t(a[3]),p=(function(e){function t(e,r){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return n._keyExtractor=function(e,t){var r=n._subExtractor(t);return r&&r.key||String(t)},n._convertViewable=function(e){l(null!=e.index,'Received a broken ViewToken');var t=n._subExtractor(e.index);if(!t)return null;var r=t.section.keyExtractor||n.props.keyExtractor;return babelHelpers.extends({},e,{index:t.index,key:r(e.item,t.index),section:t.section})},n._onViewableItemsChanged=function(e){var t=e.viewableItems,r=e.changed;n.props.onViewableItemsChanged&&n.props.onViewableItemsChanged({viewableItems:t.map(n._convertViewable,n).filter(Boolean),changed:r.map(n._convertViewable,n).filter(Boolean)})},n._renderItem=function(e){var t=e.item,r=e.index,a=n._subExtractor(r);if(!a)return null;var o=a.index;if(null==o){var s=a.section;if(!0===a.header){var p=n.props.renderSectionHeader;return p?p({section:s}):null}var d=n.props.renderSectionFooter;return d?d({section:s}):null}var u=a.section.renderItem||n.props.renderItem,g=n._getSeparatorComponent(r,a);return l(u,'no renderItem!'),i.createElement(c,{SeparatorComponent:g,LeadingSeparatorComponent:0===o?n.props.SectionSeparatorComponent:void 0,cellKey:a.key,index:o,item:t,leadingItem:a.leadingItem,leadingSection:a.leadingSection,onUpdateSeparator:n._onUpdateSeparator,prevCellKey:(n._subExtractor(r-1)||{}).key,ref:function(e){n._cellRefs[a.key]=e},renderItem:u,section:a.section,trailingItem:a.trailingItem,trailingSection:a.trailingSection})},n._onUpdateSeparator=function(e,t){var r=n._cellRefs[e];r&&r.updateSeparatorProps(t)},n._cellRefs={},n._captureRef=function(e){n._listRef=e},n.state=n._computeState(e),n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"scrollToLocation",value:function(e){for(var t=e.itemIndex+1,r=0;r<e.sectionIndex;r++)t+=this.props.sections[r].data.length+2;var n=babelHelpers.extends({},e,{index:t});this._listRef.scrollToIndex(n)}},{key:"getListRef",value:function(){return this._listRef}},{key:"_subExtractor",value:function(e){for(var t=e,r=this.props.keyExtractor,n=0;n<this.props.sections.length;n++){var a=this.props.sections[n],i=a.key||String(n);if((t-=1)>=a.data.length+1)t-=a.data.length+1;else return-1===t?{section:a,key:i+':header',index:null,header:!0,trailingSection:this.props.sections[n+1]}:t===a.data.length?{section:a,key:i+':footer',index:null,header:!1,trailingSection:this.props.sections[n+1]}:{section:a,key:i+':'+(a.keyExtractor||r)(a.data[t],t),index:t,leadingItem:a.data[t-1],leadingSection:this.props.sections[n-1],trailingItem:a.data[t+1],trailingSection:this.props.sections[n+1]}}}},{key:"_getSeparatorComponent",value:function(e,t){if(!(t=t||this._subExtractor(e)))return null;var r=t.section.ItemSeparatorComponent||this.props.ItemSeparatorComponent,n=this.props.SectionSeparatorComponent,a=e===this.state.childProps.getItemCount()-1,i=t.index===t.section.data.length-1;return n&&i?n:!r||i||a?null:r}},{key:"_computeState",value:function(e){var t=e.ListHeaderComponent?1:0,r=[],n=e.sections.reduce(function(e,n){return r.push(e+t),e+n.data.length+2},0);return{childProps:babelHelpers.extends({},e,{renderItem:this._renderItem,ItemSeparatorComponent:void 0,data:e.sections,getItemCount:function(){return n},getItem:d,keyExtractor:this._keyExtractor,onViewableItemsChanged:e.onViewableItemsChanged?this._onViewableItemsChanged:void 0,stickyHeaderIndices:e.stickySectionHeadersEnabled?r:void 0})}}}]),babelHelpers.createClass(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState(this._computeState(e))}},{key:"render",value:function(){return i.createElement(s,babelHelpers.extends({},this.state.childProps,{ref:this._captureRef}))}}]),t})(i.PureComponent);p.defaultProps=babelHelpers.extends({},s.defaultProps,{data:[]});var c=(function(e){function t(){var e,r,n,a;babelHelpers.classCallCheck(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=n=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.state={separatorProps:{highlighted:!1,leadingItem:n.props.item,leadingSection:n.props.leadingSection,section:n.props.section,trailingItem:n.props.trailingItem,trailingSection:n.props.trailingSection},leadingSeparatorProps:{highlighted:!1,leadingItem:n.props.leadingItem,leadingSection:n.props.leadingSection,section:n.props.section,trailingItem:n.props.item,trailingSection:n.props.trailingSection}},n._separators={highlight:function(){['leading','trailing'].forEach(function(e){return n._separators.updateProps(e,{highlighted:!0})})},unhighlight:function(){['leading','trailing'].forEach(function(e){return n._separators.updateProps(e,{highlighted:!1})})},updateProps:function(e,t){var r=n.props,a=r.LeadingSeparatorComponent,i=r.cellKey,o=r.prevCellKey;'leading'===e&&a?n.setState(function(e){return{leadingSeparatorProps:babelHelpers.extends({},e.leadingSeparatorProps,t)}}):n.props.onUpdateSeparator('leading'===e&&o||i,t)}},a=r,babelHelpers.possibleConstructorReturn(n,a)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;this.setState(function(r){return{separatorProps:babelHelpers.extends({},t.state.separatorProps,{leadingItem:e.item,leadingSection:e.leadingSection,section:e.section,trailingItem:e.trailingItem,trailingSection:e.trailingSection}),leadingSeparatorProps:babelHelpers.extends({},t.state.leadingSeparatorProps,{leadingItem:e.leadingItem,leadingSection:e.leadingSection,section:e.section,trailingItem:e.item,trailingSection:e.trailingSection})}})}},{key:"updateSeparatorProps",value:function(e){this.setState(function(t){return{separatorProps:babelHelpers.extends({},t.separatorProps,e)}})}},{key:"render",value:function(){var e=this.props,t=e.LeadingSeparatorComponent,r=e.SeparatorComponent,n=e.item,a=e.index,s=e.section,l=this.props.renderItem({item:n,index:a,section:s,separators:this._separators}),p=t&&i.createElement(t,this.state.leadingSeparatorProps),c=r&&i.createElement(r,this.state.separatorProps);return p||c?i.createElement(o,null,p,l,c):l}}]),t})(i.Component);function d(e,t){if(!e)return null;for(var r=t-1,n=0;n<e.length;n++){if(-1===r||r===e[n].data.length)return e[n];if(r<e[n].data.length)return e[n].data[r];r-=e[n].data.length+2}return null}r.exports=p},256,[114,155,234,21]);