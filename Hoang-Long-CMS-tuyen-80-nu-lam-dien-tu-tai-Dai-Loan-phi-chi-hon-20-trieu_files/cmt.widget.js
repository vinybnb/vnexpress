var CmtWidget=function(){function B(b,a){var d=document.createElement("script");d.src=b;var c=document.getElementsByTagName("head")[0],f=!1;d.onload=d.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,a(),d.onload=d.onreadystatechange=null,c.removeChild(d))};c.appendChild(d)}function C(){b=v=window.jQuery.noConflict(!0);D()}function p(b,a,d){if(1<arguments.length&&"[object Object]"!==String(a)){d="object"===typeof d?d:{};if(null===a||void 0===
a)d.expires=-1;if("number"===typeof d.expires){var c=864E5*parseInt(d.expires),f=(d.expires=new Date).getTime();d.expires.setTime(f+c)}a=String(a);return document.cookie=[encodeURIComponent(b),"=",d.raw?a:encodeURIComponent(a),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}d=a||{};f=d.raw?function(b){return b}:decodeURIComponent;return(c=(new RegExp("(?:^|; )"+encodeURIComponent(b)+"=([^;]*)")).exec(document.cookie))?
f(c[1]):null}function w(){var c=b("span.txt_num_comment"),a=c.length,d=b("span.view_num"),e=d.length;"undefined"!=typeof SHOW_TOTAL_COMMENT?y=parseInt(SHOW_TOTAL_COMMENT):r="undefined"!=typeof SITE_ID?parseInt(SITE_ID):"undefined"!=typeof PAGE_FOLDER?parseInt(PAGE_FOLDER):1E6;1002774==r&&(y=1);var f,g,n,h=[];h.cid=[];h.vid=[];h.likeid=[];h.likeauth=[];h.rid=[];h.mid=[];h.ratingobj=[];h.listenid=[];h.ratingdl=[];h.ratingsh=[];h.topcmt=[];h.sms=[];a&&c.each(function(){f=Number(b(this).attr("data-objectid"));
g=Number(b(this).attr("data-objecttype"));n=b(this).attr("data-type");if(0<f&&0<g){if(99==g||100==g)g=1;h.cid.push(f+"-"+g);b(this).addClass("widget-"+n+"-"+f+"-"+g).removeAttr("data-type").removeAttr("data-objecttype").removeAttr("data-objectid")}});e&&d.each(function(){f=Number(b(this).attr("data-objectid"));g=Number(b(this).attr("data-objecttype"));n=b(this).attr("data-type");0<f&&0<g&&(h.vid.push(f+"-"+g),b(this).addClass("widget-"+n+"-"+f+"-"+g).removeAttr("data-type").removeAttr("data-objecttype").removeAttr("data-objectid"))});
var z;b.each(b('div[data-component-type="like"]'),function(a,c){var d=b(c);z=d.attr("data-component-siteid")||0;var g=d.attr("data-component-objectid"),f=d.attr("data-objecttype"),e=z+"-"+g;0==d.find('a[id="vne-like-anchor-'+e+'"]').length&&("undefined"!=typeof inter_version&&typeof inter_version&&2==inter_version?d.html('<a class="btn_like" id="vne-like-anchor-'+e+'" href="#"><span><i class="ic ic-like"></i>&nbsp;Quan t\u00e2m</span></a><div class="numb_like"><span id="like-total-'+e+'"></span></div>'):
1!=device_env?d.hasClass("font_icon")?d.html('<a class="btn_quantam" id="vne-like-anchor-'+e+'" href="#"><span><i class="ic ic-like"></i> Quan t\u00e2m</span></a><div class="number_count"><span id="like-total-'+e+'"></span></div>'):d.html('<a class="btn_quantam" id="vne-like-anchor-'+e+'" href="#"></a><div class="number_count"><span id="like-total-'+e+'"></span></div>'):d.hasClass("font_icon")?d.html('<a class="btn_like" id="vne-like-anchor-'+e+'" href="#"><span><i class="ic ic-like"></i> Quan t\u00e2m</span></a><div class="numb_like"><span id="like-total-'+
e+'"></span></div>'):d.html('<a class="btn_like" id="vne-like-anchor-'+e+'" href="#"><span>Quan t\u00e2m</span></a><div class="numb_like"><span id="like-total-'+e+'"></span></div>'),d.find("#vne-like-anchor-"+e).bind("click",function(a){a.preventDefault();vneLike.addLike(b(this));return!1}));d.hide();"undefined"==typeof d.attr("data-auth-token")?h.likeid.push(g+"-"+f):h.likeauth.push(g+"-"+f+"-"+d.attr("data-auth-token"));b(this).removeAttr("data-component-type")});b.each(b('div[data-component-type="ratingwd"]'),
function(a,d){var c=b(this).attr("class").replace("widget-rating-","");c&&h.rid.push(c+"-"+(b(this).attr("data-imdb")||0)+"-"+b(this).attr("display-stype")||1)});b.each(b('div[data-component-type="likematch"]'),function(a,d){h.mid.push(b(this).attr("data-component-matchid"))});b.each(b('div[data-component-type="rating-obj-wd"]'),function(a,d){h.ratingobj.push(b(this).attr("rel")+"-70")});b.each(b('div[data-component-type="rating-dl-ks"]'),function(a,d){h.ratingdl.push(b(this).attr("rel")+"-70")});
b.each(b('div[data-component-type="rating-sh-wd"]'),function(a,d){h.ratingsh.push(b(this).attr("rel")+"-55")});b.each(b('span[data-component-type="listen-wd"]'),function(a,d){var c=b(this);h.listenid.push(c.attr("rel"));c.removeAttr("data-component-type")});b.each(b('div[data-component-type="top-cmt"]'),function(a,d){var c=b(this);h.topcmt.push(c.attr("rel")+"-"+c.attr("data-type"))});b.each(b('[data-component-type="sms-wd"]'),function(a,d){var c=b(this);h.sms.push(c.attr("data-campaignid")+"-"+c.attr("data-objectid"))});
c="";a=b(".get-link-bitly");if("undefined"!=typeof a&&a.length){c+="get_link_bitly=";var k="";a.each(function(a,d){k+=encodeURIComponent(b(d).attr("data-url"))+";"});c+=k||encodeURIComponent(window.location.href);c+="&"}if("undefined"!=typeof device_env&&1!=device_env&&b('[data-component-type="weather"]').length){a=p("usi.loc");if(a)try{var l=JSON.parse(a).province}catch(K){l=0}else l=p("fosp_location");q=l;c+="device_env="+device_env+"&weather="+l+"&";b('[data-component-type="weather"]').addClass("component_weather_vne");
b('[data-component-type="weather"]').removeAttr("data-component-type")}l=b('[data-component-type="lastest-cmt"]');l.length&&!l.hasClass("render")&&(l.addClass("render"),c+="lastestcmt="+l.data("cate")+"-"+l.data("objecttype")+"&");for(x in h)h[x].length&&"indexOf"!=x&&"object"==typeof h[x]&&(c+=x+"="+h[x].join(";")+"&");l=b(".predict-statistic");l.length&&(c+="predict-st="+l.data("rel"));""!=c&&(a=window.document,l=a.getElementsByTagName("head")[0]||a.body,a=a.createElement("script"),a.src=E+"/widget/index/?s="+
z+"&"+c,a.async=!0,a.charset="UTF-8",l.appendChild(a));return!1}function H(){var c=[];b('div[data-component-type="comment_tuvanxe"]').each(function(a,d){var e=b(d).attr("data-article");c.push(e)});c.length&&(c=c.join(";"),B(js_url_vne+"/v2/helper/interactions/commentv3.js",function(){b.getJSON(interactions_url+"/api/comments/byarticles",{articles:c}).done(function(a){a&&!a.error&&a.data&&(b('div[data-component-type="comment_tuvanxe"]').each(function(d,c){var f=b(c).attr("data-article");f=f.split("-")[0];
if("undefined"!=typeof a.data[f]&&a.data[f].comments.totalitem){f=a.data[f];var g=b(c).parent().find(".title_news a").attr("href");b(c).css("margin-bottom",0);b.each(f.comments.items,function(a,d){d.replys={};"undefined"!=typeof d.content&&b(c).append(VNE.Comment.getCommentItem(a,d,2,!1))});b(c).parent().show();b(c).find("a.link_reply").each(function(a,d){var c=b(this).attr("id");b(this).attr("href",g+"?commentid="+c)});b("#box_tuvanxe ul.list_title").css({"border-top":"1px dotted #CCC","margin-top":"10px",
"padding-top":"10px"});2<f.comments.totalitem&&b(c).append('<div class="width_common" style="text-align:center; margin-top:5px;"><a class="txt_blue" href="'+g+'#box_comment"><strong>Xem th\u00eam ('+(f.comments.totalitem-2)+" tr\u1ea3 l\u1eddi)</a><strong></div>");b(c).parent().find("> .thumb_art").remove();b(c).parent().find("> .description").remove();VNE.Comment.addListenerForCommentDetail(b(c));b(c).removeAttr("data-component-type")}else b(c).parent().remove()}),b(".scrollbar-inner").scrollbar(),
VNE.Comment.parseUserMyVNE(),b("#box_tuvanxe").find(".report_bad").live("click",function(a){a.preventDefault();VNE.Comment.showReportBadForm(b(this))}),b("#box_tuvanxe").find("a.share_cmt_fb").live("click",function(a){a.preventDefault();VNE.Comment.showBlockShare(b(this))}),b("#btt_send_report_bad").live("click",function(a){a.preventDefault();VNE.Comment.addReportBad()}))})}))}function D(){v(document).ready(function(b){"undefined"==typeof vneLike&&0<b('div[data-component-type="like"]').length||0<
b('div[data-component-type="likematch"]').length||0<b('[data-component-type="vote_article"]').length?B(js_url_vne+"/v2/helper/interactions/like.widget.js",function(){w();b('[data-component-type="vote_article"]').length&&vneLike.parseVoteArticle()}):w();b('div[data-component-type="comment_tuvanxe"]').length&&H()})}function I(c,a){b.getJSON(E+"/index/tracklisten?callback=?",{id:c,type:a},function(a,b,c){})}function k(b,a,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;a=isFinite(+a)?Math.abs(a):
0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var c="";c=function(b,a){var c=Math.pow(10,a);return""+Math.round(b*c)/c};c=(a?c(b,a):""+Math.round(b)).split(".");3<c[0].length&&(c[0]=c[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(c[1]||"").length<a&&(c[1]=c[1]||"",c[1]+=Array(a-c[1].length+1).join("0"));return c.join(d)}function J(){var c="",a=A,d={1:"ic-sunny",2:"ic-cloud",3:"ic-cloudy",4:"ic-raindrops",5:"ic-day-showers",6:"ic-day-lightning-showers",7:"ic-day-lightning",8:"ic-cloudy",
9:"ic-cloudy-showers",10:"ic-cloudy-showers",11:"ic-cloudy-showers",12:"ic-cloudy-lightning-showers",13:"ic-cloudy-lightning",14:"",15:"ic-cloud",16:"ic-cloudy",17:"ic-cloudy-showers",18:"ic-cloudy-lightning-showers",19:"ic-sunny",20:"ic-cloudy",21:"ic-cloud",22:"",23:"",340:"ic-sunny",300:"ic-sunny",90:"ic-cloudy-showers",40:"ic-cloudy-lightning-showers",260:"ic-cloudy",390:"ic-day-showers",110:"ic-cloudy-showers",270:"ic-cloudy",330:"ic-cloud"};m&&m.next3day&&b.each(m.next3day,function(b,a){a&&
(c=typeof inter_version&&2==inter_version?c+("<li><p>"+a.date+'</p><p class="icon_thoitiet_small"><i class="ic '+("undefined"!=typeof d[a.weather_code]?d[a.weather_code]:"ic-sunny")+'"></i><span>'+a.min_temp+" - "+a.max_temp+"\u00b0C</span></p><p>"+a.weather+"</p></li>"):c+('<li><div class="day width_common">'+a.date+'</div><div class="width_common txt_center"><img src="'+img_url_vne+'/graphics/img_blank.gif" class="icon_thoitiet_small tt_small_'+a.weather_code+'" alt=""/></div><div class="width_common txt_center"><strong>'+
a.min_temp+" - "+a.max_temp+'\u00b0C</strong></div><div class="width_common">'+a.weather+"</div></li>"))});var e="";e=function(a){var b=p("usi.loc");b=JSON.parse(b);return a==b.province?"selected":""};typeof inter_version&&2==inter_version?(e='<div id="weather-popup" class="white-popup"><div class="title_popup width_common">Th\u1eddi ti\u1ebft <span class="time_weather">C\u1eadp nh\u1eadt: '+a.date+'</span></div><div class="content_poup width_common content_thoitiet"><form class="location" action=""><p>Khu v\u1ef1c : <strong id="txt_city">'+
a.full_name+'</strong> <span><a href="javascript:;" onclick="CmtWidget.changeLoc(this);">Thay \u0111\u1ed5i</a></span></p><select class="search_location txt_select_location"><option value="15" '+e(15)+'>\u0110a\u0300 N\u1eb5ng</option><option value="27" '+e(27)+'>H\u1ea3i Ph\u00f2ng</option><option value="32" '+e(32)+'>Nha Trang</option><option value="21" '+e(21)+'>Pleiku</option><option value="52" '+e(52)+'>S\u01a1n La</option><option value="29" '+e(29)+'>H\u1ed3 Ch\u00ed Minh</option><option value="24" '+
e(24)+'>Ha\u0300  N\u1ed9i</option><option value="44" '+e(44)+'>Vi\u1ec7t Tr\u00ec</option><option value="41" '+e(41)+'>Vinh</option></select></form><div class="wrap_temperature icon_thoitiet_big"><i class="ic '+("undefined"!=typeof d[a.weather_code]?d[a.weather_code]:"ic-sunny")+'"></i><span class="temperature" id="txt_temp">'+(0==a.temp&&a.min_temp?a.min_temp:a.temp)+'<sup>o</sup>C</span><ul class="list_info"><li id="txt_weather">'+a.weather+'</li><li><span>\u0110\u1ed9 \u1ea9m: </span><span id="txt_humid">'+
a.humid+'%</span></li><li><span>H\u01b0\u1edbng gi\u00f3: </span><span id="txt_wind">'+a.wind+'</span></li></ul></div><p class="future_temperature">D\u1ef1 b\u00e1o th\u1eddi ti\u1ebft 3 ng\u00e0y t\u1edbi</p><div class="tt_next_three_date_loading" style="text-align: center; padding-top: 15px; display: '+(m?"none;":"inline-block")+'; width: 100%; float: left; vertical-align: middle;"><img alt="\u0110ang t\u1ea3i d\u1eef li\u1ec7u" title="\u0110ang t\u1ea3i d\u1eef li\u1ec7u" style="width:100px;" src="'+
img_url_vne+'/graphics/loading1.gif" class="img_comment_loading"></div><ul class="block_left" id="tt_next_three_date" style="display:'+(m?"inline":"none")+';"><li>Th\u1eddi gian</li><li>Nhi\u1ec7t \u0111\u1ed9</li><li>Th\u1eddi ti\u1ebft</li></ul><ul class="block_right" id="tt_detail" style="display:'+(m?"inline":"none")+';">'+c+'</ul><div class="width_common" id="tt_msg" style="display:none"><p class="txt_14">R\u1ea5t ti\u1ebfc, ch\u00fang t\u00f4i ch\u01b0a c\u1eadp nh\u1eadt d\u1eef li\u1ec7u.</p></div></div><button title="Close (Esc)" type="button" class="mfp-close">\u00d7</button></div>',
window.$.magnificPopup.open({items:{src:e},mainClass:"mfp-with-zoom",type:"inline",midClick:!0,fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,removalDelay:300})):(e='<div id="thoitiet"><div class="title_thoitiet"><div class="left txt_title_thoitiet">Th\u1eddi ti\u1ebft</div><div class="right txt_666 txt_time_thoitiet" id="update_time_thoitiet">C\u1eadp nh\u1eadt: '+a.date+'</div></div><div class="width_common"><div class="content_thoitiet"><div class="block_location"><div class="location width_common">Khu v\u1ef1c: <strong class="txt_vne" id="txt_city">'+
a.full_name+'</strong><a class="change_location" href="javascript:;" onclick="CmtWidget.changeLoc(this);">Thay \u0111\u1ed5i</a></div><div class="width_common search_location"><select class="txt_select_location"><option value="15">\u0110a\u0300  N\u1eb5ng</option><option value="27">H\u1ea3i Ph\u00f2ng</option><option value="32">Nha Trang</option><option value="21">Pleiku</option><option value="52">S\u01a1n La</option><option value="29">H\u1ed3 Ch\u00ed Minh</option><option selected="selected" value="24">Ha\u0300  N\u1ed9i</option><option value="44">Vi\u1ec7t Tr\u00ec</option><option value="41">Vinh</option></select></div><div class="clear">&nbsp;</div></div><div class="block_temp width_common"><div class="block_info_temp"><img width="113" height="92" class="left icon_thoitiet_big tt_big_'+
a.weather_code+'" src="'+img_url_vne+'/graphics/img_blank.gif"><div class="txt_doc_big" id="txt_temp">'+(0==a.temp&&a.min_temp?a.min_temp:a.temp)+'</div></div><div class="more_info_temp"><ul class="list_news_dot_3x3_300 txt_14"><li id="txt_weather">'+a.weather+'</li><li><span class="txt_666">\u0110\u1ed9 \u1ea9m:</span> <span id="txt_humid">'+a.humid+' %</span></li><li><span class="txt_666">H\u01b0\u1edbng gi\u00f3:</span> <span id="txt_wind">'+a.wind+'</span></li></ul></div></div><div class="width_common furture_tem"><p class="txt_14">D\u1ef1 b\u00e1o th\u1eddi ti\u1ebft 3 nga\u0300y t\u1edbi</p></div><div class="tt_next_three_date_loading" style="text-align: center; padding-top: 15px; display: '+
(m?"none;":"inline-block")+'; width: 100%; float: left; vertical-align: middle;"><img alt="\u0110ang t\u1ea3i d\u1eef li\u1ec7u" title="\u0110ang t\u1ea3i d\u1eef li\u1ec7u" style="width:100px;" src="'+img_url_vne+'/graphics/loading1.gif" class="img_comment_loading"></div><div class="width_common" id="tt_next_three_date" style="display:'+(m?"inline":"none")+';"><div class="block_txt_des_tt"><div class="txt_thoigian">Th\u1eddi gian</div><div class="txt_nhietdo">Nhi\u1ec7t \u0111\u1ed9</div><div class="txt_thoitiet">Th\u1eddi ti\u1ebft</div></div><ul class="tt_detail" id="tt_detail">'+
c+'</ul></div><div class="width_common" id="tt_msg" style="display:none"><p class="txt_14">R\u1ea5t ti\u1ebfc, ch\u00fang t\u00f4i ch\u01b0a c\u1eadp nh\u1eadt d\u1eef li\u1ec7u.</p></div></div></div><div class="close-lb"></div><div class="clear">&nbsp;</div></div>',Sexy.notice(e));b("#weather-popup .content_thoitiet select.txt_select_location").on("change",function(a){a=p("usi.loc");a=JSON.parse(a);q!=b(this).val()&&(a.province=b(this).val(),p("usi.loc",JSON.stringify(a),{expires:7,domain:".vnexpress.net"}));
q=b(this).val();b.getJSON(interactions_url+"/weather/next3days?callback=?",{loc:q,is_full:1}).done(function(a){if(a&&!a.error&&a.data){A=a.data.current;m=a.data.next3day;if(a.data.current){var c=b("body").find(".component_weather_vne"),f="undefined"!=typeof d[a.data.current.weather_code]?d[a.data.current.weather_code]:"ic-sunny";if(typeof inter_version&&2==inter_version){var g=b(".mfp-content #weather-popup .content_thoitiet");g.find(".icon_thoitiet_big i").removeClass(function(a,b){return(b.match(/(^|\s)ic-\S+/g)||
[]).join(" ")}).addClass(f);c.find("#icon_thoitiet_small i").removeClass(function(a,b){return(b.match(/(^|\s)ic-\S+/g)||[]).join(" ")}).addClass(f);c.find("span.txt_location").html('<i class="ic ic-caret-down-2"></i>'+a.data.current.full_name)}else g=b("#SexyAlertBox-InBox #weather-popup .content_thoitiet"),g.find(".icon_thoitiet_big").removeClass(function(a,b){return(b.match(/(^|\s)tt_big_\S+/g)||[]).join(" ")}).addClass("tt_big_"+a.data.current.weather_code),c.find("#icon_thoitiet_small").removeClass(function(a,
b){return(b.match(/(^|\s)tt_small_\S+/g)||[]).join(" ")}).addClass("tt_small_"+a.data.current.weather_code),c.find("div.txt_location, a.txt_location_topbar").html(a.data.current.full_name);g.find("#txt_city").html(a.data.current.full_name);g.find("#txt_temp").html(a.data.current.temp?a.data.current.temp+"<sup>o</sup>C":a.data.current.min_temp+"<sup>o</sup>C");g.find("#txt_weather").html(a.data.current.weather);g.find("#txt_humid").html(a.data.current.humid+"% ");g.find("#txt_wind").html(a.data.current.wind);
c.find("span.txt_doC_den").html(a.data.current.temp+"<sup>o</sup>C")}F(a)}})});m||b.getJSON(interactions_url+"/weather/next3days?callback=?",{loc:q}).done(function(a){a&&!a.error&&a.data&&F(a)})}var v,E=interactions_url||"http://interactions.vnexpress.net",r=1E3,y=0,m=null,q=null,A=null;if(void 0===window.jQuery||"1.7.1"!==window.jQuery.fn.jquery&&"2.0.0"!==window.jQuery.fn.jquery&&"1.12.4"!==window.jQuery.fn.jquery){var t=document.createElement("script"),u;!u&&(u=document.head||document.getElementsByTagName("head")[0]||
document.documentElement);t.setAttribute("type","text/javascript");t.setAttribute("src",js_url_vne+"/interactions/jquery-1.7.1.min.js");t.readyState?t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||C()}:t.onload=C;u.insertBefore(t,u.firstChild)}else{var b=v=window.jQuery;D()}var F=function(c){var a=typeof inter_version&&2==inter_version?b(".mfp-content #weather-popup"):b("#SexyAlertBox-InBox #weather-popup"),d=a.find("#tt_detail");d.find("li").remove();m={next3day:c.data.next3day};
var e={1:"ic-sunny",2:"ic-cloud",3:"ic-cloudy",4:"ic-raindrops",5:"ic-day-showers",6:"ic-day-lightning-showers",7:"ic-day-lightning",8:"ic-cloudy",9:"ic-cloudy-showers",10:"ic-cloudy-showers",11:"ic-cloudy-showers",12:"ic-cloudy-lightning-showers",13:"ic-cloudy-lightning",14:"",15:"ic-cloud",16:"ic-cloudy",17:"ic-cloudy-showers",18:"ic-cloudy-lightning-showers",19:"ic-sunny",20:"ic-cloudy",21:"ic-cloud",22:"",23:"",340:"ic-sunny",300:"ic-sunny",90:"ic-cloudy-showers",40:"ic-cloudy-lightning-showers",
260:"ic-cloudy",390:"ic-day-showers",110:"ic-cloudy-showers",270:"ic-cloudy",330:"ic-cloud"};b.each(c.data.next3day,function(a,b){b&&(typeof inter_version&&2==inter_version?d.append("<li><p>"+b.date+'</p><p class="icon_thoitiet_small"><i class="ic '+("undefined"!=typeof e[b.weather_code]?e[b.weather_code]:"ic-sunny")+'"></i><span>'+b.min_temp+" - "+b.max_temp+"\u00b0C</span></p><p>"+b.weather+"</p></li>"):d.append('<li><div class="day width_common">'+b.date+'</div><div class="width_common txt_center"><img src="'+
img_url_vne+'/graphics/img_blank.gif" class="icon_thoitiet_small tt_small_'+b.weather_code+'" alt=""/></div><div class="width_common txt_center"><strong>'+b.min_temp+" - "+b.max_temp+'\u00b0C</strong></div><div class="width_common">'+b.weather+"</div></li>"))});a.find(".tt_next_three_date_loading").hide();a.find("#tt_next_three_date").fadeIn(200);typeof inter_version&&2==inter_version&&a.find("#tt_detail").fadeIn(200)};return{mix:function(){w()},parse:function(c,a){b("."+c).each(function(){var d=
b(this),e=d.parent();if("undefined"!=typeof inter_version&&3==inter_version&&d.hasClass("mobile_detail"))d.html(k(a,0,".",","));else if(d.hasClass("font_icon"))d.html('<i class="ic ic-comment ic-x ic-invert"><span>'+k(a,0,".",",")+"</span></i>");else if(d.hasClass("font_icon_2"))d.html('<i class="zmdi zmdi-comment-alt-text zmdi-hc-fw"></i><span class="total">'+k(a,0,".",",")+"</span>");else{var f=d.find("label.total");f.length||(f=b('<label class="total"></label>').appendTo(d));0<a&&f.html(k(a,0,
".",","))}f=c.split("-");var g=1;"undefined"!=typeof f[3]&&(g=f[3]);if("undefined"!=typeof f[2])var n=f[2];1===y&&0!==a||82<=g?(d.hasClass("show-comment")&&d.click(function(){try{var a=VNE_ManageWComment.getWComment(g,n);if(!1===a){var c=b('[data-type="w-comment"][data-object-type='+g+"][data-object-id="+n+"]");a=new VNE_WComment;a.init(c);VNE_ManageWComment.addWComment(a);VNE_ManageWComment.getWComment(g,n)}else a.slideComment()}catch(G){console.log(G.message)}}),e.show()):20>a&&!d.hasClass("mobile_detail")?
((1003888==r||1004058==r||1002835==r||1002764==r)&&5<a?e.show():e.hide(),f=b('meta[name="tt_category_id"]').attr("content"),"undefined"!=typeof f&&1004257==parseInt(f)&&5<=a&&e.show()):(e.show(),d.show());(d.hasClass("longform_detail")||d.hasClass("mobile_detail"))&&0==a&&b("."+c).remove()})},parseVoteSMS:function(c,a){0!=a&&b("."+c).each(function(){b(this).html(k(a,0,".",",")+" phi\u1ebfu").show()})},parseLike:function(b,a,d,e){vneLike.displayLike(b,a,d,e)},parseRating:function(c,a,d,e,f){2==f?a&&
(a=Math.round(a),b("."+c).each(function(){if(2==b(this).attr("display-stype")){for(var c=b('<ul class="list_rating"></ul>'),d=0;10>d;d++)c.append(b('<li><a href="javascript:;"><span></span></a></li>'));d=b('<div class="rating_infor rating_movie addon_line_rating_red"></div>').append(c);c.find("li:lt("+a+")").addClass("active");c.find("li:gt("+(0<a?a-1:a)+")").addClass("unactive");b(this).html("").append(d)}})):b("."+c).each(function(){if(1==b(this).attr("display-stype")){if(1==b(this).attr("data-giaitri")){var c=
b('<div class="block_rt_thuvien"></div>');0<d&&c.append('<div class="rt_vne txt_11"><span class=" txt_666">\u0110\u1ed9c gi\u1ea3:</span> <b class="ratingdocgia">'+d+"</b></div>");0<a&&c.append('<div class="rt_bandoc txt_11"><span class=" txt_666">VnExpress:</span> <b class="txt_vne">'+a+"</b></div>")}else c=b('<p class="txt_11 txt_666">'),0<e&&c.append("IMDb:"+e),0<a&&c.append((0<e?" | ":"")+"VnE:"+a),0<d&&c.append((0<e||0<a?" | ":"")+"\u0110\u1ed9c gi\u1ea3:"+d);b(this).html("").append(c)}})},parseRatingObjSH:function(c){b(".rating-sh-wd-"+
c.objectid).each(function(){var a='<div class="box_in_160 border_2_1"><p class="bandoc_danhgia"><strong>B\u1ea1n \u0111\u1ecdc \u0111\u00e1nh gi\u00e1</strong><span>('+(c.totalobj?c.totalobj:0)+')</span></p><p class="dg_rate_icon"><img src="'+img_url_vne+'/graphics/img_blank.gif" class="number_rating_red rating'+k(c.avg)+'"></p><p class="diem_danhgia">Trung b\u00ecnh: <strong><label>'+k(c.avg)+"</label>/10 </strong></p></div>";b(this).html(a+'<div class="box_in_160"><p class="send_danhgia"><a href="#" class="go_rating">G\u1eedi \u0111\u00e1nh gi\u00e1</a></p></div>');
b("a.go_rating").bind("click",function(){var a=b("#cmt-paginator");b("html,body").animate({scrollTop:a.offset().top},1E3);return!1})})},parseRatingObjDL:function(c){b(".rating-dl-ks-"+c.objectid).each(function(){var a=c.totalobj?c.totalobj:0;2==b(this).attr("data-style-dl")?(a='<span class="diem">'+k(c.avg)+"</span> | "+a+" nh\u1eadn x\u00e9t",b(this).html(a)):1!=b(this).attr("data-style-dl")?(a='<div class="txt_danhgia  width_common"><span id="total">'+a+'</span> \u0111\u00e1nh gi\u00e1 <span class="numdanhgia">'+
k(c.avg)+"</span></div>",b(this).html(a)):(a='<div class ="box_in_160 border_2_1" ><p class ="bandoc_danhgia"><strong>B\u1ea1n \u0111\u1ecdc \u0111\u00e1nh gi\u00e1 </strong><span>('+a+')</span ></p><p class ="dg_rate_icon"><img src = "'+img_url_vne+'/graphics/img_blank.gif" class ="number_rating rating'+k(c.avg)+'"></p><p class = "diem_danhgia" ><strong><label>'+k(c.avg)+"</label>/10 </strong></p></div>",b(this).html(a+'<div class="box_in_160"><p class="send_danhgia"><a id="go_rating" class="txt_view_more" href="#">G\u1eedi \u0111\u00e1nh gi\u00e1</a></p></div>'),
b("a#go_rating").bind("click",function(){var a=b("#box_comment");a.length&&b("html,body").animate({scrollTop:a.offset().top},1E3);return!1}))})},parseRatingObj:function(c){var a={1:"V\u1ecb tr\u00ed",2:"Gi\u00e1 c\u1ea3",3:"D\u1ecbch v\u1ee5",4:"Ph\u1ee5c v\u1ee5",5:"Ch\u1ea5t l\u01b0\u1ee3ng",6:"Kh\u00f4ng gian",7:"S\u1ea3n ph\u1ea9m"};b(".rating-obj-wd-"+c.objectid).each(function(){var d=b(this).hide().append('<div class="bg_block dthdl_box_rating_new"><div class="content_block_rating"></div><div class="clear"></div><a href="#" class="go_rating">G\u1eedi \u0111\u00e1nh gi\u00e1 c\u1ee7a b\u1ea1n</a></div>'),
e=d.find("div.content_block_rating");e.append('<div class="diemtrungbinh"><span>\u0110i\u1ec3m trung b\u00ecnh</span><p class="tongdiem">'+k(c.avg,10==c.avg?0:1)+"</p></div>");e.append(b('<div class="vitri_giaca left"><div class="col_right_rating"></div></div>'));var f=e.find("div.col_right_rating");b.each(c.items,function(b,c){f.append('<div class="row_rating"><div class="vitri_diem"><p class="left">'+a[b]+'</p><span class="right">'+k(c,10==c?0:1,".",",")+'</span></div><div class=""><div class="line_rating_out"><div style="width:'+
10*c+'%;" class="line_rating_in">&nbsp;</div></div></div></div>')});d.find("a.go_rating").bind("click",function(){var a=b("#rating-obj-"+c.objectid);a.length&&b("html,body").animate({scrollTop:a.offset().top},1E3);return!1});d.fadeIn(200)})},parseListen:function(c,a,d){b("span.listen_"+c+"-"+a).html(k(d,0,".",","))},trackingListen:function(b,a){I(b,a);return!1},parseTwiter:function(c){if("undefined"!=typeof c){b("#twitter").attr("data-url",c);var a=b("a#twitter-share-button");a.attr("data-url",c);
a.removeClass("twitter-share");a=document.getElementsByTagName("script")[0];document.getElementById("twitter-wjs")||(c=document.createElement("script"),c.id="twitter-wjs",c.src="https://platform.twitter.com/widgets.js",a.parentNode.insertBefore(c,a));!0}},parseLinkBitly:function(c,a){"undefined"!=typeof c&&"undefined"!=typeof a&&(b(".get-link-bitly").each(function(d,e){e=b(e);var f=e.attr("data-url");a.replace(/(http:\/\/|https:\/\/)/gi,"//");f.replace(/(http:\/\/|https:\/\/)/gi,"//");f==a&&(e.attr("data-url",
c),e.removeClass("get-link-bitly"))}),b("#twitter").attr("data-url",c),b("a#twitter-share-button").attr("data-url",c),!function(a,b,c){var d=a.getElementsByTagName(b)[0];a.getElementById(c)||(a=a.createElement(b),a.id=c,a.src="https://platform.twitter.com/widgets.js",d.parentNode.insertBefore(a,d))}(document,"script","twitter-wjs"))},parseLinkShareBlock:function(c,a){"undefined"!=typeof c&&(b(".get_link_shareblock").each(function(d,e){var f=b(e).attr("href");decodeURIComponent(f.substr(29,f.length))==
a&&(b(e).attr("href",decodeURIComponent(f.substr(0,29))+c),b(e).removeClass("get_link_shareblock"))}),!function(a,b,c){var d=a.getElementsByTagName(b)[0];a.getElementById(c)||(a=a.createElement(b),a.id=c,a.src="https://platform.twitter.com/widgets.js",d.parentNode.insertBefore(a,d))}(document,"script","twitter-wjs"))},parseTopComment:function(c,a){if("undefined"!=typeof a){var d=b('div[data-component-type="top-cmt"][rel="'+c+'"]');b.each(a,function(a,b){if(b.content){var c=b.content.split(" ");c=
25<c.length?c.splice(0,25).join(" ")+"...":b.content;d.append('<p class="lead">'+c+'</p><p class="person_cmt_baibien"><b>'+b.full_name+" </b>- "+b.creation_time+"</p>")}});d.removeAttr("rel")}},parsePredict:function(c,a){var d=b('.predict-statistic[data-rel="'+c+'"]'),e=d.data("text");b.each(a.detail,function(a,b){var c='<tr><td class="team_score text_right">'+e;c=b.score1>b.score2?c+" th\u1eafng ":b.score1==b.score2?c+" h\u00f2a ":c+" thua ";c+=b.score1+"-"+b.score2+"</td>";c+='<td class="percent"><div class="progress_bar_style_3"><span style="width:'+
b.avg+'%">'+b.avg+"%</span></div></td>";d.append(c+'<td class="score">&nbsp;</td></tr>')});var f=b(".predict-statistic-total");f.html("Th\u1ed1ng k\u00ea d\u1ef1 \u0111o\u00e1n");f.closest("div.total_source_guess").fadeIn(200)},parseLastestCmt:function(c,a){var d=b('[data-component-type="lastest-cmt"][data-cate="'+c+'"]');if(a.length){var e=b('<ul style="overflow: hidden;" tabindex="5000">');b.each(a,function(a,b){var c=b.content.split(" "),d=b.title;40<d.length&&(d=d.split(" ").splice(0,8).join(" ")+
" ... ");c=60<c.length?'<span class="collapse">'+c.splice(0,50).join(" ")+' ... </span><span class="expand" style="display: none;">'+b.content+'</span>&nbsp;<a href="#" title="Xem \u0111\u1ea7y \u0111\u1ee7 n\u1ed9i dung" alt="Xem \u0111\u1ea7y \u0111\u1ee7 n\u1ed9i dung"><i class="ico_cm ico-plus"></i></a>':b.content;e.append("<li>"+c+'<div class="author"><strong><a title="Xem chi ti\u1ebft" alt="Xem chi ti\u1ebft" style="color:#333" href="http://photo.vnexpress.net/index/redirect/id/'+b.article_id+
'">'+d+"</a></strong> - "+b.full_name+"</div></li>")});e.find("i.ico_cm").bind("click",function(a){a.preventDefault();a=b(this);var c=a.closest("li");a.hasClass("expanded")?(c.find(".collapse").show(),c.find(".expand").hide(),a.removeClass("expanded"),a.addClass("ico-plus").removeClass("ico-minus"),a.attr({title:"Xem \u0111\u1ea7y \u0111\u1ee7 n\u1ed9i dung",alt:"Xem \u0111\u1ea7y \u0111\u1ee7 n\u1ed9i dung"})):(c.find(".expand").show(),c.find(".collapse").hide(),a.addClass("expanded"),a.attr({title:"Thu g\u1ecdn n\u1ed9i dung",
alt:"Thu g\u1ecdn n\u1ed9i dung"}),a.addClass("ico-minus").removeClass("ico-plus"))});d.append(e);"function"===typeof e.niceScroll&&e.niceScroll({cursorborder:"",cursorcolor:"#ccc",cursorwidth:"3px",autohidemode:!1})}else d.closest("div.last-comment").hide()},parseSms:function(c,a,d){d&&b(".sms-wd-"+c+"-"+a).html(k(d))},parseWeather:function(c){A=c;var a={1:"ic-sunny",2:"ic-cloud",3:"ic-cloudy",4:"ic-raindrops",5:"ic-day-showers",6:"ic-day-lightning-showers",7:"ic-day-lightning",8:"ic-cloudy",9:"ic-cloudy-showers",
10:"ic-cloudy-showers",11:"ic-cloudy-showers",12:"ic-cloudy-lightning-showers",13:"ic-cloudy-lightning",14:"",15:"ic-cloud",16:"ic-cloudy",17:"ic-cloudy-showers",18:"ic-cloudy-lightning-showers",19:"ic-sunny",20:"ic-cloudy",21:"ic-cloud",22:"",23:"",340:"ic-sunny",300:"ic-sunny",90:"ic-cloudy-showers",40:"ic-cloudy-lightning-showers",260:"ic-cloudy",390:"ic-day-showers",110:"ic-cloudy-showers",270:"ic-cloudy",330:"ic-cloud"};b("body").find(".component_weather_vne").each(function(d,e){var f=b(e),g=
c.temp;0==g&&c.min_temp&&(g=c.min_temp);f.hasClass("block_location_tt")?f.append('<a class="txt_location_topbar show_full_info" href="javascript:void(0);">'+c.full_name+'</a><img src="'+img_url_vne+'/graphics/img_blank.gif" class="icon_thoitiet_small show_full_info" id="icon_thoitiet_small" style="cursor:pointer;"><span style="cursor:pointer;" class="txt_doC_den show_full_info">'+g+"</span>"):typeof inter_version&&2==inter_version?(html='<section class="box_category"><div class="box_weather width_common show_full_info"><div class="left"><span class="location txt_location"><i class="ic ic-caret-down-2"></i>'+
c.full_name+'</span><span class="temperature txt_doC_den">'+g+'<sup>o</sup>C</span></div><div id="icon_thoitiet_small" class="icon_weather right"><i class="ic '+("undefined"!=typeof a[c.weather_code]?a[c.weather_code]:"ic-sunny")+'"></i></div></div></section>',f.append(html)):(f.append('<div style="cursor: pointer;" class="txt_location show_full_info">'+c.full_name+"</div>"),f.append('<div class="temprature left"><div class="temprature left"><a class="show_full_info" href="javascript:void(0);"><img src="'+
img_url_vne+'/graphics/img_blank.gif" class="icon_thoitiet_small tt_small_'+c.weather_code+'" id="icon_thoitiet_small" alt=""><span class="txt_doC_den">'+g+"</span></a></div></div>"));f.find(".show_full_info").on("click",function(a){J()})});p("usi.loc")||b.getJSON(interactions_url+"/weather/updateloc?callback=?",{}).done(function(a){a.error||p("usi.loc",JSON.stringify(a.data),{expires:7,domain:".vnexpress.net"})})},changeLoc:function(c){c=b(c).closest(".content_thoitiet");var a=c.find(".txt_select_location");
a.is(":hidden")&&a.css("visibility","visible");q&&a.val(q);c.find(".search_location").toggle("slow")}}}();