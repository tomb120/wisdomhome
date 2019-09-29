__d(function(e,t,o,n,s){'use strict';Object.defineProperty(n,"__esModule",{value:!0});var i=t(s[0]),r=babelHelpers.interopRequireDefault(i),l=t(s[1]),p=babelHelpers.interopRequireDefault(l),u=t(s[2]),a=t(s[3]),w=babelHelpers.interopRequireDefault(a),d=(function(e){function t(e){babelHelpers.classCallCheck(this,t);var o=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o._rows={},o.openCellKey=null,o.listViewProps={},o}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"setScrollEnabled",value:function(e){if(!1!==this.props.scrollEnabled){if(this._listView&&this._listView.setNativeProps)this._listView.setNativeProps({scrollEnabled:e});else if(this._listView&&this._listView.getScrollResponder){var t=this._listView.getScrollResponder();t.setNativeProps&&t.setNativeProps({scrollEnabled:e})}this.props.onScrollEnabled&&this.props.onScrollEnabled(e)}}},{key:"safeCloseOpenRow",value:function(){var e=this._rows[this.openCellKey];e&&e.closeRow&&this._rows[this.openCellKey].closeRow()}},{key:"rowSwipeGestureBegan",value:function(e){this.props.closeOnRowBeginSwipe&&this.openCellKey&&this.openCellKey!==e&&this.safeCloseOpenRow(),this.props.swipeGestureBegan&&this.props.swipeGestureBegan(e)}},{key:"onRowOpen",value:function(e,t){this.openCellKey&&this.openCellKey!==e&&this.props.closeOnRowOpen&&!this.props.closeOnRowBeginSwipe&&this.safeCloseOpenRow(),this.openCellKey=e,this.props.onRowOpen&&this.props.onRowOpen(e,this._rows,t)}},{key:"onRowPress",value:function(){this.openCellKey&&this.props.closeOnRowPress&&(this.safeCloseOpenRow(),this.openCellKey=null)}},{key:"onScroll",value:function(e){this.openCellKey&&this.props.closeOnScroll&&(this.safeCloseOpenRow(),this.openCellKey=null),this.props.onScroll&&this.props.onScroll(e)}},{key:"onLayout",value:function(e){this.layoutHeight=e.nativeEvent.layout.height,this.props.onLayout&&this.props.onLayout(e)}},{key:"onContentSizeChange",value:function(e,t){var o=this.props,n=o.useFlatList,s=o.useSectionList,i=t-this.layoutHeight;this.yScrollOffset>=i&&i>0&&(!n&&!s&&this._listView instanceof u.ListView&&this._listView&&this._listView.getScrollResponder().scrollToEnd(),this._listView instanceof u.FlatList&&this._listView&&this._listView.scrollToEnd()),this.props.onContentSizeChange&&this.props.onContentSizeChange(e,t)}},{key:"setRefs",value:function(e){this._listView=e,this.props.listViewRef&&this.props.listViewRef(e)}},{key:"renderCell",value:function(e,t,o,n,s){var i=this;return t?r.default.createElement(w.default,{onSwipeValueChange:this.props.onSwipeValueChange?function(e){return i.props.onSwipeValueChange(babelHelpers.extends({},e,{key:o}))}:null,ref:function(e){return i._rows[o]=e},swipeGestureBegan:function(e){return i.rowSwipeGestureBegan(o)},onRowOpen:function(e){return i.onRowOpen(o,e)},onRowDidOpen:function(e){return i.props.onRowDidOpen&&i.props.onRowDidOpen(o,i._rows,e)},onRowClose:function(e){return i.props.onRowClose&&i.props.onRowClose(o,i._rows)},onRowDidClose:function(e){return i.props.onRowDidClose&&i.props.onRowDidClose(o,i._rows)},onRowPress:function(e){return i.onRowPress(o)},shouldItemUpdate:this.props.shouldItemUpdate?function(e,t){return i.props.shouldItemUpdate(e,t)}:null,setScrollEnabled:function(e){return i.setScrollEnabled(e)},leftOpenValue:n.leftOpenValue||this.props.leftOpenValue,rightOpenValue:n.rightOpenValue||this.props.rightOpenValue,closeOnRowPress:n.closeOnRowPress||this.props.closeOnRowPress,disableLeftSwipe:n.disableLeftSwipe||this.props.disableLeftSwipe,disableRightSwipe:n.disableRightSwipe||this.props.disableRightSwipe,stopLeftSwipe:n.stopLeftSwipe||this.props.stopLeftSwipe,stopRightSwipe:n.stopRightSwipe||this.props.stopRightSwipe,recalculateHiddenLayout:this.props.recalculateHiddenLayout,style:this.props.swipeRowStyle,preview:s,previewDuration:this.props.previewDuration,previewOpenDelay:this.props.previewOpenDelay,previewOpenValue:this.props.previewOpenValue,tension:this.props.tension,friction:this.props.friction,directionalDistanceChangeThreshold:this.props.directionalDistanceChangeThreshold,swipeToOpenPercent:this.props.swipeToOpenPercent,swipeToOpenVelocityContribution:this.props.swipeToOpenVelocityContribution,swipeToClosePercent:this.props.swipeToClosePercent,item:n},t,e):r.default.cloneElement(e,babelHelpers.extends({},e.props,{ref:function(e){return i._rows[o]=e},onRowOpen:function(e){return i.onRowOpen(o,e)},onRowDidOpen:function(e){return i.props.onRowDidOpen&&i.props.onRowDidOpen(o,i._rows,e)},onRowClose:function(e){return i.props.onRowClose&&i.props.onRowClose(o,i._rows)},onRowDidClose:function(e){return i.props.onRowDidClose&&i.props.onRowDidClose(o,i._rows)},onRowPress:function(e){return i.onRowPress()},setScrollEnabled:function(e){return i.setScrollEnabled(e)},swipeGestureBegan:function(e){return i.rowSwipeGestureBegan(o)}}))}},{key:"renderRow",value:function(e,t,o,n){var s=""+t+o,i=this.props.renderRow(e,t,o,n),r=this.props.renderHiddenRow&&this.props.renderHiddenRow(e,t,o,n),l=this.props.dataSource&&this.props.dataSource.getRowIDForFlatIndex(this.props.previewRowIndex||0),p=(this.props.previewFirstRow||this.props.previewRowIndex)&&o===l;return this.renderCell(i,r,s,e,p)}},{key:"renderItem",value:function(e,t){var o=this.props.renderItem(e,t),n=this.props.renderHiddenItem&&this.props.renderHiddenItem(e,t),s=e.item,i=e.index,r=s.key;!r&&this.props.keyExtractor&&(r=this.props.keyExtractor(s,i));var l=void 0!==r&&this.props.previewRowKey===r;return this.renderCell(o,n,r,s,l)}},{key:"render",value:function(){var e=this,t=this.props,o=t.useFlatList,n=t.useSectionList,s=t.renderListView,i=babelHelpers.objectWithoutProperties(t,["useFlatList","useSectionList","renderListView"]);return s?s(i,this.setRefs.bind(this),this.onScroll.bind(this),o||n?this.renderItem.bind(this):this.renderRow.bind(this,this._rows)):o?r.default.createElement(u.FlatList,babelHelpers.extends({},i,this.listViewProps,{ref:function(t){return e.setRefs(t)},onScroll:function(t){return e.onScroll(t)},renderItem:function(t){return e.renderItem(t,e._rows)}})):n?r.default.createElement(u.SectionList,babelHelpers.extends({},i,this.listViewProps,{ref:function(t){return e.setRefs(t)},onScroll:function(t){return e.onScroll(t)},renderItem:function(t){return e.renderItem(t,e._rows)}})):r.default.createElement(u.ListView,babelHelpers.extends({},i,this.listViewProps,{ref:function(t){return e.setRefs(t)},onScroll:function(t){return e.onScroll(t)},renderRow:function(t,o,n){return e.renderRow(t,o,n,e._rows)}}))}}]),t})(i.Component);d.propTypes={renderListView:p.default.func,renderItem:p.default.func,renderHiddenItem:p.default.func,renderRow:p.default.func,renderHiddenRow:p.default.func,leftOpenValue:p.default.number,rightOpenValue:p.default.number,stopLeftSwipe:p.default.number,stopRightSwipe:p.default.number,closeOnScroll:p.default.bool,closeOnRowPress:p.default.bool,closeOnRowBeginSwipe:p.default.bool,closeOnRowOpen:p.default.bool,disableLeftSwipe:p.default.bool,disableRightSwipe:p.default.bool,recalculateHiddenLayout:p.default.bool,swipeGestureBegan:p.default.func,onRowOpen:p.default.func,onRowDidOpen:p.default.func,onRowClose:p.default.func,onRowDidClose:p.default.func,onScrollEnabled:p.default.func,swipeRowStyle:u.ViewPropTypes.style,listViewRef:p.default.func,previewRowKey:p.default.string,previewFirstRow:p.default.bool,previewRowIndex:p.default.number,previewDuration:p.default.number,prewiewOpenDelay:p.default.number,previewOpenValue:p.default.number,friction:p.default.number,tension:p.default.number,directionalDistanceChangeThreshold:p.default.number,swipeToOpenPercent:p.default.number,swipeToOpenVelocityContribution:p.default.number,swipeToClosePercent:p.default.number,shouldItemUpdate:p.default.func,onSwipeValueChange:p.default.func},d.defaultProps={leftOpenValue:0,rightOpenValue:0,closeOnRowBeginSwipe:!1,closeOnScroll:!0,closeOnRowPress:!0,closeOnRowOpen:!0,disableLeftSwipe:!1,disableRightSwipe:!1,recalculateHiddenLayout:!1,previewFirstRow:!1,directionalDistanceChangeThreshold:2,swipeToOpenPercent:50,swipeToOpenVelocityContribution:0,swipeToClosePercent:50},n.default=d},780,[13,111,20,781]);