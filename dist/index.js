"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(d){throw (r=0, d)}};};var i=t(function(C,u){
var x=/./;u.exports=x
});var s=t(function(D,a){
var m=require('@stdlib/utils-global/dist'),o=m(),b=o.document&&o.document.childNodes;a.exports=b
});var c=t(function(F,n){
var N=Int8Array;n.exports=N
});var l=t(function(H,f){
var h=i(),j=s(),w=c();function E(){return typeof h=="function"||typeof w=="object"||typeof j=="function"}f.exports=E
});var v=t(function(J,p){
var L=require('@stdlib/utils-constructor-name/dist'),O=require('@stdlib/string-base-lowercase/dist');function R(e){var r;return e===null?"null":(r=typeof e,r==="object"?O(L(e)):r)}p.exports=R
});var q=t(function(K,y){
var g=require('@stdlib/utils-constructor-name/dist'),k=require('@stdlib/string-base-lowercase/dist');function A(e){return k(g(e))}y.exports=A
});var G=l(),I=v(),P=q(),z=G()?P:I;module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
