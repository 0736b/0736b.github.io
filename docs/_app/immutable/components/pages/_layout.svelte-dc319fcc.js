import{C as X,S as Y,i as Z,s as W,k as _,q as I,a as x,e as Q,l as m,m as v,r as B,h as u,c as C,D as h,n as k,b as j,E as p,t as H,d as $,f as q,F as ee,G as ae,H as te,I as ne,J as le,K as se,L as oe,M as re,g as ie,B as ue}from"../../chunks/index-677aa875.js";import{p as ce}from"../../chunks/stores-3f6582b5.js";function T(o,{delay:a=0,duration:l=400,easing:r=X}={}){const i=+getComputedStyle(o).opacity;return{delay:a,duration:l,easing:r,css:c=>`opacity: ${c*i}`}}function U(o){let a,l,r,i,c;const b=o[3].default,e=ae(b,o,o[2],null);return{c(){a=_("main"),l=_("div"),e&&e.c(),this.h()},l(n){a=m(n,"MAIN",{});var f=v(a);l=m(f,"DIV",{class:!0});var S=v(l);e&&e.l(S),S.forEach(u),f.forEach(u),this.h()},h(){k(l,"class","container mx-auto max-w-6xl font-rubik")},m(n,f){j(n,a,f),p(a,l),e&&e.m(l,null),c=!0},p(n,f){e&&e.p&&(!c||f&4)&&te(e,b,n,n[2],c?le(b,n[2],f,null):ne(n[2]),null)},i(n){c||(q(e,n),se(()=>{i&&i.end(1),r=oe(a,T,{duration:150,delay:150}),r.start()}),c=!0)},o(n){H(e,n),r&&r.invalidate(),i=re(a,T,{duration:150}),c=!1},d(n){n&&u(a),e&&e.d(n),n&&i&&i.end()}}}function fe(o){let a,l,r,i,c,b,e,n,f,S,y,E,w,A,D,P,L=o[0].currentRoute,N,g,d=U(o);return{c(){a=_("div"),l=_("a"),r=_("span"),i=_("span"),c=I("Home"),b=x(),e=_("a"),n=_("span"),f=_("span"),S=I("Blog"),y=x(),E=_("a"),w=_("span"),A=_("span"),D=I("Project"),P=x(),d.c(),N=Q(),this.h()},l(t){a=m(t,"DIV",{class:!0});var s=v(a);l=m(s,"A",{href:!0,class:!0});var M=v(l);r=m(M,"SPAN",{});var R=v(r);i=m(R,"SPAN",{});var V=v(i);c=B(V,"Home"),V.forEach(u),R.forEach(u),M.forEach(u),b=C(s),e=m(s,"A",{href:!0,class:!0});var F=v(e);n=m(F,"SPAN",{});var G=v(n);f=m(G,"SPAN",{});var J=v(f);S=B(J,"Blog"),J.forEach(u),G.forEach(u),F.forEach(u),y=C(s),E=m(s,"A",{href:!0,class:!0});var K=v(E);w=m(K,"SPAN",{});var z=v(w);A=m(z,"SPAN",{});var O=v(A);D=B(O,"Project"),O.forEach(u),z.forEach(u),K.forEach(u),s.forEach(u),P=C(t),d.l(t),N=Q(),this.h()},h(){h(i,"underline",o[1].url.pathname==="/"),h(r,"font-bold",o[1].url.pathname==="/"),k(l,"href","/"),k(l,"class","font-thin italic lowercase px-4 tracking-tighter text-glow hover:text-white"),h(f,"underline",o[1].url.pathname.includes("/blog")),h(n,"font-bold",o[1].url.pathname.includes("/blog")),k(e,"href","/blog"),k(e,"class","font-thin italic lowercase px-4 text-glow tracking-tighter hover:text-white"),h(A,"underline",o[1].url.pathname.includes("/project")),h(w,"font-bold",o[1].url.pathname.includes("/project")),k(E,"href","/project"),k(E,"class","font-thin italic lowercase px-4 text-glow tracking-tighter hover:text-white"),k(a,"class","container mx-auto max-w-3xl font-rubik text-xl text-center my-8 text-[#D4D4D4]")},m(t,s){j(t,a,s),p(a,l),p(l,r),p(r,i),p(i,c),p(a,b),p(a,e),p(e,n),p(n,f),p(f,S),p(a,y),p(a,E),p(E,w),p(w,A),p(A,D),j(t,P,s),d.m(t,s),j(t,N,s),g=!0},p(t,[s]){(!g||s&2)&&h(i,"underline",t[1].url.pathname==="/"),(!g||s&2)&&h(r,"font-bold",t[1].url.pathname==="/"),(!g||s&2)&&h(f,"underline",t[1].url.pathname.includes("/blog")),(!g||s&2)&&h(n,"font-bold",t[1].url.pathname.includes("/blog")),(!g||s&2)&&h(A,"underline",t[1].url.pathname.includes("/project")),(!g||s&2)&&h(w,"font-bold",t[1].url.pathname.includes("/project")),s&1&&W(L,L=t[0].currentRoute)?(ie(),H(d,1,1,ue),$(),d=U(t),d.c(),q(d,1),d.m(N.parentNode,N)):d.p(t,s)},i(t){g||(q(d),g=!0)},o(t){H(d),g=!1},d(t){t&&u(a),t&&u(P),t&&u(N),d.d(t)}}}function pe(o,a,l){let r;ee(o,ce,e=>l(1,r=e));let{$$slots:i={},$$scope:c}=a,{data:b}=a;return o.$$set=e=>{"data"in e&&l(0,b=e.data),"$$scope"in e&&l(2,c=e.$$scope)},[b,r,c,i]}class _e extends Y{constructor(a){super(),Z(this,a,pe,fe,W,{data:0})}}export{_e as default};