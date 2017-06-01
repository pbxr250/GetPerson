/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/ValueState','sap/ui/core/ValueStateSupport'],function(q,V,a){"use strict";var C={};C.render=function(r,c){var i=c.getId(),e=c.getEnabled(),E=c.getEditable(),o=c.getAggregation("_label"),I=V.Error===c.getValueState(),b=V.Warning===c.getValueState();r.write("<div");r.addClass("sapMCb");if(!E){r.addClass("sapMCbRo");}if(!e){r.addClass("sapMCbBgDis");}if(I){r.addClass("sapMCbErr");}else if(b){r.addClass("sapMCbWarn");}if(c.getText()){r.addClass("sapMCbHasLabel");}r.writeControlData(c);r.writeClasses();var t=a.enrichTooltip(c,c.getTooltip_AsString());if(t){r.writeAttributeEscaped("title",t);}if(e){r.writeAttribute("tabindex",c.getTabIndex());}r.writeAccessibilityState(c,{role:"checkbox",selected:null,checked:c.getSelected(),describedby:t?i+"-Descr":undefined});r.write(">");r.write("<div id='");r.write(c.getId()+"-CbBg'");r.addClass("sapMCbBg");if(e&&E&&sap.ui.Device.system.desktop){r.addClass("sapMCbHoverable");}if(!c.getActiveHandling()){r.addClass("sapMCbActiveStateOff");}r.addClass("sapMCbMark");if(c.getSelected()){r.addClass("sapMCbMarkChecked");}r.writeClasses();r.write(">");r.write("<input type='CheckBox' id='");r.write(c.getId()+"-CB'");if(c.getSelected()){r.writeAttribute("checked","checked");}if(c.getName()){r.writeAttributeEscaped('name',c.getName());}if(!e){r.write(" disabled=\"disabled\"");}if(!E){r.write(" readonly=\"readonly\"");}r.write(" /></div>");r.renderControl(o);if(t&&sap.ui.getCore().getConfiguration().getAccessibility()){r.write("<span id=\""+i+"-Descr\" class=\"sapUiHidden\">");r.writeEscaped(t);r.write("</span>");}r.write("</div>");};return C;},true);