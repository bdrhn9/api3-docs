(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{865:function(e,t,a){"use strict";a.r(t);var s=a(9),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("TitleSpan",[e._v("Developers")]),e._v(" "),a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("VersionWarning"),e._v(" "),a("TocHeader"),e._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),a("p",[e._v("A request to an Airnode can have many parameters. It is very common for\nrequester contracts (e.g., a data feed) to make repeated requests with the exact\nsame parameters. In such instances, it is wasteful to pass all of these\nparameters repeatedly. Templates are used to hold a set of parameter values\non-chain that can be used repeatedly when calling\nthe"),a("code",[e._v("makeTemplateRequest()")]),e._v("function in\n"),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.4/packages/airnode-protocol/contracts/rrp/AirnodeRrp.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("AirnodeRrp.sol"),a("OutboundLink")],1),e._v(".\nUnlike"),a("code",[e._v("makeFullRequest(), makeTemplateRequest()")]),e._v("requires that a requester\npass"),a("code",[e._v("templateId")]),e._v("which identifies a template.")]),e._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("makeTemplateRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" templateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" sponsor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" sponsorWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" fulfillAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes4")]),e._v(" fulfillFunctionId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("calldata")]),e._v(" parameters\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("external")]),e._v(" override "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("returns")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" requestId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("When a template is used to make a request, both the parameters encoded in\nparameters of the template and parameters provided at request-time (if any) will\nbe used by the Airnode. In case the two include a parameter with the same name,\nthe one provided at request-time will be used.")]),e._v(" "),a("p",[e._v("The structure of a template, as shown below, is simple.")]),e._v(" "),a("ul",[a("li",[e._v("address of the desired Airnode")]),e._v(" "),a("li",[e._v("endpointId from the Airnode")]),e._v(" "),a("li",[e._v("endpoint parameters")])]),e._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Template")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" airnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" endpointId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" parameters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("There are just a few steps to create and place a template on-chain for a\nrequester contract to use. Each template is identified by a"),a("code",[e._v("templateId")]),e._v(", which\nis the hash of its contents. When you create a template record on-chain,\n"),a("RouterLink",{attrs:{to:"/airnode/v0.4/grp-developers/using-templates.html#part-2-upload-template"}},[e._v("see Part #2: Upload Template")]),e._v(", a\ntemplateId will be returned.")],1),e._v(" "),a("divider"),e._v(" "),a("h2",{attrs:{id:"part-1-build-a-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-1-build-a-template"}},[e._v("#")]),e._v(" Part #1: Build a Template")]),e._v(" "),a("p",[e._v("First create a file that contains a template object. Below is an example. You\nwill need the address of the Airnode and its endpointId to be called. Below are\nlinks that discuss request parameters if you need help.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.4/concepts/request.html"}},[e._v("Reference > Request-Response Protocol > Request")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.4/grp-developers/call-an-airnode.html#request-parameters"}},[e._v("Calling an Airnode")])],1)]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "airnode": "0x15e7097beac1fd23c0d1e3f5a882a6f99ecbcf2e0c1011d1bd43707c6c0ec717",\n  "endpointId": "0x2605589dfc93c8f9c35eecdfe1e666c2193df30a8b13e1e0dd72941f59f9064c",\n  "parameters": [\n    {\n      "name": "name1",\n      "value": "value1",\n      "type": "string"\n    },\n    {\n      "name": "name2",\n      "value": "1000",\n      "type": "uint256"\n    }\n  ]\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("p",[e._v("If you create more than one template using the same parameter values for an\nAirnode/endpointID the same"),a("code",[e._v("templateId")]),e._v("will be returned for each. Only one\ntemplate is created when the parameters are the same.")]),e._v(" "),a("divider"),e._v(" "),a("h2",{attrs:{id:"part-2-upload-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-2-upload-template"}},[e._v("#")]),e._v(" Part #2: Upload Template")]),e._v(" "),a("p",[e._v("Use the\n"),a("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.4/packages/airnode-admin#create-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("create-template"),a("OutboundLink")],1),e._v("\ncommand in the @api3/airnode-admin package to move your template on-chain. The\ncommand"),a("code",[e._v("create-template")]),e._v("reads a file, uses its contents to create a template and\nreturns a"),a("code",[e._v("templateId")]),e._v(". To create a new template record you will need the\nfollowing.")]),e._v(" "),a("ul",[a("li",[e._v("A providerURL from your blockchain provider.")]),e._v(" "),a("li",[e._v("A mnemonic for gas to fund the record creation.")]),e._v(" "),a("li",[e._v("The path to a template file.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("mnemonic")]),e._v(" "),a("p",[e._v("This wallet pays the transaction gas costs to write the template record. This is\nnot the wallet(s) that will pay gas costs to actually execute any Airnode, for\nthat the Airnode themselves will create sponsor wallets on behalf of your\nsponsor record.")])]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("npx @api3/airnode-admin create-template "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --templateFilePath ./template.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("divider"),e._v(" "),a("h2",{attrs:{id:"more-on-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-on-templates"}},[e._v("#")]),e._v(" More on Templates")]),e._v(" "),a("p",[e._v("You can create as many templates as needed. Call the "),a("code",[e._v("getTemplates")]),e._v("command in\nthe @api3/airnode-admin package to get a list of the templates by\ntheir"),a("code",[e._v("templateIds")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);