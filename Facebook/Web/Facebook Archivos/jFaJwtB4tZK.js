if (self.CavalryLogger) { CavalryLogger.start_js(["mTOip"]); }

__d("LocaleSwitchingReferrers",[],(function a(b,c,d,e,f,g){f.exports={CARRY_LOGOUT_LOGIN:"carry_logout_login",FB4B_GLOBAL_SITES_DIALOG:"fb4b_global_sites_dialog",FB4B_GLOBAL_SITES_FOOTER:"fb4b_global_sites_footer",IGB_GLOBAL_SITES_FOOTER:"igb_global_sites_footer",LOCALE_SWITCH_SCRIPT:"locale_switch_script",M_TOUCH_LOCALE_SELECTOR:"m_touch_locale_selector",M_BASIC_LOCALE_FOOTER:"m_basic_locale_footer",MOBILE_ACCOUNT_SETTINGS:"mobile_account_settings",MOBILE_CHROME_JP_FOOTER:"mobile_chrome_jp_footer",MOBILE_FB4B_GLOBAL_SITES_FOOTER:"mobile_fb4b_global_sites_footer",MOBILE_FB4B_GLOBAL_SITES_PAGE_VIEW:"mobile_fb4b_global_sites_page_view",MOBILE_HELP_CENTER_SEARCH:"mobile_help_center_search",MOBILE_LOCALE_CHANGED_NOTICE:"mobile_locale_changed_notice",MOBILE_LOCALE_LINKS:"mobile_locale_links",MOBILE_SUGGESTED_LOCALE_SELECTOR:"mobile_suggested_locale_selector",MOBILE_SWITCH_LANGUAGE_HEADER:"mobile_switch_language_header",SAFETY_CENTER_GLOBAL_SITES_FOOTER:"fbsc_global_sites_footer",SITEMAP:"sitemap",QP_PROMO:"qp_promo",RLX_QP_FORCE_SWITCH:"rlx_qp_force_switch",RLX_QP_PROMPT_SWITCH:"rlx_qp_prompt_switch",RLX_QP_MULTI_LANGUAGE:"rlx_qp_multi_language",WWW_ACCOUNT_SETTINGS:"www_account_settings",WWW_CARD_SELECTOR:"www_card_selector",WWW_CARD_SELECTOR_MORE:"www_card_selector_more",WWW_DEV_SITE:"www_dev_site",WWW_HELP_INLINE_SELECTOR:"www_help_inline_selector",WWW_I18N_NUB:"www_i18n_nub",WWW_LANGUAGE_PAGE:"www_language_page",WWW_LINK_DIALOG_SELECTOR:"www_link_dialog_selector",WWW_LIST_SELECTOR:"www_list_selector",WWW_LIST_SELECTOR_MORE:"www_list_selector_more",WWW_MANDATORY_LOCALE_SELECTION_POST:"www_mandatory_locale_selection_post",WWW_TRANS_APP_INCONSISTENT:"www_trans_app_inconsistent",FBCOLUMN_FOOTER:"fbcolumn_footer",WWW_LOGIN_BLUE_BAR:"www_login_blue_bar_nub",UNIT_TEST:"unit_test",ACCOUNT_CREATOR:"account_creator",AT_WORK_ACCOUNT:"at_work_account_creator",ADMIN_TOOL:"admin_tool",TRANSLATION_APP_UNINSTALL:"translation_app_uninstall",CHECKPOINT:"checkpoint",LEGACY_CONTROLLER:"legacy_controller",AYMT:"aymt",UNKNOWN:"unknown"};}),null);
__d('DetectBrokenProxyCache',['AsyncSignal','Cookie','URI'],(function a(b,c,d,e,f,g){function h(i,j){var k=c('Cookie').get(j);if(k!=i&&k!=null&&i!='0'){var l={c:'si_detect_broken_proxy_cache',m:j+' '+i+' '+k},m=new (c('URI'))('/common/scribe_endpoint.php').getQualifiedURI().toString();new (c('AsyncSignal'))(m,l).send();}}f.exports={run:h};}),null);
__d('TimezoneAutoset',['AsyncRequest','emptyFunction'],(function a(b,c,d,e,f,g){var h=false;function i(l){var m=new Date(),n=m.getTimezoneOffset()/15,o=m.getTime()/1000,p=Math.round((l-o)/900),q=Math.round(n+p)%96;if(q==0){return 0;}else if(q>48){q-=Math.ceil(q/96)*96;}else if(q<-56)q+=Math.ceil(q/-96)*96;return q*15;}function j(l,m,n){if(!l||undefined==m)return;if(h)return;h=true;var o=-i(l);if(n||o!=m){var p='/ajax/timezone/update.php';new (c('AsyncRequest'))().setURI(p).setData({gmt_off:o,is_forced:n}).setErrorHandler(c('emptyFunction')).setTransportErrorHandler(c('emptyFunction')).setOption('suppressErrorAlerts',true).send();}}var k={setInputValue:function l(m,n){m.value=i(n);},setTimezone:j};f.exports=k;}),null);
__d("XConsentCookieController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/cookie\/consent\/",{pv:{type:"Enum",enumType:0}});}),null);
__d('DeferredCookie',['AsyncRequest','Cookie','Env','Map','SubscriptionList','XConsentCookieController'],(function a(b,c,d,e,f,g){'use strict';var h=new (c('Map'))(),i={shouldAddDefaultListener:true,defaultHandler:null,autoFlushCookies:false,sentConsentToServer:false,callbacks:new (c('SubscriptionList'))(),addToQueue:function j(k,l,m,n,o,p,q){if(this.autoFlushCookies){if(o){c('Cookie').setWithoutChecksIfFirstPartyContext(k,l,m,n,q);}else c('Cookie').setWithoutChecks(k,l,m,n,q);return;}if(h.has(k))return;h.set(k,{name:k,value:l,nMilliSecs:m,path:n,firstPartyOnly:o,secure:q});if(p)this.addDefaultInteractionListener();},flushAllCookies:function j(){delete c('Env').defer_cookies;h.forEach(function(l,m){if(l.firstPartyOnly){c('Cookie').setWithoutChecksIfFirstPartyContext(l.name,l.value,l.nMilliSecs,l.path,l.secure);}else c('Cookie').setWithoutChecks(l.name,l.value,l.nMilliSecs,l.path,l.secure);});this.callbacks.fireCallbacks();this.autoFlushCookies=true;h=new (c('Map'))();if(!this.sentConsentToServer){this.sentConsentToServer=true;var k=c('XConsentCookieController').getURIBuilder().setEnum('pv',this.getNoticePolicyVersion()).getURI();new (c('AsyncRequest'))().setURI(k).send();}this.removeDefaultInteractionListener();},getNoticePolicyVersion:function j(){try{var k=document.getElementById('cpn-pv-link');if(!k)return '1';return k.getAttribute('data-pv');}catch(l){return '1';}},removeDefaultInteractionListener:function j(){if(this.defaultHandler){if(window.removeEventListener){window.removeEventListener('click',this.defaultHandler,true);}else if(document.detachEvent)document.detachEvent('onclick',this.defaultHandler);this.defaultHandler=null;}},addDefaultInteractionListener:function j(){if(this.shouldAddDefaultListener){this.shouldAddDefaultListener=false;this.defaultHandler=this.baseInteractionHandler.bind(this);if(window.addEventListener){window.addEventListener('click',this.defaultHandler,true);}else if(document.attachEvent)document.attachEvent('onclick',this.defaultHandler);}},registerCallbackOnCookieFlush:function j(k){if(this.autoFlushCookies){k();}else this.callbacks.add(k);},baseInteractionHandler:function j(){this.flushAllCookies();},canEmbedThirdPartyPixel:function j(){if(c('Env').no_cookies||c('Env').defer_cookies)return false;return this.autoFlushCookies||h.size===0;}};f.exports=i;}),null);
__d("XRefererFrameController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/common\/referer_frame.php",{v:{type:"Int"}});}),null);
__d('isOculusDotComURI',['URI'],(function a(b,c,d,e,f,g){var h=new RegExp('(^|\\.)oculus\\.com$','i'),i=['https'];function j(k){if(k.isEmpty()&&k.toString()!=='#')return false;if(!k.getDomain()&&!k.getProtocol())return false;return i.indexOf(k.getProtocol())!==-1&&h.test(k.getDomain());}f.exports=j;}),null);
__d('ControlledReferer',['Bootloader','DeferredCookie','URI','UserAgent','XRefererFrameController','isMessengerDotComURI','isOculusDotComURI','lowerFacebookDomain'],(function a(b,c,d,e,f,g){var h={useFacebookReferer:function i(j,k,l){if(!c('DeferredCookie').canEmbedThirdPartyPixel()){c('Bootloader').loadModules(["BanzaiODS"],function(p){p.bumpEntityKey('defer_cookies','block_controlled_referer_iframe');},'ControlledReferer');return;}var m=false;function n(){if(m)return;var p=j.contentWindow.location.pathname;if(p!=='/intern/common/referer_frame.php'&&p!=='/common/referer_frame.php')return;m=true;j.contentWindow.document.body.style.margin=0;k();}var o=void 0;if(c('isMessengerDotComURI')(c('URI').getRequestURI())){o=c('XRefererFrameController').getURIBuilder().getURI().toString();}else if(c('isOculusDotComURI')(c('URI').getRequestURI())){o='/common/referer_frame.php';}else if(!c('lowerFacebookDomain').isValidDocumentDomain()){o='/intern/common/referer_frame.php';}else if(c('UserAgent').isBrowser('Opera')){o=c('XRefererFrameController').getURIBuilder().getURI().toString();}else o=c('XRefererFrameController').getURIBuilder().getURI().qualify().setProtocol('https').setSubdomain('staticxx').toString();if(l)o+='?fb_source='+l;j.onload=n;j.src=o;},useFacebookRefererHtml:function i(j,k,l){h.useFacebookReferer(j,function(){j.contentWindow.document.body.innerHTML=k;},l);}};f.exports=h;}),null);
__d('TrackingPixel',['Arbiter','ControlledReferer','DeferredCookie','JSLog','NonBlockingIFrame','WebSpeedExperiments'],(function a(b,c,d,e,f,g){var h={_iframe:undefined,loadWithNoReferrer:function i(j){if(!c('DeferredCookie').canEmbedThirdPartyPixel()){c('JSLog').error('Attempting to load a TrackingPixel (%s) while cookies are deferred. '+'This is not allowed because tracking pixels sometimes set cookies.',j);return;}if(!h._iframe)if(c('WebSpeedExperiments').non_blocking_logger){h._iframe=true;c('NonBlockingIFrame').loadIFrame().then(function(l){h._iframe=l;c('ControlledReferer').useFacebookReferer(l,function(){c('Arbiter').inform('TrackingPixel/iframeIsLoaded',null,c('Arbiter').BEHAVIOR_PERSISTENT);},null);}).done();}else{var k=document.createElement('iframe');k.frameborder=0;k.width=k.height=1;k.style.position='absolute';k.style.top='-10px';c('ControlledReferer').useFacebookReferer(k,function(){c('Arbiter').inform('TrackingPixel/iframeIsLoaded',null,c('Arbiter').BEHAVIOR_PERSISTENT);},null);document.body.appendChild(k);h._iframe=k;}c('Arbiter').subscribe('TrackingPixel/iframeIsLoaded',function(){var l=h._iframe.contentWindow,m=new l.Image();m.src=j;});}};f.exports=h;}),null);
__d('HelpLiteFlyoutBootloader',['regeneratorRuntime','Deferred','JSResource'],(function a(b,c,d,e,f,g){'use strict';var h=false,i=null,j=null,k={loadFlyout:function l(){return c('regeneratorRuntime').async(function m(n){while(1)switch(n.prev=n.next){case 0:k.loadFlyoutWithHelpType(null);case 1:case 'end':return n.stop();}},null,this);},loadFlyoutWithHelpType:function l(m){var n,o,p,q;return c('regeneratorRuntime').async(function r(s){while(1)switch(s.prev=s.next){case 0:s.next=2;return c('regeneratorRuntime').awrap(c('JSResource')('HelpLiteFlyout').__setRef('HelpLiteFlyoutBootloader').load());case 2:n=s.sent;if(!h){s.next=6;break;}n.refreshHelp();return s.abrupt('return');case 6:h=true;if(m)k.setHelpType(m);s.next=10;return c('regeneratorRuntime').awrap(this._getDeferredFlyoutElements().getPromise());case 10:o=s.sent;p=o.flyout;q=o.flyoutRoot;n.registerFlyoutToggler(p,q);n.loadBody();case 15:case 'end':return s.stop();}},null,this);},setHelpType:function l(m){j=m;},getHelpType:function l(){return j;},_getDeferredFlyoutElements:function l(){if(i==null)i=new (c('Deferred'))();return i;},registerFlyoutElements:function l(m,n){this._getDeferredFlyoutElements().resolve({flyout:m,flyoutRoot:n});}};f.exports=k;}),null);
__d('LoggedOutSwitchingLocaleTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:LoggedOutSwitchingLocaleLoggerConfig',this.$LoggedOutSwitchingLocaleTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:LoggedOutSwitchingLocaleLoggerConfig',this.$LoggedOutSwitchingLocaleTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$LoggedOutSwitchingLocaleTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1=babelHelpers['extends']({},this.$LoggedOutSwitchingLocaleTypedLogger1,j);return this;};h.prototype.setIndex=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1.index=j;return this;};h.prototype.setNewLocale=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1.new_locale=j;return this;};h.prototype.setOldLocale=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1.old_locale=j;return this;};h.prototype.setReferrer=function(j){this.$LoggedOutSwitchingLocaleTypedLogger1.referrer=j;return this;};var i={index:true,new_locale:true,old_locale:true,referrer:true};f.exports=h;}),null);
__d("XIntlAccountSetLocaleAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/intl\/ajax\/save_locale\/",{loc:{type:"String"},href:{type:"String"},index:{type:"Int"},ref:{type:"String"},ls_ref:{type:"Enum",defaultValue:"unknown",enumType:1},should_redirect:{type:"Bool",defaultValue:true}});}),null);
__d('IntlUtils',['AsyncRequest','Cookie','LocaleSwitchingReferrers','LoggedOutSwitchingLocaleTypedLogger','ReloadPage','XIntlAccountSetLocaleAsyncController','goURI'],(function a(b,c,d,e,f,g){var h={setXmode:function i(j){new (c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({xmode:j}).setHandler(function(){c('ReloadPage').now();}).send();},setAmode:function i(j){new (c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({amode:j,app:false}).setHandler(function(){c('ReloadPage').now();}).send();},setRmode:function i(j){new (c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({rmode:j}).setHandler(function(){c('ReloadPage').now();}).send();},setLocale:function i(j,k,l,m){if(!l)l=j.options[j.selectedIndex].value;var n=c('XIntlAccountSetLocaleAsyncController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(n).setData({loc:l,ref:k,should_redirect:false}).setHandler(function(o){c('ReloadPage').now();}).send();},setCookieLocale:function i(j,k,l){var m=arguments.length<=3||arguments[3]===undefined?c('LocaleSwitchingReferrers').OTHER:arguments[3],n=arguments.length<=4||arguments[4]===undefined?null:arguments[4];c('Cookie').set('locale',j);new (c('LoggedOutSwitchingLocaleTypedLogger'))().setNewLocale(j).setOldLocale(k).setIndex(n).setReferrer(m).log();c('goURI')(l);}};f.exports=h;}),null);
__d('legacy:intl-base',['IntlUtils'],(function a(b,c,d,e,f,g){b.intl_set_xmode=c('IntlUtils').setXmode;b.intl_set_amode=c('IntlUtils').setAmode;b.intl_set_rmode=c('IntlUtils').setRmode;b.intl_set_locale=c('IntlUtils').setLocale;}),3);
__d('FlipDirection',['DOM','Input','Style'],(function a(b,c,d,e,f,g){var h={setDirection:function i(j){var k=c('DOM').isNodeOfType(j,'input')&&j.type=='text',l=c('DOM').isNodeOfType(j,'textarea');if(!(k||l)||j.getAttribute('data-prevent-auto-flip'))return;var m=c('Input').getValue(j),n=j.style&&j.style.direction;if(!n){var o=0,p=true;for(var q=0;q<m.length;q++){var r=m.charCodeAt(q);if(r>=48){if(p){p=false;o++;}if(r>=1470&&r<=1920){c('Style').set(j,'direction','rtl');j.setAttribute('dir','rtl');return;}if(o==5){c('Style').set(j,'direction','ltr');j.setAttribute('dir','ltr');return;}}else p=true;}}else if(m.length===0){c('Style').set(j,'direction','');j.removeAttribute('dir');}}};f.exports=h;}),null);
__d('FlipDirectionOnKeypress',['Event','FlipDirection'],(function a(b,c,d,e,f,g){var h=function i(event){var j=event.getTarget();c('FlipDirection').setDirection(j);};c('Event').listen(document.documentElement,{keyup:h,input:h});}),null);
__d('AccessibilityLogger',['AsyncSignal','Cookie'],(function a(b,c,d,e,f,g){var h={COOKIE:'a11y',DECAY_MS:6*60*60*1000,DEFAULT:{sr:0,'sr-ts':Date.now(),jk:0,'jk-ts':Date.now(),kb:0,'kb-ts':Date.now(),hcm:0,'hcm-ts':Date.now()},getCookie:function i(){var j=h.DEFAULT,k=c('Cookie').get(h.COOKIE);if(k){k=JSON.parse(k);for(var l in j)if(l in k)j[l]=k[l];}return j;},logKey:function i(j,k){var l=h.getCookie();l[j]++;var m=Date.now();if(m-l[j+'-ts']>h.DECAY_MS){new (c('AsyncSignal'))('/ajax/accessibilitylogging',{eventName:k,times_pressed:l[j]}).send();l[j+'-ts']=m;l[j]=0;}c('Cookie').set(h.COOKIE,JSON.stringify(l));},logHCM:function i(){h.logKey('hcm','hcm_users');},logSRKey:function i(){h.logKey('sr','sr_users');},logJKKey:function i(){h.logKey('jk','jk_users');},logFocusIn:function i(){h.logKey('kb','kb_users');}};f.exports=h;}),null);
__d('AsyncRequestNectarLogging',['AsyncRequest','Nectar'],(function a(b,c,d,e,f,g){Object.assign(c('AsyncRequest').prototype,{setNectarModuleData:function h(i){if(this.method=='POST')c('Nectar').addModuleData(this.data,i);}});}),null);
__d('ClickRefUtils',['DataAttributeUtils'],(function a(b,c,d,e,f,g){var h={get_intern_ref:function i(j){if(!!j){var k={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,searchBarClickRef:1};for(var l=j;l&&l!=document.body;l=l.parentNode){if(!l.id||typeof l.id!=='string')continue;if(l.id.substr(0,8)=='pagelet_')return l.id.substr(8);if(l.id.substr(0,8)=='box_app_')return l.id;if(k[l.id])return l.id;}}return '-';},get_href:function i(j){var k=j.getAttribute&&(j.getAttribute('ajaxify')||j.getAttribute('data-endpoint'))||j.action||j.href||j.name;return typeof k==='string'?k:null;},should_report:function i(j,k){if(k=='FORCE')return true;if(k=='INDIRECT')return false;return j&&(h.get_href(j)||j.getAttribute&&c('DataAttributeUtils').getDataFt(j));}};f.exports=h;}),null);
__d('ClickRefLogger',['Arbiter','Banzai','ClickRefUtils','Env','ScriptPath','SessionName','Vector','$','collectDataAttributes','ge','pageID','Cookie'],(function a(b,c,d,e,f,g){var h={delay:0,retry:true};function i(l){if(!c('ge')('content'))return [0,0,0,0];var m=c('$')('content'),n=c('Vector').getEventPosition(l);return [n.x,n.y,m.offsetLeft,m.clientWidth];}function j(l,m,event,n){var o='r',p=[0,0,0,0],q,r;if(!!event){q=event.type;if(q=='click'&&c('ge')('content'))p=i(event);var s=0;event.ctrlKey&&(s+=1);event.shiftKey&&(s+=2);event.altKey&&(s+=4);event.metaKey&&(s+=8);if(s)q+=s;}if(!!m)r=c('ClickRefUtils').get_href(m);var t=c('collectDataAttributes')(!!event?event.target||event.srcElement:m,['ft','gt']);Object.assign(t.ft,n.ft);Object.assign(t.gt,n.gt);if(typeof t.ft.ei==='string')delete t.ft.ei;var u=[l._ue_ts,l._ue_count,r||'-',l._context,q||'-',c('ClickRefUtils').get_intern_ref(m),o,b.URI?b.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,t].concat(p).concat(c('pageID')).concat(c('ScriptPath').getScriptPath());return u;}c('Arbiter').subscribe("ClickRefAction/new",function(l,m){if(c('ClickRefUtils').should_report(m.node,m.mode)){var n=j(m.cfa,m.node,m.event,m.extra_data);c('Cookie').set('act',m.cfa.ue);var o=[c('SessionName').getName(),Date.now(),'act'];c('Banzai').post('click_ref_logger',Array.prototype.concat(o,n),h);}});function k(l){function m(u){var v='';for(var w=0;w<u.length;w++)v+=String.fromCharCode(1^u.charCodeAt(w));return v;}function n(u,v,w,x){var y=v[w];if(y&&u&&y in u)if(w+1<v.length){n(u[y],v,w+1,x);}else{var z=u[y],aa=function ba(){setTimeout(x.bind(null,arguments));return z.apply(this,arguments);};aa.toString=z.toString.bind(z);Object.defineProperty(u,y,{configurable:false,writable:true,value:aa});}}var o={},p={},q=false;function r(u,v){if(p[u])return;p[u]=o[u]=1;}var s=l[m('jiri')];if(s){var t=[];m(s).split(',').map(function(u,v){var w=u.substring(1).split(':'),x;switch(u.charAt(0)){case '1':t.push(function(y){if(window[w[0]])r(v,w[0]);});break;case '2':x=new RegExp(w[0]);n(window,w,2,function(y){var z=y[w[1]];if(typeof z==='string'&&x.test(z))r(v,u);});break;case '3':n(window,w,0,function(){for(var y=t.length;y--;)t[y]();var z=Object.keys(o);if(z.length){o={};setTimeout(c('Banzai')[m('qnru')].bind(c('Banzai'),m('islg'),{m:''+z}),5000);}});break;case '4':q=true;break;}});}}try{k(c('Env'));}catch(l){}}),null);
__d('DimensionTracking',['Cookie','Event','debounce','getViewportDimensions','isInIframe'],(function a(b,c,d,e,f,g){function h(){var i=c('getViewportDimensions')();c('Cookie').set('wd',i.width+'x'+i.height);}if(!c('isInIframe')()){setTimeout(h,100);c('Event').listen(window,'resize',c('debounce')(h,250));c('Event').listen(window,'focus',h);}}),null);
__d('HighContrastMode',['AccessibilityLogger','CSS','CurrentUser','DOM','Style','URI','emptyFunction'],(function a(b,c,d,e,f,g){var h={init:function i(j){var k=new (c('URI'))(window.location.href);if(k.getPath().indexOf('/intern/')===0)return;if(window.top!==window.self)return;var l=c('DOM').create('div');c('DOM').appendContent(document.body,l);l.style.cssText='border: 1px solid !important;'+'border-color: red green !important;'+'position: fixed;'+'height: 5px;'+'top: -999px;'+'background-image: url('+j.spacerImage+') !important;';var m=c('Style').get(l,'background-image'),n=c('Style').get(l,'border-top-color'),o=c('Style').get(l,'border-right-color'),p=n==o&&m&&(m=='none'||m=='url(invalid-url:)');if(p){c('CSS').conditionClass(document.documentElement,'highContrast',p);if(c('CurrentUser').getID())c('AccessibilityLogger').logHCM();}c('DOM').remove(l);h.init=c('emptyFunction');}};f.exports=h;}),null);
__d('KappaWrapper',['AsyncSignal','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){var h=false;f.exports={forceStart:function i(j,k,l){var m=0,n=function o(){new (c('AsyncSignal'))('/si/kappa/',{Ko:"a"}).send();if(++m<j)c('setTimeoutAcrossTransitions')(o,k*1000);};c('setTimeoutAcrossTransitions')(n,(k+l)*1000);},start:function i(j,k,l){if(!h){h=true;this.forceStart(j,k,l);}}};}),null);
__d('Chromedome',['fbt'],(function a(b,c,d,e,f,g,h){g.start=function(i){if(i.off||top!==window||!/(^|\.)facebook\.(com|sg)$/.test(document.domain))return;var j=i.stop||h._("\u00a1Detente!"),k=i.text||h._("Esta funci\u00f3n del navegador est\u00e1 pensada para desarrolladores. Si alguien te indic\u00f3 que copiaras y pegaras algo aqu\u00ed para habilitar una funci\u00f3n de Facebook o para \"piratear\" la cuenta de alguien, se trata de un fraude. Si lo haces, esta persona podr\u00e1 acceder a tu cuenta."),l=i.more||h._("Consulta {url} para obtener m\u00e1s informaci\u00f3n.",[h.param('url','https://www.facebook.com/selfxss')]);if((window.chrome||window.safari)&&!i.textonly){var m='font-family:helvetica; font-size:20px; ';[[j,i.c1||m+'font-size:50px; font-weight:bold; '+'color:red; -webkit-text-stroke:1px black;'],[k,i.c2||m],[l,i.c3||m],['','']].map(function(s){setTimeout(console.log.bind(console,'\n%c'+s[0],s[1]));});}else{var n=['',' .d8888b.  888                       888','d88P  Y88b 888                       888','Y88b.      888                       888',' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P','Y88b  d88P Y88b.  Y88..88P 888 d88P',' "Y8888P"   "Y888  "Y88P"  88888P"   888','                           888','                           888','                           888'],o=(''+k).match(/.{35}.+?\s+|.+$/g),p=Math.floor(Math.max(0,(n.length-o.length)/2));for(var q=0;q<n.length||q<o.length;q++){var r=n[q];n[q]=r+new Array(45-r.length).join(' ')+(o[q-p]||'');}console.log('\n\n\n'+n.join('\n')+'\n\n'+l+'\n');return;}};}),null);