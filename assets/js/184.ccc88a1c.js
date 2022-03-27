(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{768:function(e,t,r){"use strict";r.r(t);var o=r(9),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),r("VersionWarning"),e._v(" "),r("TocHeader"),e._v(" "),r("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),r("p",[e._v("API3 embraces the ideology of a decentralized web and the power of open source.\nFurthermore it believes that the\n"),r("a",{attrs:{href:"https://medium.com/api3/the-api-connectivity-problem-bd7fa0420636",target:"_blank",rel:"noopener noreferrer"}},[e._v("oracle problem is ill-posed"),r("OutboundLink")],1),e._v("\nand instead, the problem to be solved is how to connect APIs to the blockchain.\nAirnode is a first-party oracle solution that addresses this problem. Like all\ndesign decisions, however, the advantages presented below have tradeoffs that\nshould be understood.")]),e._v(" "),r("h2",{attrs:{id:"advantages"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#advantages"}},[e._v("#")]),e._v(" Advantages")]),e._v(" "),r("ul",[r("li",[e._v("First-party - First-party oracles overcome the significant disadvantages of\nthird-party oracle node solutions that use middlemen to deliver APIs to the\nblockchain. You can read about these in\n"),r("a",{attrs:{href:"https://medium.com/api3/first-party-vs-third-party-oracles-90356e3cffe5",target:"_blank",rel:"noopener noreferrer"}},[e._v("this blog post"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v('Simple - Airnode\'s simple "set and forget" design avoids the time, complexity,\nand cost of other third-party oracle node solutions.')]),e._v(" "),r("li",[e._v("Stateless - Airnode is stateless and treats the blockchain as the single\nsource of truth. This alone solves the majority of operational problems of\ntraditional third-party oracle nodes while providing an overall higher level\nof simplicity.")]),e._v(" "),r("li",[e._v("Transformative - By not requiring Airnode operators to own any cryptocurrency,\nAPI3 provides countless traditional API providers access to the rapidly\ngrowing blockchain market and to innovative use cases for their data. To\nenable this, Airnode protocols are designed in way that requesters (contracts\nmaking the requests) specify a sponsor (account that sponsors the transaction)\nto pay for the response transaction.")]),e._v(" "),r("li",[e._v("Open source - Airnode and other API3 projects are developed on\n"),r("a",{attrs:{href:"https://github.com/api3dao",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Secure - Airnode is inherently more secure than other solutions due to its\nstateless nature. Nonetheless, API3 remains highly focused on security and has\na track record of favorable\n"),r("a",{attrs:{href:"https://github.com/api3dao/api3-dao/tree/main/reports",target:"_blank",rel:"noopener noreferrer"}},[e._v("external security audits"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Free - API3 does not charge for deploying and using Airnode. Under the AWS\nlambda free tier, operating an Airnode can even be free.")])]),e._v(" "),r("h2",{attrs:{id:"tradeoffs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tradeoffs"}},[e._v("#")]),e._v(" Tradeoffs")]),e._v(" "),r("ul",[r("li",[e._v("Requires knowledge - Some knowledge about how Airnode works is inherently\nnecessary. The API provider needs to understand how to\n"),r("RouterLink",{attrs:{to:"/airnode/v0.2/grp-providers/guides/build-an-airnode/#configuration"}},[e._v("configure the Airnode")]),e._v("\nfor successful deployment, while "),r("RouterLink",{attrs:{to:"/airnode/v0.2/concepts/requester.html"}},[e._v("requesters")]),e._v(" need\nto understand how to make the requests. API3 aims to make this as convenient\nas possible for both parties.")],1),e._v(" "),r("li",[e._v('Airnode becomes a vendor - When an API provider begins using Airnode, they\nbecome a "vendor" and therefore forfeit some control over technical aspects of\nAPI delivery.')]),e._v(" "),r("li",[e._v('Higher response time for requests - Airnode is designed to periodically wake\nup, check for any new requests, and process them. This means that there is a\nwindow in which Airnode "sleeps". This is generally not problematic since the\nspecific time a response transaction is recorded on-chain is never guaranteed\nand this "sleep time" is configurable.\n')])]),e._v(" "),r("h2",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("The advantages that Airnode provides should greatly outweigh the tradeoffs for\nthe large majority of use cases.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);