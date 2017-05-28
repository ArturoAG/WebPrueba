if (self.CavalryLogger) { CavalryLogger.start_js(["CQ2qU"]); }

__d("NavigationMetricsEnumJS",[],(function a(b,c,d,e,f,g){f.exports={NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"};}),null);
__d('MAria',['createArrayFromMixed'],(function a(b,c,d,e,f,g,h){function i(t){if(t.length>1)return Array.from(t);return h(t[0]);}function j(t){if(!t)return null;return t.getAttribute('aria-hidden')==='true';}function k(t){if(!t)return;t=i(arguments);for(var u=0,v=t.length;u<v;u++)t[u].setAttribute('aria-hidden','false');}function l(t){if(!t)return;t=i(arguments);for(var u=0,v=t.length;u<v;u++)t[u].setAttribute('aria-hidden','true');}function m(t){if(!t)return;t=i(arguments);for(var u=0,v=t.length;u<v;u++)if(j(t[u])){k(t[u]);}else l(t[u]);}function n(t,u){if(!t)return;if(u===null){t.removeAttribute('aria-label');}else t.setAttribute('aria-label',u);}function o(t){if(!t)return null;var u=t.getAttribute('aria-label');return u!==null&&u!=='';}function p(t,u){t.setAttribute('aria-haspopup','true');t.setAttribute('aria-controls',u.getAttribute('id'));r(t,u);}function q(t,u){t.setAttribute('aria-pressed','true');if(u){u.setAttribute('aria-hidden','false');u.setAttribute('aria-expanded','true');}}function r(t,u){t.setAttribute('aria-pressed','false');if(u){u.setAttribute('aria-hidden','true');u.setAttribute('aria-expanded','false');}}var s={show:k,hide:l,isHidden:j,toggleVisibility:m,setLabel:n,hasLabel:o,setupPopup:p,showPopup:q,hidePopup:r};f.exports=s;}),null);
__d('MLogoutClearCache',['MCache','Stratcom'],(function a(b,c,d,e,f,g,h,i){i.listen('click','logout',h.clear);}),null);
__d('MVerifyCache',['MCache'],(function a(b,c,d,e,f,g,h){var i=function j(k){var l=h.VIEWER_KEY,m=h.getItem(l);if(m!==k.viewer){m&&h.clear();h.setItem(l,k.viewer,true);}};g.main=i;}),null);
__d('MPageError',['$','DOM','LoadingIndicator','MErrorCodes','JSLog','MPageController','Stratcom'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n){var o=h('mErrorView'),p=i.find(o,'div','error-message');n.listen('click','MPageError:retry',m.reload);n.listen('m:page:loading',null,function(q){i.hide(o);});n.listen('m:page:error',null,function(q){var r=q.getData(),s=k.getMessage(r);j.hide();i.setContent(p,s);i.show(o);l.warn('Error code: %s',r);});}),null);
__d('MPageHeaderAccessibility',['Stratcom','MAria','DOM'],(function a(b,c,d,e,f,g,h,i,j){var k=document.body,l=j.scry(k,'*','mChromeHeaderCenter')[0],m=j.scry(k,'*','mChromeHeaderRight')[0],n=document.getElementById('root');function o(q){if(q)i.show(q);}function p(q){if(q)i.hide(q);}h.listen('m:side-area:show',null,function(q){p(l);p(m);p(n);});h.listen('m:side-area:hide',null,function(q){o(l);o(m);o(n);});f.exports={};}),null);
__d('MExceptionConstants',[],(function a(b,c,d,e,f,g){var h={MAX_STACK_LENGTH:3000,MAX_FUNCTION_CODE_LENGTH:1000,MAX_ARGUMENT_VALUE_LENGTH:150,MAX_SCRIPT_URI_LENGTH:500,MAX_SCRIPT_TEXT_LENGTH:3000,MAX_LOG_HISTORY_LENGTH:5000,MAX_SINGLE_ENTRY_LENGTH:300,MANAGED_TAG:'[managed]',NATIVE_TAG:'[native]',SOURCE_TAG:'[source]',JSON_TAG:'[json]',PROPERTIES_TAG:'[properties]',FAILURE_TAG:'[failure]'};f.exports=h;}),null);
__d('MExceptionHandler',['ex','ErrorUtils','JSLog'],(function a(b,c,d,e,f,g,h,i,j){if(window.onerror!==i.onerror)j.error('ErrorUtils failed to assign window.onerror handler');function k(l,m){i.reportError(new Error(h('fwHandleException: %s, context: %s',l,m)));}b.fwHandleException=k;}),null);
__d('MExceptionUtilities',['MExceptionConstants'],(function a(b,c,d,e,f,g,h){var i={argsToString:function j(k){var l=[];for(var m=0;m<k.length;m++)l.push(i.initAndTail(String(k[m]),h.MAX_ARGUMENT_VALUE_LENGTH));return '['+l.join(', ')+']';},initAndTail:function j(k,l){if(k.length<=l)return k;return k.slice(0,Math.ceil(l/2-1.5))+'...'+k.slice(k.length-Math.floor(l/2-1.5));},initAndTailArray:function j(k,l){var m=[],n=[],o=m,p=0,q=k.length-1,r=0,s=0,t=0,u=0;while(p<=q&&u<l)if(s<=t){m.push(k[p]);s+=k[p].length;u+=k[p].length;o=m;r=m.length-1;p++;}else{n.unshift(k[q]);t+=k[q].length;u+=k[q].length;o=n;r=0;q--;}if(!(u<=l&&p>q)&&o.length>0){var v=Math.min(l-u+o[r].length,3);o[r]=new Array(v+1).join('.');}return m.concat(n);},tail:function j(k,l){if(k.length<=l)return k;return '...'+k.substr(k.length-l+3);},tailArray:function j(k,l){var m=[],n=k.length-1,o=0;while(n>=0&&o<l){m.unshift(k[n]);o+=k[n].length;n--;}if(!(o<=l&&n<0)&&m.length>0){var p=Math.min(l-o+m[0].length,3);m[0]=new Array(p+1).join('.');}return m;}};f.exports=i;}),null);
__d('idx',[],(function a(b,c,d,e,f,g){'use strict';function h(n,o){try{return o(n);}catch(p){if(p instanceof TypeError)if(j(p)){return null;}else if(l(p))return undefined;throw p;}}var i=void 0;function j(n){var o=n.message;if(!i)i=m(null);return i.test(o);}var k=void 0;function l(n){var o=n.message;if(!k)k=m(undefined);return k.test(o);}var m=new Function('$object$','\n  try {\n    $object$.$property$;\n  } catch (error) {\n    return new RegExp(\n      error.message\n        .replace(/[-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g, \'\\\\$&\')\n        .replace(\'\\\\$object\\\\$\', \'.+\')\n        .replace(\'\\\\$property\\\\$\', \'.+\')\n    );\n  }\n  throw new Error(\'Expected property access on \' + $object$ + \' to throw.\');\n');f.exports=h;}),null);
__d('MLogger',['CurrentUser','ErrorUtils','JSErrorExtra','JSErrorPlatformColumns','LogHistory','MExceptionConstants','MExceptionUtilities','SiteData','MRequest','ScriptPath','idx','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t='This error is used for stack trace capturing only',u=Date.now(),v={_LOG_PAGE:'/a/logs',_MAX_QUEUE_SIZE:100,_DEFAULT_SUB_TYPE:'m_js_err',_messageQueue:[],_flushLogs:function w(){if(v._messageQueue.length===0)return;if(!window.FB_GKS.mobile_js_show_debug&&true&&!window.FB_GKS.mobile_js_log_error)return;new p(v._LOG_PAGE).setData({message:JSON.stringify({data:v._messageQueue})}).setIgnoreErrors(true).send();v._messageQueue.length=0;},_log:function w(x,y,z,aa){if(v._messageQueue.length===0)s(v._flushLogs,1000);if(v._messageQueue.length<v._MAX_QUEUE_SIZE){var ba,ca=window.location,da=ca.hash,ea=da.indexOf('/'),fa=ea>-1?da.substr(ea):ca.pathname+ca.search;aa=i.normalizeError(aa);var ga;if(typeof aa.stack==='string'&&Array.isArray(aa.stackFrames)){ga=n.initAndTailArray(aa.stack.split('\n'),m.MAX_STACK_LENGTH);ga=aa.stackFrames.slice(0,ga.length);ga=ga.map(function(ja){var ka={};Object.assign(ka,ja);delete ka.text;return ka;});}var ha,ia=p.getContextualInstance();if(ia&&!ia.getCORS())ha=ia.getTransport().getResponseHeader('X-FB-Debug');v._messageQueue.push({log_type:'reliability',sub_type:y,time:Date.now(),path:fa,uid:h.getID(),features:{managed_stack_trace:!!window.__STACK__,cross_origin_inline:!!window.__CORS_XHR__},log_history:v._getLogHistoryEntries(),msg:{type:x,args:z,stack:ga,name:aa.name,revision:o.client_revision,push_phase:o.push_phase,script:aa.script,line:aa.line,column:aa.column,guards:aa.guardList,page_age:Date.now()-u,extra:v._getExtraTags(aa),app_id:k.app_id,x_fb_debug:ha,script_path:(ba=q.getPageInfo())!=null?ba.scriptPath:ba}});}},_getLogHistoryEntries:function w(){if(!b.FB_GKS.m_js_log_history)return;var x=l.getEntries().map(function(y){return n.initAndTail('['+y.date+'] ('+y.level+') '+y.category+': '+y.event+' '+n.initAndTail(y.args,m.MAX_ARGUMENT_VALUE_LENGTH),m.MAX_SINGLE_ENTRY_LENGTH);});return n.tailArray(x,m.MAX_LOG_HISTORY_LENGTH);},_getExtraTags:function w(x){var y=x.extra||{},z={};Object.keys(j).forEach(function(aa){if(j[aa])z[aa]=true;});Object.keys(y).forEach(function(aa){if(y[aa]){z[aa]=true;}else if(z[aa])delete z[aa];});return Object.keys(z);},error:function w(x,y){for(var z=arguments.length,aa=Array(z>2?z-2:0),ba=2;ba<z;ba++)aa[ba-2]=arguments[ba];v._log(x.type||'mustfix',v._DEFAULT_SUB_TYPE,[y].concat(aa),x);}};i.addListener(function(w){var x;if(w.messageWithParams){x=w.messageWithParams;v.error.apply(v,[w].concat(x));}else if(w.messageObject){if(w.message==='[object Event]'){var event=w.messageObject,y=event.target||event.srcElement;if(y!==event.currentTarget){x=['Event "%s" bubbling from "%s" reaching "%s"',event.type,String(y),String(event.currentTarget)];}else if(y&&y.nodeName==='SCRIPT'){x=['Event "%s" from script element with src "%s", handler: %s',event.type,y.getAttribute('src'),String(y['on'+event.type])];}else x=['Unknown event "%s" from element "%s"',event.type,y.nodeName];v.error.apply(v,[w].concat(x));}else v.error(w,w.message);}else v.error(w,w.message);});f.exports=v;}),null);
__d('DeviceBasedLoginRedesignChooserUser',['EventListener','Keys'],(function a(b,c,d,e,f,g,h,i){var j={attachHandlerToElement:function k(l,m){h.listen(l,'click',function(){m.submit();});h.listen(l,'keyup',function(n){if(n.keyCode===i.RETURN)m.submit();});}};f.exports=j;}),null);
__d('MExceptionReportingMarauderLogger',['ErrorUtils'],(function a(b,c,d,e,f,g,h){function i(k){e(['MarauderLogger'],function(l){l.log('js_exception',undefined,k);k=null;});}function j(k,l,m){i({message:k,context:l,stack_trace:m});}h.addListener(function(k){i(k);});f.exports.log=j;}),null);
__d('MSideNavMarauderLogger',['MLegacyDataStore','Stratcom','MarauderLogger','MTouchClick'],(function a(b,c,d,e,f,g,h,i,j,k){var l='';function m(event){j.toggleModule('sidebar_menu',true);}function n(event){j.toggleModule('sidebar_menu',false);}function o(event){var x=event.getNode('tag:a'),y=event.getNode('tag:div');j.log('open_application','sidebar_menu',{application_link_type:'local_module',display_name:y?y.innerText:'unknown',url:x&&x.href});j.setNavigationModule('sidebar_menu');}function p(){u('session_start');}function q(){u('cancel');}function r(x){var y=x.getData();if(y.node.rel<=0)return;var z=0,aa='',ba=h.get(y.node);if(ba){z=ba.bootstrap?1:0;aa=ba.type;}var ca=0,da=null;for(var ea=0;ea<y.results.length;ea++){var fa=y.results[ea];if(fa.rel>0){if(fa.rel==y.node.rel){da=ca;break;}ca++;}}u('click',{query:y.query,is_bootstrapped:z,display_position:da},aa,y.node.rel);}function s(x){var y=x.getData();u('click',{query:y.query,is_bootstrapped:y.node.bootstrap?1:0,display_position:y.position},y.node.type,y.node.id);}function t(x){if(l!==x)u('search_keystroke',{prev_query:l,new_query:x});l=x;}function u(x,y,z,aa){j.log(x,'search_typeahead',y,z,aa);}function v(x){return x.listen('change',t);}i.listen('m:side-area:show',null,m);i.listen('m:side-area:hide',null,n);i.listen('click','side-menu-item',o);var w=k.hasTouchEvents()?'touchend':'click';i.listen(w,'search-activator',p);i.listen(w,'graph-search-activator',p);i.listen('click','graph-search-entry-point',p);i.listen('m:search-overlay:cancel',null,q);i.listen('m:search-overlay:cancel-react',null,q);i.listen('m:search-typeahead:select',null,r);i.listen('m:search-typeahead:select-react',null,s);f.exports={setupTypeaheadListener:v};}),null);
__d('TimeSpentArray',['Banzai','pageID','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i,j){var k=2,l=k*32,m,n,o,p,q,r,s,t,u,v={},w;function x(){return {timeoutDelayMap:v,nextDelay:w,timeoutInSeconds:o};}function y(){if(m){var ga=Date.now();if(ga>q)s=Math.min(l,Math.ceil(ga/1000-p));var ha=da();if(ha)m(ha,w);}ca();}function z(){aa();n=j(y,o*1000);}function aa(){if(n){clearTimeout(n);n=null;}}function ba(ga){p=ga;q=p*1000;r=[1];for(var ha=1;ha<k;ha++)r.push(0);s=1;t+=1;u+=1;var ia=u.toString()+'_delay';w=v[ia];if(w===undefined)w=v.delay;var ja=u.toString()+'_timeout',ka=v[ja];if(ka===undefined)ka=v.timeout;ka=Math.min(ka,l);o=ka||l;z();}function ca(){aa();r=null;}function da(){if(!r)return null;return {tos_id:i,start_time:p,tos_array:r.slice(0),tos_len:s,tos_seq:u,tos_cum:t};}function ea(ga){if(ga>=q&&ga-q<1000)return;fa(Math.floor(ga/1000));}function fa(ga){var ha=ga-p;if(ha<0||ha>=l)y();if(!r){ba(ga);}else{r[ha>>5]|=1<<(ha&31);s=ha+1;t+=1;q=ga*1000;}}f.exports={init:function ga(ha,ia,ja){t=0;u=-1;m=ha;if(typeof ia=='object'&&ia!==null){v=ia;}else v={};if(!ja)ja=Date.now();ba(Math.floor(ja/1000));h.subscribe(h.SHUTDOWN,y);},update:function ga(ha){ea(ha);},get:function ga(){return da();},ship:function ga(){y();},reset:function ga(){ca();},testState:function ga(){return x();}};}),null);
__d('TimeSpentImmediateActiveSecondsLogger',['Banzai','ImmediateActiveSecondsConfig','ScriptPath'],(function a(b,c,d,e,f,g,h,i,j){var k='immediate_active_seconds',l={signal:true,retry:true},m=i.sampling_rate,n=i.ias_bucket,o=0;function p(r){if(m<=0)return false;var s=Math.floor(r/1000)%m;return s===n;}function q(r){if(r>=o&&r-o<1000)return;if(p(r)){var s={activity_time_ms:r,last_activity_time_ms:o,script_path:j.getTopViewEndpoint()};try{h.post(k,s,l);}catch(t){}}o=Math.floor(r/1000)*1000;}f.exports={maybeReportActiveSecond:q};}),null);
__d('MTimeSpentBitArrayLogger',['Banzai','BanzaiODS','Stratcom','MarauderLogger','TimeSpentArray','TimeSpentImmediateActiveSecondsLogger','Visibility','isInIframe'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(){l.ship();}function q(){var u=Date.now();l.update(u);m.maybeReportActiveSecond(u);}function r(u){k.log('time_spent_bit_array',undefined,u,undefined,undefined,undefined,Date.now());}function s(){return ['gesturestart','mousedown','touchstart','scroll','keydown'];}function t(){var u=s();j.listen(u,null,q);var v='onpagehide' in window?['pagehide','blur']:['blur'];j.listen(v,null,p);n.addListener('hidden',p);}f.exports={init:function u(v){if(o())return;var w=Date.now();l.init(r,null,w);t();m.maybeReportActiveSecond(w);i.bumpEntityKey('ms.time_spent.qa.'+v,'time_spent.bits.js_initialized');},getMonitoredEvents:s};}),null);
__d('MTabbable',['MAria','MJSEnvironment','MViewport','isNodeWithinRect'],(function a(b,c,d,e,f,g,h,i,j,k){function l(o,p){while(o&&o!==p){if(h.isHidden(o))return true;o=o.parentNode;}return false;}function m(o,p){if(o.offsetHeight===0||o.offsetWidth===0||window.getComputedStyle(o).visibility==='hidden'||parseInt(o.tabIndex,10)<0||l(o,p))return false;if(o.tabIndex>=0)return true;switch(o.tagName){case 'A':return o.href&&o.rel!='ignore';case 'INPUT':return o.type!='hidden'&&o.type!='file'&&!o.disabled;case 'BUTTON':case 'SELECT':case 'TEXTAREA':return !o.disabled;}return false;}function n(o){if(!o.getBoundingClientRect)return;var p=i.IS_APPLE_WEBKIT_IOS&&parseFloat(i.OS_VERSION)>=8||i.BROWSER_NAME==='Safari'&&!i.IS_APPLE_WEBKIT_IOS,q=p?o.querySelectorAll('a, button, select, [tabindex]'):o.querySelectorAll('a, button, input, select, textarea, [tabindex]'),r=j.getBoundingRect();for(var s=0,t;t=q[s];s++)if(m(t,o)&&k(t,r)){t.focus();return;}}g.focusTabbable=n;}),null);
__d('MLink',['DOM','MLegacyDataStore','ErrorUtils','MLinkHack','JSLog','MPageCache','MPageController','Stratcom','URI'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q='standalone' in window.navigator&&window.navigator.standalone,r=false;function s(){if(r)return;r=true;h.listen(document.documentElement,'click',null,function(event){if(event.getPrevented())return;j.applyWithGuard(function(){var t=event.getNode('tag:a');if(!t)return;var u=event.getRawEvent();if(t.getAttribute('onclick')||(u.which||u.button)>=2)return;k.remove(t);var v=t.getAttribute('href'),w=new p(v),x=w.getProtocol();if(x&&x!='http'&&x!='https')return;var y=w.getDomain(),z=v&&v.charAt(0),aa=!z||/[\/#]/.test(z),ba=w.getPort()?[y,w.getPort()].join(':'):y,ca=aa||location.host===ba,da=y&&!/\.facebook.com$/i.test(y);if(da&&!o.hasSigil(t,'MLinkshim'))l.error('Loading an external URL without shimming: %s',v);var ea=t.getAttribute('target');if((ea=='_blank'||da)&&q)return;if(ea=='_blank'){window.open(v,'_blank');}else if(w.getPath().toLowerCase().indexOf('/dialog/oauth')>-1){return;}else if(ea||x&&x+':'!==location.protocol||o.hasSigil(t,'no_mpc')||da){window.location=v;}else if(v){if(v.indexOf('#')===0){var fa=document.getElementById(v.substr(1));fa&&fa.scrollIntoView();}else{var ga=i.get(t);if(ga.fromCache)m.setScrollHistory(v,0);n.load(v,{replace:ga.behavior==='replace-state',expiration:ga.fromCache?n.HISTORY_EXPIRE_MS:null});}}else{if(t.hasAttribute('data-sigil'))return;var ha='',ia=event.getTarget();while(ia&&ia!=document.body){ha=ha+' <'+ia.nodeName;if(ia.id)ha=ha+' id='+ia.id;if(ia.className)ha=ha+' class='+ia.className;ha=ha+' >';ia=ia.parentNode;}l.warn('handleClick: unknown link action: '+'<a id="%s" class="%s" /> Path: %s',t.id,t.className,ha);return;}event.prevent();},null,[],null,'LinkController');});}g.setupListener=s;}),null);
__d('MModalDialogInit',['MModalDialog'],(function a(b,c,d,e,f,g,h){if(!b.FW_ENABLED)h.init();}),null);
__d('ArtillerySegment',['invariant','performanceAbsoluteNow'],(function a(b,c,d,e,f,g,h,i){var j=0;function k(l){'use strict';l||h(0);'category' in l&&'description' in l||h(0);this.$ArtillerySegment1=false;this.$ArtillerySegment2=babelHelpers['extends']({},l,{id:(j++).toString(36)});this.$ArtillerySegment3=[];}k.prototype.getID=function(){'use strict';return this.$ArtillerySegment2.id;};k.prototype.begin=function(){'use strict';this.$ArtillerySegment2.begin=i();return this;};k.prototype.end=function(){'use strict';this.$ArtillerySegment2.end=i();return this;};k.prototype.appendChild=function(){'use strict';!this.$ArtillerySegment1||h(0);for(var l=arguments.length,m=Array(l),n=0;n<l;n++)m[n]=arguments[n];m.forEach(function(o){this.$ArtillerySegment3.push(o.getID());}.bind(this));return this;};k.prototype.setPosted=function(){'use strict';this.$ArtillerySegment1=true;return this;};k.prototype.getPostData=function(){'use strict';return babelHelpers['extends']({},this.$ArtillerySegment2,{id:this.$ArtillerySegment2.id,children:this.$ArtillerySegment3.slice()});};f.exports=k;}),null);
__d('ArtillerySequence',['invariant'],(function a(b,c,d,e,f,g,h){var i=0;function j(k){'use strict';k||h(0);'description' in k||h(0);this.$ArtillerySequence1=false;this.$ArtillerySequence2=babelHelpers['extends']({},k,{id:(i++).toString(36)});this.$ArtillerySequence3=[];}j.prototype.getID=function(){'use strict';return this.$ArtillerySequence2.id;};j.prototype.addSegment=function(){'use strict';!this.$ArtillerySequence1||h(0);for(var k=arguments.length,l=Array(k),m=0;m<k;m++)l[m]=arguments[m];l.forEach(function(n){this.$ArtillerySequence3.push(n.getID());}.bind(this));return this;};j.prototype.setPosted=function(){'use strict';this.$ArtillerySequence1=true;return this;};j.prototype.getPostData=function(){'use strict';return babelHelpers['extends']({},this.$ArtillerySequence2,{id:this.$ArtillerySequence2.id,segments:this.$ArtillerySequence3.slice()});};f.exports=j;}),null);
__d('ArtilleryTrace',['ArtillerySegment','ArtillerySequence','invariant'],(function a(b,c,d,e,f,g,h,i,j){function k(){'use strict';this.$ArtilleryTrace1=false;this.$ArtilleryTrace3=undefined;this.$ArtilleryTrace4={};this.$ArtilleryTrace5={};this.$ArtilleryTrace6=[];this.$ArtilleryTrace7=[];this.$ArtilleryTrace8={};this.$ArtilleryTrace9=[];this.$ArtilleryTrace10=null;}k.prototype.createSequence=function(l){'use strict';!this.$ArtilleryTrace1||j(0);var m=new i(l);this.$ArtilleryTrace6.push(m);return m;};k.prototype.createSegment=function(l){'use strict';!this.$ArtilleryTrace1||j(0);var m=new h(l);this.$ArtilleryTrace7.push(m);return m;};k.prototype.markSegment=function(l,m){'use strict';!this.$ArtilleryTrace1||j(0);this.$ArtilleryTrace8[m]=l.getID();return this;};k.prototype.connectTrace=function(l,m){'use strict';!this.$ArtilleryTrace1||j(0);m=m||this.$ArtilleryTrace2;m||j(0);this.$ArtilleryTrace9.push({segment:l.getID(),trace:m});return this;};k.prototype.setID=function(l,m){'use strict';!this.$ArtilleryTrace2&&!this.$ArtilleryTrace3||j(0);this.$ArtilleryTrace2=l;this.$ArtilleryTrace3=m;return this;};k.prototype.getID=function(){'use strict';return this.$ArtilleryTrace2;};k.prototype.getArtillery2ID=function(){'use strict';return this.$ArtilleryTrace3;};k.prototype.addProperty=function(l,m){'use strict';this.$ArtilleryTrace4[l]=m;return this;};k.prototype.addTagset=function(l,m){'use strict';this.$ArtilleryTrace5[l]=m;return this;};k.prototype.addActivePolicies=function(l){'use strict';this.addTagset('active_policies',l);this.addTagset('policy',l);return this;};k.prototype.getProperty=function(l){'use strict';return this.$ArtilleryTrace4[l];};k.prototype.getTagset=function(l){'use strict';return this.$ArtilleryTrace5[l];};k.prototype.getActivePolicies=function(){'use strict';return this.getTagset('active_policies');};k.prototype.post=function(){'use strict';!this.$ArtilleryTrace1||j(0);this.$ArtilleryTrace1=true;var l=this.$ArtilleryTrace10;if(l)l({id:this.$ArtilleryTrace2,artillery2Id:this.$ArtilleryTrace3,properties:this.$ArtilleryTrace4,tagsets:this.$ArtilleryTrace5,sequences:this.$ArtilleryTrace6.map(function(m){return m.setPosted().getPostData();}),segments:this.$ArtilleryTrace7.map(function(m){return m.setPosted().getPostData();}),marks:Object.assign({},this.$ArtilleryTrace8),connections:this.$ArtilleryTrace9.slice()});};k.prototype.setOnPost=function(l){'use strict';!this.$ArtilleryTrace10||j(0);this.$ArtilleryTrace10=l;return this;};k.prototype.isPosted=function(){'use strict';return this.$ArtilleryTrace1;};f.exports=k;}),null);
__d('ServiceWorkerRegistration',['Promise','ClientServiceWorkerMessage'],(function a(b,c,d,e,f,g,h,i){var j='serviceWorker' in navigator;function k(){var m=navigator.serviceWorker;if(!j||!m)throw new Error('serviceWorker is not supported in this browser');return m;}var l={isSupported:function m(){return j;},registerWorkerIfUnregistered:function m(n){var o=k();return new h(function(p,q){this.getWorkerRegistration(n).done(function(r){if(!r){h.resolve(o.register(n,{useCache:true})).done(function(){h.resolve(o.ready).done(p);});}else p(r);});}.bind(this));},unregisterControllingWorker:function m(){return new h(function(n,o){var p=new i('unregister',{},function(){n(true);});p.sendViaController();});},getWorkerRegistration:function m(n){var o=k();return h.resolve(o.getRegistration(n));},isAWorkerActivated:function m(){if(!navigator.serviceWorker||!navigator.serviceWorker.getRegistration)return h.resolve(false);return navigator.serviceWorker.getRegistration().then(function(n){return !!(n&&n.active);});}};f.exports=l;}),null);
__d('Artillery',['ArtilleryTrace','Banzai','ClientServiceWorkerMessage','Run','ServiceWorkerRegistration','forEachObject','invariant','mixInEventEmitter','performance'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=false,r=false,s=[],t,u,v,w={},x={},y=false,z=false;function aa(){if(q)return;q=true;i.subscribe(i.SHUTDOWN,function(){ca._postAll();});}function ba(){u=null;t=null;x={};w={};v=null;z=false;}var ca={isEnabled:function da(){return r;},createTrace:function da(){aa();var ea=new h();ea.setOnPost(function(fa){ca.emitAndHold('posttrace',fa);});s.push(ea);return ea;},getPageTrace:function da(){t||n(0);if(v)return v;var ea=ca.createTrace().setID(t,u);m(w,function(fa,ga,ha){ea.addProperty(ga,fa);});m(x,function(fa,ga,ha){ea.addTagset(ga,fa);});v=ea;return ea;},setPageProperties:function da(ea){w=ea;},addPageTagset:function da(ea,fa){if(v==null){x[ea]=fa;}else v.addTagset(ea,fa);},setActivePolicies:function da(ea){this.addPageTagset('active_policies',ea);this.addPageTagset('policy',ea);},getPageActivePolicies:function da(){return this.getPageTagset('active_policies');},enableLogServiceWorker:function da(){if(l.isSupported())y=true;},getPageProperty:function da(ea){if(v==null){return w[ea];}else return v.getProperty(ea);},getPageTagset:function da(ea){if(v==null){return x[ea];}else return v.getTagset(ea);},enable:function da(){r=true;if(!z){k.onLeave(ba);z=true;}},disable:function da(){r=false;},setPageTraceID:function da(ea,fa){if(t===ea&&u===fa)return;!t&&!u||n(0);t=ea;u=fa;if(y&&p&&p.timing&&p.timing.navigationStart){var ga=new j('asw-sendStartupData',{traceID:u,windowStart:p.timing.navigationStart},null);ga.sendViaController();}},addPiggyback:function da(ea,fa){if(window.CavalryLogger)window.CavalryLogger.getInstance().addPiggyback(ea,fa);},_postAll:function da(){s.forEach(function(ea){return !ea.isPosted()&&ea.post();});}};o(ca,{posttrace:true});f.exports=ca;}),null);
__d('isMessengerDotComURI',[],(function a(b,c,d,e,f,g){var h=new RegExp('(^|\\.)messenger\\.com$','i'),i=['https'];function j(k){if(k.isEmpty()&&k.toString()!=='#')return false;if(!k.getDomain()&&!k.getProtocol())return false;return i.indexOf(k.getProtocol())!==-1&&h.test(k.getDomain());}f.exports=j;}),null);
__d('formatNumber',['fbt','intlNumUtils'],(function a(b,c,d,e,f,g,h,i){'use strict';function j(m,n){return i.formatNumber(m,n);}function k(m){var n=h._({"*":"{number}+"},[h.param('number',i.formatNumberWithThousandDelimiters(m),[0,m])]);return n.toString();}function l(m,n,o){return m>n?k(n):i.formatNumberWithThousandDelimiters(m);}j.withThousandDelimiters=i.formatNumberWithThousandDelimiters;j.withMaxLimit=l;f.exports=j;}),null);
__d('LogHistoryListeners',['Clock','ErrorUtils','LogHistory'],(function a(b,c,d,e,f,g,h,i){var j=c('LogHistory').getInstance('sys');h.addListener(h.ANOMALY,function(k){j.warn('clock_anomaly',h.getSamples());});i.addListener(function(k){j.error('error',JSON.stringify({guard:k.guard,line:k.line,message:k.message,script:k.script,stack:k.stack}));});}),null);
__d('ScriptPathLogger',['Banzai','CurrentUser','ScriptPath','TimeSpentPageTransitionCause','URI','isInIframe'],(function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';var n='script_path_change',o={scriptPath:null,categoryToken:null,extraData:{}},p=false,q='imp_id';function r(ba){var ca=l.getNextURI?l.getNextURI():new l(window.location.href),da=ca.getQueryData(),ea=ca.getPath();if(ea.endsWith('/'))ea=ea.substr(0,ea.length-1);var fa=s(ea,da);if(fa){ba.content_id=fa;return;}var ga=t(ea);if(ga!==''){ba.dest_topic_feed=ga;return;}if(u(ea)){var ha=da.queue_id;if(ha)ba.dest_srt_queue_id=ha;return;}}function s(ba,ca){if(ca.story_fbid)return ca.story_fbid;if(ca.fbid)return ca.fbid;if(ca.view==='permalink'&&ca.id)return ca.id;var da=/\/(posts|videos|notes|groups\/.*\/permalink)\//,ea=/^[0-9]+$/;if(da.test(ba)){var fa=ba.split('/'),ga=fa[fa.length-1];if(ea.test(ga))return ga;}return '';}function t(ba){if(!ba||ba.search('/feed/topics/')==-1)return '';var ca=ba.split('/');return ca[ca.length-1];}function u(ba){return !!ba&&ba.search('/intern/review/')!==-1;}function v(ba,ca,da,ea){if(!p||m())return;var fa=i.isLoggedIn(),ga=fa?h.VITAL:h.BASIC;if(fa){ea=ea||{};ea.via_banzai_vital='1';}var ha={source_path:ba.scriptPath,source_token:ba.categoryToken,dest_path:ca.scriptPath,dest_token:ca.categoryToken,impression_id:ca.extraData?ca.extraData.imp_id:null,cause:da},ia=da===k.PAGE_UNLOAD;if(!ia)r(ha);if(ea){if(!ia&&ea.snowlift_photo_id){ha.content_id=ea.snowlift_photo_id;delete ea.snowlift_photo_id;}ha.extra_data=ea;}if(ba.scriptPath===null)ha.referrer=document.referrer;var ja=j.getClickPointInfo();if(ja)ha.click_point_info=ja;if(ba.extraData)for(var ka in ba.extraData)if(ka!=q)ha['source_'+ka]=ba.extraData[ka];if(ca.extraData)for(var la in ca.extraData)if(la!=q)ha['dest_'+la]=ca.extraData[la];if(ba.topViewEndpoint)ha.source_endpoint=ba.topViewEndpoint;if(ca.topViewEndpoint)ha.dest_endpoint=ca.topViewEndpoint;if(ba.restored)ha.source_restored=true;h.post(n,ha,ga);j.setClickPointInfo(null);}function w(){v(j.getSourcePageInfo()||o,j.getPageInfo()||o,k.PAGE_LOAD);}function x(ba,ca,da){v(ba,ca,k.TRANSITION,da);}function y(){v(j.getPageInfo()||o,o,k.PAGE_UNLOAD);j.shutdown();}var z=j.subscribe(function(ba){if(p){var ca=ba.source,da=ba.dest,ea=ba.cause,fa=ba.extraData;if(ea){v(ca||o,da||o,ea,fa);}else if(ca){x(ca,da||o,fa);}else w();}});h.subscribe(h.SHUTDOWN,y);var aa={startLogging:function ba(){p=true;if(j.getPageInfo())w();},stopLogging:function ba(){p=false;z.remove();},BANZAI_LOGGING_ROUTE:n};f.exports=aa;}),null);
__d('NavigationTimingHelper',['NavigationMetricsEnumJS','forEachObject','performance'],(function a(b,c,d,e,f,g,h,i,j){function k(m,n){var o={};i(h,function(p){var q=n[p];if(q)o[p]=q+m;});return o;}var l={getAsyncRequestTimings:function m(n){if(!n||!j.timing||!j.getEntriesByName)return undefined;var o=j.getEntriesByName(n);if(o.length===0)return undefined;return k(j.timing.navigationStart,o[0]);},getNavTimings:function m(){if(!j.timing)return undefined;return k(0,j.timing);}};f.exports=l;}),null);
__d('PerfXFlusher',['Banzai','invariant'],(function a(b,c,d,e,f,g,h,i){var j='perfx_custom_logger_endpoint',k=['perfx_page','perfx_page_type','lid'];function l(n){k.forEach(function(o){return i(o in n,'PerfXFlusher: Field "%s" missing in the PerfX payload',o);});}var m={flush:function n(o){l(o);h.post(j,o,{signal:true});},registerToSendWithBeacon:function n(o){h.registerToSendWithBeacon(j,o);}};f.exports=m;}),null);
__d("pageLoadedViaSWCache",[],(function a(b,c,d,e,f,g){function h(){return self.__SW_CACHE__===1;}f.exports=h;}),null);
__d('PerfXLogger',['DataAttributeUtils','NavigationMetrics','NavigationTimingHelper','PerfXFlusher','Set','forEachObject','pageLoadedViaSWCache','performanceAbsoluteNow','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q={},r={},s=65*1000,t=['e2e','tti','all_pagelets_displayed','all_pagelets_loaded'],u={},v={_listenersSetUp:false,_setupListeners:function w(){if(this._listenersSetUp)return;this._subscribeToNavigationMetrics();k.registerToSendWithBeacon(function(){var x=[];m(q,function(y,z){if(!q[z].sent){var aa=this.getPayload(z,'unload fired');if(aa!=null)x.push(aa);}}.bind(this));q={};return x;}.bind(this));this._listenersSetUp=true;},_init:function w(x){var y=x.lid;if(y==null)return;var z=r[y]||[];delete r[y];if(x.sw_controlled_tags){if(navigator.serviceWorker&&navigator.serviceWorker.controller)for(var aa=0;aa<x.sw_controlled_tags.length;aa++)z.push(x.sw_controlled_tags[aa]);delete x.sw_controlled_tags;}q[y]=babelHelpers['extends']({tags:new l(z),sent:false},x);this._registerTimeoutSendback(y);this._setupListeners();},initWithNavigationMetricsLID:function w(x,y){var z=i.getFullPageLoadLid();if(!z)return;this._init(babelHelpers['extends']({},y,{lid:z}));if(x&&x.always)for(var aa=0;aa<x.always.length;aa++)v.addTag(z,x.always[aa]);if(x&&x.swCache&&n())for(var ba=0;ba<x.swCache.length;ba++)v.addTag(z,x.swCache[ba]);},init:function w(x,y){if(y!=null&&x.lid!=null)u[x.lid]=y;this._init(x);},addTag:function w(x,y){var z=q[x];if(z){z.tags.add(y);return;}if(!r[x])r[x]=[];r[x].push(y);},addTagWithNavigationMetricsLID:function w(x){var y=i.getFullPageLoadLid();if(!y)return;v.addTag(y,x);},_registerTimeoutSendback:function w(x){var y=this._getFetchStart(x),z=s;if(y!=null)z-=o()-y;p(function(){return this._uploadPayload(x,'sendback time out');}.bind(this),z);},_subscribeToNavigationMetrics:function w(){i.addRetroactiveListener(i.Events.EVENT_OCCURRED,function(x,y){if(!(x in q))return;if(t.includes(y.event)&&Object.prototype.hasOwnProperty.call(y,'timestamp')&&y.timestamp!=null){q[x][y.event]=y.timestamp;if(y.visibilityState)q[x][y.event+'_page_visibility']=y.visibilityState;}});i.addRetroactiveListener(i.Events.NAVIGATION_DONE,function(x,y){var z=y.serverLID;if(!(z in q))return;t.forEach(function(event){if(Object.prototype.hasOwnProperty.call(y,event)&&y[event]!=null)q[z][event]=y[event];});this._uploadPayload(z);}.bind(this));},_getPayloadWithOffset:function w(x,y,z){var aa=q[x];if(aa==null)return null;var ba=Object.assign({},aa),ca=document.querySelector('[id^="hyperfeed_story_id"]');if(ca){var da=JSON.parse(h.getDataFt(ca));if(da)ba.mf_query_id=da.qid;}ba.tags=Array.from(aa.tags);this._adjustValues(ba,y);ba.fetch_start=y;if(ba.perfx_page_type==='normal'){var ea=j.getNavTimings();if(ea!=null&&ea.navigationStart!=null)ba.nav_to_fetch=y-ea.navigationStart;}if(z!=null)ba.sendback_reason=z;delete ba.sent;return ba;},_uploadPayload:function w(x,y){if(q[x]!=null&&!q[x].sent){var z=this.getPayload(x,y);if(z!=null){k.flush(z);q[x].sent=true;}}},getPayload:function w(x,y){return this._getPayloadWithOffset(x,this._getFetchStart(x),y);},_getFetchStart:function w(x){if(!(x in q))return null;var y=void 0,z=q[x].perfx_page_type;if(z=='quickling'){if(!(x in u)){return null;}else y=j.getAsyncRequestTimings(u[x]);}else y=j.getNavTimings();if(!y||!y.fetchStart)return null;return y.fetchStart;},_adjustValues:function w(x,y){t.forEach(function(z){if(Object.prototype.hasOwnProperty.call(x,z))x[z]-=y;});}};f.exports=v;}),null);