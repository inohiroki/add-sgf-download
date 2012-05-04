// ==UserScript==
// @name           add-sgf-download
// @namespace      http://ino.xrea.jp/
// @description    eidogo,石葉2にsgfが埋め込まれているときdownloadリンクを追加する。
// @include        *
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// ==/UserScript==

// sgfファイルのリンク作成
function addSgfLink(element, sgf){
	element.after("<div><a href='data:application/x-go-sgf,"+sgf+"'><font style='color:white;background-color:red;font-weight:bold;border:outset'>DOWNLOAD SGF</font></a></div>");
}

// eidogo
$(".eidogo-player-auto").each(function(){
	var sgf = $(this).text();
	if(sgf !== undefined) addSgfLink($(this), sgf);
});

// 石葉
$("applet").each(function(){
	var sgf = $("param[name='moves']", $(this)).attr('value');
	if(sgf !== undefined) addSgfLink($(this), sgf);
});
