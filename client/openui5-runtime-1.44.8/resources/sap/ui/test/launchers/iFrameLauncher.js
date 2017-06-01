/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/thirdparty/URI','sap/ui/Device','sap/ui/test/_LogCollector','sap/ui/test/_autoWaiter'],function(q,U,D,_,a){"use strict";var l="sap.ui.test.Opa5",$=q,f=null,F=null,o=null,b=null,c=null,r=false,u=false,A=null,d=null;function h(){f=F[0].contentWindow;e();g();}function e(){var v=f.onerror;f.onerror=function(E,w,L){var R=false;if(v){R=v.apply(this,arguments);}setTimeout(function(){throw new Error("OpaFrame error message: "+E+",\nurl: "+w+",\nline: "+L);},0);return R;};}function g(){if(u){return true;}if(f&&f.sap&&f.sap.ui&&f.sap.ui.getCore){if(!r){f.sap.ui.getCore().attachInit(j);}r=true;}return u;}function i(v){f.sap.ui.require(["sap/ui/thirdparty/sinon"],function(w){if(!w){setTimeout(function(){i(v);},50);}else{v();}});}function j(){m();if(D.browser.firefox){i(p);}else{p();}}function k(){c.sap.log.addLogListener(_.getInstance()._oListener);u=true;}function m(){c=f.jQuery;s("sap.ui.test");s("sap.ui.qunit");s("sap.ui.thirdparty");}function n(v,H,w){var x=new w(),y=new H(x),O=v.setHash,z=v.getHash,C,K=false,B=f.history.go;v.replaceHash=function(I){K=true;var J=this.getHash();C=I;x.fireEvent("hashReplaced",{sHash:I});this.changed.dispatch(I,J);};v.setHash=function(I){K=true;var R=z.call(this);C=I;x.fireEvent("hashSet",{sHash:I});O.apply(this,arguments);if(R===this.getHash()){this.changed.dispatch(R,y.aHistory[y.iHistoryPosition]);}};v.getHash=function(){if(C===undefined){return z.apply(this,arguments);}return C;};v.changed.add(function(N){if(!K){x.fireEvent("hashSet",{sHash:N});C=N;}K=false;});x.init();function E(){K=true;var N=y.aHistory[y.iHistoryPosition],I=y.getPreviousHash();C=I;v.changed.dispatch(I,N);}function G(){K=true;var N=y.aHistory[y.iHistoryPosition+1],I=y.aHistory[y.iHistoryPosition];if(N===undefined){q.sap.log.error("Could not navigate forwards, there is no history entry in the forwards direction",this);return;}C=N;v.changed.dispatch(N,I);}f.history.back=E;f.history.forward=G;f.history.go=function(S){if(S===-1){E();return;}else if(S===1){G();return;}q.sap.log.error("Using history.go with a number greater than 1 is not supported by OPA5",this);return B.apply(f.history,arguments);};}function p(){f.sap.ui.require(["sap/ui/test/OpaPlugin","sap/ui/test/_autoWaiter","sap/ui/qunit/QUnitUtils","sap/ui/thirdparty/hasher","sap/ui/core/routing/History","sap/ui/core/routing/HashChanger"],function(O,a,Q,v,H,w){o=new O(l);A=a;b=Q;n(v,H,w);d=w;k();});}function s(M){var O=q.sap.getModulePath(M);var v=new U(O).absoluteTo(document.baseURI).search("").toString();c.sap.registerModulePath(M,v);}function t(){f.onerror=$.noop;F.remove();c=null;o=null;b=null;f=null;u=false;r=false;A=null;d=null;}return{launch:function(v){if(f){$.sap.log.error("sap.ui.test.launchers.iFrameLauncher: Only one IFrame may be loaded at a time.");return;}F=$("#"+v.frameId);if(!F.length){if(!v.source){$.sap.log.error("No source was given to launch the IFrame",this);}F=$('<IFrame id="'+v.frameId+'" class="opaFrame" src="'+v.source+'"></IFrame>');$("body").append(F);}if(F[0].contentDocument&&F[0].contentDocument.readyState==="complete"){h();}else{F.on("load",h);}return g();},getHashChanger:function(){if(!d){return null;}return d.getInstance();},getPlugin:function(){return o;},getJQuery:function(){return c;},getUtils:function(){return b;},hasLaunched:function(){g();return u;},getWindow:function(){return f;},_getAutoWaiter:function(){return A||a;},teardown:function(){t();},_sLogPrefix:l};},true);
