(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{861:function(t,a,e){"use strict";e.r(a);var s=e(9),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("TitleSpan",[t._v("Concepts and Definitions")]),t._v(" "),e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("VersionWarning"),t._v(" "),e("p",[t._v("An oracle request has many parameters. It is very common for\n"),e("RouterLink",{attrs:{to:"/airnode/v0.4/concepts/requester.html"}},[t._v("requesters")]),t._v(" (e.g., a data feed) to make repeated requests with\nthe exact same parameters. In such instances, it is wasteful to pass all of\nthese parameters repeatedly.")],1),t._v(" "),e("p",[t._v("Templates are on-chain records of request parameters that the requesters can\nrefer to while making requests. Additional advantages are reducing boilerplate\ncode required to make a request, improving UX and allowing large parameter\npayloads (e.g., off-chain computation specifications) at no additional gas cost.")]),t._v(" "),e("div",{staticClass:"language-solidity line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Template")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" airnode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" endpointId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" parameters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h3",{attrs:{id:"templateid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#templateid"}},[t._v("#")]),t._v(" templateId")]),t._v(" "),e("p",[t._v("Each template is identified by a "),e("code",[t._v("templateId")]),t._v(", which is the hash of its\ncontents. This allows Airnode to fetch templates with a static call, and verify\nthat the received parameters are not tampered with.")]),t._v(" "),e("div",{staticClass:"language-solidity line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[t._v("templateId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("keccak256")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("abi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  airnode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  endpointId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  parameters\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);