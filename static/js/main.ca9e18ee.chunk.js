(this["webpackJsonpignat-homework"]=this["webpackJsonpignat-homework"]||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(25),i=n.n(a),o=(n(78),n(59)),s=n.n(o),j=n(24),u=n(5),l=n(22),b=n.n(l),d=n(0);var O=function(e){return Object(d.jsxs)("div",{className:b.a.background,children:[Object(d.jsx)("img",{src:e.avatar,className:b.a.img}),Object(d.jsx)("div",{className:b.a.corner}),Object(d.jsxs)("div",{className:b.a.content,children:[Object(d.jsx)("div",{className:b.a.name,children:e.name}),Object(d.jsx)("div",{className:b.a.message,children:e.message}),Object(d.jsx)("div",{className:b.a.time,children:e.time})]})]})},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Some Name",f="some text",g="22:00";var v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(d.jsx)(O,{avatar:h,name:x,message:f,time:g}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},A=n(3);var p=function(e){return Object(d.jsxs)("div",{children:[e.affair.name,Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var m=function(e){var t=e.data.map((function(t){return Object(d.jsx)(p,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(r.useState)(C),t=Object(A.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),i=Object(A.a)(a,2),o=i[0],s=i[1],j=function(e,t){return"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(n,o);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(m,{data:j,setFilter:s,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},S=n(30),E=n(60),N=n.n(E),B=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.error,a=e.totalUsers,i=c?N.a.error:"";return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:i}),Object(d.jsx)("button",{onClick:r,children:"add"}),Object(d.jsx)("span",{children:a}),Object(d.jsx)("p",{children:c?Object(d.jsx)("span",{children:"\u0412\u044b \u043d\u0435 \u0432\u0432\u0435\u043b\u0438 \u0438\u043c\u044f"}):""})]})},Q=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(A.a)(c,2),i=a[0],o=a[1],s=Object(r.useState)(!1),j=Object(A.a)(s,2),u=j[0],l=j[1],b=t.length;return Object(d.jsx)(B,{name:i,setNameCallback:function(e){o(e.currentTarget.value),l(!1)},addUser:function(){""===i.trim()?(alert("\u0412\u044b \u043d\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),l(!0)):(alert("Hello ".concat(i,"!")),o(""),n(i))},error:u,totalUsers:b})},H=n(118);var R=function(){var e=Object(r.useState)([]),t=Object(A.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(Q,{users:n,addUserCallback:function(e){var t={_id:Object(H.a)(),name:e};c([].concat(Object(S.a)(n),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},q=n(6),U=n(10),J=n(37),L=n.n(J),F=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,i=e.className,o=e.spanClassName,s=Object(U.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(L.a.error," ").concat(o||""),u="".concat(a?L.a.errorInput:L.a.superInput," ").concat(i);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(q.a)({type:"text",placeholder:a?"error":"write text...",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:u},s)),a&&Object(d.jsx)("span",{className:j,children:a})]})},T=n(40),X=n.n(T),K=n(41),I=n.n(K),P=function(e){var t=e.red,n=e.className,r=Object(U.a)(e,["red","className"]),c="".concat(t?I.a.red:I.a.default," ").concat(n);return Object(d.jsx)("button",Object(q.a)({className:c},r))},w=n(38),y=n.n(w),V=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(U.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),i="".concat(y.a.checkbox," ").concat(r||"");return Object(d.jsxs)("label",{className:y.a.checkboxOther,children:[Object(d.jsx)("input",Object(q.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:i},a)),c&&Object(d.jsx)("span",{className:y.a.spanClassName,children:c})]})};var D=function(){var e=Object(r.useState)(""),t=Object(A.a)(e,2),n=t[0],c=t[1],a=n?"":"error",i=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(r.useState)(!1),s=Object(A.a)(o,2),j=s[0],u=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:X.a.column,children:[Object(d.jsx)(F,{value:n,onChangeText:c,onEnter:i,error:a}),Object(d.jsx)(F,{className:X.a.blue}),Object(d.jsx)(P,{children:"default"}),Object(d.jsx)(P,{red:!0,onClick:i,children:"delete "}),Object(d.jsx)(P,{disabled:!0,children:"disabled"}),Object(d.jsx)(V,{checked:j,onChangeChecked:u,children:"task "}),Object(d.jsx)(V,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},G=n(42),W=n.n(G),Z=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,a=Object(U.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),i=Object(r.useState)(!1),o=Object(A.a)(i,2),s=o[0],j=o[1],u=c||{},l=u.children,b=u.onDoubleClick,O=u.className,h=Object(U.a)(u,["children","onDoubleClick","className"]),x="".concat(W.a.span," ").concat(O);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:"data:image/png;base64,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",className:W.a.picture}),s?Object(d.jsx)(F,Object(q.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(d.jsx)("span",Object(q.a)(Object(q.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},h),{},{children:l||a.value}))]})};function Y(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function _(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}Y("test",{x:"A",y:1});_("test",{x:"",y:0});var z=function(){var e=Object(r.useState)(""),t=Object(A.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(Z,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(d.jsx)(P,{onClick:function(){Y("editable-span-value",n)},children:"save"}),Object(d.jsx)(P,{onClick:function(){var e=_("editable-span-value",n);c(e)},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var M=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{}),Object(d.jsx)(k,{}),Object(d.jsx)(R,{}),Object(d.jsx)(D,{}),Object(d.jsx)(z,{})]})},$=n(61),ee=n.n($);var te=function(){return Object(d.jsxs)("div",{className:ee.a.error,children:["Attention",Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"}),Object(d.jsx)("img",{src:"data:image/jpeg;base64,/9j/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAAyANkDAREAAhEBAxEB/8QAoQABAAIDAQEBAAAAAAAAAAAAAAUGAwcIBAIBAQEAAgMBAQAAAAAAAAAAAAAAAwYCBAUHARAAAQMDAgQEAwUECAcAAAAAAgEDBAAFBhESITETB0FRYSIyFAiBQiMzFXGRUmKhscHxcoI0RaKyQ2M1FhcRAAIBAgQCCAUFAQAAAAAAAAABAgMEESESBTFBUWFxgSIyEwaRscHRUvCh4UIjYv/aAAwDAQACEQMRAD8A6poDDLlsRWVdeLanIR+8S+Ainiq1r3V1ToQc6jwiv1gulklOnKbwRGPT5poJuF8oK8RYBEN1f8Sqmg1Tdx9wVksW/RXKKSlUfbj4Ym3GjBZLxdfBEW+6arqiuKv8RuEq/wBdUa63arOXmqd83ibkIrq+BiG7T4y7geJBTmhruHT/ADVPZ+4b2i/DUlLql4vmZu3py4om7NkUa4bQJRF0k1BRVFA0/kX+yvRdk9yQu36dRenV6OT7MefUc64s3BalnEl6s5pCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUBUf1cbhcCmjoTDSk1b04KmiLoTvrvVOH8unrXlnuDfnK7ajnGllHo1fl3cjsQoaKen8s39ESzEYSa6hLuIuKqvOtmy26M6XqTeqUuLNac8HgjXffO/XnHO3s+62ZxWZjTjAK+KIpNg44gkSbkVNeOn21BZ7bRq3cYVFjHPLpyM9bSIrEb/Gy/G59mO8RrtObiNtzLlCRQBUmsltUg+6437hNPNPDXRNLe9qW33UJU86b8SXRpeaJ6FXXFlC7V5g/aMhj9uZFvKHMghJGXJ6hqr0lsuqDoNl+WKtap7V0L2rVg9xUaVa2jd0uOWa5p/WLPtpNqbhI6bx66Fcbejjn57ZK274aqiIuunqi1Y9g3J3dspS88XhL795oXtv6U8FweaJOu2agoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQETl016Fi13lsH032Yb5MuJzFzprsX7C0qC5m40pSXKL+RLQjqqRT5tFLtDgNstNBwBoUAU9BTSvBq6bbb5lnr0yyR5+jaJrXStN4lThpZyp0cyNyS2W7ILNNs1xb6sGe0TL4a6LtJOaL4EK8UXzqN7pUVWM6fmi8T6qWWDKB2v7UQO3jNzCPPO4u3FwFJ5wEbUW2t2wNEUtfjXVa3N836V+4LToUO/Fv6Eltb6CySbbbCuA3IojK3EAVoJitj1kbXmCOabtPTWuVCtU0aNT0Y44Y5Y9hvwprHHDMnMGkF+qyWEX2GzvVPUCRE/wCarr7LqNVpx5OGPwa+5q7vD/KMv+vp/Bd69GK8cyye9GWZB3BySxuZ1A7bxLLKOJbo8uA1JKV0nDBTdelKjbfwIvAk4KmiLoq0Bs4u5q4LgFvufcS5R7pdZb5sQnLKHV+fRTVWSYbTYOqtaKS8BReGvFNQPZiXe7Eckfu0EY1xtF6ssc5c6y3WN8rNFgBQlNG9xivxJ97XinnQHgxr6iMCyRyKFqYubvzDcp03CiELTKRGjeNHXd3TQjBpdqCS80101oDDZ/qSwG8sNvWuJdpSGxLkOIEJdGhhNG8YuOKSNbiBpdgiSqvBOGtASEzv1gUXA7ZmqnJetd3kfJwozTYlLJ/cYqCtb00Uemuvu8vNKA2IBKQCSioKSIqgWmqa+C6apQH7QGjcz+oC5473pj4p+lS5WPtQt81qPCN6a9IVHCRyLoaIbKIgIpbeaH5UBZLz9Q2B2i/T7DLj3NbrAYYkHFZhk6ZpJZbfEAQFJUIQeTdv2oi6pry1Al7B3gxG8Xe+2hPmLfNx2OM24tzmxa0jEHU6oaEaqIgoquunxJQEp2/zyz51jjeQ2dmS1bnnHGmVlti2Z9JdpEKCR+3dqPPmi0BXcz73WnFLrPgSsayKexbEAp91t9v60FoTaF7cT5ONjoIn7vLjQGS999e31pwq15ecl6Xb72uy1RorW+U+4KqJti0SgiE2QqJbiREXhryoBh3evHMoyhcXbtd3tN7GKs1yHdonyhg0iinuRTJdV3oqaJovnQEK59SuIRH4i3iw5FY7ZNdFmPerlbljwVIuX4iuKWmnHgPKgPfb8uP/AO45BY3L/KfjwLMkxcdWG0MZnT5dVfCYjiuOGvU+BW0T3Lx4cQIMvqx7bJbmbmEC9u25x3ovzQg/gsFroiOuK4gceaICkvpQGfun3Gym1Z52yhY5OaSxZZLQJurYH1o6OxlVRIxUg3MvrppQG4aAhM4hSpuG3yLEDqS3YMgYzf8AE70iVtPtLSo60NcHHpTJKM9M0+hmsMdvTMyExJaLc28AmCp5EiEn9C14ld27hJxfIu9anqWKLMxM1RONc10jmzpGYpXDRF/bRrBYIjVMjbxe7da4Tk64yQixGvjdcXROPJE8VVfBE41Nb206s1CC1SfIkyisWVZMxu1wHrWuwSXIa8QkSzCJvTzBs9T0X1RK6z22nTyqVYqXRFOWHa1kTUm3wRcO1k5bnOlzBZNjoNqxIZcT3Nu70VQXTh93VF8Uq1e1bOVO4m+MdHHp1NYfI1N4mvRiuer5L+TZNX0rZztneO5nf5d0i5F2ghZDNcceatWRwp0eG4bKkoxyeLd1UIA267i09ESgIY/p87jWbAcGkQUZu2S4jdnbs5Y+sINE2+6w70G3XNoKoFFFS5J7y014bgLLYsC7hZJ3IyLuFfrImOhIsz1rtVoKQy++84bKNIThtrsFOC/Ft8PBNaAs3ZzB8ox3scuMXiF8rfOlcA+U6rLnGQbitJ1GzNv3ISfe/bQHv+n3D7/inau32HI4aQ7ky7KJ+KptPIguvmY6k0TgLqJedAaM7Ydv5EnvxLxEJPzWGYHdJd4jNIu4Afe6YsNKS66mBthqnLUD81oDqvIrzHseP3O8yPyLbFelu68NRYbVxU/4aAr/AGkyHLskwO23/Ko0WJcbmKyWo0NtxsBjGv4CkjrjxbjD38+SpwoChdzMbz6B3tx7uJj2Plkdvg2s7dJhsyGY7ouEUhd34q8tJCckXkqLpwoCQwvC8wjd/cszO5Wz5Oy3m2Q2Yr3XYd/HBiKLrW0DVz2G0Y7lBEXThzSgNbfVLYbpF7hWKVjEhGrzm0N3H50MV0J5tXGwRS5+00dEFX+RPWgOkMRxuFjOMWvH4X+mtkZuMBaaKagOhGvqZakvqtAc/wCe9uO6l7znK0ulil5RaZ7RpizoXj9PgwhVskHfHQhUyQtntVEQiHjqhKqARd67V5XZO03bKVMet9nyrDbnKdbt11lx2o77kmaUxttH0NWSNRjgW3emo7uOqaUBl7e3nLss+oHILkq29i8hjbrAPW175yHGfXpCwhvpvAzQ11JB1Tw8FoCs3zsp3hv2ILEn4pNnZe1M3y8gnX1t0X2tT9rEVx1GkTaoakRa8OHNUQDdkTAssb+oHK8sODpj9yx/5CFN6rPvk6Rfw+nv6o/knxIUThzoCn23tF3CZ+lu7YO7aduUyZYusW/5iMu4EnMPKvWR3op+G2S8ToC23vBr2/L7UE7jD9zexgI6TZrNyixQt56RgeJ1kwdKUg9FS0aJPh014pQG4qA88mYDKea18bBzk4w5huVP48Wv6VJI5NgeX4Vjqu4o+v8AHHVdNPENFqje4tq8XqxWT49TLZtN6pw9OXmX7lqhXZHA13cKpVWjgdOdFEgNwRU51rekQOiU60iGS3D/ANmuSdWC0ZDj0E+LbbYKorLIV4E66qaiq/COmnFa7Ndu2h6FPKTX+kubf4dkefSzWoUfUet8OX3Jq43YGR011cLgIpxVVXgnCtKhbObwSOioKKxfA2jgtjdtNjFJAoEyWayJI6JqhEiIgqvmIimvrXq2zWDtqCi/M839inbldKtVbXlWSLDXWNAUAoBQCgFARdmxbHLJInSbRbY8GRcnOtcHWGxA33NSXe6ScSXUyXVfOgPbPgQbhDehT4zUuFIFQfjPgLrTgLzEwNFEk9FSgMrLLTLQMsgLbTYoDbYIgiIimiCKJwRESgPqgFARc3FscnXqJfJltjyLxAHZCnuNiTzI8eDZrxH4l5UBKUAoCNv+NY9kMFIF+tsa6QxNHQjy2geAXERRQxQ0XaSCSpuTjoq0Bjx7EsXxuOcewWmJamXV3OjEZBneSclNQRFJU9aAlqAUAoBQCgI+4wXHRVW+OvhWLR9RrfO8SZvNvcgzmTNvXcBgqg424PETbNOIkK8q16kcVg+BLCbi8VkzT8gs0xd1WpUc7vABfw5jKIMhB/7rXBCX1D91Vu82CE3jTy6mWG13nLCou9H233XtYJtfVxk/EHW3AX9xDXEn7frJ8Dpx3Cg/7H1G7guT1CHZITsgtEFsGGiQBTkiblQRFKlp+3qknjL9yOe5UILJ49htXt12/u5SWrxe21SQmhstki7GteRCi8TL+bw8KtG3bRCh4uMiv325zreFZRNugKCKCnJOFdw5J+0AoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgPNN+BPyfH8/l9lfGCk334nP9BzXn8P91QS7jNFMlfnf7Fz/wCtUXwMzYeG8mf/AAnwf7b+b8Pj6+dbEO4wkW+pTAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgP/2Q=="})]})},ne=n(43),re=n.n(ne),ce=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,c=Object(U.a)(e,["options","onChange","onChangeOption"]),a=t?t.map((function(e,t){return Object(d.jsx)("option",{className:re.a.option,children:e},t)})):[];return Object(d.jsx)("select",Object(q.a)(Object(q.a)({onChange:function(e){r&&r(e.currentTarget.value),n&&n(e)}},c),{},{className:re.a.select,children:a}))},ae=function(e){e.type;var t=e.name,n=e.options,r=e.value,c=e.onChange,a=e.onChangeOption,i=(Object(U.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e.currentTarget.value),c&&c(e)}),o=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",value:e,checked:e===r,onChange:i}),e]},t+"-"+n)})):[];return Object(d.jsx)("div",{children:o})},ie=["x","y","z"];var oe=function(){var e=Object(r.useState)(ie[0]),t=Object(A.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(ce,{options:ie,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(ae,{name:"radio",options:ie,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},se=function(e,t){return e.name>t.name?1:e.name<t.name?-1:0},je=function(e,t){return e.name>t.name?-1:e.name<t.name?1:0},ue=function(e,t){switch(t.type){case"sort":var n=Object(S.a)(e);return"up"===t.payload?n.sort(se):"down"===t.payload?n.sort(je):e;case"check":return Object(S.a)(e).filter((function(e){return e.age>t.payload}));default:return e}},le=function(e){return{type:"sort",payload:e}},be=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var de=function(){var e=Object(r.useState)(be),t=Object(A.a)(e,2),n=t[0],c=t[1],a=n.map((function(e){return Object(d.jsxs)("div",{children:[e.name," ",e.age]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",a,Object(d.jsxs)("div",{children:[Object(d.jsx)(P,{onClick:function(){return c(ue(be,le("up")))},children:"sort up"}),Object(d.jsx)(P,{onClick:function(){return c(ue(be,le("down")))},children:"sort down"}),Object(d.jsx)(P,{onClick:function(){return c(ue(be,{type:"check",payload:18}))},children:"check 18"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Oe=function(){var e=Object(r.useState)(0),t=Object(A.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(new Date),i=Object(A.a)(a,2),o=i[0],s=i[1],j=Object(r.useState)(!1),u=Object(A.a)(j,2),l=u[0],b=u[1],O=function(){clearInterval(n)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:o.toLocaleTimeString()}),l&&Object(d.jsx)("div",{children:o.toLocaleDateString()}),Object(d.jsx)(P,{onClick:function(){O();var e=window.setInterval((function(){s(new Date)}),1e3);c(e)},children:"start"}),Object(d.jsx)(P,{onClick:O,children:"stop"})]})};var he=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(Oe,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},xe=n(21),fe={isLoading:!1},ge=function(e){return{type:"changeIsLoading",isLoading:e}},ve=n.p+"static/media/loading.372b42cf.gif";var Ae=function(){var e=Object(xe.b)(),t=Object(xe.c)((function(e){return e.loading.isLoading}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",t?Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:ve})}):Object(d.jsx)("div",{children:Object(d.jsx)(P,{onClick:function(){e(ge(!0)),console.log("loading..."),setTimeout((function(){e(ge(!1))}),2e3)},children:"set loading..."})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},pe=n(63),me=n.n(pe),Ce=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",{type:"range",value:e.value,onChange:function(t){e.onChangeRange(+t.currentTarget.value)},className:me.a.range})})},ke=n(116),Se=n(117),Ee=function(e){var t=c.a.useState([e.value1,e.value2]),n=Object(A.a)(t,2),r=n[0],a=n[1];return Object(d.jsx)(ke.a,{width:300,children:Object(d.jsx)(Se.a,{getAriaLabel:function(){return"Temperature range"},value:[e.value1,e.value2],onChange:function(t,n){a(n),e.onChangeRange1(r[0]),e.onChangeRange2(r[1])},valueLabelDisplay:"auto"})})};var Ne=function(){var e=Object(r.useState)(50),t=Object(A.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(100),i=Object(A.a)(a,2),o=i[0],s=i[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 11",Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:n}),Object(d.jsx)(Ce,{value:n,onChangeRange:c})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:n}),Object(d.jsx)(Ee,{value1:n,onChangeRange1:function(e){return c(e)},value2:o,onChangeRange2:function(e){return s(e)}}),Object(d.jsx)("span",{children:o})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Be=function(){return Object(d.jsxs)("div",{children:["JUNIOR",Object(d.jsx)(oe,{}),Object(d.jsx)(de,{}),Object(d.jsx)(he,{}),Object(d.jsx)(Ae,{}),Object(d.jsx)(Ne,{})]})},Qe=n(45),He=n.n(Qe),Re={theme:"some"},qe=["dark","red","some","blue","pink"];var Ue=function(){var e=Object(xe.c)((function(e){return e.theme.theme})),t=Object(xe.b)();return Object(d.jsxs)("div",{className:He.a[e],children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("span",{className:He.a[e+"-text"],children:["homeworks 12",Object(d.jsx)(ce,{value:e,options:qe,onChangeOption:function(e){t(function(e){return{type:"CHANGE-THEME",theme:e}}(e))}})]}),Object(d.jsx)("hr",{})]})},Je=n(68),Le=n.n(Je),Fe=function(e){return Le.a.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:e})};var Te=function(){var e=Object(r.useState)(!1),t=Object(A.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),i=Object(A.a)(a,2),o=i[0],s=i[1],j=Object(r.useState)(null),u=Object(A.a)(j,2),l=u[0],b=u[1];return Object(r.useEffect)((function(){Fe(o).then((function(e){console.log(e.data.errorText),b(e.data.errorText)})).catch((function(e){console.log(Object(q.a)({},e)),console.log(e.response?e.response.data.errorText:e.message),b("\u043e\u0448\u0438\u0431\u043a\u0430 (\u0438\u043c\u0438\u0442\u0430\u0446\u0438\u044f)")}))}),[o]),Object(d.jsxs)("div",{children:[Object(d.jsx)(P,{onClick:function(){return s(n)},children:"\u0417\u0430\u043f\u0440\u043e\u0441"}),Object(d.jsx)(V,{checked:n,onChange:function(e){return c(e.currentTarget.checked)}}),Object(d.jsx)("div",{children:l})]})};var Xe=function(){return Object(d.jsxs)("span",{children:["homeworks 13",Object(d.jsx)(Te,{})]})};var Ke=function(){return Object(d.jsxs)("div",{children:["JUNIOR Plus",Object(d.jsx)(Ue,{}),Object(d.jsx)(Xe,{})]})},Ie="/pre-junior",Pe="/junior",we="/junior-plus";var ye=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(u.a,{to:Ie})}}),"// add routes",Object(d.jsx)(u.b,{path:Ie,render:function(){return Object(d.jsx)(M,{})}}),Object(d.jsx)(u.b,{path:Pe,render:function(){return Object(d.jsx)(Be,{})}}),Object(d.jsx)(u.b,{path:we,render:function(){return Object(d.jsx)(Ke,{})}}),Object(d.jsx)(u.b,{render:function(){return Object(d.jsx)(te,{})}})]})})},Ve=n(19),De=n.n(Ve);var Ge=function(){return Object(d.jsxs)("div",{className:De.a.header,children:[Object(d.jsx)(j.b,{to:Ie,className:De.a.link,activeClassName:De.a.activeLink,children:"PRE Junior "}),Object(d.jsx)(j.b,{to:Pe,className:De.a.link,activeClassName:De.a.activeLink,children:"Junior "}),Object(d.jsx)(j.b,{to:we,className:De.a.link,activeClassName:De.a.activeLink,children:"Junior PLUS "}),Object(d.jsx)("div",{className:De.a.block})]})};var We=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(Ge,{}),Object(d.jsx)(ye,{})]})})};var Ze=function(){return Object(d.jsx)("div",{className:s.a.App,children:Object(d.jsx)(We,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=n(47),_e=Object(Ye.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changeIsLoading":var n=Object(q.a)({},e);return n.isLoading=t.isLoading,n;default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-THEME":var n=Object(q.a)({},e);return n.theme=t.theme,n;default:return e}}}),ze=Object(Ye.b)(_e),Me=ze;window.store=ze,i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(xe.a,{store:Me,children:Object(d.jsx)(Ze,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,n){e.exports={link:"Header_link__2q005",activeLink:"Header_activeLink__1caeN",block:"Header_block__2erm2",header:"Header_header__3hqbj"}},22:function(e,t,n){e.exports={background:"Message_background__1a6yM",img:"Message_img__1ATzP",message:"Message_message__ZMm3m",name:"Message_name__37bXa",time:"Message_time__3dQxM",content:"Message_content__2TiRU",corner:"Message_corner__ddYWz"}},37:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__34LuE",errorInput:"SuperInputText_errorInput__K6vjf",error:"SuperInputText_error__382dh"}},38:function(e,t,n){e.exports={label:"SuperCheckbox_label__3Nl0G",checkbox:"SuperCheckbox_checkbox__2pcLi",spanClassName:"SuperCheckbox_spanClassName__2iLM_"}},40:function(e,t,n){e.exports={blue:"HW4_blue__bSW8q",column:"HW4_column__ZBSkJ",testSpanError:"HW4_testSpanError__HCuCn"}},41:function(e,t,n){e.exports={default:"SuperButton_default__lHHNr",red:"SuperButton_red__3VFKk"}},42:function(e,t,n){e.exports={span:"span_span__3ofBF",picture:"span_picture__1Oxqe"}},43:function(e,t,n){e.exports={select:"SuperSelect_select__2Tk5i","select-css":"SuperSelect_select-css__3q1td",option:"SuperSelect_option__3aCuN"}},45:function(e,t,n){e.exports={dark:"HW12_dark__3P2_n","dark-text":"HW12_dark-text__3dzA6",red:"HW12_red__2XPt-","red-text":"HW12_red-text__GS_J-",some:"HW12_some__JCW-S","some-text":"HW12_some-text__3wje7",blue:"HW12_blue__3Ijv4","blue-text":"HW12_blue-text__3h_6s",pink:"HW12_pink__JKrdg","pink-text":"HW12_pink-text__oQ_9i"}},59:function(e,t,n){e.exports={App:"App_App__2DDSZ"}},60:function(e,t,n){e.exports={someClass:"Greeting_someClass__3pNV0",error:"Greeting_error__1v1Qn"}},61:function(e,t,n){e.exports={error:"Error404_error__TrgRO"}},63:function(e,t,n){e.exports={range:"SuperRange_range__3l8h7"}},78:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.ca9e18ee.chunk.js.map