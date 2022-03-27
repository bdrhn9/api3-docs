(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{826:function(e,t,n){"use strict";n.r(t);var a=n(9),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("TitleSpan",[e._v("Quick Deploy GCP")]),e._v(" "),n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),n("VersionWarning"),e._v(" "),n("TocHeader"),e._v(" "),n("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),n("p",[e._v("This demo is a simple Airnode deployment, using a hands-on approach, to better\nunderstand the overall deployment process of the Airnode\n"),n("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/docker/deployer-image.html"}},[e._v("deployer image")]),e._v(" which deploys\nthe off-chain component of Airnode (a.k.a., the node) to GCP. It uses an API\nendpoint ("),n("code",[e._v("GET /simple/price")]),e._v(") from\n"),n("a",{attrs:{href:"https://www.coingecko.com/en/api/documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoinGecko"),n("OutboundLink")],1),e._v(" which returns the\ncurrent value of a coin. This demo does not detail the overall configuration of\nan Airnode, it is just a quick start.")],1),e._v(" "),n("p",[e._v("An Airnode cloud provider deployment uses a Docker image (called\n"),n("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/docker/deployer-image.html"}},[e._v("deployer image")]),e._v(") which in turn\nrequires three files as input.")],1),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/tutorial/quick-deploy-gcp/config-json.html"}},[e._v("config.json")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/tutorial/quick-deploy-gcp/secrets-env.html"}},[e._v("secrets.env")])],1)]),e._v(" "),n("p",[e._v("For the purpose of this demo these files have been created and only require a\nfew minor changes on your part to make the deployment of the demo Airnode\nsuccessful. These changes are needed to supply a GCP project ID, chain provider\nurl, and a mnemonic.")]),e._v(" "),n("h2",{attrs:{id:"install-prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install-prerequisites"}},[e._v("#")]),e._v(" Install Prerequisites")]),e._v(" "),n("ul",[n("li",[e._v("Install the "),n("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Desktop"),n("OutboundLink")],1),e._v(" and launch\nit.")]),e._v(" "),n("li",[e._v("Install "),n("a",{attrs:{href:"https://cloud.google.com/sdk/docs/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud SDK"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"project-folder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#project-folder"}},[e._v("#")]),e._v(" Project Folder")]),e._v(" "),n("p",[e._v("A project folder is needed for this demo. You can create it manually or download\na zip file ready to go.")]),e._v(" "),n("Tabs",{attrs:{type:"border-card"}},[n("Tab",{attrs:{label:"Create Manually"}},[n("p",[e._v("Create a folder called "),n("code",[e._v("/quick-deploy-gcp")]),e._v(" with two more internal folders named\n"),n("code",[e._v("/config")]),e._v(" and "),n("code",[e._v("/output")]),e._v(". Place the contents of the files provided\n("),n("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/tutorial/quick-deploy-gcp/config-json.html"}},[e._v("config.json")]),e._v(" and "),n("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/tutorial/quick-deploy-gcp/secrets-env.html"}},[e._v("secrets.env")]),e._v(" into the\nlocations show below.")],1),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("quick-deploy-gcp\n├── config\n│   ├── config.json\n│   └── secrets.env\n└── output\n    ├── receipt.json\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])])]),e._v(" "),n("Tab",{attrs:{label:"Download"}},[n("p",[e._v("Download the "),n("a",{attrs:{href:"/zip-files/quick-deploy-gcp-v0.3.zip",download:""}},[e._v("\nquick-deploy-gcp")]),e._v(" project folder.")])])],1),e._v(" "),n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),n("p",[e._v("Prepare the configuration files, setup a GCP project and obtain credentials. By\ndefault, the Airnode deployer image looks for "),n("code",[e._v("config.json")]),e._v(" and "),n("code",[e._v("secrets.env")]),e._v(" in\n"),n("code",[e._v("/config")]),e._v(" and writes "),n("code",[e._v("receipt.json")]),e._v(" to the "),n("code",[e._v("/output")]),e._v(" folder.")]),e._v(" "),n("h3",{attrs:{id:"config-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config-json"}},[e._v("#")]),e._v(" config.json")]),e._v(" "),n("p",[e._v("This file requires no changes on your part. It has been created with just one\nAPI endpoint. It will instruct the Airnode to attach to the Rinkeby test\nnetwork. There are three variables this file will extract (interpolation) from\n"),n("code",[e._v("secrets.env")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"secrets-env"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#secrets-env"}},[e._v("#")]),e._v(" secrets.env")]),e._v(" "),n("p",[e._v("Add values for each of the these fields.")]),e._v(" "),n("ul",[n("li",[n("p",[n("code",[e._v("CHAIN_PROVIDER_URL")]),e._v(": A chain provider url from a provider such as\n"),n("a",{attrs:{href:"https://infura.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Infura"),n("OutboundLink")],1),e._v(". Make sure the provider url you use is for the\nRinkeby test network. Using another chain provider other than Infura is\nacceptable.")]),e._v(" "),n("ul",[n("li",[e._v("Sign-up or login to Infura.")]),e._v(" "),n("li",[e._v("Create a new project, select the "),n("strong",[e._v("Settings")]),e._v(" tab in the project.")]),e._v(" "),n("li",[e._v("Copy the URL (https) for Rinkeby under the Endpoints pick list.")])])]),e._v(" "),n("li",[n("p",[n("code",[e._v("AIRNODE_WALLET_MNEMONIC")]),e._v(": Provide the seed phrase (mnemonic) to a digital\nwallet. For the purpose of this demo it does not need eth in it for the\nRinkeby test network. If you don't have one use the Admin CLI command\n"),n("RouterLink",{attrs:{to:"/airnode/v0.3/reference/packages/admin-cli.html#generate-mnemonic"}},[e._v("generate-mnemonic")]),e._v("\nto create one or another method you prefer.")],1)]),e._v(" "),n("li",[n("p",[n("code",[e._v("PROJECT_ID")]),e._v(": Project ID of your GCP project.\n"),n("a",{attrs:{href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a GCP project"),n("OutboundLink")],1),e._v("\nunder which will the Airnode be deployed and copy the project ID.")])])]),e._v(" "),n("h3",{attrs:{id:"gcp-project-setup-credentials"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gcp-project-setup-credentials"}},[e._v("#")]),e._v(" GCP Project Setup & Credentials")]),e._v(" "),n("p",[e._v("In order for Airnode to deploy successfully, you need to enable these APIs for\nyour GCP project:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://console.cloud.google.com/apis/library/cloudfunctions.googleapis.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudFunction API"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://console.cloud.google.com/apis/library/cloudbuild.googleapis.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Build API"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://console.cloud.google.com/apis/library/cloudscheduler.googleapis.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloud Scheduler API"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("After enabling these, wait a few minutes before the deployment itself so the\nchanges will take place.")]),e._v(" "),n("p",[e._v("The easiest way to obtain GCP credentials is via\n"),n("a",{attrs:{href:"https://cloud.google.com/sdk/docs/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud SDK"),n("OutboundLink")],1),e._v(". Once installed,\nrun the following command to retrieve your\n"),n("a",{attrs:{href:"https://cloud.google.com/sdk/gcloud/reference/auth/application-default/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Default Credentials"),n("OutboundLink")],1),e._v(":")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("gcloud auth application-default login --project "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PROJECT ID"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("where "),n("code",[e._v("<PROJECT ID>")]),e._v(" is your project ID.")]),e._v(" "),n("h2",{attrs:{id:"deploy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[e._v("#")]),e._v(" Deploy")]),e._v(" "),n("p",[e._v("Make sure Docker is running and then execute the deployer image from the root of\nthe "),n("code",[e._v("quick-deploy-demo")]),e._v(" folder. A "),n("code",[e._v("receipt.json")]),e._v(" file will be created upon\ncompletion. It contains some deployment information and is used to remove the\nAirnode.")]),e._v(" "),n("p",[e._v("Run the following command to deploy the demo Airnode. Note that the version of\n"),n("code",[e._v("api3/airnode-deployer")]),e._v(" matches the "),n("code",[e._v("nodeVersion")]),e._v(" in the config.json file.\n"),n("airnode-DeployerPermissionsWarning")],1),e._v(" "),n("p",[e._v("When deploying to GCP, the location of the credentials file will vary depending\non which operating system you use.")]),e._v(" "),n("Tabs",{attrs:{type:"border-card"}},[n("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("docker run -it --rm "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("USER_ID")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" -u"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -e "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GROUP_ID")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" -g"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")]),e._v("}")]),e._v('/.config/gcloud:/app/gcloud"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('/config:/app/config"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('/output:/app/output"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-deployer:0.3.1 deploy\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])])]),e._v(" "),n("Tab",{attrs:{label:"Windows"}},[n("p",[e._v("For Windows, use CMD (and not PowerShell).")]),e._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("docker run -it --rm ^\n  -v "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%/config:/app/config"')]),e._v(" ^\n  -v "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%/output:/app/output"')]),e._v(" ^\n  -v "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%AppData%/gcloud:/app/gcloud"')]),e._v(" ^\n  api3/airnode-deployer:0.3.1 deploy\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])])])],1),e._v(" "),n("h2",{attrs:{id:"confirm-the-airnode-deployment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#confirm-the-airnode-deployment"}},[e._v("#")]),e._v(" Confirm the Airnode Deployment")]),e._v(" "),n("p",[e._v("After a successful deployment you can see the Airnode logs in your\n"),n("a",{attrs:{href:"https://console.cloud.google.com/logs",target:"_blank",rel:"noopener noreferrer"}},[e._v("GCP Logs Explorer"),n("OutboundLink")],1),e._v(". If the logs look\nlike the following illustration, the Airnode is up and running.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("INFO Coordinator starting...\n...\nINFO Pending requests: 0 API call(s), 0 withdrawal(s)\n...\nINFO Coordinator completed\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),e._v(" "),n("h2",{attrs:{id:"remove-the-airnode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remove-the-airnode"}},[e._v("#")]),e._v(" Remove the Airnode")]),e._v(" "),n("p",[e._v("When you are done with this demo you can remove it. When the Airnode was\ndeployed a "),n("code",[e._v("receipt.json")]),e._v(" file was created in the "),n("code",[e._v("/output")]),e._v(" folder. This file is\nneeded to remove an Airnode.")]),e._v(" "),n("p",[e._v("The location of the credentials file will vary depending on which operating\nsystem you use.")]),e._v(" "),n("Tabs",{attrs:{type:"border-card"}},[n("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("docker run -it --rm "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("HOME")]),e._v("}")]),e._v('/.config/gcloud:/app/gcloud"')]),e._v("\n  -v "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('/output:/app/output"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-deployer:0.3.1 remove -r output/receipt.json\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])])]),e._v(" "),n("Tab",{attrs:{label:"Windows"}},[n("p",[e._v("For Windows, use CMD (and not PowerShell).")]),e._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("docker run -it --rm ^\n  -v "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%/output:/app/output"')]),e._v(" ^\n  -v "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%AppData%/gcloud:/app/gcloud"')]),e._v(" ^\n  api3/airnode-deployer:0.3.1 remove -r output/receipt.json\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])])])],1),e._v(" "),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),n("p",[e._v("You have deployed an Airnode on GCP. The Airnode, upon deployment, started\ncontacting the AirnodeRrp contract on the Rinkeby testnet to gather any requests\nmade by requesters to this Airnode. This tutorial did not address making a\nrequest as its purpose was simply to quickly deploy a functional Airnode.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);