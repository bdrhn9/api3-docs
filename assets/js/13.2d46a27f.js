(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{494:function(a,e,n){},651:function(a){a.exports=JSON.parse('{"Amberdata":{"url":"https://amberdata.io"},"beacons":{"0x7c3e9a38a16439e9b3e77bfe742f6c10004c26beabfab70fd78e3cf062ed6256":{"name":"AAVE/USD","grafanaURL":"https://monitor.api3.org/d-solo/ZCXhmzx7k/amberdata-beacons-on-ropsten-ethdenver?orgId=1&refresh=1m&from=1648004201921&to=1648047401921&theme=light&panelId=72","grafanaDeviationURL":"https://monitor.api3.org/d-solo/ZCXhmzx7k/amberdata-beacons-on-ropsten-ethdenver?orgId=1&refresh=1m&from=1648251364335&to=1648294564335&theme=light&panelId=73"},"0xb3fe6276a6b7258dbfe07dda5a3959538d56967531417b8a67f58f4918977584":{"name":"ATOM/USD","grafanaURL":""},"0xf1976a1d0ce6b6e3a534779baa4ae0a5b3c7a030bc4bd02f35b737b114a7d086":{"name":"AVAX/USD","grafanaURL":""},"0x44407753c8ffd478e377af11067a1619dfe5bb810fd4d0265e601574f4fc0a06":{"name":"Average Gas on Ethereum Mainnet","grafanaURL":""},"0xfec7084cc5e427c0832f15010a9af9e459fff9db5da0a359eed657cd14266893":{"name":"BAL/USD","grafanaURL":""},"0xe3910b726a1ed7705062a28ee3526ebde051f398d9141e88ac8453cd15aa610a":{"name":"BAT/USD","grafanaURL":""},"0x49e889871813b16854fd7faecad16b5ba59d33a9669b47f927501136840c021b":{"name":"BTC/USD","grafanaURL":""},"0x575b447eeeebc8612609081287f6d534e1629bdcc913c487116a0d89b4cea8f6":{"name":"COMP/USD","grafanaURL":""},"0x72c512f825577f581e7100dba06031dc34c748e948bb060af51ba76112a9abc0":{"name":"DAI/USD","grafanaURL":""},"0xda5e925bd47a8ba9a11d694a9390113f5e6b42a6f5ff13769df41ff5fbfac0c5":{"name":"ETH/BTC","grafanaURL":"https://monitor.api3.org/d-solo/ZCXhmzx7k/amberdata-beacons-on-ropsten-ethdenver?orgId=1&refresh=1m&from=1647995678028&to=1648038878028&theme=light&panelId=17"},"0x52775c1d7c61e5de2a64e58006f4ee1e0f7913dab0dd5d3e10f128c74167f4fe":{"name":"ETH/USD","grafanaURL":""},"0xc23968ad473772ba741b021ccfeaf8400be8545b4036574381c062734f8ffd3e":{"name":"Fast Gas on Ethereum Mainnet","grafanaURL":""},"0x57d81bfd734c7a2b2376f65694760f160baac40a9a50a5fa2b93076b5e59a1eb":{"name":"KNC/USD","grafanaURL":""},"0x1af88fcb9ea20c5ce0e02f1b7a63c13da0fa1af7fdca9ace39b75a41c78b95bc":{"name":"LRC/USD","grafanaURL":""},"0x674691ef4f4c1a8866fd680836c43b12d68d31bbd266827ead0681ad21b8b64b":{"name":"MANA/USD","grafanaURL":""},"0x396d166d7dfdc87e317e7edb826c617324d3a0c770ab64b12e4a5ed8f4496e8d":{"name":"MATIC/USD","grafanaURL":""},"0xe0d9e7a3b702e130e17f90c765eaacd197755de0ca6b9140c359ea342b7d40cb":{"name":"NEAR/USD","grafanaURL":""},"0x475c73eec562aeb488722eee57ca9b8996bcc914b0f14dcab034fc786c79c729":{"name":"SNX/USD","grafanaURL":""},"0x3b860569ebdc70019b048055b0e0662e3e7dbd68ff431310b65cd840db264ecb":{"name":"SOL/USD","grafanaURL":""},"0xe100d9fcd6e4d66259b904881578792590eb550c7f58516c1e430ed476a95a0d":{"name":"UNI/USD","grafanaURL":""},"0x6ab84a4c90a391770b8f1e2dbec458d50804cff6b053cfb5d14229f9bf898e5a":{"name":"USDC/USD","grafanaURL":""},"0xa54941ccafb90cf1d40edb52d874a1d4113f899ce62013fd59360b1689da83d3":{"name":"USDT/USD","grafanaURL":""},"0x4dfdac845a3316b528a3ea88ae82abf48a7dfff45d0922e04e90c52576d60426":{"name":"USDT/WETH","grafanaURL":""},"0xa360b20c4a4ac1180eb57887a03a81150779f0ebce62fa4fcfb43d3197ae3f74":{"name":"WBTC/USD","grafanaURL":""},"0x1b8ee8dd6f9f4293687a4ec61f964f884b58239a1bf60c9ea6210f6467478b5b":{"name":"YFI/USD","grafanaURL":""}}}')},652:function(a,e,n){"use strict";n(494)},688:function(a,e,n){"use strict";n.r(e);n(40),n(51),n(25),n(47),n(234),n(39),n(237),n(136),n(12),n(24),n(132),n(29),n(231),n(68),n(133);var t=n(71),r=n(452),c=n.n(r),o=n(651),f={name:"BeaconList",data:function(){return{loaded:!1,showSpinner:!1,error:null,beacons:[],beaconsFetched:[]}},mounted:function(){this.$nextTick(Object(t.a)(regeneratorRuntime.mark((function a(){var e,n,t;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,this.showSpinner=!0,this.error=null,a.next=5,c.a.get("https://raw.githubusercontent.com/api3dao/operations/v0.1/data/documentation_metadata.json");case 5:for(e=a.sent,n=0;n<e.data.beacons.length;n++)(t=e.data.beacons[n]).grafanaURL=o.beacons[t.beaconId].grafanaURL||void 0,t.grafanaDeviationURL=o.beacons[t.beaconId].grafanaDeviationURL||void 0,t.show=!0,t.url=o[t.apiName].url,t.showDetails=!1,t.content=t.templateName.toLowerCase()+" "+t.apiName.toLowerCase()+" "+t.description.toLowerCase()+" "+t.chains.toString().toLowerCase().replace(/,/g," ");this.beaconsFetched=e.data.beacons,this.beaconsFetched.sort(this.sortByName),this.beacons=this.beaconsFetched,a.next=16;break;case 12:a.prev=12,a.t0=a.catch(0),console.error(a.t0.toString()),this.error=a.t0.toString();case 16:this.showSpinner=!1,this.loaded=!0;case 18:case"end":return a.stop()}}),a,this,[[0,12]])}))))},methods:{openOverlay:function(a,e){this.$refs.overlayChild.setBeacon(a,e),document.getElementById("b2-overlay").style.width="350px"},sortByName:function(a,e){return e.templateName.toLowerCase()>a.templateName.toLowerCase()?-1:e.templateName.toLowerCase()<a.templateName.toLowerCase()?1:0},find:function(a){var e=this.$el.querySelector("#searchText").value.toLowerCase().split(" ");this.beaconsFetched.forEach((function(a){var n=[];e.forEach((function(e){0===e.length||(a.content.indexOf(e)>-1?n.push(!0):n.push(!1)),n.includes(!1)?a.show=!1:a.show=!0,a.showDetails=!1}))})),this.beacons=this.beaconsFetched.filter((function(a){return!0===a.show}))}}},d=(n(652),n(9)),s=Object(d.a)(f,(function(){var a=this,e=a.$createElement,n=a._self._c||e;return!0===a.loaded?n("div",[n("input",{staticClass:"b2-beacon-filter-input",attrs:{id:"searchText",spellcheck:"false",placeholder:"Filter (must contain all)"},on:{keyup:function(e){a.find(e)}}}),a._v(" "),n("div",{staticStyle:{"margin-top":"4px","font-size":"small"}},[a._v("\n    Beacons: ("+a._s(a.beacons.length)+")\n  ")]),a._v(" "),n("hr"),a._v(" "),n("div",{staticStyle:{"padding-left":"55px"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:a.showSpinner,expression:"showSpinner"}],attrs:{src:"/img/spinner.gif"}})]),a._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:null!==a.error,expression:"error !== null"}],staticClass:"b2-error"},[a._v("\n    The Beacon list failed to load: ("+a._s(a.error)+")\n  ")]),a._v(" "),a._l(a.beacons,(function(a,e){return n("beacons-browser2-BeaconItem",{key:"B"+e,attrs:{beacon:a,cnt:e}})})),a._v(" "),n("beacons-browser2-BeaconOverlay",{ref:"overlayChild"})],2):a._e()}),[],!1,null,null,null);e.default=s.exports}}]);