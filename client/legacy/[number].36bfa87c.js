import{_ as n,a as t,b as e,c as r,i as c,s as a,d as o,S as i,x as s,o as u,e as f,t as l,I as h,j as d,p as m,f as p,g as v,h as g,k as E,l as $,m as b,q as D,r as w,u as y,v as R,w as _,y as T,J as S,z as x,H as A,A as L,n as O,B as H,C,D as I,E as M,F as P,G as N}from"./client.d84663a9.js";import{O as k,_ as B,L as F}from"./index.0c282ee5.js";function U(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,a=t(n);if(r){var o=t(this).constructor;c=Reflect.construct(a,arguments,o)}else c=a.apply(this,arguments);return e(this,c)}}function V(n,t,e){var r=n.slice();return r[9]=t[e],r}function j(n){var t,e,r,c,a,o=n[4].title+"",i=("closed"===n[4].state?s.i18n.incidentFixed:s.i18n.incidentOngoing)+"";return{c:function(){t=l(o),e=u(),r=f("span"),c=l(i),this.h()},l:function(n){t=g(n,o),e=m(n),r=p(n,"SPAN",{class:!0});var a=v(r);c=g(a,i),a.forEach(d),this.h()},h:function(){E(r,"class",a=A("tag ".concat(n[4].state))+" svelte-4o16l6")},m:function(n,a){$(n,t,a),$(n,e,a),$(n,r,a),b(r,c)},p:function(n,e){16&e&&o!==(o=n[4].title+"")&&L(t,o),16&e&&i!==(i=("closed"===n[4].state?s.i18n.incidentFixed:s.i18n.incidentOngoing)+"")&&L(c,i),16&e&&a!==(a=A("tag ".concat(n[4].state))+" svelte-4o16l6")&&E(r,"class",a)},d:function(n){n&&d(t),n&&d(e),n&&d(r)}}}function G(n){var t,e=s.i18n.incidentDetails+"";return{c:function(){t=l(e)},l:function(n){t=g(n,e)},m:function(n,e){$(n,t,e)},p:O,d:function(n){n&&d(t)}}}function q(n){for(var t,e,r,c,a,o,i,h,D,w,y,R,_,T,S,x,A,I,M,P=s.i18n.incidentOpenedAt+"",N=new Date(n[4].created_at).toLocaleString()+"",k=s.i18n.incidentSubscribe+"",B=s.i18n.incidentViewOnGitHub+"",F=n[4].closed_at&&J(n),U=n[3],j=[],G=0;G<U.length;G+=1)j[G]=K(V(n,U,G));return{c:function(){t=f("div"),e=f("dl"),r=f("dt"),c=l(P),a=f("dd"),o=l(N),F&&F.c(),i=u(),h=f("div"),D=f("p"),w=f("a"),y=l(k),_=u(),T=f("p"),S=f("a"),x=l(B),I=u();for(var n=0;n<j.length;n+=1)j[n].c();M=H(),this.h()},l:function(n){t=p(n,"DIV",{class:!0});var s=v(t);e=p(s,"DL",{});var u=v(e);r=p(u,"DT",{});var f=v(r);c=g(f,P),f.forEach(d),a=p(u,"DD",{});var l=v(a);o=g(l,N),l.forEach(d),F&&F.l(u),u.forEach(d),i=m(s),h=p(s,"DIV",{class:!0});var E=v(h);D=p(E,"P",{class:!0});var $=v(D);w=p($,"A",{href:!0});var b=v(w);y=g(b,k),b.forEach(d),$.forEach(d),_=m(E),T=p(E,"P",{class:!0});var R=v(T);S=p(R,"A",{href:!0});var A=v(S);x=g(A,B),A.forEach(d),R.forEach(d),E.forEach(d),s.forEach(d),I=m(n);for(var L=0;L<j.length;L+=1)j[L].l(n);M=H(),this.h()},h:function(){E(w,"href",R="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(n[0])),E(D,"class","svelte-4o16l6"),E(S,"href",A="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(n[0])),E(T,"class","svelte-4o16l6"),E(h,"class","r svelte-4o16l6"),E(t,"class","f")},m:function(n,s){$(n,t,s),b(t,e),b(e,r),b(r,c),b(e,a),b(a,o),F&&F.m(e,null),b(t,i),b(t,h),b(h,D),b(D,w),b(w,y),b(h,_),b(h,T),b(T,S),b(S,x),$(n,I,s);for(var u=0;u<j.length;u+=1)j[u].m(n,s);$(n,M,s)},p:function(n,t){if(16&t&&N!==(N=new Date(n[4].created_at).toLocaleString()+"")&&L(o,N),n[4].closed_at?F?F.p(n,t):((F=J(n)).c(),F.m(e,null)):F&&(F.d(1),F=null),1&t&&R!==(R="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(n[0]))&&E(w,"href",R),1&t&&A!==(A="https://github.com/".concat(s.owner,"/").concat(s.repo,"/issues/").concat(n[0]))&&E(S,"href",A),40&t){var r;for(U=n[3],r=0;r<U.length;r+=1){var c=V(n,U,r);j[r]?j[r].p(c,t):(j[r]=K(c),j[r].c(),j[r].m(M.parentNode,M))}for(;r<j.length;r+=1)j[r].d(1);j.length=U.length}},i:O,o:O,d:function(n){n&&d(t),F&&F.d(),n&&d(I),C(j,n),n&&d(M)}}}function z(n){var t,e;return t=new F({}),{c:function(){I(t.$$.fragment)},l:function(n){M(t.$$.fragment,n)},m:function(n,r){P(t,n,r),e=!0},p:O,i:function(n){e||(_(t.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),e=!1},d:function(n){N(t,n)}}}function J(n){var t,e,r,c,a=s.i18n.incidentClosedAt+"",o=new Date(n[4].closed_at).toLocaleString()+"";return{c:function(){t=f("dt"),e=l(a),r=f("dd"),c=l(o)},l:function(n){t=p(n,"DT",{});var i=v(t);e=g(i,a),i.forEach(d),r=p(n,"DD",{});var s=v(r);c=g(s,o),s.forEach(d)},m:function(n,a){$(n,t,a),b(t,e),$(n,r,a),b(r,c)},p:function(n,t){16&t&&o!==(o=new Date(n[4].closed_at).toLocaleString()+"")&&L(c,o)},d:function(n){n&&d(t),n&&d(r)}}}function K(n){var t,e,r,c,a,o=n[5](n[9].body)+"",i=s.i18n.incidentCommentSummary.replace(/\$DATE/,"<a href=".concat(n[9].html_url,">").concat(new Date(n[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/,"<a href=".concat(n[9].user.html_url,">@").concat(n[9].user.login,"</a>"))+"";return{c:function(){t=f("article"),e=f("p"),r=u(),c=f("div"),a=u(),this.h()},l:function(n){t=p(n,"ARTICLE",{});var o=v(t);e=p(o,"P",{class:!0}),v(e).forEach(d),r=m(o),c=p(o,"DIV",{}),v(c).forEach(d),a=m(o),o.forEach(d),this.h()},h:function(){E(e,"class","svelte-4o16l6")},m:function(n,s){$(n,t,s),b(t,e),e.innerHTML=o,b(t,r),b(t,c),c.innerHTML=i,b(t,a)},p:function(n,t){8&t&&o!==(o=n[5](n[9].body)+"")&&(e.innerHTML=o),8&t&&i!==(i=s.i18n.incidentCommentSummary.replace(/\$DATE/,"<a href=".concat(n[9].html_url,">").concat(new Date(n[9].created_at).toLocaleString(),"</a>")).replace(/\$AUTHOR/,"<a href=".concat(n[9].user.html_url,">@").concat(n[9].user.login,"</a>"))+"")&&(c.innerHTML=i)},d:function(n){n&&d(t)}}}function Q(n){var t,e,r,c,a,o,i,T,S,x,A,L,O=s.i18n.incidentBack+"";function H(n,t){return n[2]?G:j}document.title=t=s.i18n.incidentTitle.replace("$NUMBER",n[0]);var C=H(n),I=C(n),M=[z,q],P=[];function N(n,t){return n[1]?0:1}return o=N(n),i=P[o]=M[o](n),{c:function(){e=u(),r=f("h2"),I.c(),c=u(),a=f("section"),i.c(),T=u(),S=f("footer"),x=f("a"),A=l(O),this.h()},l:function(n){h('[data-svelte="svelte-1txp228"]',document.head).forEach(d),e=m(n),r=p(n,"H2",{class:!0});var t=v(r);I.l(t),t.forEach(d),c=m(n),a=p(n,"SECTION",{});var o=v(a);i.l(o),o.forEach(d),T=m(n),S=p(n,"FOOTER",{class:!0});var s=v(S);x=p(s,"A",{href:!0});var u=v(x);A=g(u,O),u.forEach(d),s.forEach(d),this.h()},h:function(){E(r,"class","svelte-4o16l6"),E(x,"href","../"),E(S,"class","svelte-4o16l6")},m:function(n,t){$(n,e,t),$(n,r,t),I.m(r,null),$(n,c,t),$(n,a,t),P[o].m(a,null),$(n,T,t),$(n,S,t),b(S,x),b(x,A),L=!0},p:function(n,e){var c=D(e,1)[0];(!L||1&c)&&t!==(t=s.i18n.incidentTitle.replace("$NUMBER",n[0]))&&(document.title=t),C===(C=H(n))&&I?I.p(n,c):(I.d(1),(I=C(n))&&(I.c(),I.m(r,null)));var u=o;(o=N(n))===u?P[o].p(n,c):(w(),y(P[u],1,1,(function(){P[u]=null})),R(),(i=P[o])||(i=P[o]=M[o](n)).c(),_(i,1),i.m(a,null))},i:function(n){L||(_(i),L=!0)},o:function(n){y(i),L=!1},d:function(n){n&&d(e),n&&d(r),I.d(),n&&d(c),n&&d(a),P[o].d(),n&&d(T),n&&d(S)}}}function W(n,t,e){var r=t.number,c=S,a=!0,o=!0,i=new k({userAgent:s["user-agent"]}),u=s.owner,f=s.repo,l=[],h={};return T(B(x.mark((function n(){return x.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=e,n.next=3,i.issues.get({owner:u,repo:f,issue_number:r,sort:"created",direction:"desc"});case 3:return n.t1=h=n.sent.data,(0,n.t0)(4,n.t1),e(2,o=!1),n.t2=e,n.next=9,i.issues.listComments({owner:u,repo:f,issue_number:r});case 9:n.t3=l=n.sent.data.reverse(),(0,n.t2)(3,n.t3),e(1,a=!1);case 12:case"end":return n.stop()}}),n)})))),n.$$set=function(n){"number"in n&&e(0,r=n.number)},[r,a,o,l,h,c]}var X=function(t){n(s,i);var e=U(s);function s(n){var t;return r(this,s),t=e.call(this),c(o(t),n,W,Q,a,{number:0}),t}return s}();function Y(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,a=t(n);if(r){var o=t(this).constructor;c=Reflect.construct(a,arguments,o)}else c=a.apply(this,arguments);return e(this,c)}}function Z(n){var t,e;return t=new X({props:{number:n[0]}}),{c:function(){I(t.$$.fragment)},l:function(n){M(t.$$.fragment,n)},m:function(n,r){P(t,n,r),e=!0},p:function(n,e){var r={};1&D(e,1)[0]&&(r.number=n[0]),t.$set(r)},i:function(n){e||(_(t.$$.fragment,n),e=!0)},o:function(n){y(t.$$.fragment,n),e=!1},d:function(n){N(t,n)}}}function nn(n){return tn.apply(this,arguments)}function tn(){return(tn=B(x.mark((function n(t){var e;return x.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.params.number,n.abrupt("return",{number:e});case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function en(n,t,e){var r=t.number;return n.$$set=function(n){"number"in n&&e(0,r=n.number)},[r]}var rn=function(t){n(s,i);var e=Y(s);function s(n){var t;return r(this,s),t=e.call(this),c(o(t),n,en,Z,a,{number:0}),t}return s}();export default rn;export{nn as preload};
