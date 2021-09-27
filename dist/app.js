var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function a(t){let e;return c(t,(t=>e=t))(),e}function i(t,e,n){t.$$.on_destroy.push(c(e,n))}function u(t,e,n,o){if(t){const r=f(t,e,n,o);return t[0](r)}}function f(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,e,n,o,r,l,s){const c=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,l);if(c){const r=f(e,n,o,s);t.p(r,c)}}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}let $,m=!1;function g(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function h(t,e){m?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const l=g(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[l]+1;const s=l+1;n[s]=t,r=Math.max(s,r)}const l=[],s=[];let c=e.length-1;for(let t=n[r]+1;0!=t;t=o[t-1]){for(l.push(e[t-1]);c>=t;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);l.reverse(),s.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<s.length;e++){for(;n<l.length&&s[e].claim_order>=l[n].claim_order;)n++;const o=n<l.length?l[n]:null;t.insertBefore(s[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function x(t,e,n){m&&!n?h(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function w(){return _(" ")}function S(){return _("")}function A(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e){t.value=null==e?"":e}function q(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}function D(t,e,n){t.classList[n?"add":"remove"](e)}function C(t){$=t}function O(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const j=[],T=[],L=[],B=[],J=Promise.resolve();let R=!1;function M(t){L.push(t)}function I(t){B.push(t)}let G=!1;const P=new Set;function U(){if(!G){G=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];C(e),F(e.$$)}for(C(null),j.length=0;T.length;)T.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];P.has(e)||(P.add(e),e())}L.length=0}while(j.length);for(;B.length;)B.pop()();R=!1,G=!1,P.clear()}}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const H=new Set;let Q;function V(){Q={r:0,c:[],p:Q}}function W(){Q.r||r(Q.c),Q=Q.p}function z(t,e){t&&t.i&&(H.delete(t),t.i(e))}function K(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),Q.c.push((()=>{H.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function X(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function Y(t){t&&t.c()}function Z(t,e,o,s){const{fragment:c,on_mount:a,on_destroy:i,after_update:u}=t.$$;c&&c.m(e,o),s||M((()=>{const e=a.map(n).filter(l);i?i.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(M)}function tt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(j.push(t),R||(R=!0,J.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,l,s,c,a,i=[-1]){const u=$;C(e);const f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:o(),dirty:i,skip_bound:!1};let d=!1;if(f.ctx=l?l(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&et(e,t)),n})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){m=!0;const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(v)}else f.fragment&&f.fragment.c();n.intro&&z(e.$$.fragment),Z(e,n.target,n.anchor,n.customElement),m=!1,U()}C(u)}class ot{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt=[];function lt(e,n=t){let o;const r=[];function l(t){if(s(e,t)&&(e=t,o)){const t=!rt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(s,c=t){const a=[s,c];return r.push(a),1===r.length&&(o=n(l)||t),s(e),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const st="gitnub",ct="0.0.1",at={MERGE:"merge",SQUASH:"squash",REBASE:"rebase"},it=lt([]),ut=lt({}),ft=lt(!1);(async()=>new Promise(((t,e)=>{try{chrome.storage.local.get(st,(e=>{st in e&&t(e.gitnub),e.gitnub={},chrome.storage.local.set(e),t(e)}))}catch(e){console.warn(e);let n=window.localStorage.getItem(st);t(JSON.parse(n))}})))().then((t=>{if(t&&t.repos&&t.repos[0]&&void 0!==t.repos[0].name){it.set([...t.repos]),Date.now()-t.appStateTs<6e5&&t.version===ct&&t.appState&&void 0!==t.appState.index&&ut.set(t.appState)}else it.set([]);it.subscribe((()=>a(ft)&&mt())),ut.subscribe((()=>a(ft)&&mt())),ft.set(!0)}));const dt=t=>{null!==t&&t>=0&&t<a(it).length?ut.set({index:t}):$t()},pt=()=>{let t=a(ut).index;var e;e=t,ut.set({}),it.update((t=>[...t.filter(((t,n)=>n!==e))]))},$t=()=>{ut.set({})};function mt(){(t=>{try{chrome.storage.local.get(st,(e=>{st in e==0&&(e.gitnub={});for(const n in t)Object.hasOwnProperty.call(t,n)&&(e.gitnub[n]=t[n]);chrome.storage.local.set(e)}))}catch(e){console.warn(e),window.localStorage.setItem(st,JSON.stringify(t))}})({version:ct,repos:a(it),appStateTs:Date.now(),appState:a(ut)})}function gt(t){let e,n,o,l,s;const c=t[4].default,a=u(c,t,t[3],null);return{c(){e=b("button"),a&&a.c(),E(e,"class",n=t[2].class+" inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100"),D(e,"border-red-300",!!t[0]),D(e,"hover:bg-red-100",!!t[0]),D(e,"border-green-300",!!t[1]),D(e,"hover:bg-green-100",!!t[1])},m(n,r){x(n,e,r),a&&a.m(e,null),o=!0,l||(s=[A(e,"click",t[5]),A(e,"submit",t[6])],l=!0)},p(t,[r]){a&&a.p&&(!o||8&r)&&d(a,c,t,t[3],o?r:-1,null,null),(!o||4&r&&n!==(n=t[2].class+" inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100"))&&E(e,"class",n),5&r&&D(e,"border-red-300",!!t[0]),5&r&&D(e,"hover:bg-red-100",!!t[0]),6&r&&D(e,"border-green-300",!!t[1]),6&r&&D(e,"hover:bg-green-100",!!t[1])},i(t){o||(z(a,t),o=!0)},o(t){K(a,t),o=!1},d(t){t&&v(e),a&&a.d(t),l=!1,r(s)}}}function ht(t,n,o){let{$$slots:r={},$$scope:l}=n,{danger:s=!1}=n,{success:c=!1}=n;return t.$$set=t=>{o(2,n=e(e({},n),p(t))),"danger"in t&&o(0,s=t.danger),"success"in t&&o(1,c=t.success),"$$scope"in t&&o(3,l=t.$$scope)},n=p(n),[s,c,n,l,r,function(e){O.call(this,t,e)},function(e){O.call(this,t,e)}]}class xt extends ot{constructor(t){super(),nt(this,t,ht,gt,s,{danger:0,success:1})}}function vt(t,e,n){const o=t.slice();return o[3]=e[n].name,o[4]=e[n].repo,o[5]=e[n].isActive,o[7]=n,o}function yt(t){let e;return{c(){e=_("Edit")},m(t,n){x(t,e,n)},d(t){t&&v(e)}}}function bt(t){let e,n,o,r,l,s,c,a,i,u,f,d,p=t[3]+"",$=t[4]+"";return f=new xt({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),f.$on("click",(function(){return t[2](t[7])})),{c(){e=b("li"),n=b("div"),o=b("div"),r=b("p"),l=_(p),s=w(),c=b("p"),a=_($),i=w(),u=b("div"),Y(f.$$.fragment),E(r,"class","text-sm font-medium text-gray-900 truncate"),D(r,"text-gray-300",!t[5]),E(c,"class","text-sm text-gray-500 truncate"),D(c,"text-gray-200",!t[5]),E(o,"class","flex-1 min-w-0"),E(n,"class","flex items-center space-x-4"),E(e,"class","py-4")},m(t,p){x(t,e,p),h(e,n),h(n,o),h(o,r),h(r,l),h(o,s),h(o,c),h(c,a),h(n,i),h(n,u),Z(f,u,null),d=!0},p(e,n){t=e,(!d||1&n)&&p!==(p=t[3]+"")&&k(l,p),1&n&&D(r,"text-gray-300",!t[5]),(!d||1&n)&&$!==($=t[4]+"")&&k(a,$),1&n&&D(c,"text-gray-200",!t[5]);const o={};256&n&&(o.$$scope={dirty:n,ctx:t}),f.$set(o)},i(t){d||(z(f.$$.fragment,t),d=!0)},o(t){K(f.$$.fragment,t),d=!1},d(t){t&&v(e),tt(f)}}}function _t(t){let e;return{c(){e=_("CREATE RULE")},m(t,n){x(t,e,n)},d(t){t&&v(e)}}}function wt(t){let e,n,o,r,l,s,c,a,i=t[0],u=[];for(let e=0;e<i.length;e+=1)u[e]=bt(vt(t,i,e));const f=t=>K(u[t],1,1,(()=>{u[t]=null}));return c=new xt({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),c.$on("click",t[1]),{c(){e=b("div"),n=b("h2"),n.textContent="Repos",o=w(),r=b("ul");for(let t=0;t<u.length;t+=1)u[t].c();l=w(),s=b("li"),Y(c.$$.fragment),E(n,"class","text-md font-normal leading-normal text-center mt-4 mb-2"),E(s,"class","py-4 center mt-4 flex justify-center items-center"),E(r,"role","list"),E(r,"class"," mt-2 pt-2 border-t border-gray-300 -my-5 divide-y divide-gray-200"),E(e,"class","flow-root")},m(t,i){x(t,e,i),h(e,n),h(e,o),h(e,r);for(let t=0;t<u.length;t+=1)u[t].m(r,null);h(r,l),h(r,s),Z(c,s,null),a=!0},p(t,[e]){if(1&e){let n;for(i=t[0],n=0;n<i.length;n+=1){const o=vt(t,i,n);u[n]?(u[n].p(o,e),z(u[n],1)):(u[n]=bt(o),u[n].c(),z(u[n],1),u[n].m(r,l))}for(V(),n=i.length;n<u.length;n+=1)f(n);W()}const n={};256&e&&(n.$$scope={dirty:e,ctx:t}),c.$set(n)},i(t){if(!a){for(let t=0;t<i.length;t+=1)z(u[t]);z(c.$$.fragment,t),a=!0}},o(t){u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)K(u[t]);K(c.$$.fragment,t),a=!1},d(t){t&&v(e),y(u,t),tt(c)}}}function St(t,e,n){let o;i(t,it,(t=>n(0,o=t)));return[o,function(){var t;dt((void 0===t&&(t={name:"NEW"}),it.update((e=>[...e,t])),a(it).length-1))},t=>dt(t)]}class At extends ot{constructor(t){super(),nt(this,t,St,wt,s,{})}}function Et(t){let e,n,o,r,l;const s=t[3].default,c=u(s,t,t[2],null);return{c(){e=b("select"),c&&c.c(),E(e,"class",n=(t[1].class||"")+" w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border border-gray-400 rounded-lg focus:shadow-outline"),void 0===t[0]&&M((()=>t[4].call(e)))},m(n,s){x(n,e,s),c&&c.m(e,null),q(e,t[0]),o=!0,r||(l=A(e,"change",t[4]),r=!0)},p(t,[r]){c&&c.p&&(!o||4&r)&&d(c,s,t,t[2],o?r:-1,null,null),(!o||2&r&&n!==(n=(t[1].class||"")+" w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border border-gray-400 rounded-lg focus:shadow-outline"))&&E(e,"class",n),1&r&&q(e,t[0])},i(t){o||(z(c,t),o=!0)},o(t){K(c,t),o=!1},d(t){t&&v(e),c&&c.d(t),r=!1,l()}}}function kt(t,n,o){let{$$slots:r={},$$scope:l}=n,{value:s}=n;return t.$$set=t=>{o(1,n=e(e({},n),p(t))),"value"in t&&o(0,s=t.value),"$$scope"in t&&o(2,l=t.$$scope)},n=p(n),[s,n,l,r,function(){s=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),o(0,s)}]}class Nt extends ot{constructor(t){super(),nt(this,t,kt,Et,s,{value:0})}}function qt(e){let n,o,r,l;return{c(){n=b("input"),E(n,"type","text"),E(n,"class",o=(e[1].class||"")+" w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border border-gray-400 rounded-lg focus:shadow-outline")},m(t,o){x(t,n,o),N(n,e[0]),r||(l=A(n,"input",e[2]),r=!0)},p(t,[e]){2&e&&o!==(o=(t[1].class||"")+" w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border border-gray-400 rounded-lg focus:shadow-outline")&&E(n,"class",o),1&e&&n.value!==t[0]&&N(n,t[0])},i:t,o:t,d(t){t&&v(n),r=!1,l()}}}function Dt(t,n,o){let{value:r}=n;return t.$$set=t=>{o(1,n=e(e({},n),p(t))),"value"in t&&o(0,r=t.value)},n=p(n),[r,n,function(){r=this.value,o(0,r)}]}class Ct extends ot{constructor(t){super(),nt(this,t,Dt,qt,s,{value:0})}}function Ot(t){let e;return{c(){e=b("span"),E(e,"class","absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gray-300 rounded-full w-3 h-3 border-white border-2")},m(t,n){x(t,e,n)},d(t){t&&v(e)}}}function jt(t){let e,n,o;const r=t[2].default,l=u(r,t,t[1],null);let s=t[0]&&Ot();return{c(){e=b("span"),l&&l.c(),n=w(),s&&s.c(),E(e,"class","relative inline-block")},m(t,r){x(t,e,r),l&&l.m(e,null),h(e,n),s&&s.m(e,null),o=!0},p(t,[n]){l&&l.p&&(!o||2&n)&&d(l,r,t,t[1],o?n:-1,null,null),t[0]?s||(s=Ot(),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i(t){o||(z(l,t),o=!0)},o(t){K(l,t),o=!1},d(t){t&&v(e),l&&l.d(t),s&&s.d()}}}function Tt(t,e,n){let{$$slots:o={},$$scope:r}=e,{show:l=!1}=e;return t.$$set=t=>{"show"in t&&n(0,l=t.show),"$$scope"in t&&n(1,r=t.$$scope)},[l,r,o]}class Lt extends ot{constructor(t){super(),nt(this,t,Tt,jt,s,{show:0})}}function Bt(t,e,n){const o=t.slice();return o[23]=e[n],o}function Jt(t,e,n){const o=t.slice();return o[26]=e[n].to,o[27]=e[n].from,o[28]=e[n].type,o[29]=e,o[30]=n,o}function Rt(t,e,n){const o=t.slice();return o[23]=e[n],o}function Mt(t){let e;return{c(){e=_("DELETE")},m(t,n){x(t,e,n)},d(t){t&&v(e)}}}function It(t){let e;return{c(){e=_("SAVE")},m(t,n){x(t,e,n)},d(t){t&&v(e)}}}function Gt(t){let e,n;return e=new xt({props:{success:!0,$$slots:{default:[It]},$$scope:{ctx:t}}}),e.$on("click",t[8]),{c(){Y(e.$$.fragment)},m(t,o){Z(e,t,o),n=!0},p(t,n){const o={};4&n[1]&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function Pt(t){let e;return{c(){e=_("CANCEL")},m(t,n){x(t,e,n)},d(t){t&&v(e)}}}function Ut(t){let e,n,o,r,l,s,c,a,i,u,f,d,p,$,m,g,k,N,q,D,C,O,j,L,B,J,R,M,G,P,U,F,H,Q,et,nt,ot,rt;const lt=[Ht,Ft],st=[];function ct(t,e){return t[0]?._isDefault?0:1}function at(e){t[12](e)}l=ct(t),s=st[l]=lt[l](t);let it={class:"mt-0 col-span-2",type:"text",id:"repo"};void 0!==t[0].repo&&(it.value=t[0].repo),m=new Ct({props:it}),T.push((()=>X(m,"value",at)));let ut=t[0].stages,ft=[];for(let e=0;e<ut.length;e+=1)ft[e]=Wt(Jt(t,ut,e));const dt=t=>K(ft[t],1,1,(()=>{ft[t]=null}));let pt=!t[0].tempStage&&zt(t),$t=t[0].tempStage&&Xt(t);return{c(){e=b("div"),n=b("div"),o=b("label"),o.textContent="NAME:",r=w(),s.c(),c=w(),a=b("label"),a.textContent="ENABLED:",i=w(),u=b("div"),f=b("input"),d=w(),p=b("label"),p.textContent="URL (regex):",$=w(),Y(m.$$.fragment),N=w(),q=b("h2"),D=_("Stages"),O=w(),j=b("div"),L=b("div"),L.textContent="To:",B=w(),J=b("div"),J.textContent="From:",R=w(),M=b("div"),M.textContent="Type:",G=w(),P=b("div"),U=w();for(let t=0;t<ft.length;t+=1)ft[t].c();F=w(),pt&&pt.c(),Q=w(),$t&&$t.c(),et=S(),E(o,"for","name"),E(o,"class","text-sm font-medium text-gray-700 mt-px pt-2"),E(a,"class","text-sm font-medium text-gray-700 mt-px pt-2"),E(a,"for","isActive"),E(f,"class","focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"),E(f,"type","checkbox"),E(f,"id","isActive"),E(u,"class","col-span-2 mt-2"),E(p,"class","text-sm font-medium text-gray-700 mt-px pt-2"),E(p,"for","repo"),E(n,"class","grid grid-cols-3 gap-2 items-start"),E(e,"class",k=(t[3]?"disabled":"")+" pb-4 mb-4 svelte-1ng0n0q"),E(q,"class",C="text-md font-normal leading-normal mt-8 mb-2 "+(t[3]?"disabled":"")+" svelte-1ng0n0q"),E(L,"class","col-span-3 text-center text-sm"),E(J,"class","col-span-3 text-center text-sm"),E(M,"class","col-span-3 text-center text-sm"),E(j,"class",H="grid grid-cols-10 gap-2 mt-2 pt-2 border-t border-gray-300 "+(t[3]?"disabled":"")+" svelte-1ng0n0q")},m(s,g){x(s,e,g),h(e,n),h(n,o),h(n,r),st[l].m(n,null),h(n,c),h(n,a),h(n,i),h(n,u),h(u,f),f.checked=t[0].isActive,h(n,d),h(n,p),h(n,$),Z(m,n,null),x(s,N,g),x(s,q,g),h(q,D),x(s,O,g),x(s,j,g),h(j,L),h(j,B),h(j,J),h(j,R),h(j,M),h(j,G),h(j,P),h(j,U);for(let t=0;t<ft.length;t+=1)ft[t].m(j,null);h(j,F),pt&&pt.m(j,null),x(s,Q,g),$t&&$t.m(s,g),x(s,et,g),nt=!0,ot||(rt=A(f,"change",t[11]),ot=!0)},p(t,o){let r=l;l=ct(t),l===r?st[l].p(t,o):(V(),K(st[r],1,1,(()=>{st[r]=null})),W(),s=st[l],s?s.p(t,o):(s=st[l]=lt[l](t),s.c()),z(s,1),s.m(n,c)),1&o[0]&&(f.checked=t[0].isActive);const a={};if(!g&&1&o[0]&&(g=!0,a.value=t[0].repo,I((()=>g=!1))),m.$set(a),(!nt||8&o[0]&&k!==(k=(t[3]?"disabled":"")+" pb-4 mb-4 svelte-1ng0n0q"))&&E(e,"class",k),(!nt||8&o[0]&&C!==(C="text-md font-normal leading-normal mt-8 mb-2 "+(t[3]?"disabled":"")+" svelte-1ng0n0q"))&&E(q,"class",C),33&o[0]){let e;for(ut=t[0].stages,e=0;e<ut.length;e+=1){const n=Jt(t,ut,e);ft[e]?(ft[e].p(n,o),z(ft[e],1)):(ft[e]=Wt(n),ft[e].c(),z(ft[e],1),ft[e].m(j,F))}for(V(),e=ut.length;e<ft.length;e+=1)dt(e);W()}t[0].tempStage?pt&&(V(),K(pt,1,1,(()=>{pt=null})),W()):pt?(pt.p(t,o),1&o[0]&&z(pt,1)):(pt=zt(t),pt.c(),z(pt,1),pt.m(j,null)),(!nt||8&o[0]&&H!==(H="grid grid-cols-10 gap-2 mt-2 pt-2 border-t border-gray-300 "+(t[3]?"disabled":"")+" svelte-1ng0n0q"))&&E(j,"class",H),t[0].tempStage?$t?($t.p(t,o),1&o[0]&&z($t,1)):($t=Xt(t),$t.c(),z($t,1),$t.m(et.parentNode,et)):$t&&(V(),K($t,1,1,(()=>{$t=null})),W())},i(t){if(!nt){z(s),z(m.$$.fragment,t);for(let t=0;t<ut.length;t+=1)z(ft[t]);z(pt),z($t),nt=!0}},o(t){K(s),K(m.$$.fragment,t),ft=ft.filter(Boolean);for(let t=0;t<ft.length;t+=1)K(ft[t]);K(pt),K($t),nt=!1},d(t){t&&v(e),st[l].d(),tt(m),t&&v(N),t&&v(q),t&&v(O),t&&v(j),y(ft,t),pt&&pt.d(),t&&v(Q),$t&&$t.d(t),t&&v(et),ot=!1,rt()}}}function Ft(t){let e,n,o;function r(e){t[10](e)}let l={class:"mt-0 col-span-2",type:"text",id:"name"};return void 0!==t[0].name&&(l.value=t[0].name),e=new Ct({props:l}),T.push((()=>X(e,"value",r))),{c(){Y(e.$$.fragment)},m(t,n){Z(e,t,n),o=!0},p(t,o){const r={};!n&&1&o[0]&&(n=!0,r.value=t[0].name,I((()=>n=!1))),e.$set(r)},i(t){o||(z(e.$$.fragment,t),o=!0)},o(t){K(e.$$.fragment,t),o=!1},d(t){tt(e,t)}}}function Ht(t){let e,n,o;function r(e){t[9](e)}let l={class:"mt-0 col-span-2",type:"text",id:"name",disabled:!0};return void 0!==t[0].name&&(l.value=t[0].name),e=new Ct({props:l}),T.push((()=>X(e,"value",r))),{c(){Y(e.$$.fragment)},m(t,n){Z(e,t,n),o=!0},p(t,o){const r={};!n&&1&o[0]&&(n=!0,r.value=t[0].name,I((()=>n=!1))),e.$set(r)},i(t){o||(z(e.$$.fragment,t),o=!0)},o(t){K(e.$$.fragment,t),o=!1},d(t){tt(e,t)}}}function Qt(e){let n,o,r=e[23]+"";return{c(){n=b("option"),o=_(r),n.__value=e[23],n.value=n.__value},m(t,e){x(t,n,e),h(n,o)},p:t,d(t){t&&v(n)}}}function Vt(t){let e,n=Object.values(at),o=[];for(let e=0;e<n.length;e+=1)o[e]=Qt(Rt(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=S()},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);x(t,e,n)},p(t,r){if(0&r){let l;for(n=Object.values(at),l=0;l<n.length;l+=1){const s=Rt(t,n,l);o[l]?o[l].p(s,r):(o[l]=Qt(s),o[l].c(),o[l].m(e.parentNode,e))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(t){y(o,t),t&&v(e)}}}function Wt(t){let e,n,o,r,l,s,c,a,i,u,f,d,p;function $(e){t[13](e,t[26],t[29],t[30])}let m={class:"col-span-3 col-start-1",type:"text"};function g(e){t[14](e,t[27],t[29],t[30])}void 0!==t[26]&&(m.value=t[26]),e=new Ct({props:m}),T.push((()=>X(e,"value",$)));let h={class:"col-span-3",type:"text"};function y(e){t[15](e,t[28],t[29],t[30])}void 0!==t[27]&&(h.value=t[27]),r=new Ct({props:h}),T.push((()=>X(r,"value",g)));let _={class:"col-span-3",$$slots:{default:[Vt]},$$scope:{ctx:t}};function S(){return t[16](t[30])}return void 0!==t[28]&&(_.value=t[28]),c=new Nt({props:_}),T.push((()=>X(c,"value",y))),{c(){Y(e.$$.fragment),o=w(),Y(r.$$.fragment),s=w(),Y(c.$$.fragment),i=w(),u=b("button"),u.textContent="×",E(u,"class","btn btn-action remove")},m(t,n){Z(e,t,n),x(t,o,n),Z(r,t,n),x(t,s,n),Z(c,t,n),x(t,i,n),x(t,u,n),f=!0,d||(p=A(u,"click",S),d=!0)},p(o,s){t=o;const i={};!n&&1&s[0]&&(n=!0,i.value=t[26],I((()=>n=!1))),e.$set(i);const u={};!l&&1&s[0]&&(l=!0,u.value=t[27],I((()=>l=!1))),r.$set(u);const f={};4&s[1]&&(f.$$scope={dirty:s,ctx:t}),!a&&1&s[0]&&(a=!0,f.value=t[28],I((()=>a=!1))),c.$set(f)},i(t){f||(z(e.$$.fragment,t),z(r.$$.fragment,t),z(c.$$.fragment,t),f=!0)},o(t){K(e.$$.fragment,t),K(r.$$.fragment,t),K(c.$$.fragment,t),f=!1},d(t){tt(e,t),t&&v(o),tt(r,t),t&&v(s),tt(c,t),t&&v(i),t&&v(u),d=!1,p()}}}function zt(t){let e,n,o;return n=new xt({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),n.$on("click",t[4]),{c(){e=b("div"),Y(n.$$.fragment),E(e,"class","col-span-full flex justify-center")},m(t,r){x(t,e,r),Z(n,e,null),o=!0},p(t,e){const o={};4&e[1]&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(z(n.$$.fragment,t),o=!0)},o(t){K(n.$$.fragment,t),o=!1},d(t){t&&v(e),tt(n)}}}function Kt(t){let e;return{c(){e=_("ADD STAGE")},m(t,n){x(t,e,n)},d(t){t&&v(e)}}}function Xt(t){let e,n,o,r,l,s,c,a,i,u,f,d,p,$,m;function g(e){t[17](e)}let y={class:"col-span-3",type:"text"};function _(e){t[18](e)}void 0!==t[0].tempStage.to&&(y.value=t[0].tempStage.to),n=new Ct({props:y}),T.push((()=>X(n,"value",g)));let S={class:"col-span-3",type:"text"};function A(e){t[19](e)}void 0!==t[0].tempStage.from&&(S.value=t[0].tempStage.from),l=new Ct({props:S}),T.push((()=>X(l,"value",_)));let k={class:"col-span-3",$$slots:{default:[Zt]},$$scope:{ctx:t}};return void 0!==t[0].tempStage.type&&(k.value=t[0].tempStage.type),a=new Nt({props:k}),T.push((()=>X(a,"value",A))),d=new xt({props:{success:!0,disabled:!t[2],class:"btn btn-sm success",$$slots:{default:[te]},$$scope:{ctx:t}}}),d.$on("click",t[6]),$=new xt({props:{class:"btn btn-sm",$$slots:{default:[ee]},$$scope:{ctx:t}}}),$.$on("click",t[7]),{c(){e=b("div"),Y(n.$$.fragment),r=w(),Y(l.$$.fragment),c=w(),Y(a.$$.fragment),u=w(),f=b("div"),Y(d.$$.fragment),p=w(),Y($.$$.fragment),E(f,"class","col-span-9 flex justify-around"),E(e,"class","grid grid-cols-10 gap-2 mt-2 pt-2 border-t border-gray-300 ")},m(t,o){x(t,e,o),Z(n,e,null),h(e,r),Z(l,e,null),h(e,c),Z(a,e,null),h(e,u),h(e,f),Z(d,f,null),h(f,p),Z($,f,null),m=!0},p(t,e){const r={};!o&&1&e[0]&&(o=!0,r.value=t[0].tempStage.to,I((()=>o=!1))),n.$set(r);const c={};!s&&1&e[0]&&(s=!0,c.value=t[0].tempStage.from,I((()=>s=!1))),l.$set(c);const u={};4&e[1]&&(u.$$scope={dirty:e,ctx:t}),!i&&1&e[0]&&(i=!0,u.value=t[0].tempStage.type,I((()=>i=!1))),a.$set(u);const f={};4&e[0]&&(f.disabled=!t[2]),4&e[1]&&(f.$$scope={dirty:e,ctx:t}),d.$set(f);const p={};4&e[1]&&(p.$$scope={dirty:e,ctx:t}),$.$set(p)},i(t){m||(z(n.$$.fragment,t),z(l.$$.fragment,t),z(a.$$.fragment,t),z(d.$$.fragment,t),z($.$$.fragment,t),m=!0)},o(t){K(n.$$.fragment,t),K(l.$$.fragment,t),K(a.$$.fragment,t),K(d.$$.fragment,t),K($.$$.fragment,t),m=!1},d(t){t&&v(e),tt(n),tt(l),tt(a),tt(d),tt($)}}}function Yt(e){let n,o,r=e[23]+"";return{c(){n=b("option"),o=_(r),n.__value=e[23],n.value=n.__value},m(t,e){x(t,n,e),h(n,o)},p:t,d(t){t&&v(n)}}}function Zt(t){let e,n,o,r=Object.values(at),l=[];for(let e=0;e<r.length;e+=1)l[e]=Yt(Bt(t,r,e));return{c(){e=b("option"),n=w();for(let t=0;t<l.length;t+=1)l[t].c();o=S(),e.__value="",e.value=e.__value},m(t,r){x(t,e,r),x(t,n,r);for(let e=0;e<l.length;e+=1)l[e].m(t,r);x(t,o,r)},p(t,e){if(0&e){let n;for(r=Object.values(at),n=0;n<r.length;n+=1){const s=Bt(t,r,n);l[n]?l[n].p(s,e):(l[n]=Yt(s),l[n].c(),l[n].m(o.parentNode,o))}for(;n<l.length;n+=1)l[n].d(1);l.length=r.length}},d(t){t&&v(e),t&&v(n),y(l,t),t&&v(o)}}}function te(t){let e;return{c(){e=_("ADD STAGE")},m(t,n){x(t,e,n)},d(t){t&&v(e)}}}function ee(t){let e;return{c(){e=_("CANCEL")},m(t,n){x(t,e,n)},d(t){t&&v(e)}}}function ne(t){let e,n,o,r,l,s,c,a,i,u;n=new xt({props:{danger:!0,disabled:t[0].isDefault,$$slots:{default:[Mt]},$$scope:{ctx:t}}}),n.$on("click",pt),r=new Lt({props:{show:t[1],$$slots:{default:[Gt]},$$scope:{ctx:t}}}),s=new xt({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),s.$on("click",$t);let f=t[0]&&Ut(t);return{c(){e=b("div"),Y(n.$$.fragment),o=w(),Y(r.$$.fragment),l=w(),Y(s.$$.fragment),a=w(),f&&f.c(),i=S(),E(e,"class",c="flex justify-between mt-2 py-4 "+(t[3]?"disabled":"")+" svelte-1ng0n0q")},m(t,c){x(t,e,c),Z(n,e,null),h(e,o),Z(r,e,null),h(e,l),Z(s,e,null),x(t,a,c),f&&f.m(t,c),x(t,i,c),u=!0},p(t,o){const l={};1&o[0]&&(l.disabled=t[0].isDefault),4&o[1]&&(l.$$scope={dirty:o,ctx:t}),n.$set(l);const a={};2&o[0]&&(a.show=t[1]),4&o[1]&&(a.$$scope={dirty:o,ctx:t}),r.$set(a);const d={};4&o[1]&&(d.$$scope={dirty:o,ctx:t}),s.$set(d),(!u||8&o[0]&&c!==(c="flex justify-between mt-2 py-4 "+(t[3]?"disabled":"")+" svelte-1ng0n0q"))&&E(e,"class",c),t[0]?f?(f.p(t,o),1&o[0]&&z(f,1)):(f=Ut(t),f.c(),z(f,1),f.m(i.parentNode,i)):f&&(V(),K(f,1,1,(()=>{f=null})),W())},i(t){u||(z(n.$$.fragment,t),z(r.$$.fragment,t),z(s.$$.fragment,t),z(f),u=!0)},o(t){K(n.$$.fragment,t),K(r.$$.fragment,t),K(s.$$.fragment,t),K(f),u=!1},d(t){t&&v(e),tt(n),tt(r),tt(s),t&&v(a),f&&f.d(t),t&&v(i)}}}function oe(t,e,n){let o,r,l;i(t,ut,(t=>n(20,l=t)));let s={},c=(()=>{let t=a(ut).index;return a(it)[t]})();function u(){let t=c;return null!==s.tempStage||(s.repo!==t.repo||(s.isActive!==t.isActive||(s.name!==t.name||JSON.stringify(s.stages)!==JSON.stringify(t.stages||[]))))}function f(t){n(0,s.stages=s.stages.filter(((e,n)=>n!==t)),s)}c&&(s.repo=c.repo||"",s.isActive=c.isActive||"",s.isDefault=c.isDefault||"",s.name=c.name||"",s.stages=JSON.parse(JSON.stringify(c.stages||[])),s.tempStage=null),l.detail&&(s.repo=l.detail.repo||"",s.isActive=l.detail.isActive||"",s.isDefault=l.detail.isDefault||"",s.name=l.detail.name||"",s.stages=l.detail.stages||[],s.tempStage=l.detail.tempStage||null);let d=u();return t.$$.update=()=>{1&t.$$.dirty[0]&&(!function(t,e,n=e){t.set(n)}(ut,l.detail=s,l),n(1,d=u())),1&t.$$.dirty[0]&&n(2,o=s.tempStage&&""!==s.tempStage.to&&""!==s.tempStage.from&&""!==s.tempStage.type),1&t.$$.dirty[0]&&n(3,r=!!s.tempStage)},[s,d,o,r,function(){n(0,s.tempStage={to:"",from:"",type:""},s)},f,function(){n(0,s.stages=[...s.stages,{...s.tempStage}],s),n(0,s.tempStage=null,s)},function(){n(0,s.tempStage=null,s)},()=>{!function(t){let e=a(ut).index;e>=0&&it.update((n=>n.map(((n,o)=>o===e?t:n))))}({...c,repo:s.repo,isActive:s.isActive,isDefault:s.isDefault,name:s.name,stages:s.stages}),dt(null)},function(e){t.$$.not_equal(s.name,e)&&(s.name=e,n(0,s))},function(e){t.$$.not_equal(s.name,e)&&(s.name=e,n(0,s))},function(){s.isActive=this.checked,n(0,s)},function(e){t.$$.not_equal(s.repo,e)&&(s.repo=e,n(0,s))},function(t,e,o,r){o[r].to=t,n(0,s)},function(t,e,o,r){o[r].from=t,n(0,s)},function(t,e,o,r){o[r].type=t,n(0,s)},t=>f(t),function(e){t.$$.not_equal(s.tempStage.to,e)&&(s.tempStage.to=e,n(0,s))},function(e){t.$$.not_equal(s.tempStage.from,e)&&(s.tempStage.from=e,n(0,s))},function(e){t.$$.not_equal(s.tempStage.type,e)&&(s.tempStage.type=e,n(0,s))}]}class re extends ot{constructor(t){super(),nt(this,t,oe,ne,s,{},[-1,-1])}}function le(t){let e,n,o,r;const l=[ce,se],s=[];function c(t,e){return t[1].index>=0?0:1}return e=c(t),n=s[e]=l[e](t),{c(){n.c(),o=S()},m(t,n){s[e].m(t,n),x(t,o,n),r=!0},p(t,r){let a=e;e=c(t),e!==a&&(V(),K(s[a],1,1,(()=>{s[a]=null})),W(),n=s[e],n||(n=s[e]=l[e](t),n.c()),z(n,1),n.m(o.parentNode,o))},i(t){r||(z(n),r=!0)},o(t){K(n),r=!1},d(t){s[e].d(t),t&&v(o)}}}function se(t){let e,n;return e=new At({}),{c(){Y(e.$$.fragment)},m(t,o){Z(e,t,o),n=!0},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function ce(t){let e,n;return e=new re({}),{c(){Y(e.$$.fragment)},m(t,o){Z(e,t,o),n=!0},i(t){n||(z(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function ae(t){let e,n,o=!0===t[0]&&le(t);return{c(){e=b("main"),o&&o.c(),E(e,"class","w-96 my-2 mx-auto p-3")},m(t,r){x(t,e,r),o&&o.m(e,null),n=!0},p(t,[n]){!0===t[0]?o?(o.p(t,n),1&n&&z(o,1)):(o=le(t),o.c(),z(o,1),o.m(e,null)):o&&(V(),K(o,1,1,(()=>{o=null})),W())},i(t){n||(z(o),n=!0)},o(t){K(o),n=!1},d(t){t&&v(e),o&&o.d()}}}function ie(t,e,n){let o,r;return i(t,ft,(t=>n(0,o=t))),i(t,ut,(t=>n(1,r=t))),[o,r]}return new class extends ot{constructor(t){super(),nt(this,t,ie,ae,s,{})}}({target:document.body})}();
