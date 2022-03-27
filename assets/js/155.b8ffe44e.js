(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{724:function(e,t,s){"use strict";s.r(t);var a=s(9),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("VersionWarning"),e._v(" "),s("TocHeader"),e._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),s("p",[e._v("When a client makes a request using "),s("code",[e._v("Airnode.sol")]),e._v(", it is returned a "),s("code",[e._v("requestId")]),e._v(".\nThis "),s("code",[e._v("requestId")]),e._v(" is a hash of all request parameters and a nonce.\nThis allows Airnode to verify that the request parameters are not tampered with.")]),e._v(" "),s("h2",{attrs:{id:"request-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-parameters"}},[e._v("#")]),e._v(" Request parameters")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("providerId")]),e._v(" and "),s("code",[e._v("endpointId")]),e._v(" specify the endpoint")]),e._v(" "),s("li",[s("code",[e._v("requesterIndex")]),e._v(" and "),s("code",[e._v("designatedWallet")]),e._v(" specify which wallet will be used to fulfill the request")]),e._v(" "),s("li",[s("code",[e._v("fulfillAddress")]),e._v(" and "),s("code",[e._v("fulfillFunctionId")]),e._v(" specify which method will be called to fulfill the request")]),e._v(" "),s("li",[s("code",[e._v("parameters")]),e._v(" specify the API and "),s("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/ois.html#_5-4-reservedparameters"}},[e._v("reserved")]),e._v(" parameters (see "),s("RouterLink",{attrs:{to:"/airnode/pre-alpha/airnode/specifications/airnode-abi-specifications.html"}},[e._v("Airnode ABI specifications")]),e._v(" for how these are encoded)")],1)]),e._v(" "),s("h2",{attrs:{id:"how-templates-are-used-in-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-templates-are-used-in-requests"}},[e._v("#")]),e._v(" How templates are used in requests")]),e._v(" "),s("p",[e._v("A template includes the following fields:")]),e._v(" "),s("div",{staticClass:"language-solidity line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Template")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" providerId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" endpointId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("uint256")]),e._v(" requesterIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" designatedWallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" fulfillAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes4")]),e._v(" fulfillFunctionId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" parameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("The client can refer to the "),s("code",[e._v("templateId")]),e._v(" of a template while making the request, and the provider's Airnode will fetch these and use them in the request.\nAmong these, "),s("code",[e._v("requesterIndex")]),e._v(", "),s("code",[e._v("designatedWallet")]),e._v(", "),s("code",[e._v("fulfillAddress")]),e._v(", "),s("code",[e._v("fulfillFunctionId")]),e._v(" can be overridden by parameters defined at request-time.")]),e._v(" "),s("p",[e._v("When a template is used to make a request, both the parameters encoded in "),s("code",[e._v("parameters")]),e._v(" of the template and "),s("code",[e._v("parameters")]),e._v(" provided at request-time by the client will be used by the provider's Airnode.\nIn case the two include a parameter with the same name, the one provided at request-time will be used.")]),e._v(" "),s("h2",{attrs:{id:"request-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-types"}},[e._v("#")]),e._v(" Request types")]),e._v(" "),s("p",[e._v("There are multiple request types with respect to how they utilize templates:")]),e._v(" "),s("h3",{attrs:{id:"_1-regular-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-regular-request"}},[e._v("#")]),e._v(" 1. Regular request")]),e._v(" "),s("p",[e._v("A regular request refers to a template, yet provides its own "),s("code",[e._v("requesterIndex")]),e._v(", "),s("code",[e._v("designatedWallet")]),e._v(", "),s("code",[e._v("fulfillAddress")]),e._v(", "),s("code",[e._v("fulfillFunctionId")]),e._v(" that will override the ones from the template.")]),e._v(" "),s("h3",{attrs:{id:"_2-short-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-short-request"}},[e._v("#")]),e._v(" 2. Short request")]),e._v(" "),s("p",[e._v("A short request refers to a template for all parameters.")]),e._v(" "),s("h3",{attrs:{id:"_3-full-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-full-request"}},[e._v("#")]),e._v(" 3. Full request")]),e._v(" "),s("p",[e._v("A full request does not refer to a template at all.\nThey are useful if the client will not make a similar request ever again (e.g., in a prediction market context).")]),e._v(" "),s("h2",{attrs:{id:"request-outcomes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-outcomes"}},[e._v("#")]),e._v(" Request outcomes")]),e._v(" "),s("p",[e._v("A request made to an Airnode has three possible outcomes:")]),e._v(" "),s("h3",{attrs:{id:"_1-fulfill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-fulfill"}},[e._v("#")]),e._v(" 1. Fulfill")]),e._v(" "),s("p",[e._v("If the node encountered no errors at any step, it calls the "),s("code",[e._v("fulfill()")]),e._v(" method that will call back the method "),s("code",[e._v("fulfillFunctionId")]),e._v(" at "),s("code",[e._v("fulfillAddress")]),e._v(" to deliver "),s("code",[e._v("data")]),e._v(" and 0 as the "),s("code",[e._v("statusCode")]),e._v(".")]),e._v(" "),s("p",[e._v("If the node encountered an error, it will do the same, but "),s("code",[e._v("statusCode")]),e._v(" will be non-0, indicating to the client that the request has failed (see "),s("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/pre-alpha/packages/node#behaviour",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),s("OutboundLink")],1),e._v(" for details).\nThe client can then handle this error as it sees fit (e.g., ignore it, make a request to an alternative provider, etc.)")]),e._v(" "),s("h3",{attrs:{id:"_2-fail"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-fail"}},[e._v("#")]),e._v(" 2. Fail")]),e._v(" "),s("p",[e._v("If "),s("code",[e._v("fulfill()")]),e._v(" reverts, the node calls the "),s("code",[e._v("fail()")]),e._v(" method to report this.\nThe node will not attempt to fulfill a failed request afterwards.")]),e._v(" "),s("h3",{attrs:{id:"_3-ignore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-ignore"}},[e._v("#")]),e._v(" 3. Ignore")]),e._v(" "),s("p",[e._v("If the node cannot even fail a request (e.g., the client is not endorsed by the requester), the request gets ignored.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);