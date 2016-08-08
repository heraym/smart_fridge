/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(b,f){b.ya("oj.inputBase",f.oj.editableValue,{version:"1.0.0",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"",_WIDGET_CLASS_NAMES:"",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_GET_INIT_OPTIONS_PROPS:[{V:"disabled",wc:!0},{V:"pattern"},{V:"placeholder"},{V:"value"},{V:"readonly",option:"readOnly",wc:!0},{V:"required",bf:!0,wc:!0},{V:"title"}],_INPUT_HELPER_KEY:"",NQ:"blur",JR:"keydown",yR:"input",iR:"drop",options:{converter:void 0,placeholder:void 0,
rawValue:void 0,readOnly:!1},Ov:function(a){var b=this._superApply(arguments);this.Xia();return b},Yd:function(a,d){this._super(a,d);b.ye.Xk(this._GET_INIT_OPTIONS_PROPS,d,this)},_ComponentCreate:function(){var a=this.element,b=this._superApply(arguments),c=this.sR(a),e=this.options.readOnly;this.yj="rtl"===this.dc();"boolean"===typeof e&&this.element.prop("readonly",e);this.Ev()&&(this.Mma(),this.jR()&&this.Lma());"pattern"in c&&a.removeAttr("pattern");this.jI={};this.hd=null;return b},nf:function(){var a=
this._superApply(arguments),b=this;this._CLASS_NAMES&&this.element.addClass(this._CLASS_NAMES);this.oT();this.TF();f.each(["disabled","readOnly"],function(a,e){b.options[e]&&b.CZ(e,b.options[e])});return a},CZ:function(a,b){"disabled"===a&&this.element.prop("disabled",b);"readOnly"===a&&(this.element.prop("readonly",b),this.QC("readOnly",b));"disabled"!==a&&"readOnly"!==a||this.oT()},_setOption:function(a,d){var c=this._superApply(arguments);"disabled"!==a&&"readOnly"!==a||this.CZ(a,d);"pattern"===
a&&(this.jI[b.cd.VALIDATOR_TYPE_REGEXP]=this.mW(),this.fs());return c},_destroy:function(){var a=this._superApply(arguments);this.element.off("blur drop keydown input");this.uK&&this.uK.remove();this.Ev()&&(this.jR()?b.v.unwrap(this.element,this.ou):b.v.unwrap(this.element));return a},oT:function(){if(!this.options.readOnly&&!this.options.disabled){this.hd={};var a=f.proxy(this.VK,this),b=f.proxy(this.IC,this),c=f.proxy(this.via,this),e=function(){this.focus()};this.element.on("blur",a);this.element.on("keydown",
b);this.element.on("input",c);this.element.on("drop",e);this.hd[this.NQ]=a;this.hd[this.JR]=b;this.hd[this.yR]=c;this.hd[this.iR]=e}else if(this.hd)for(a=[this.NQ,this.JR,this.yR,this.iR],b=0,c=a.length;b<c;b++)this.hd[a[b]]&&(this.element.off(a[b],this.hd[a[b]]),delete this.hd[a[b]])},wn:{readOnly:"oj-read-only"},Xia:function(){for(var a=this._ATTR_CHECK,b=0,c=a.length;b<c;b++){var e=a[b].attr;"setMandatory"in a[b]&&this.element.attr(e,a[b].setMandatory)}},VK:function(a){this.gc(this.jg(),a)},IC:function(a){a.keyCode===
f.ui.keyCode.ENTER&&this.gc(this.jg(),a)},via:function(a){this.Es(this.Xd().val(),a)},Ev:function(){return this._WIDGET_CLASS_NAMES},jR:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES},Mma:function(){f(this.element).wrap(f("\x3cdiv\x3e").addClass(this._WIDGET_CLASS_NAMES));this.ou=this.element.parent()},Lma:function(){f(this.element).wrap(f("\x3cdiv\x3e").addClass(this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES))},TF:function(){if(this._INPUT_HELPER_KEY&&this.Ev()){var a=this.element.attr("aria-describedby")||
"",b=this.kn(this._INPUT_HELPER_KEY);this.element.attr("aria-describedby",a+(" "+b));this.uK=f("\x3cdiv class\x3d'oj-helper-hidden-accessible' id\x3d'"+b+"'\x3e"+this.ak(this.A(this._INPUT_HELPER_KEY))+"\x3c/div\x3e");this.UF().append(this.uK)}},ak:function(a){return f("\x3cspan\x3e"+a+"\x3c/span\x3e").text()},UF:function(){return this.widget()},Gv:function(){var a=this._superApply(arguments);this.options.pattern&&(this.jI[b.cd.VALIDATOR_TYPE_REGEXP]=this.mW());return f.extend(this.jI,a)},QC:function(a,
b){-1!=Object.keys(this.wn).indexOf(a)&&this.widget().toggleClass(this.wn[a],!!b)},mW:function(){if(!this.options.pattern)return null;var a={pattern:this.options.pattern,label:this.jJ()};f.extend(a,this.options.translations.regexp||{});return b.qa.Lr(b.cd.VALIDATOR_TYPE_REGEXP).createValidator(a)},kn:function(a){return this.uuid+"_"+a},gra:function(){return this.yj},refresh:function(){var a=this._superApply(arguments);this.yj="rtl"===this.dc();return a},getNodeBySubId:function(a){return this._super(a)},
widget:function(){return this.Ev()?this.ou:this.element}},!0);b.ya("oj.ojInputPassword",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"password"}],_CLASS_NAMES:"oj-inputpassword-input",_WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component",options:{pattern:""},getNodeBySubId:function(a){var b=this._superApply(arguments),c;b||(c=a.subId,"oj-inputpassword-input"===c&&(b=this.element?this.element[0]:null));return b||
null},_GetDefaultStyleClass:function(){return"oj-inputpassword"}});b.ya("oj.ojTextArea",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3ctextarea\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"oj-textarea-input",_WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component",options:{pattern:""},getNodeBySubId:function(a){var b=this._superApply(arguments),c;b||(c=a.subId,"oj-textarea-input"===c&&(b=this.element?this.element[0]:null));return b||null},_GetDefaultStyleClass:function(){return"oj-textarea"},
Rz:function(){return"oj-inputBase"}});b.ya("oj.ojInputText",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],_CLASS_NAMES:"oj-inputtext-input",_WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component",options:{pattern:""},getNodeBySubId:function(a){var b=this._superApply(arguments),c;b||(c=a.subId,"oj-inputtext-input"===c&&(b=this.element?this.element[0]:null));return b||null},_GetDefaultStyleClass:function(){return"oj-inputtext"},
Rz:function(){return"oj-inputBase"}})});