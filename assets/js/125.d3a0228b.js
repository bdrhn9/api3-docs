(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{690:function(e,t,a){"use strict";a.r(t);a(25),a(136),a(32),a(24),a(231),a(133);var n=a(71),r=a(452),i={name:"BeaconOverlayValue",data:function(){return{beacon:null,loading:!0,value:null,date:null,time:null,timestamp:null,iso:null,err:null}},methods:{setBeaconValue:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function a(){var n,i,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return null!=e&&(t.beacon=e),a.prev=1,t.loading=!0,t.value=void 0,t.date=void 0,t.time=void 0,t.timestamp=void 0,t.iso=void 0,t.error=void 0,a.next=11,r.get("https://api-ethers.herokuapp.com/beacons/"+t.beacon.beaconId);case 11:(n=a.sent).data.reason||n.data.code?t.err=n.data.reason+" - "+n.data.code:(i=n.data.split(","),0!==t.beacon.decodedParameters.filter((function(e){return"_times"===e.name})).length?t.value=i[0]/1e6:t.value=i[0],t.timestamp=i[1],o=new Date(1e3*i[1]),t.date=o.toDateString(),t.time=o.toTimeString()),t.loading=!1,a.next=20;break;case 16:a.prev=16,a.t0=a.catch(1),t.err=a.t0,t.loading=!1;case 20:case"end":return a.stop()}}),a,null,[[1,16]])})))()}}},o=a(9),l=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.setBeaconValue()}}},[a("img",{staticStyle:{float:"right","margin-right":"10px"},attrs:{width:"25px",src:"/img/refresh-icon.png"}})]),e._v(" "),a("i",{staticStyle:{"margin-left":"5px"}},[e._v("Value:")]),e._v(" "),a("b",[e._v(e._s(e.value))]),a("img",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{width:"20%",src:"/img/marching-balls.gif"}}),e._v(" "),a("div",{staticStyle:{"margin-left":"11px","font-family":"courier","font-size":"small"}},[e._v("\n    Date: "+e._s(e.date)+" "),a("br"),e._v("Time: "+e._s(e.time)+" "),a("br")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.err,expression:"err"}],staticStyle:{"font-family":"courier","margin-left":"11px",color:"red","font-size":"small"}},[e._v("\n    "+e._s(e.err)+"\n  ")])])}),[],!1,null,null,null);t.default=l.exports}}]);