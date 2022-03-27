(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{944:function(e,a,n){"use strict";n.r(a);var s=n(9),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("TitleSpan",[e._v("Docker Images")]),e._v(" "),n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),n("VersionWarning"),e._v(" "),n("TocHeader"),e._v(" "),n("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),n("p",[e._v("Usually the Airnode is deployed on a serverless platform using the\n"),n("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/docker/deployer-image.html"}},[e._v("deployer")]),e._v(". However, there is another option which is to\nrun the Airnode in a docker container on your machine locally, on premise or\ncloud hosted.")],1),e._v(" "),n("p",[e._v("A docker client image has been published on\n"),n("a",{attrs:{href:"https://hub.docker.com/r/api3/airnode-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),n("OutboundLink")],1),e._v(". If you want to build\nthe container from the source yourself, you can find the image and built\ninstructions in the\n"),n("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.5/packages/airnode-node/docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airnode repository"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),n("p",[e._v("The Airnode needs two configuration files for its run: "),n("code",[e._v("config.json")]),e._v(" and\n"),n("code",[e._v("secrets.env")]),e._v(". These files need to be passed to the Docker container via\nvolumes.")]),e._v(" "),n("p",[e._v("The Docker container looks for configuration files mounted internally in the\n"),n("code",[e._v("/app/config")]),e._v(" directory.")]),e._v(" "),n("p",[e._v("Your current working directory should contain the "),n("code",[e._v("config")]),e._v(" folder with the\nconfiguration files above and you bind it to the "),n("code",[e._v("/app/config")]),e._v(" directory for the\ndocker using the "),n("code",[e._v("--volume")]),e._v(" parameter.")]),e._v(" "),n("Tabs",{attrs:{type:"border-card"}},[n("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("$ tree\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n└── config\n    ├── config.json\n    └── secrets.env\n$ docker run --volume "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/config:/app/config "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])])]),e._v(" "),n("Tab",{attrs:{label:"Windows PowerShell"}},[n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("$ tree\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n└── config\n    ├── config.json\n    └── secrets.env\n$ docker run --volume "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/config:/app/config "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])])]),e._v(" "),n("Tab",{attrs:{label:"Windows CMD"}},[n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("$ tree\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n└── config\n    ├── config.json\n    └── secrets.env\n$ docker run --volume %cd%:/config:/app/config "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])])])],1),e._v(" "),n("h2",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),n("p",[e._v("Example directory structure and commands for running the Airnode Docker\ncontainer. The below commands are run from the depicted directory.")]),e._v(" "),n("h3",{attrs:{id:"running-airnode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-airnode"}},[e._v("#")]),e._v(" Running Airnode")]),e._v(" "),n("p",[e._v("It is recommended to run the Airnode in a detached mode using the "),n("code",[e._v("--detach")]),e._v("\nparameter, but you may run the it without it as well.")]),e._v(" "),n("Tabs",{attrs:{type:"border-card"}},[n("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("docker run --detach "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --volume "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/config:/app/config "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --name airnode "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-client:0.5.0\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])])]),e._v(" "),n("Tab",{attrs:{label:"Windows PowerShell"}},[n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("docker run --detach "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --volume "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("/config:/app/config "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --name airnode "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-client:0.5.0\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])])]),e._v(" "),n("Tab",{attrs:{label:"Windows"}},[n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("docker run --detach ^\n  --volume %cd%/config:/app/config ^\n  --name airnode ^\n  api3/airnode-client:0.5.0\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])])])],1),e._v(" "),n("blockquote",[n("p",[e._v("If you want to connect Airnode to a blockchain running on localhost, you need\nto make the blockchain accessible from within the docker itself. If you use\ndocker for linux you can use "),n("code",[e._v('--network="host"')]),e._v(" parameter. For windows, wsl or\nmac connect to "),n("code",[e._v("host.docker.internal")]),e._v(" instead of "),n("code",[e._v("127.0.0.1")]),e._v(". See\n"),n("a",{attrs:{href:"https://stackoverflow.com/a/24326540",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://stackoverflow.com/a/24326540"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"checking-airnode-logs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#checking-airnode-logs"}},[e._v("#")]),e._v(" Checking Airnode logs")]),e._v(" "),n("p",[e._v("If you run the Airnode in a detached mode, you need to use the "),n("code",[e._v("logs")]),e._v(" command to\naccess the logs. You can also use "),n("code",[e._v("--follow")]),e._v(" parameter to stream the Airnode log\noutput.")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("docker logs airnode\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("or")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("docker logs --follow airnode\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("h2",{attrs:{id:"stopping-airnode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stopping-airnode"}},[e._v("#")]),e._v(" Stopping Airnode")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("docker stop airnode\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])])],1)}),[],!1,null,null,null);a.default=t.exports}}]);