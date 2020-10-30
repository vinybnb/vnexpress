if(!Function.prototype.bind)Function.prototype.bind=function(){var fn=this,args=Array.prototype.slice.call(arguments),object=args.shift();return function(){return fn.apply(object,args.concat(Array.prototype.slice.call(arguments)))}};
var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};
var enDic={"CLOSE_TEXT_LABEL":"Close Ad","ERROR_MESSAGE_LABEL":"Video content error. Please try again by Ctrl + F5!","AD_MESSAGE":"Ad will show after","AD_LOADING":"Ad loading...","AD_SKIP":"Close Ad after","AD_DIMENSSION":"s","REPLAY_LABEL":"Replay","STOP_LABEL":"Stop","AUTO_NEXT_LABEL":"Next","SUGGESTION_LABEL":"Suggestion"};
var viDic={"CLOSE_TEXT_LABEL":"B\u1ecf qua qu\u1ea3ng c\u00e1o","ERROR_MESSAGE_LABEL":"N\u1ed9i dung kh\u00f4ng th\u1ec3 xem l\u00fac n\u00e0y. Vui l\u00f2ng Ctrl + F5 \u0111\u1ec3 th\u1eed l\u1ea1i!","AD_MESSAGE":"Qu\u1ea3ng c\u00e1o s\u1ebd c\u00f3 th\u1ec3 hi\u1ec3n th\u1ecb sau","AD_SKIP":"B\u1ecf qua qu\u1ea3ng c\u00e1o sau","AD_LOADING":"\u0110ang t\u1ea3i qu\u1ea3ng c\u00e1o...","AD_DIMENSSION":"gi\u00e2y","REPLAY_LABEL":"Xem l\u1ea1i","STOP_LABEL":"D\u1eebng","AUTO_NEXT_LABEL":"Ti\u1ebfp theo",
"SUGGESTION_LABEL":"C\u00f3 th\u1ec3 b\u1ea1n quan t\u00e2m"};var selectDic="undefined"!=typeof SITE_ID&&1003888==SITE_ID||"undefined"!=typeof ZONE_ADS&&1==ZONE_ADS?enDic:viDic;
function AdObject(player,adId,adId2,adInfo,type){var vplayer=player;var vId=player.id().replace("_html5_api","");var mainContentVideo=player.contentEl().children[0];var moadsConfig="";var moadsTag="";if(type==0)var moadsConfig=adInfo;else var moadsTag=adInfo;this.moinitIMA=false;this.moinitAd=false;var moloadingAd=false;var moplayingAd=false;var mopausedAd=false;var moadList=[];var moaContainer=document.getElementById(adId);var moaOverlayContainer=document.getElementById(adId2);var moadDisplayContainer;
var moadsLoader;var moadsManager;var moadSlotTmp;var mocurrentAdSlot;var moadStatus="paused";var mooverlayAdTimeout=null;var mooverlayAdTimeoutNumber=1E4;var moadInfo;var closeText;var adProgressBar;var adTimeoutResponse;var adTimeoutResponseValue=8E3;var adTracking5s=false;this.mainSource=vplayer.src();this.moadDataXml="";var moadTimeCount=6,moadTimeIns=null,moadTimeText,moadsInt=null,moadTimeVal=5,moAdStopTimout=null;var resumedMainContent=false;this.moMainCurrentTime=0;var moVideoPoster="";var moAex=
0;this.playAd=function(){return moplayingAd};this.loadAd=function(){return moloadingAd};this.initAd=function(val){if(val)this.moinitAd=val;else return this.moinitAd};this.pauseAd=function(){moadsManager&&moadsManager.pause()};this.initAdPlugin=function(val){if(val)this.moinitIMA=val;else return this.moinitIMA};this.mainCurrentTime=function(val){if(typeof val!=="undefined"){this.moMainCurrentTime=val;return}return this.moMainCurrentTime};this.moslotForCurrentTime=function(a){mocurrentAdSlot=null;for(v in moadList)if(!moadList[v].seen&&
moadList[v].time==a)mocurrentAdSlot=moadList[v];mocurrentAdSlot&&moloadAdSlot(mocurrentAdSlot)};this.moslotForType=function(b){for(v in moadList)if(!moadList[v].seen&&moadList[v].type==b){mocurrentAdSlot=moadList[v];mocurrentAdSlot&&moloadAdSlot(mocurrentAdSlot);return moadList[v]}return null};this.removeAdData=function(){clearInterval(moadsInt);clearTimeout(mooverlayAdTimeout);clearTimeout(moAdStopTimout);moadsManager&&moadsManager.destroy();moaContainer&&(moaContainer.innerHTML="",moaContainer.style.display=
"none");moadTimeText&&vplayer&&document.getElementById(vplayer.id())&&(document.getElementById(vplayer.id()).removeChild(moadTimeText),moadTimeText=null);moaOverlayContainer&&(moaOverlayContainer.innerHTML="",moaOverlayContainer.style.display="none",moaOverlayContainer.style.height="1px",moaOverlayContainer.style.width="1px");moloadingAd=false;moplayingAd=false;moMainCurrentTime=0;vplayer&&(mainSource=vplayer.src());this.initIMA()};this.initIMA=function(){if(typeof google!="undefined"&&moaContainer){moaContainer.style.display=
"none";google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);moadDisplayContainer=new google.ima.AdDisplayContainer(moaContainer,mainContentVideo);moadsLoader=new google.ima.AdsLoader(moadDisplayContainer);moadsManager=null;moadsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,onmoAdsManagerLoaded,false,moadsLoader);moadsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,function(e){moonAdError(e)},false)}this.initAdPlugin(true)};
var onmoAdsManagerLoaded=function(e){var adsRenderingSettings=new google.ima.AdsRenderingSettings;adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete=true;adsRenderingSettings.useStyledNonLinearAds=true;moadsManager=e.getAdsManager(mainContentVideo,adsRenderingSettings);moadsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,moonAdError);moadsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSETE_REQUESD,moonContentPauseRequested);moadsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
moonContentResumeRequested);moadsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.LOADED,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.STARTED,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT,
moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.CLICK,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_MUTED,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.RESUMED,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION,
moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.LINEAR_CHANGED,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.PAUSED,moonAdEvent);moadsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE,moonAdEvent);try{moadsManager.init(mainContentVideo.offsetWidth,mainContentVideo.offsetHeight,google.ima.ViewMode.NORMAL);moadsManager.start()}catch(e$0){moaContainer.style.display="none"}}.bind(this);this.moinitAds2=function(a){if(window.adb||typeof google=="undefined")return false;
moadDisplayContainer&&moadDisplayContainer.initialize();moadList=[];moadTimeVal=5;moadTimeText=document.createElement("div");document.getElementById(vplayer.id()).appendChild(moadTimeText);moadTimeText&&(moadTimeText.className="ad_time_txt",moadTimeText.innerHTML=selectDic.AD_MESSAGE+' <strong style="color:#fff; font-size: 13px;">'+moadTimeVal+"</strong> "+selectDic.AD_DIMENSSION);setTimeout(function(){moadTimeText&&(moadTimeText.className="ad_time_txt txt_fly_in")},100);clearInterval(moadTimeIns);
moadTimeIns=setInterval(function(){if(vplayer.paused())return false;moadTimeVal-=1;moadTimeText&&(moadTimeText.innerHTML=selectDic.AD_MESSAGE+' <strong style="color:#fff; font-size: 13px;">'+moadTimeVal+"</strong> "+selectDic.AD_DIMENSSION);if(moadTimeVal==1){clearInterval(moadTimeIns);if(this.moslotForType("pre-roll"));else{moadsShowing=false;moadsManager&&moadsManager.destroy();moaContainer.style.display="none";clearTimeout(adTimeoutResponse);moadTimeText.className="ad_time_txt";setTimeout(function(){moadTimeText&&
document.getElementById(vplayer.id())&&(document.getElementById(vplayer.id()).removeChild(moadTimeText),moadTimeText=null)},1100);moresumeMainContent(false)}}}.bind(this),1E3);try{var pre=0,mid=0,pos=0;over=0;for(i in a.adlist)switch(a.adlist[i].type){case "preroll":var e=new moAdSlot("pre-roll-"+pre,"pre-roll",0,"",a.adlist[i].duration,convertTimeFormat(a.adlist[i].skipOffset),"",a.adlist[i].tag,"",vplayer.duration());pre++;moadList.push(e);break;case "midroll":var e=new moAdSlot("mid-roll-"+mid,
"mid-roll",a.adlist[i].offset,"",a.adlist[i].duration,convertTimeFormat(a.adlist[i].skipOffset),"",a.adlist[i].tag,"",vplayer.duration());mid++;moadList.push(e);break;case "postroll":var e=new moAdSlot("post-roll-"+pos,"post-roll",vplayer.duration(),"",a.adlist[i].duration,convertTimeFormat(a.adlist[i].skipOffset),"",a.adlist[i].tag,"",vplayer.duration());pos++;moadList.push(e);break;case "overlay":var e=new moAdSlot("overlay"+over,"overlay",a.adlist[i].offset,"",convertTimeFormat(a.adlist[i].duration),
convertTimeFormat(a.adlist[i].skipOffset),a.adlist[i].size,a.adlist[i].tag,a.adlist[i].script,vplayer.duration());over++;moadList.push(e);break}console.log(moadList)}catch(e$1){console.log("LOG:ADS",e$1)}}.bind(this);this.moinitAds=function(a){if(window.adb||typeof google=="undefined")return false;moadDisplayContainer&&moadDisplayContainer.initialize();moadList=[];try{var re=new XMLHttpRequest;re.onreadystatechange=function(e){if(re.readyState==4)if(re.status==200){moadDataXml=re.responseXML;if(re.getResponseHeader("Content-Type").indexOf("xml")>
0&&validateXML(moadDataXml)==1){try{var att=document.createAttribute("adtitle");att.value=moadDataXml.getElementsByTagName("AdTitle")[0].childNodes[0].nodeValue;mainContentVideo.setAttributeNode(att)}catch(e$2){console.log("cannot add attribute for video tag!!!")}try{var adObj=moadDataXml.getElementsByTagName("Configs").length==1?parseAdsParameters(moadDataXml.getElementsByTagName("Configs")[0].childNodes[0].nodeValue):parseAdsParameters('{"'+moadDataXml.getElementsByTagName("Ad")[0].getAttribute("id")+
'":{"type":"preroll","skipOffset":"00:00:06","duration":"00:00:30"}}');var pre=0,mid=0,pos=0,over=0;Object.keys(adObj).forEach(function(k){var b=moadDataXml.getElementsByTagName("Ad");for(var i=0;i<b.length;i++)if(b[i].getAttribute("id")===k){var adData=b[i];switch(adObj[k].type){case "preroll":var e=new moAdSlot("pre-roll-"+pre,"pre-roll",0,k,convertTimeFormat(adObj[k].duration),convertTimeFormat(adObj[k].skipOffset),"","",adObj[k].script!=undefined?adObj[k].script:"",vplayer.duration());pre++;moadList.push(e);
break;case "midroll":var e=new moAdSlot("mid-roll-"+mid,"mid-roll",convertTimeFormat(adObj[k].starttime),k,convertTimeFormat(adObj[k].duration),convertTimeFormat(adObj[k].skipOffset),"","",adObj[k].script!=undefined?adObj[k].script:"",vplayer.duration());mid++;moadList.push(e);break;case "postroll":var e=new moAdSlot("post-roll-"+pos,"post-roll",vplayer.duration(),k,convertTimeFormat(adObj[k].duration),convertTimeFormat(adObj[k].skipOffset),"","",adObj[k].script!=undefined?adObj[k].script:"",vplayer.duration());
pos++;moadList.push(e);break;case "overlay":var e=new moAdSlot("overlay"+over,"overlay",convertTimeFormat(adObj[k].starttime),k,convertTimeFormat(adObj[k].duration),convertTimeFormat(adObj[k].skipOffset),"","",adObj[k].script!=undefined?adObj[k].script:"",vplayer.duration());over++;moadList.push(e);break}}});this.moslotForType("pre-roll")}catch(e$4){try{errorTrackingUrl=a.getElementsByTagName("Error")[0].childNodes[0].nodeValue}catch(e$3){errorTrackingUrl=""}}try{var adrequestUrl=moadDataXml.getElementsByTagName("AdRequest")[0].childNodes[0].nodeValue}catch(e$5){}}else;
}else;}.bind(this);if(a.indexOf("eclick.vn")>=0)re.open("GET",decodeURI(a)+(decodeURI(a).indexOf("?")>0?"&dur=":"?dur=")+vplayer.duration()+"&sw="+mainContentVideo.offsetWidth+"&sh="+mainContentVideo.offsetHeight+"&fosp_aid="+getCookie("fosp_aid")+"&retargeting_id="+(typeof ASPQ_gebMWv!=typeof undefined?ASPQ_gebMWv:"")+"&gwdadgroup="+(typeof gwdadgroup!=typeof undefined?gwdadgroup:"")+"&gwdblob="+(typeof gwdblob!=typeof undefined?gwdblob:"")+"&gwdadserver="+(typeof gwdadserver!=typeof undefined?gwdadserver:
"")+"&gwd="+(typeof gwd!=typeof undefined?gwd:"")+"&pv="+(Math.random().toString(36)+"00000000000000000").slice(2,10+2)+"&adb="+window.adb+(mainContentVideo.getAttribute("data-ex")!=null&&mainContentVideo.getAttribute("data-ex")!=""?"&"+mainContentVideo.getAttribute("data-ex"):""),!0);else{var url=window.location!=window.parent.location?document.referrer:document.location.href;var reUrl=decodeURI(a);reUrl=reUrl.replace("[timestamp]",(new Date).getTime());reUrl=reUrl.replace("[referrer_url]",encodeURI(url));
try{var a=window.location.href.split("/");reUrl=reUrl.replace("[description_url]",encodeURI(a[0]+"//"+a[2]))}catch(e){console.log("cannot get href")}reUrl+="&cust_params="+encodeURIComponent("ap=0"+(mainContentVideo.getAttribute("data-ex")!=null&&mainContentVideo.getAttribute("data-ex")!=""?"&"+mainContentVideo.getAttribute("data-ex"):""));re.open("GET",reUrl)}window.ASPQ_gebMWv=window.gwdadgroup=window.gwdblob=window.gwdadserver=window.gwd="";re.withCredentials=false;re.send()}catch(e$6){console.log("error load ad data!"+
e$6)}}.bind(this);var moloadAdSlot=function(slot){resumedMainContent=false;moloadingAd=true;clearInterval(moadsInt);clearTimeout(mooverlayAdTimeout);if(window.adb)return false;slot.seen=!0;if(moadsConfig!="")try{if(slot.type=="overlay")if(slot.tag!=""){var re=slot.tag;if(re.indexOf("eclick.vn")>=0)re.open("GET",decodeURI(a)+(decodeURI(a).indexOf("?")>0?"&dur=":"?dur=")+vplayer.duration()+"&sw="+mainContentVideo.offsetWidth+"&sh="+mainContentVideo.offsetHeight+"&fosp_aid="+getCookie("fosp_aid")+"&retargeting_id="+
(typeof ASPQ_gebMWv!=typeof undefined?ASPQ_gebMWv:"")+"&gwdadgroup="+(typeof gwdadgroup!=typeof undefined?gwdadgroup:"")+"&gwdblob="+(typeof gwdblob!=typeof undefined?gwdblob:"")+"&gwdadserver="+(typeof gwdadserver!=typeof undefined?gwdadserver:"")+"&gwd="+(typeof gwd!=typeof undefined?gwd:"")+"&pv="+(Math.random().toString(36)+"00000000000000000").slice(2,10+2)+"&adb="+window.adb+(mainContentVideo.getAttribute("data-ex")!=null&&mainContentVideo.getAttribute("data-ex")!=""?"&"+mainContentVideo.getAttribute("data-ex"):
""),!0);else{re=decodeURI(re);re=re.replace("[timestamp]",(new Date).getTime());try{var a=window.location.href.split("/");re=re.replace("[description_url]",encodeURI(a[0]+"//"+a[2]))}catch(e){console.log("cannot get href")}re=re.replace("[referrer_url]",encodeURI(window.location!=window.parent.location?document.referrer:document.location.href));re+="&cust_params="+encodeURIComponent("ap=0"+(mainContentVideo.getAttribute("data-ex")!=null&&mainContentVideo.getAttribute("data-ex")!=""?"&"+mainContentVideo.getAttribute("data-ex"):
""))}if(typeof google!="undefined")moshowGoogleAd(re,true);window.ASPQ_gebMWv=window.gwdadgroup=window.gwdblob=window.gwdadserver=window.gwd=""}else moshowOverlaySlot2(slot);else{var re=slot.tag;if(re.indexOf("eclick.vn")>=0)re.open("GET",decodeURI(a)+(decodeURI(a).indexOf("?")>0?"&dur=":"?dur=")+vplayer.duration()+"&sw="+mainContentVideo.offsetWidth+"&sh="+mainContentVideo.offsetHeight+"&fosp_aid="+getCookie("fosp_aid")+"&retargeting_id="+(typeof ASPQ_gebMWv!=typeof undefined?ASPQ_gebMWv:"")+"&gwdadgroup="+
(typeof gwdadgroup!=typeof undefined?gwdadgroup:"")+"&gwdblob="+(typeof gwdblob!=typeof undefined?gwdblob:"")+"&gwdadserver="+(typeof gwdadserver!=typeof undefined?gwdadserver:"")+"&gwd="+(typeof gwd!=typeof undefined?gwd:"")+"&pv="+(Math.random().toString(36)+"00000000000000000").slice(2,10+2)+"&adb="+window.adb+(mainContentVideo.getAttribute("data-ex")!=null&&mainContentVideo.getAttribute("data-ex")!=""?"&"+mainContentVideo.getAttribute("data-ex"):""),!0);else{re=decodeURI(re);re=re.replace("[timestamp]",
(new Date).getTime());try{var a=window.location.href.split("/");re=re.replace("[description_url]",encodeURI(a[0]+"//"+a[2]))}catch(e$7){console.log("cannot get href")}re=re.replace("[referrer_url]",encodeURI(window.location!=window.parent.location?document.referrer:document.location.href));try{var a=window.location.href.split("/");re=re.replace("[description_url]",encodeURI(a[0]+"//"+a[2]))}catch(e$8){console.log("cannot get href")}re+="&cust_params="+encodeURIComponent("ap=0"+(mainContentVideo.getAttribute("data-ex")!=
null&&mainContentVideo.getAttribute("data-ex")!=""?"&"+mainContentVideo.getAttribute("data-ex"):"")+"&aex="+moAex+"&brs="+(ZONE_BRANDSAFE?ZONE_BRANDSAFE:""))}if(typeof google!="undefined")moshowGoogleAd(re,true);window.ASPQ_gebMWv=window.gwdadgroup=window.gwdblob=window.gwdadserver=window.gwd=""}}catch(e$9){console.log(e$9)}else{if(slot.script!=""){var script=document.createElement("script");script.text=decodeURIComponent(slot.script);document.head.appendChild(script).parentNode.removeChild(script)}try{var b=
moadDataXml.getElementsByTagName("Ad");for(var i=0;i<b.length;i++)if(b[i].getAttribute("id")===slot.id){var xmlString='<VAST version="2.0"></VAST>';var parser=new DOMParser;var xmlDoc=parser.parseFromString(xmlString,"text/xml");var elements=xmlDoc.getElementsByTagName("VAST");elements[0].appendChild(b[i]);var a=(new XMLSerializer).serializeToString(xmlDoc);if(typeof google!="undefined")moshowGoogleAd(a,false);else;}}catch(e$10){console.log("error load ad data!"+e$10)}}}.bind(this);var moshowGoogleAd=
function(adData,isTag){clearInterval(moadsInt);moVideoPoster=vplayer.poster();vplayer.poster("");mainSource=vplayer.src();moMainCurrentTime=vplayer.currentTime();if(mocurrentAdSlot.type=="post-roll"||mocurrentAdSlot.type=="mid-roll")vplayer.pause();moaContainer.style.backgroundColor="transparent";moaContainer.style.height="1px";moaContainer.style.width="1px";moaContainer.style.top=0;moaContainer.style.left=0;moaContainer.style.display="block";var adsRequest=new google.ima.AdsRequest;if(isTag)adsRequest.adTagUrl=
adData;else adsRequest.adsResponse=adData;adsRequest.linearmoAdSlotWidth=mainContentVideo.offsetWidth;adsRequest.linearmoAdSlotHeight=mainContentVideo.offsetHeight;adsRequest.nonLinearmoAdSlotWidth=mainContentVideo.offsetWidth;adsRequest.nonLinearmoAdSlotHeight=mainContentVideo.offsetHeight;moadsLoader.requestAds(adsRequest)}.bind(this);var moonContentPauseRequested=function(){moMainCurrentTime=vplayer.currentTime();vplayer.pause()}.bind(this);var moonContentResumeRequested=function(){this.moresumeMainContent(true)}.bind(this);
var moonAdError=function(e){var ae=e.getError();console.log(ae);moadsManager&&moadsManager.destroy();clearInterval(moadsInt);moaContainer.style.display="none";moloadingAd=false;moplayingAd=false;clearTimeout(adTimeoutResponse);clearInterval(moadTimeIns);moadTimeText&&(moadTimeText.className="ad_time_txt");setTimeout(function(){moadTimeText&&document.getElementById(vplayer.id())&&(document.getElementById(vplayer.id()).removeChild(moadTimeText),moadTimeText=null)},1100);this.moresumeMainContent(ae.getErrorCode()==
400||ae.getVastErrorCode()==400?true:false)}.bind(this);var moonAdEvent=function(adEvent){moadInfo=adEvent.getAd();switch(adEvent.type){case google.ima.AdEvent.Type.USER_CLOSE:this.moresumeMainContent(true);break;case google.ima.AdEvent.Type.PAUSED:moadStatus="paused";try{playerStatusChange(vId,"paused")}catch(e){console.log(e)}break;case google.ima.AdEvent.Type.RESUMED:moadStatus="playing";try{playerStatusChange(vId,"playing")}catch(e$11){console.log(e$11)}break;case google.ima.AdEvent.Type.FIRST_QUARTILE:break;
case google.ima.AdEvent.Type.MIDPOINT:break;case google.ima.AdEvent.Type.THIRD_QUARTILE:break;case google.ima.AdEvent.Type.CLICK:if(moadStatus=="paused")moadsManager.resume();else if(moadStatus=="playing")moadsManager.pause();break;case google.ima.AdEvent.Type.SKIPPED:break;case google.ima.AdEvent.Type.IMPRESSION:break;case google.ima.AdEvent.Type.VOLUME_MUTED:break;case google.ima.AdEvent.Type.VOLUME_CHANGED:break;case google.ima.AdEvent.Type.LOADED:console.log("AD INFO: ",moadInfo);if(typeof window.track!=
"undefined"&&window.track.length>0)for(var i=0;i<window.track.length;i++)window.track[i].mode="hidden";moaContainer.style.height="100%";moaContainer.style.width="100%";if(moadInfo.getContentType().indexOf("audio")>=0||mainContentVideo.offsetHeight==0||moadInfo.getContentType().indexOf("video/3gpp")>=0){moadsManager.stop();return false}clearInterval(moadTimeIns);moadTimeText&&(moadTimeText.innerHTML=selectDic.AD_LOADING);if(moadInfo.isLinear()){if(!isMobile.any())vplayer.pause();else if(isMobile.Android()||
document.getElementById(vId).children[0].src==mainSource)vplayer.pause();for(v in moadList)if(!moadList[v].seen&&moadList[v].type=="overlay"&&vplayer.currentTime()+15>moadList[v].time&&vplayer.currentTime()+15<vplayer.duration())moadList[v].time=Math.floor(vplayer.currentTime()+15);moaContainer.style.left="0";moaContainer.style.top="0";moplayingAd=true}else{moplayingAd=false;moaContainer.style.top="-40px";clearTimeout(mooverlayAdTimeout);mooverlayAdTimeout=setTimeout(function(){moadsManager.stop()},
mooverlayAdTimeoutNumber)}break;case google.ima.AdEvent.Type.AD_PROGRESS:if(!adTracking5s&&Math.round(adEvent.getAdData().duration-moadsManager.getRemainingTime())==5){adTracking5s=true;Video.trackingDataPlayer(vplayer.id(),"videoAd5s",vplayer.src(),"",((new Date).getTime()-vplayer.rtv)/1E3);vplayer.rtv=(new Date).getTime()}document.getElementById(vId+"_adProgess")&&(document.getElementById(vId+"_adProgess").style.width=(adEvent.getAdData().duration-moadsManager.getRemainingTime())*100/adEvent.getAdData().duration+
"%");break;case google.ima.AdEvent.Type.STARTED:Video.trackingDataPlayer(vplayer.id(),"videoAdStart",vplayer.src(),"0%",((new Date).getTime()-vplayer.rtv)/1E3);vplayer.rtv=(new Date).getTime();if(moadInfo.isLinear()){try{vplayer.player_.removeClass("vjs-controls-enabled");vplayer.player_.addClass("vjs-controls-disabled")}catch(e$12){console.log("cannot hide controls!!!")}vplayer.pause();if(moadInfo.getContentType().indexOf("video")>=0||moadInfo.getContentType().indexOf("application/x-mpeg")>=0||moadInfo.getContentType().indexOf("application/javascript")>=
0){moaContainer.style.display="block";closeText=document.createElement("div");closeText.className="fp-ad-close-text";closeText.id=vId+"_fpAdClose";closeText.style.fontSize=Math.round(5*mainContentVideo.offsetHeight)/100+"px";adProgressBar=document.createElement("div");adProgressBar.className="vjs-progress-holder vjs-slider vjs-slider-horizontal";adProgressBar.id=vId+"_adProgressBar";adProgressBar.style.height="4px";adProgressBar.style.backgroundColor="#acacac";adProgressBar.style.display=moadInfo.getContentType().indexOf("application/javascript")>=
0?"none":"block";adProgressBar.style.position="absolute";adProgressBar.style.bottom="0";adProgressBar.style.width="100%";adProgressBar.style.margin="0";adProgressBar.style.padding="0";if(moaContainer.innerHTML!=""){moaContainer.appendChild(closeText);closeText&&(closeText.innerHTML=selectDic.AD_SKIP+" 6 "+selectDic.AD_DIMENSSION);moaContainer.appendChild(adProgressBar);adProgressBar&&(adProgressBar.innerHTML='<div id="'+vId+'_adProgess" class="ad-play-progress" style="width: 0%;height:100%;background-color:#ffb100;"></div>')}moadTimeText&&
(moadTimeText.className="ad_time_txt");setTimeout(function(){moadTimeText&&document.getElementById(vplayer.id())&&(document.getElementById(vplayer.id()).removeChild(moadTimeText),moadTimeText=null)},1100);clearInterval(moadsInt);moadTimeCount=6;moadsInt=setInterval(function(){moadTimeCount-=1;closeText&&(closeText.innerHTML=selectDic.AD_SKIP+" "+moadTimeCount+" "+selectDic.AD_DIMENSSION);if(moadTimeCount==0){clearInterval(moadsInt);closeText&&(closeText.innerHTML=selectDic.CLOSE_TEXT_LABEL,closeText.addEventListener("click",
function(){Video.trackingDataPlayer(vplayer.id(),"videoAdSkip",vplayer.src(),"",((new Date).getTime()-vplayer.rtv)/1E3);vplayer.rtv=(new Date).getTime();moadsShowing=false;moadsManager.stop();moAdStopTimout=setTimeout(function(){try{this.moresumeMainContent(true)}catch(e$13){console.log("cannot stop this ads!")}}.bind(this),1E3)}.bind(this),!1));return false}}.bind(this),1E3)}}break;case google.ima.AdEvent.Type.COMPLETE:clearTimeout(moAdStopTimout);Video.trackingDataPlayer(vplayer.id(),"videoAdComplete",
vplayer.src(),"100%",((new Date).getTime()-vplayer.rtv)/1E3);vplayer.rtv=(new Date).getTime();this.moresumeMainContent(true);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:clearTimeout(moAdStopTimout);this.moresumeMainContent(true);break;case google.ima.AdEvent.Type.LINEAR_CHANGED:break}}.bind(this);var moshowOverlaySlot2=function(slot){if(mainContentVideo.offsetWidth<slot.width||mainContentVideo.offsetHeight<slot.height){moaOverlayContainer.innerHTML="";moaOverlayContainer.style.display="none";
moloadingAd=false;moplayingAd=false;return false}slot.script=slot.script.replace(/div-gpt-ad-overlay/gi,vplayer.id().replace("media-video-","").replace("_html5_api","")+"-div-gpt-ad-overlay");moaOverlayContainer.style.display="block";moaOverlayContainer.style.width=slot.width!=0?slot.width+"px":"480px";moaOverlayContainer.style.height=slot.height!=0?slot.height+"px":"70px";moaOverlayContainer.style.overflow="hidden";moaOverlayContainer.style.left=(moaOverlayContainer.parentNode.offsetWidth-(slot.width!=
0?slot.width:480))/2+"px";moaOverlayContainer.style.top=moaOverlayContainer.parentNode.offsetHeight-(slot.height!=0?slot.height:70)-40+"px";moaOverlayContainer.innerHTML=decodeURIComponent(slot.script);var closeText=document.createElement("div");closeText.className="fp-ad-close-button";moaOverlayContainer.appendChild(closeText);closeText&&closeText.addEventListener("click",function(){clearTimeout(mooverlayAdTimeout);moaOverlayContainer.innerHTML="";moaOverlayContainer.style.display="none";moaOverlayContainer.style.height=
"1px";moaOverlayContainer.style.width="1px";moloadingAd=false;moplayingAd=false},!1);mooverlayAdTimeout=setTimeout(function(){moaOverlayContainer.innerHTML="";moaOverlayContainer.style.display="none";moloadingAd=false;moplayingAd=false},slot.duration*1E3);var s=moaOverlayContainer.getElementsByTagName("script");for(var i=0;i<s.length;i++){var node=s[i],parent=node.parentElement,d=document.createElement("script");if(node.getAttribute("async")==""||node.getAttribute("async")=="true")d.async=true;if(node.src)d.src=
node.src;if(node.text)d.text=node.text;parent.insertBefore(d,node);parent.removeChild(node)}}.bind(this);this.moresumeMainContent=function(changeSource){if(resumedMainContent)return false;resumedMainContent=true;clearTimeout(moAdStopTimout);moadTimeText&&document.getElementById(vplayer.id())&&(document.getElementById(vplayer.id()).removeChild(moadTimeText),moadTimeText=null);moaContainer&&(moaContainer.style.display="none",moaContainer.style.height="1px",moaContainer.style.width="1px",closeText&&
moaContainer.contains(closeText)&&(moaContainer.removeChild(closeText),closeText=null),adProgressBar&&moaContainer.contains(adProgressBar)&&(moaContainer.removeChild(adProgressBar),adProgressBar=null));moloadingAd=false;moplayingAd=false;clearInterval(moadsInt);moVideoPoster!=""&&vplayer.poster(moVideoPoster);if(vplayer.ended())Video.showEndVideo(vplayer.id().replace("media-video-","").replace("_html5_api",""));else vplayer.play();if(typeof window.track!="undefined"&&window.track.length>0)window.track[0].mode=
"showing";try{vplayer.player_.removeClass("vjs-controls-disabled");vplayer.player_.addClass("vjs-controls-enabled")}catch(e){}};this.screenChange=function(height){if(moaContainer.style.display!="none"&&moadsManager){moaContainer.style.opacity=0;setTimeout(function(){moadsManager&&moadsManager.resize(height?height*16/9:mainContentVideo.offsetWidth,height?height:mainContentVideo.offsetHeight,vplayer.isFullscreen()?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL);document.getElementById(vId+
"_fpAdClose")&&(document.getElementById(vId+"_fpAdClose").style.fontSize=Math.round(4*(height?height:mainContentVideo.offsetHeight))/100+"px");moaContainer.style.opacity=1},1E3)}};this.show=function(val){if(moaContainer.style.display!="none"&&moadsManager)moaContainer.style.opacity=val}}function parseAdsParameters(a){return!/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(a.replace(/"(\\.|[^"\\])*"/g,""))&&eval("("+a+")")}
function convertTimeFormat(a){return 3600*a.substr(0,1)+60*a.substr(3,2)+1*a.substr(6,2)}
function moAdSlot(na,ty,ti,id,du,sk,si,ta,sc,vDuration){this.name=na;this.type=ty;this.tag=ta;this.script=sc;if(typeof ti==="number")this.time=ti;else if(typeof ti==="string"&&ti.indexOf("%")>=0)if(isNaN(vDuration))this.time=ti;else this.time=Math.floor(parseInt(ti.substr(0,ti.length-1))*vDuration/100);else this.time=convertTimeFormat(ti);this.id=id;this.skip=parseInt(sk)>0?parseInt(sk):5;this.source="";this.duration=du;this.sourceType="";if(si!=undefined&&si!=""){this.width=parseInt(si.substr(0,
si.indexOf("x")));this.height=parseInt(si.substr(si.indexOf("x")+1,si.length))}else{this.width=0;this.height=0}this.seen=!1}function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==" ")c=c.substring(1);if(c.indexOf(name)==0)return c.substring(name.length,c.length)}return""}
function setCookie(cname,cvalue,exdays){var d=new Date;d.setTime(d.getTime()+exdays*24*60*60*1E3);var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";domain="+document.domain+";path=/"}function getStorage(sname){var val;try{val=localStorage.getItem(sname)}catch(e){val=-1}return val}function setStorage(sname,svalue){var s;try{localStorage.setItem(sname,svalue);s=1}catch(e){s=0}return s}
function validateXML(xmlData){if(window.ActiveXObject){var xmlDoc=new ActiveXObject("Microsoft.XMLDOM");xmlDoc.async=false;xmlDoc.loadXML(xmlData);if(xmlDoc.parseError.errorCode!=0)return 0;else return 1}else if(document.implementation&&document.implementation.createDocument){var parser=new DOMParser;if(xmlData.getElementsByTagName("parsererror").length>0)return 0;else return 1}else return 0};