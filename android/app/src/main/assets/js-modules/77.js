__d(function(r,e,t,f,n){'use strict';var a=e(n[0]);t.exports=function(r){if(r instanceof ArrayBuffer&&(r=new Uint8Array(r)),r instanceof Uint8Array)return a.fromByteArray(r);if(!ArrayBuffer.isView(r))throw new Error('data must be ArrayBuffer or typed array');var e=r,t=e.buffer,f=e.byteOffset,n=e.byteLength;return a.fromByteArray(new Uint8Array(t,f,n))}},77,[78]);