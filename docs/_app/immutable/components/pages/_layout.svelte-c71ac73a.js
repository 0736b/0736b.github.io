import{C as X,S as Y,i as Z,s as U,k as _,q as I,a as W,e as O,l as m,m as v,r as x,h as c,c as B,D as h,n as k,b as P,E as p,t as C,d as $,f as H,F as ee,o as ae,G as te,H as ne,I as se,J as re,K as oe,L as le,M as ie,g as ce,B as ue}from"../../chunks/index-677aa875.js";import{p as fe}from"../../chunks/stores-3f6582b5.js";function Q(o,{delay:a=0,duration:s=400,easing:l=X}={}){const i=+getComputedStyle(o).opacity;return{delay:a,duration:s,easing:l,css:u=>`opacity: ${u*i}`}}function T(o){let a,s,l,i,u;const g=o[3].default,e=te(g,o,o[2],null);return{c(){a=_("main"),s=_("div"),e&&e.c(),this.h()},l(n){a=m(n,"MAIN",{});var f=v(a);s=m(f,"DIV",{class:!0});var A=v(s);e&&e.l(A),A.forEach(c),f.forEach(c),this.h()},h(){k(s,"class","container mx-auto max-w-6xl font-rubik")},m(n,f){P(n,a,f),p(a,s),e&&e.m(s,null),u=!0},p(n,f){e&&e.p&&(!u||f&4)&&ne(e,g,n,n[2],u?re(g,n[2],f,null):se(n[2]),null)},i(n){u||(H(e,n),oe(()=>{i&&i.end(1),l=le(a,Q,{duration:150,delay:150}),l.start()}),u=!0)},o(n){C(e,n),l&&l.invalidate(),i=ie(a,Q,{duration:150}),u=!1},d(n){n&&c(a),e&&e.d(n),n&&i&&i.end()}}}function pe(o){let a,s,l,i,u,g,e,n,f,A,y,w,E,S,D,N,M=o[0].currentRoute,j,b,d=T(o);return{c(){a=_("div"),s=_("a"),l=_("span"),i=_("span"),u=I("Home"),g=W(),e=_("a"),n=_("span"),f=_("span"),A=I("Blog"),y=W(),w=_("a"),E=_("span"),S=_("span"),D=I("Project"),N=W(),d.c(),j=O(),this.h()},l(t){a=m(t,"DIV",{class:!0});var r=v(a);s=m(r,"A",{href:!0,class:!0});var q=v(s);l=m(q,"SPAN",{});var L=v(l);i=m(L,"SPAN",{});var R=v(i);u=x(R,"Home"),R.forEach(c),L.forEach(c),q.forEach(c),g=B(r),e=m(r,"A",{href:!0,class:!0});var V=v(e);n=m(V,"SPAN",{});var F=v(n);f=m(F,"SPAN",{});var G=v(f);A=x(G,"Blog"),G.forEach(c),F.forEach(c),V.forEach(c),y=B(r),w=m(r,"A",{href:!0,class:!0});var J=v(w);E=m(J,"SPAN",{});var K=v(E);S=m(K,"SPAN",{});var z=v(S);D=x(z,"Project"),z.forEach(c),K.forEach(c),J.forEach(c),r.forEach(c),N=B(t),d.l(t),j=O(),this.h()},h(){h(i,"underline",o[1].url.pathname==="/"),h(l,"font-bold",o[1].url.pathname==="/"),k(s,"href","/"),k(s,"class","font-thin italic lowercase px-4 tracking-tighter text-glow hover:text-white transition-all"),h(f,"underline",o[1].url.pathname.includes("/blog")),h(n,"font-bold",o[1].url.pathname.includes("/blog")),k(e,"href","/blog"),k(e,"class","font-thin italic lowercase px-4 text-glow tracking-tighter hover:text-white transition-all"),h(S,"underline",o[1].url.pathname.includes("/project")),h(E,"font-bold",o[1].url.pathname.includes("/project")),k(w,"href","/project"),k(w,"class","font-thin italic lowercase px-4 text-glow tracking-tighter hover:text-white transition-all"),k(a,"class","container mx-auto max-w-3xl font-rubik text-xl text-center my-8 text-[#D4D4D4]")},m(t,r){P(t,a,r),p(a,s),p(s,l),p(l,i),p(i,u),p(a,g),p(a,e),p(e,n),p(n,f),p(f,A),p(a,y),p(a,w),p(w,E),p(E,S),p(S,D),P(t,N,r),d.m(t,r),P(t,j,r),b=!0},p(t,[r]){(!b||r&2)&&h(i,"underline",t[1].url.pathname==="/"),(!b||r&2)&&h(l,"font-bold",t[1].url.pathname==="/"),(!b||r&2)&&h(f,"underline",t[1].url.pathname.includes("/blog")),(!b||r&2)&&h(n,"font-bold",t[1].url.pathname.includes("/blog")),(!b||r&2)&&h(S,"underline",t[1].url.pathname.includes("/project")),(!b||r&2)&&h(E,"font-bold",t[1].url.pathname.includes("/project")),r&1&&U(M,M=t[0].currentRoute)?(ce(),C(d,1,1,ue),$(),d=T(t),d.c(),H(d,1),d.m(j.parentNode,j)):d.p(t,r)},i(t){b||(H(d),b=!0)},o(t){C(d),b=!1},d(t){t&&c(a),t&&c(N),t&&c(j),d.d(t)}}}function de(o,a,s){let l;ee(o,fe,e=>s(1,l=e));let{$$slots:i={},$$scope:u}=a,{data:g}=a;return ae(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(e=>{console.log("ServiceWorker registration successful with scope: ",e.scope)}).catch(e=>{console.error("ServiceWorker registration failed: ",e)})}),o.$$set=e=>{"data"in e&&s(0,g=e.data),"$$scope"in e&&s(2,u=e.$$scope)},[g,l,u,i]}class me extends Y{constructor(a){super(),Z(this,a,de,pe,U,{data:0})}}export{me as default};
