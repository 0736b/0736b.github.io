import{C as K,S as L,i as M,s as J,k as v,q as g,a as D,e as V,l as x,m as b,r as A,h as m,c as C,n as h,b as I,D as f,t as H,d as $,f as S,E as z,F as O,G as Q,H as T,I as U,J as W,K as X,g as Y,B as Z}from"../../chunks/index-e5b41c0d.js";function F(_,{delay:t=0,duration:a=400,easing:i=K}={}){const n=+getComputedStyle(_).opacity;return{delay:t,duration:a,easing:i,css:s=>`opacity: ${s*n}`}}function G(_){let t,a,i,n,s;const c=_[2].default,l=z(c,_,_[1],null);return{c(){t=v("main"),a=v("div"),l&&l.c(),this.h()},l(e){t=x(e,"MAIN",{});var d=b(t);a=x(d,"DIV",{class:!0});var y=b(a);l&&l.l(y),y.forEach(m),d.forEach(m),this.h()},h(){h(a,"class","container mx-auto max-w-3xl font-rubik")},m(e,d){I(e,t,d),f(t,a),l&&l.m(a,null),s=!0},p(e,d){l&&l.p&&(!s||d&2)&&O(l,c,e,e[1],s?T(c,e[1],d,null):Q(e[1]),null)},i(e){s||(S(l,e),U(()=>{n&&n.end(1),i=W(t,F,{duration:150,delay:150}),i.start()}),s=!0)},o(e){H(l,e),i&&i.invalidate(),n=X(t,F,{duration:150}),s=!1},d(e){e&&m(t),l&&l.d(e),e&&n&&n.end()}}}function tt(_){let t,a,i,n,s,c,l,e,d,y,p,B,w,j=_[0].currentRoute,k,E,u=G(_);return{c(){t=v("div"),a=v("a"),i=g("Home"),n=D(),s=v("a"),c=g("Blog"),l=D(),e=v("a"),d=g("Project"),y=D(),p=v("a"),B=g("Contact"),w=D(),u.c(),k=V(),this.h()},l(o){t=x(o,"DIV",{class:!0});var r=b(t);a=x(r,"A",{href:!0,class:!0});var q=b(a);i=A(q,"Home"),q.forEach(m),n=C(r),s=x(r,"A",{href:!0,class:!0});var N=b(s);c=A(N,"Blog"),N.forEach(m),l=C(r),e=x(r,"A",{href:!0,class:!0});var P=b(e);d=A(P,"Project"),P.forEach(m),y=C(r),p=x(r,"A",{href:!0,class:!0});var R=b(p);B=A(R,"Contact"),R.forEach(m),r.forEach(m),w=C(o),u.l(o),k=V(),this.h()},h(){h(a,"href","/"),h(a,"class","font-semibold uppercase px-4 text-glow hover:text-white"),h(s,"href","/blog"),h(s,"class","font-semibold uppercase px-4 text-glow hover:text-white"),h(e,"href","/"),h(e,"class","font-semibold uppercase px-4 text-glow hover:text-white"),h(p,"href","/"),h(p,"class","font-semibold uppercase px-4 text-glow hover:text-white"),h(t,"class","container mx-auto max-w-3xl font-rubik text-xl text-center my-8 text-[#D4D4D4]")},m(o,r){I(o,t,r),f(t,a),f(a,i),f(t,n),f(t,s),f(s,c),f(t,l),f(t,e),f(e,d),f(t,y),f(t,p),f(p,B),I(o,w,r),u.m(o,r),I(o,k,r),E=!0},p(o,[r]){r&1&&J(j,j=o[0].currentRoute)?(Y(),H(u,1,1,Z),$(),u=G(o),u.c(),S(u,1),u.m(k.parentNode,k)):u.p(o,r)},i(o){E||(S(u),E=!0)},o(o){H(u),E=!1},d(o){o&&m(t),o&&m(w),o&&m(k),u.d(o)}}}function et(_,t,a){let{$$slots:i={},$$scope:n}=t,{data:s}=t;return _.$$set=c=>{"data"in c&&a(0,s=c.data),"$$scope"in c&&a(1,n=c.$$scope)},[s,n,i]}class st extends L{constructor(t){super(),M(this,t,et,tt,J,{data:0})}}export{st as default};
