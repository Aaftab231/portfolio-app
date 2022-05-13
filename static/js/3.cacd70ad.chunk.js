(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[3,7,9],{147:function(e,t,a){"use strict";var c=a(10),r=a(2),n=a(3),s=a(4),o=a.n(s),i=a(0),l=a(6),b=a(1),d=["as","bsPrefix","className"],j=["className"];var u=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,s=Object(n.a)(e,d);a=Object(l.b)(a,"col");var i=Object(l.a)(),b=[],j=[];return i.forEach((function(e){var t,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(t=n.span,c=n.offset,r=n.order):t=n;var o="xs"!==e?"-".concat(e):"";t&&b.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=r&&j.push("order".concat(o,"-").concat(r)),null!=c&&j.push("offset".concat(o,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[c].concat(b,j))}),{as:t,bsPrefix:a,spans:b}]}(e),s=Object(c.a)(a,2),i=s[0],u=i.className,f=Object(n.a)(i,j),O=s[1],x=O.as,m=void 0===x?"div":x,v=O.bsPrefix,p=O.spans;return Object(b.jsx)(m,Object(r.a)(Object(r.a)({},f),{},{ref:t,className:o()(u,!p.length&&v)}))}));u.displayName="Col",t.a=u},149:function(e,t,a){"use strict";var c=a(2),r=a(3),n=a(4),s=a.n(n),o=a(0),i=a(6),l=a(1),b=["bsPrefix","className","as"],d=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,d=void 0===o?"div":o,j=Object(r.a)(e,b),u=Object(i.b)(a,"row"),f=Object(i.a)(),O="".concat(u,"-cols"),x=[];return f.forEach((function(e){var t,a=j[e];delete j[e],t=null!=a&&"object"===typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&x.push("".concat(O).concat(c,"-").concat(t))})),Object(l.jsx)(d,Object(c.a)(Object(c.a)({ref:t},j),{},{className:s.a.apply(void 0,[n,u].concat(x))}))}));d.displayName="Row",t.a=d},150:function(e,t,a){"use strict";var c=a(2),r=a(10),n=a(3),s=a(4),o=a.n(s),i=a(0),l=a(37),b=a(6),d=a(1),j=["as","bsPrefix","variant","size","active","className"],u=i.forwardRef((function(e,t){var a=e.as,s=e.bsPrefix,i=e.variant,u=e.size,f=e.active,O=e.className,x=Object(n.a)(e,j),m=Object(b.b)(s,"btn"),v=Object(l.b)(Object(c.a)({tagName:a},x)),p=Object(r.a)(v,2),h=p[0],y=p[1].tagName;return Object(d.jsx)(y,Object(c.a)(Object(c.a)(Object(c.a)({},h),x),{},{ref:t,className:o()(O,m,f&&"active",i&&"".concat(m,"-").concat(i),u&&"".concat(m,"-").concat(u),x.href&&x.disabled&&"disabled")}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=u},87:function(e,t,a){"use strict";a.r(t);a(0),a(89);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},90:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(0),n=a(147),s=a(3),o=a(4),i=a.n(o),l=a(6),b=a(25),d=a(64),j=a(1),u=["bsPrefix","className","variant","as"],f=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.variant,o=e.as,b=void 0===o?"img":o,d=Object(s.a)(e,u),f=Object(l.b)(a,"card-img");return Object(j.jsx)(b,Object(c.a)({ref:t,className:i()(n?"".concat(f,"-").concat(n):f,r)},d))}));f.displayName="CardImg";var O=f,x=a(65),m=["bsPrefix","className","as"],v=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,b=void 0===o?"div":o,d=Object(s.a)(e,m),u=Object(l.b)(a,"card-header"),f=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:u}}),[u]);return Object(j.jsx)(x.a.Provider,{value:f,children:Object(j.jsx)(b,Object(c.a)(Object(c.a)({ref:t},d),{},{className:i()(n,u)}))})}));v.displayName="CardHeader";var p=v,h=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(d.a)("h5"),g=Object(d.a)("h6"),N=Object(b.a)("card-body"),S=Object(b.a)("card-title",{Component:y}),P=Object(b.a)("card-subtitle",{Component:g}),w=Object(b.a)("card-link",{Component:"a"}),C=Object(b.a)("card-text",{Component:"p"}),k=Object(b.a)("card-footer"),B=Object(b.a)("card-img-overlay"),T=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.bg,o=e.text,b=e.border,d=e.body,u=e.children,f=e.as,O=void 0===f?"div":f,x=Object(s.a)(e,h),m=Object(l.b)(a,"card");return Object(j.jsx)(O,Object(c.a)(Object(c.a)({ref:t},x),{},{className:i()(r,m,n&&"bg-".concat(n),o&&"text-".concat(o),b&&"border-".concat(b)),children:d?Object(j.jsx)(N,{children:u}):u}))}));T.displayName="Card",T.defaultProps={body:!1};var R=Object.assign(T,{Img:O,Title:S,Subtitle:P,Body:N,Link:w,Text:C,Header:p,Footer:k,ImgOverlay:B}),V=a(150),E=["bsPrefix","bg","pill","text","className","as"],F=r.forwardRef((function(e,t){var a=e.bsPrefix,r=e.bg,n=e.pill,o=e.text,b=e.className,d=e.as,u=void 0===d?"span":d,f=Object(s.a)(e,E),O=Object(l.b)(a,"badge");return Object(j.jsx)(u,Object(c.a)(Object(c.a)({ref:t},f),{},{className:i()(b,O,n&&"rounded-pill",o&&"text-".concat(o),r&&"bg-".concat(r))}))}));F.displayName="Badge",F.defaultProps={bg:"primary",pill:!1};var I=F,z=a(18),H=a(169),M={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};t.default=function(e){var t,a,s=Object(r.useContext)(z.a),o=e.project;return Object(j.jsx)(n.a,{children:Object(j.jsxs)(R,{style:Object(c.a)(Object(c.a)({},M.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[Object(j.jsx)(R.Img,{variant:"top",src:null===o||void 0===o?void 0:o.image}),Object(j.jsxs)(R.Body,{children:[Object(j.jsx)(R.Title,{style:M.cardTitleStyle,children:o.title}),Object(j.jsx)(R.Text,{style:M.cardTextStyle,children:(a=o.bodyText,Object(j.jsx)(H.a,{children:a}))})]}),Object(j.jsx)(R.Body,{children:null===o||void 0===o||null===(t=o.links)||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(V.a,{style:M.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),o.tags&&Object(j.jsx)(R.Footer,{style:{backgroundColor:s.cardFooterBackground},children:o.tags.map((function(e){return Object(j.jsx)(I,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:M.badgeStyle,children:e},e)}))})]})})}},95:function(e,t,a){"use strict";a.r(t);var c=a(10),r=a(0),n=a(143),s=a(149),o=a(150),i=a(18),l=a(66),b=a.n(l),d=a(87),j=a(24),u=a(90),f=a(29),O=a(1),x={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}};t.default=function(e){var t,a=Object(r.useContext)(i.a),l=e.header,m=Object(r.useState)(null),v=Object(c.a)(m,2),p=v[0],h=v[1],y=Object(r.useState)(!1),g=Object(c.a)(y,2),N=g[0],S=g[1];Object(r.useEffect)((function(){fetch(j.a.projects,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return h(e)})).catch((function(e){return e}))}),[]);var P=N&&p?p.length:6;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(d.default,{title:l}),p?Object(O.jsx)("div",{className:"section-content-container",children:Object(O.jsxs)(n.a,{style:x.containerStyle,children:[Object(O.jsx)(s.a,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(t=p.projects)||void 0===t?void 0:t.slice(0,P).map((function(e){return Object(O.jsx)(b.a,{children:Object(O.jsx)(u.default,{project:e})},e.title)}))}),!N&&Object(O.jsx)(o.a,{style:x.showMoreStyle,variant:a.bsSecondaryVariant,onClick:function(){return S(!0)},children:"show more"})]})}):Object(O.jsx)(f.default,{})]})}}}]);
//# sourceMappingURL=3.cacd70ad.chunk.js.map