__d(function(e,n,i,t,r){var o,a;o=this,a=function(e){var n,i,t,r,o,a,c;return i=(n=e).x64,t=i.Word,r=i.WordArray,o=n.algo,a=o.SHA512,c=o.SHA384=a.extend({_doReset:function(){this._hash=new r.init([new t.init(3418070365,3238371032),new t.init(1654270250,914150663),new t.init(2438529370,812702999),new t.init(355462360,4144912697),new t.init(1731405415,4290775857),new t.init(2394180231,1750603025),new t.init(3675008525,1694076839),new t.init(1203062813,3204075428)])},_doFinalize:function(){var e=a._doFinalize.call(this);return e.sigBytes-=16,e}}),n.SHA384=a._createHelper(c),n.HmacSHA384=a._createHmacHelper(c),e.SHA384},"object"==typeof t?i.exports=t=a(n(r[0]),n(r[1]),n(r[2])):"function"==typeof define&&define.amd?define(["./core","./x64-core","./sha512"],a):a(o.CryptoJS)},600,[590,591,599]);