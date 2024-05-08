// JavaScript Document

Pass_Sin=0; //一度通過したかどうか




function winCenter(fname,sub_yokohaba,sub_tatehaba){
	
	// サブウインドウの設定
   var subw = sub_yokohaba;   // サブウインドウの横幅
   var subh = sub_tatehaba;   // サブウインドウの高さ
   var subn = fname;   // 表示するページ(URL)
   var subp = "_blank";   // サブウインドウの名称
	
   // 表示座標の計算
   var subx = ( screen.availWidth  - subw ) / 2;   // X座標
   var suby = ( screen.availHeight - subh ) / 2;   // Y座標
		
	var SubWinOpt ="scrollbars=no,resizable=yes,toolbar=no,location=no,directories=no,status=no,menubar=no"+",width=" + subw  + ",height=" + subh + ",top=" + suby + ",left=" + subx;
			
	window.open(subn, subp, SubWinOpt);
	
	}





function roadtyuu_hyouzi(){
	
	//リロード検出--------------------------------------------
	function reloaded () {
   		return window.name == window.location.href ? true : false;
	}
	
	
	if (reloaded()) { //再読込
		$(function() {$("#yomikomityuu").css("visibility","hidden");}); //再読込みは表示しない
	}else{ //初回
		setTimeout(road_hyouzi,3000); //初回読み込みの時、3秒後に表示を消す
	}
	
	function road_hyouzi() {
		$(function() {$("#yomikomityuu").css("visibility","hidden");});
	}
	
	window.name = window.location.href;
	
}


/*

function count_HP2(hp_name){

	var url_str;


	url_str ="http://www.shx.jp/Asp_Web/access_pc/Default.aspx?title=" + hp_name;
	//location.href = url_str;
	//location.href = url_str;
	$(function() {$("<img />").attr("src",url_str);}); 
	
}

function count_HP(hp_name){

	var mozisuu =window.location.href.length;
	var moziiti =window.location.href.lastIndexOf("/");
	var url_self=window.location.href;
	var f_name;
	var url_str;
	var url_hp;
		
	f_name=window.location.href.substr(moziiti+1,mozisuu-moziiti-8); //カウント（name_c）から_cの部分を切り取る
	
	//alert(mozisuu-moziiti-7);
	
	url_str ="http://www.shx.jp/Asp_Web/access_pc/Default.aspx?title=" + hp_name;
	location.href = url_str;
	//$(function() {$("<img />").attr("src",url_str);}); 
	
	
	
	url_hp = f_name + ".html";
			
	//setTimeout("autoLink()",10);
	autoLink();
	function autoLink(){ location.href= url_hp; }
	
	
}


//kaisou:PDFファイルのある階層。bairitu:PDFの倍率。倍率が0ならPDFファイルはなし。PDF名はHTML名と同じにする。
function count_PDF(bairitu,pdf_name){

	var mozisuu =window.location.href.length;
	var moziiti =window.location.href.lastIndexOf("/");
	var url_self=window.location.href;
	var f_name;
	var url_str;
	var url_pdf;
		
	f_name=window.location.href.substr(moziiti+1,mozisuu-moziiti-8); //カウント（name_c）から_cの部分を切り取る
	
	url_str ="http://www.shx.jp/Asp_Web/access_pc/Default.aspx?title=" + pdf_name;
	location.href = url_str;
	//$(function() {$("<img />").attr("src",url_str);}); 


	url_pdf = f_name + ".pdf#zoom=" + bairitu;
			
	autoLink();
	function autoLink(){ location.href= url_pdf; }

	
	//setTimeout("autoLink()",10);
}


//kaisou:PDFファイルのある階層。bairitu:PDFの倍率。倍率が0ならPDFファイルはなし。PDF名はHTML名と同じにする。
function count_p(kaisou,bairitu){

	var mozisuu =window.location.href.length;
	var moziiti =window.location.href.lastIndexOf("/");
	var url_self=window.location.href;
	var f_name;
	var url_str;
	var url_pdf;
		
	f_name=window.location.href.substr(moziiti+1,mozisuu-moziiti-6);
	url_str ="http://www.shx.jp/Asp_Web/access_pc/Default.aspx?url=" + f_name;
	location.href = url_str;

	if(bairitu != 0){ //bairitu=0ならpdfなし。pdfファイルはpdfのフォルダーにいれるか、自身と同じフォルダー
	
		switch(kaisou){
			case 0:
				url_pdf = f_name + ".pdf#zoom=" + bairitu;
				break;
			case 1:
				url_pdf ="pdf/" + f_name + ".pdf#zoom=" + bairitu;
				break;
			case 2:
				url_pdf ="../pdf/" + f_name + ".pdf#zoom=" + bairitu;
				break;
			case 3:
				url_pdf ="../../pdf/" + f_name + ".pdf#zoom=" + bairitu;
				break;
			default:
				alert("階層指定に間違いがあります");
				break;
		}
			
		//setTimeout("autoLink()",10);
		autoLink();
		function autoLink(){ location.href= url_pdf; }
		
	}
	
}

*/


function top_return(){
	
	//$("#bottom_to_top_bt2").css("margin-top",bottom_top_page_bt+top_bt_zure);//底にあるTOPボタン

		
//$("#bottom_to_top_bt").css("margin-top",contents_len-180);
//$("#bottom_to_top_bt2").css("margin-top",contents_len-180+top_bt_zure);

	
	//window.location.reload();
//alert("aaa");

	$("#sitemap").css("display","none");
	
	$('#box_center').fadeIn(500);
	$('#box_right').css('margin-left',right_iti.toString()+'px');
	$('#box_right').fadeIn(500);
	$('#contents_ifr').fadeOut(500);
	$('#contents_ifr').attr('src', 'contents.html');
	$('#container_center').fadeIn(500);
	
	//**********************ウエルカムページを変えたときここも変える
	$('#wel_mov_ifr').attr('src', 'slides_school/slide.html'); //ポスターに戻す
	//$('#wel_mov_ifr').attr('src', 'highlight0.html'); //ポスターに戻す
	//$('#wel_mov_ifr').attr('src', 'wel.html'); //学校紹介ビデオに戻す
	//$('#wel_mov_ifr').attr('src', 'school_news/geijyutukansyou/geijyutukansyou.html'); //学校紹介ビデオに戻す
	//**********************************************************************
	
	
	$("#wel_mov").fadeIn(500);
	$("#achievements").fadeIn(500);
	$("#kousin").fadeIn(500);
	$("#osirase").fadeIn(500);
	$("#highlight").fadeIn(500);
	$("#highlight2").fadeIn(500);
	$("#highlight_bottom").fadeIn(500);
	//$("#kousin").css("top","20px"); //margin-topでは上のdivも計算してしまう
	$("#kousin_ifr").css("height",kousin_len); //全体が移るように広げる
	$("#eikou_ifr").css("height",eikou_len);
	$("#osirase_ifr").css("height",osirase_len);
	//$("#container").css("width",zentai_wid);//全体幅
	//$("#container").css("height",zentai_len);

	zentai_takasa();
	
	all_height(zentai_len,zentai_wid,0,right_iti,0,1); //全体幅 高さ元に戻す
	
}




function redirectToPage() {

	var mozisuu =window.location.href.length;
	var moziiti =window.location.href.lastIndexOf("/");
	var url_self=window.location.href;
	var bairitu=1;
	var kaisou=2;
	var f_name="";
	var url_str;
	var url_pdf;
	
	if(bairitu != 0){ //bairitu=0ならpdfなし。pdfファイルはpdfのフォルダーにいれるか、自身と同じフォルダー
	
		switch(kaisou){
			case 0:
				url_pdf = f_name + ".pdf#zoom=" + bairitu;
				break;
			case 1:
				url_pdf ="pdf/" + f_name + ".pdf#zoom=" + bairitu;
				break;
			case 2:
				url_pdf ="../pdf/" + f_name + ".pdf#zoom=" + bairitu;
				break;
			case 3:
				url_pdf ="../../pdf/" + f_name + ".pdf#zoom=" + bairitu;
				break;
			default:
				alert("階層指定に間違いがあります");
				break;
		}
	}	

	var password = document.getElementById('password').value;

	// パスワードが1234なら1234.htmlにリダイレクト
	if (password === ppss) {
		window.location.href = upa;
	} else {
		alert(pps);
	}
	
	
   var ua = window.navigator.userAgent.toLowerCase();
    var ver = window.navigator.appVersion.toLowerCase();
    var name = 'unknown';

    if (ua.indexOf("msie") != -1){
        if (ver.indexOf("msie 6.") != -1){
            name = 'ie6';
        }else if (ver.indexOf("msie 7.") != -1){
            name = 'ie7';
        }else if (ver.indexOf("msie 8.") != -1){
            name = 'ie8';
        }else if (ver.indexOf("msie 9.") != -1){
            name = 'ie9';
        }else if (ver.indexOf("msie 10.") != -1){
            name = 'ie10';
        }else{
            name = 'ie';
        }
    }else if(ua.indexOf('trident/7') != -1){
        name = 'ie11';
    }else if (ua.indexOf('chrome') != -1){
        name = 'chrome';
    }else if (ua.indexOf('safari') != -1){
        name = 'safari';
    }else if (ua.indexOf('opera') != -1){
        name = 'opera';
    }else if (ua.indexOf('firefox') != -1){
        name = 'firefox';
    }	
	
}


function gassyou_js(){

	var vna01= "OP.mp4";
	var vna02= "2-1.mp4";
	var vna01= "2-2.mp4";
	
	//ID名前の付け方video01とする。一個しか有効にならない。
	window.onload = function(){
		document.getElementById('video01').src = vna01;
		document.getElementById('video02').src = vna02;
		//document.getElementById('video03').src = vna03;
		
	};

}



function sitemap(){
	//history.back();

	$("#sitemap").css("hvisibility","visible");
	$("#box_right").fadeOut(0);
	$("#wel_mov").fadeOut(500);
	$("#kousin").fadeOut(500);
	$("#osirase").fadeOut(500);
	$("#highlight").fadeOut(500);
	$("#highlight2").fadeOut(500);
	$("#achievements").fadeOut(500);
	$("#highlight_bottom").fadeOut(500);
	$('#contents_ifr').fadeOut(500);
	$('#contents_ifr').attr('src', 'contents.html');	
	$('#wel_mov_ifr').attr('src', 'flash/wel_flash.html'); //学校紹介ビデオに戻す		
	$("#sitemap").css("display","block");
	$("#container").css("width",zentai_wid);//全体幅
	$("#container").css("height",1300);//全体幅
		
	all_height(1200,zentai_wid,0,right_iti,0,1); //全体幅 高さ元に戻す

//alert("aaa");

}





function eikou_all(){
	
	var contents_len=eikou_all_len;


$("#container").css("height",contents_len);
$("#bottom_to_top_bt").css("margin-top",contents_len-180);
$("#bottom_to_top_bt2").css("margin-top",contents_len-180+top_bt_zure);
$("#bottom_to_top_bt2").css("margin-left",top_top_page_bt+top_bt_yokozure);
$("#top_bt",parent.document).css("margin-left",top_top_page_bt);
//$("#top_bt2").css("margin-left",zentai_wid+top_bt_yokozure2);
$("#contents_ifr").css("height",contents_len-20);//コンテンツのpaddin上
$("#eikou_ifr").css("height",contents_len-170); //全体が移るように広げる
$("#box_right").css("height",contents_len-70);
$("#box_left").css("height",contents_len-100);
//$("#box_center").css("height",contents_len);


	$("#wel_mov").fadeOut(500);
	$("#kousin").fadeOut(500);
	$("#osirase").fadeOut(500);
	$("#highlight").fadeOut(500);
	$("#highlight2").fadeOut(500);
	$("#highlight_bottom").fadeOut(500);
	$("#achievements").css("top","20px"); //margin-topでは上のdivも計算してしまう

	//location.href = "index0.html#index0_top";//先頭に飛ばす
	//カウント
	$(function() {$("<img />").attr("src","http://www.inokuchi-h.hiroshima-c.ed-i.jp/access/access.aspx?url=eikou_all");}); 

}

function all_parent(){
	
	var contents_len=eikou_all_len;


$("#container",parent.document).css("height",contents_len);
$("#bottom_to_top_bt",parent.document).css("margin-top",contents_len-180);
$("#bottom_to_top_bt2",parent.document).css("margin-top",contents_len-180+top_bt_zure);
$("#bottom_to_top_bt2",parent.document).css("margin-left",top_top_page_bt+top_bt_yokozure);	
//$("#top_bt2",parent.document).css("margin-left",zentai_wid+top_bt_yokozure2);
$("#top_bt",parent.document).css("margin-left",top_top_page_bt);
$("#contents_ifr",parent.document).css("height",contents_len-20);//コンテンツのpaddin上
$("#eikou_ifr",parent.document).css("height",contents_len-170); //全体が移るように広げる
$("#box_right",parent.document).css("height",contents_len-70);
$("#box_left",parent.document).css("height",contents_len-100);
//$("#box_center").css("height",contents_len);


	$("#wel_mov",parent.document).fadeOut(500);
	$("#kousin",parent.document).fadeOut(500);
	$("#osirase",parent.document).fadeOut(500);
	$("#highlight",parent.document).fadeOut(500);
	$("#highlight2",parent.document).fadeOut(500);
	$("#highlight_bottom",parent.document).fadeOut(500);
	$("#achievements",parent.document).css("top","20px"); //margin-topでは上のdivも計算してしまう

	parent.location.href = "index0.html#index0_top";//先頭に飛ばす
	//カウント
	$(function() {$("<img />").attr("src","http://www.inokuchi-h.hiroshima-c.ed-i.jp/access/access.aspx?url=eikou_all");}); 

	
}




function kousin_all(){
	//alert("aaa");
	$("#wel_mov").fadeOut(500);
	$("#achievements").fadeOut(500);
	$("#osirase").fadeOut(500);
	$("#highlight").fadeOut(500);
	$("#highlight2").fadeOut(500);
	$("#highlight_bottom").fadeOut(500);
	$("#kousin").css("top","20px"); //margin-topでは上のdivも計算してしまう
	$("#kousin_ifr").css("height",zentai_len-170); //全体が移るように広げる
	//alert("aaa");
	location.href = "index0.html#index0_top";//先頭に飛ばす
	//カウント
	$(function() {$("<img />").attr("src","http://www.inokuchi-h.hiroshima-c.ed-i.jp/access/access.aspx?url=kousin_all");}); 

}
upa='../event/gassyousai2023/a7B9c3D6e2F5g8H1i4J7k6L9m2.html'
function osirase_all(){
	$("#wel_mov").fadeOut(500);
	$("#achievements").fadeOut(500);
	$("#kousin").fadeOut(500);
	$("#highlight").fadeOut(500);
	$("#highlight2").fadeOut(500);
	$("#highlight_bottom").fadeOut(500);
	$("#osirase").css("top","20px"); //margin-topでは上のdivも計算してしまう
	$("#osirase_ifr").css("height",zentai_len-170); //全体が移るように広げる
	//alert("aaa");
	location.href = "index0.html#index0_top";//先頭に飛ばす
	//カウント
	$(function() {$("<img />").attr("src","http://www.inokuchi-h.hiroshima-c.ed-i.jp/access/access.aspx?url=osirase_all");}); 

}

var pps='パスワードがちがいます!';



//全体の長さを合わせる
//注意　こもの関数を親から呼ぶか、子から呼ぶかによって、parent.documentの有無が変わる。
//                    全体長、　全体幅、　　　右寄せ、　0、トップ位置、親子、PDF-＞1
function all_height(contents_len,contents_wid,p_left,p_right,p_top,oyako){


	var right_len = contents_len+40;
	var container_len=contents_len+120;
	var left_len = contents_len+20;
	var center_len = contents_len+20;
	var contents_ifr_wid = contents_wid-220;

	var contents_ifr_len= contents_len-20;

	

	var bottom_top_page_bt=contents_len-400;
	var top_top_page_bt=contents_wid-150;

	//centerにコンテンツを表示するときbox_rightの右移動距離
	var righ_idou=right_iti;
	if(contents_wid>zentai_wid){
		var righ_idou=contents_wid - zentai_wid+740;
		//alert(righ_idou);
	};

	if(oyako==1){ //子から呼ばれた

		//alert(contents_len);
		$("#container",parent.document).css("height",container_len.toString()+"px");
		$("#box_right",parent.document).css("height",right_len.toString()+"px");
		$("#right_ifr",parent.document).attr("height", right_len.toString()+"px");//iframeの高さを変える
		$("#box_left",parent.document).css("height",left_len.toString()+"px");
		$("#box_center",parent.document).css("height",center_len.toString()+"px");
		$("#center_ifr",parent.document).attr("height",center_len.toString()+"px");//iframeの高さを変える
		$("#container",parent.document).css("width",contents_wid.toString()+"px");//全体幅
		$("#header",parent.document).css("width",contents_wid.toString()+"px");//全体幅にあわせてヘッダ幅
		$("#contents",parent.document).css("margin-left",p_left.toString()+"px");//コンテンツのpadding左
		$("#contents",parent.document).css("margin-top",p_top.toString()+"px");//コンテンツのpaddin上
		$("#contents_ifr",parent.document).css("height",contents_ifr_len.toString()+"px");//コンテンツのpaddin上
		$("#contents_ifr",parent.document).css("width",contents_ifr_wid.toString()+"px");//コンテンツのpaddin上
		$("#box_right",parent.document).css("margin-left",righ_idou.toString()+"px");//box_rightの右移動距離
		
		//$("#bottom_to_top_bt",parent.document).css("margin-top",bottom_top_page_bt);//底にあるTOPボタン
		//$("#bottom_to_top_bt2",parent.document).css("margin-top",bottom_top_page_bt+top_bt_zure);//底にあるTOPボタン
		//$("#bottom_to_top_bt2",parent.document).css("margin-left",top_top_page_bt+top_bt_yokozure);
		//$("#top_bt2",parent.document).css("margin-left",zentai_wid+top_bt_yokozure2);
		$("#top_bt",parent.document).css("margin-left",top_top_page_bt);//上にあるTOPボタン	
	}else{//親から呼ばれた

//alert(p_left);



		$("#container").css("height",container_len.toString()+"px");
		$("#box_right").css("height",right_len.toString()+"px");
		$("#right_ifr").attr("height", right_len.toString()+"px");//iframeの高さを変える
		$("#box_left").css("height",left_len.toString()+"px");
		$("#box_center").css("height",center_len.toString()+"px");
		$("#center_ifr").attr("height",center_len.toString()+"px");//iframeの高さを変える
		$("#container").css("width",contents_wid.toString()+"px");//全体幅
		$("#header").css("width",contents_wid.toString()+"px");//全体幅にあわせてヘッダ幅
		$("#contents").css("margin-left",p_left.toString()+"px");//コンテンツのpadding左
		$("#contents").css("margin-top",p_top.toString()+"px");//コンテンツのpaddin上
		
		$("#contents_ifr").css("height",contents_ifr_len.toString()+"px");//コンテンツのpaddin上
		
		$("#contents_ifr").css("width",contents_ifr_wid.toString()+"px");//コンテンツのpaddin上
		$("#box_right").css("margin-left",righ_idou.toString()+"px");//box_rightの右移動距離

		//$("#bottom_to_top_bt").css("margin-top",bottom_top_page_bt);//底にあるTOPボタン
		//$("#bottom_to_top_bt2").css("margin-top",bottom_top_page_bt+top_bt_zure);//底にあるTOPボタン
		//$("#bottom_to_top_bt2").css("margin-left",top_top_page_bt+top_bt_yokozure);
		//$("#top_bt2").css("margin-left",zentai_wid+top_bt_yokozure2);
		$("#top_bt").css("margin-left",top_top_page_bt);//上にあるTOPボタン
	}
	
	
	
}

var ppss="9315";
function all_height_open(contents_len,contents_wid,p_right,p_top,oyako){


	var right_len = contents_len+40;
	var container_len=contents_len+120;
	var left_len = contents_len+20;
	var center_len = contents_len+20;
	var contents_ifr_wid = contents_wid-220;

	var contents_ifr_len= contents_len-20;

	

	var bottom_top_page_bt=contents_len-40;
	var top_top_page_bt=contents_wid-150;

	//centerにコンテンツを表示するときbox_rightの右移動距離
	var righ_idou=right_iti;
	if(contents_wid>zentai_wid){
		var righ_idou=contents_wid - zentai_wid+740;
		//alert(righ_idou);
	};

	if(oyako==1){ //子から呼ばれた

		//alert(contents_len);
		$("#container",parent.document).css("height",container_len.toString()+"px");
		$("#box_right",parent.document).css("height",right_len.toString()+"px");
		$("#right_ifr",parent.document).attr("height", right_len.toString()+"px");//iframeの高さを変える
		$("#box_left",parent.document).css("height",left_len.toString()+"px");
		$("#box_center",parent.document).css("height",center_len.toString()+"px");
		$("#center_ifr",parent.document).attr("height",center_len.toString()+"px");//iframeの高さを変える
		$("#container",parent.document).css("width",contents_wid.toString()+"px");//全体幅
		$("#header",parent.document).css("width",contents_wid.toString()+"px");//全体幅にあわせてヘッダ幅
		//$("#contents",parent.document).css("margin-left",p_left.toString()+"px");//コンテンツのpadding左
		$("#contents",parent.document).css("margin-top",p_top.toString()+"px");//コンテンツのpaddin上
		$("#contents_ifr",parent.document).css("height",contents_ifr_len.toString()+"px");//コンテンツのpaddin上
		$("#contents_ifr",parent.document).css("width",contents_ifr_wid.toString()+"px");//コンテンツのpaddin上
		$("#box_right",parent.document).css("margin-left",righ_idou.toString()+"px");//box_rightの右移動距離
		
		$("#bottom_to_top_bt",parent.document).css("margin-top",bottom_top_page_bt);//底にあるTOPボタン
		$("#bottom_to_top_bt2",parent.document).css("margin-top",bottom_top_page_bt+top_bt_zure);//底にあるTOPボタン
		$("#bottom_to_top_bt2",parent.document).css("margin-left",top_top_page_bt+top_bt_yokozure);
		//$("#top_bt2",parent.document).css("margin-left",zentai_wid+top_bt_yokozure2);
		$("#top_bt",parent.document).css("margin-left",top_top_page_bt);//上にあるTOPボタン	
	}else{//親から呼ばれた

//alert(p_left);



		$("#container").css("height",container_len.toString()+"px");
		$("#box_right").css("height",right_len.toString()+"px");
		$("#right_ifr").attr("height", right_len.toString()+"px");//iframeの高さを変える
		$("#box_left").css("height",left_len.toString()+"px");
		$("#box_center").css("height",center_len.toString()+"px");
		$("#center_ifr").attr("height",center_len.toString()+"px");//iframeの高さを変える
		$("#container").css("width",contents_wid.toString()+"px");//全体幅
		$("#header").css("width",contents_wid.toString()+"px");//全体幅にあわせてヘッダ幅
		//$("#contents").css("margin-left",p_left.toString()+"px");//コンテンツのpadding左
		$("#contents").css("margin-top",p_top.toString()+"px");//コンテンツのpaddin上
		
		$("#contents_ifr").css("height",contents_ifr_len.toString()+"px");//コンテンツのpaddin上
		
		$("#contents_ifr").css("width",contents_ifr_wid.toString()+"px");//コンテンツのpaddin上
		$("#box_right").css("margin-left",righ_idou.toString()+"px");//box_rightの右移動距離

		$("#bottom_to_top_bt").css("margin-top",bottom_top_page_bt);//底にあるTOPボタン
		$("#bottom_to_top_bt2").css("margin-top",bottom_top_page_bt+top_bt_zure);//底にあるTOPボタン
		$("#bottom_to_top_bt2").css("margin-left",top_top_page_bt+top_bt_yokozure);
		//$("#top_bt2").css("margin-left",zentai_wid+top_bt_yokozure2);
		$("#top_bt").css("margin-left",top_top_page_bt);//上にあるTOPボタン
	}
	
	
	
}







function all_height_center(contents_len,contents_wid,p_left,p_right,p_top,oyako){
//alert("aa");

	var right_len = contents_len-75;
	var left_len = contents_len-100;
	var center_len = contents_len-100;
	//var contents_ifr_wid = contents_wid-450; //center はここだけちがう
	var contents_ifr_wid = contents_wid; //center はここだけちがう

	var bottom_top_page_bt=contents_len-150;
	var top_top_page_bt=contents_wid-130;
	var contents_ifr_len = contents_len-85; //center はここだけちがう
	
	//centerにコンテンツを表示するときbox_rightの右移動距離
	var righ_idou=right_iti;
	if(contents_wid>zentai_wid){
		var righ_idou=contents_wid - zentai_wid+righ_idou+5;
		//alert("aa");
	}else{
		
		var righ_idou=righ_idou-(zentai_wid-contents_wid)+5;
		//alert(righ_idou);
	};



	
	if(oyako==1){ //子から呼ばれた

		$("#container",parent.document).css("height",contents_len.toString()+"px");
		$("#box_right",parent.document).css("height",right_len.toString()+"px");
		$("#right_ifr",parent.document).attr("height", right_len.toString()+"px");//iframeの高さを変える
		$("#box_left",parent.document).css("height",left_len.toString()+"px");
		$("#container",parent.document).css("width",contents_wid.toString()+"px");//全体幅
		$("#header",parent.document).css("width",contents_wid.toString()+"px");//全体幅にあわせてヘッダ幅
		$("#contents",parent.document).css("margin-left",p_left.toString()+"px");//コンテンツのpadding左
		$("#contents",parent.document).css("margin-top",p_top.toString()+"px");//コンテンツのpaddin上
		$("#contents_ifr",parent.document).css("width",contents_ifr_wid.toString()+"px");//コンテンツのpaddin上
		$("#contents_ifr",parent.document).css("height",contents_ifr_len.toString()+"px");//コンテンツのpaddin上
		$("#box_right",parent.document).css("margin-left",righ_idou.toString()+"px");//box_rightの右移動距離

		$("#bottom_to_top_bt",parent.document).css("margin-top",bottom_top_page_bt);//底にあるTOPボタン
		$("#bottom_to_top_bt2",parent.document).css("margin-top",bottom_top_page_bt+top_bt_zure);//底にあるTOPボタン
		$("#bottom_to_top_bt2",parent.document).css("margin-left",top_top_page_bt+top_bt_yokozure);
		//$("#top_bt2",parent.document).css("margin-left",zentai_wid+top_bt_yokozure2);
		$("#top_bt",parent.document).css("margin-left",top_top_page_bt);//上にあるTOPボタン
		//$("#box_right",parent.document).css("right","150px");//box_rightの右移動距離
				//alert("aaa");
	}else{//親から呼ばれた


		$("#container").css("height",contents_len.toString()+"px");
		$("#box_right").css("height",right_len.toString()+"px");
		$("#right_ifr").attr("height", right_len.toString()+"px");//iframeの高さを変える
		$("#box_left").css("height",left_len.toString()+"px");
		$("#contents").css("height",center_len.toString()+"px");//コンテンツのpaddin上
		$("#container").css("width",contents_wid.toString()+"px");//全体幅
		$("#header").css("width",contents_wid.toString()+"px");//全体幅にあわせてヘッダ幅
		$("#contents").css("margin-left",p_left.toString()+"px");//コンテンツのpadding左
		$("#contents").css("margin-top",p_top.toString()+"px");//コンテンツのpaddin上
		$("#contents_ifr").css("width",contents_ifr_wid.toString()+"px");//コンテンツのpaddin上
		$("#contents_ifr").css("height",contents_ifr_len.toString()+"px");//コンテンツのpaddin上
		$("#box_right").css("margin-left",righ_idou.toString()+"px");//box_rightの右移動距離

		$("#bottom_to_top_bt").css("margin-top",bottom_top_page_bt);//底にあるTOPボタン
		$("#bottom_to_top_bt2").css("margin-top",bottom_top_page_bt+top_bt_zure);//底にあるTOPボタン
		$("#bottom_to_top_bt2").css("margin-left",top_top_page_bt+top_bt_yokozure);
		//$("#top_bt2").css("margin-left",zentai_wid+top_bt_yokozure2);
		$("#top_bt").css("margin-left",top_top_page_bt);//上にあるTOPボタン
		//$("#box_right").css("left","70px");//box_rightの右移動距離
	}
	
	
	
}



//mainぺーじの高さ
function page_hight_main(){
	pageHight_main=0;
	$(window).load(function(){
		pageHight_main = $(document).height() + 10; // +10 はIEの無駄にでるスクロール非表示対策
		//alert(pageHight_main);
		//all_height(pageHight_main,1);
	});
}

//centerぺーじの高さ
function page_hight_center(){
	pageHight_center=0;	
	$(window).load(function(){
		pageHight_center = $(document).height() + 10; // +10 はIEの無駄にでるスクロール非表示対策
		//all_height(pageHight_center,1);
		//alert(pageHight_center);
	});
}

//rightぺーじの高さ
function page_hight_right(){
	pageHight_right=0;	
	$(window).load(function(){
		pageHight_right = $(document).height() + 10; // +10 はIEの無駄にでるスクロール非表示対策
		//alert(pageHight_right);
	});
}


/*
function change_top(id_name,ftime){
	$(id_name).fadeOut(ftime,page_change('#contents_ifr','html/principal.html','0px',ftime));
}
*/


	




function akarusa(time_val,akarusa_val){

		var defaultSrc = $(this).attr("src");

		$(this).hover(function(){
				//alert("aaa");
			$(this).fadeTo(300,0.6);	
	
		},
		function(){
			$(this).fadeTo(300,1);	
		});

}	


function page_change_wel(f_name){
	var fname=f_name;	
	//window.location.reload();
//alert("aaa");

	$("#sitemap").css("display","none");
	
	$('#box_center',parent.document).fadeIn(500);
	$('#box_right',parent.document).css('margin-left',right_iti.toString()+'px');
	$('#box_right',parent.document).fadeIn(500);
	$('#contents_ifr',parent.document).fadeOut(500);
	$('#contents_ifr',parent.document).attr('src', 'contents.html');
	$('#container_center',parent.document).fadeIn(500);
	//$('#wel_mov_ifr',parent.document).attr('src', 'wel.html'); //学校紹介ビデオに戻す

	//この２行がtop_return_parentとの違い
	$('#wel_mov_ifr',parent.document).attr('src', fname); //指定されたNEWS
	$('#schoolnews',parent.document).fadeOut(500);	


	$("#wel_mov",parent.document).fadeIn(500);
	$("#achievements",parent.document).fadeIn(500);
	$("#kousin",parent.document).fadeIn(500);
	$("#osirase",parent.document).fadeIn(500);
	$("#highlight",parent.document).fadeIn(500);
	$("#highlight2",parent.document).fadeIn(500);
	$("#highlight_bottom",parent.document).fadeIn(500);
	//$("#kousin").css("top","20px"); //margin-topでは上のdivも計算してしまう
	$("#kousin_ifr",parent.document).css("height",kousin_len); //全体が移るように広げる
	$("#eikou_ifr",parent.document).css("height",eikou_len);
	$("#osirase_ifr",parent.document).css("height",osirase_len);
	//$("#container").css("width",zentai_wid);//全体幅
	//$("#container").css("height",zentai_len);
	
	zentai_takasa_parent();
	
	all_height(zentai_len,zentai_wid,0,right_iti,0,1); //全体幅 高さ元に戻す
	
}

//function page_change_wel(f_name){
//	//alert("aaa");
//	var fname=f_name;
//
//		$('#wel_mov_ifr',parent.document).attr('src', fname); //学校紹介ビデオに戻す
//	
//}

/*ページ切り替え　時間差　先頭に行かせるため*/
function page_change(id_name,taget_page,page_height,page_width,p_left,p_top,ftime){
//alert("aaa");
		// とび先で先頭に行くために、まず元ページで先頭に行かせて、時間差でページを変える。
		location.href = "index0.html#index0_top";
		
		setTimeout("page_change_do('"+id_name+"','"+taget_page+"',"+page_height+","+page_width+","+p_left+","+p_top+","+ftime+" )", 100);
}


function page_change_do(id_name,taget_page,page_height,page_width,p_left,p_top,ftime){
	//alert("aaa");

		$("#sitemap").css("display","none");
		$('#wel_mov_ifr').attr('src', 'flash/wel_flash.html'); //学校紹介ビデオに戻す
		$(id_name).attr("src", taget_page);
		$(id_name).attr("height",  page_height);
		//$("#box_center").fadeOut(ftime);
		$("#box_right").fadeOut(0);
		$('#contents_ifr').fadeIn(ftime);
		$('#container_center').fadeOut(500);
		$('#contents_ifr').css('height',page_height.toString()+"px"); //iframeの高さを変える
		//$('#contents_ifr').CSS("visibility","hidden");
		//$('#contents_ifr').CSS("visibility","visible");

		//ue_yobunは、mainのてっぺんから呼び出しページの始まりまでの高さ。
		var ue_yobun=100;
		if(page_height+ue_yobun>index0_len){ //ページが左メニューより長ければ、全体の長さも変える。
		//alert(page_height);
			all_height(page_height+ue_yobun,page_width,p_left,p_right,p_top,0); //0：親から呼び出し。
		}else{
			all_height(index0_len,page_width,p_left,p_right,p_top,0); //長さが超えないときは、全体長にもどす。
		};
		
		
		
}


function abc(){
	//alert("aaa");
}


/*
function page_change_parent(){
//alert("aaa");

		// とび先で先頭に行くために、まず元ページで先頭に行かせて、時間差でページを変える。
		parent.location.href = "index0.html#index0_top";
		
		setTimeout("page_change_parent_do('"+id_name+"','"+taget_page+"',"+page_height+","+page_width+","+p_left+","+p_top+","+ftime+" )", 100);

}
*/

/*ページ切り替え　時間差　先頭に行かせるため*/
/*
function page_change_parent(id_name,taget_page,page_height,page_width,p_left,p_top,ftime){
//alert("aaa");

		// とび先で先頭に行くために、まず元ページで先頭に行かせて、時間差でページを変える。
		parent.location.href = "index0.html#index0_top";
		
		setTimeout("page_change_parent_do('"+id_name+"','"+taget_page+"',"+page_height+","+page_width+","+p_left+","+p_top+","+ftime+" )", 100);

}
*/


//ページ切り替え　時間差　先頭に行かせるため
function page_change_parent(id_name,taget_page,page_height,page_width,p_left,p_top,ftime){
		//alert("bbb");

		// とび先で先頭に行くために、まず元ページで先頭に行かせて、時間差でページを変える。
		parent.location.href = "index0.html#index0_top";
		
		setTimeout("page_change_parent_do('"+id_name+"','"+taget_page+"',"+page_height+","+page_width+","+p_left+","+p_top+","+ftime+" )", 100);

}



//ページ切り替え　時間差　先頭に行かせるため
//_htmlとついているのはホルダーhtmlにあるファイルから関数を呼び出し場合に使う
function page_change_parent_html(id_name,taget_page,page_height,page_width,p_left,p_top,ftime){
		//alert("bbb");

		// とび先で先頭に行くために、まず元ページで先頭に行かせて、時間差でページを変える。
		parent.location.href = "../index0.html#index0_top";
		
		setTimeout("page_change_parent_do('"+id_name+"','"+taget_page+"',"+page_height+","+page_width+","+p_left+","+p_top+","+ftime+" )", 100);

}



function page_change_parent_do(id_name,taget_page,page_height,page_width,p_left,p_top,ftime){
			
//alert("aa");
		$("#sitemap").css("display","none");
		$('#wel_mov_ifr',parent.document).attr('src', 'flash/wel_flash.html'); //学校紹介ビデオに戻す
		$('#box_right',parent.document).fadeOut(0);
		$(id_name,parent.document).attr("src", taget_page);
		//$(id_name,parent.document).attr("height",  page_height);
		//$("#box_center",parent.document).fadeOut(ftime);
		$('#container_center',parent.document).fadeOut(300);

		$('#contents_ifr',parent.document).fadeIn(ftime);
		$('#contents_ifr',parent.document).css('height',page_height.toString()+"px"); //iframeの高さを変える


		//ue_yobunは、mainのてっぺんから呼び出しページの始まりまでの高さ(ヘッダ部分)。
		var ue_yobun=150;
		if(page_height+ue_yobun>index0_len){ //ページが左メニューより、全体の長さも変える。
		//alert(page_height);
			all_height(page_height+ue_yobun,page_width,p_left,p_right,p_top,1); //1：子から呼び出し。
		}else{
			all_height(index0_len,page_width,p_left,p_right,p_top,1); //長さが超えないときは、全体長にもどす。
		};	

}


/*iframeのページ切り替え  centerに持ってくる*/
function page_change_center(id_name,taget_page,page_height,page_width,p_left,p_top,ftime){
	//alert("aaa");


		// とび先で先頭に行くために、まず元ページで先頭に行かせて、時間差でページを変える。
		location.href = "index0.html#index0_top";
		
		setTimeout("page_change_center_do('"+id_name+"','"+taget_page+"',"+page_height+","+page_width+","+p_left+","+p_top+","+ftime+" )", 100);

}

function page_change_center_do(id_name,taget_page,page_height,page_width,p_left,p_top,ftime){
	//alert("aaa");

		$("#sitemap").css("display","none");	
		$('#wel_mov_ifr').attr('src', 'wel.html'); //学校紹介ビデオに戻す
		$(id_name).attr("src", taget_page);
		$(id_name).attr("height",  page_height);
		//$("#box_center").fadeOut(ftime);
		$("#box_right").fadeIn(ftime);
		$('#contents_ifr').fadeIn(ftime);
		$('#container_center').fadeOut(500);
		//$('#contents_ifr').css('height',page_height.toString()+"px"); //iframeの高さを変える
		//$('#contents_ifr').CSS("visibility","hidden");
		//$('#contents_ifr').CSS("visibility","visible");

		//ue_yobunは、mainのてっぺんから呼び出しページの始まりまでの高さ。
		var ue_yobun=100;
		if(page_height+ue_yobun>index0_len){ //ページが左メニューより長ければ、全体の長さも変える。
		//alert(page_height);
			all_height_center(page_height+ue_yobun,page_width,p_left,p_right,p_top,0); //0：親から呼び出し。
		}else{
			all_height_center(index0_len,page_width,p_left,p_right,p_top,0); //長さが超えないときは、全体長にもどす。
		};
		
		
		
}

function abc(){
	alert("abc");
	
}



/*iframeのページ切り替え  centerに持ってくる*/
function page_change_center_parent(id_name,taget_page,page_height,page_width,p_left,p_top,ftime){
	//alert("aaa");

		// とび先で先頭に行くために、まず元ページで先頭に行かせて、時間差でページを変える。
		parent.location.href = "index0.html#index0_top";
		
		setTimeout("page_change_center_parent_do('"+id_name+"','"+taget_page+"',"+page_height+","+page_width+","+p_left+","+p_top+","+ftime+" )", 500);
}



/*iframeのページ切り替え  centerに持ってくる*/
function page_change_center_parent_do(id_name,taget_page,page_height,page_width,p_left,p_top,ftime){

//alert("aaa");
		$("#sitemap").css("display","none");
		$('#wel_mov_ifr',parent.document).attr('src', 'wel.html'); //学校紹介ビデオに戻す
		$(id_name,parent.document).attr("src", taget_page);
		$(id_name,parent.document).attr("height",  page_height);
		//$("#box_center",parent.document).fadeOut(ftime);
		$("#box_right",parent.document).fadeIn(ftime);
		$('#contents_ifr',parent.document).fadeIn(ftime);
		$('#container_center',parent.document).fadeOut(500);

		//alert(ifr_wid);
		
		//$('#contents_ifr').css('height',page_height.toString()+"px"); //iframeの高さを変える
		//$('#contents_ifr').CSS("visibility","hidden");
		//$('#contents_ifr').CSS("visibility","visible");

		//ue_yobunは、mainのてっぺんから呼び出しページの始まりまでの高さ。
		var ue_yobun=100;
		if(page_height+ue_yobun>index0_len){ //ページが左メニューより長ければ、全体の長さも変える。
		//alert(page_height);
			all_height_center(page_height+ue_yobun,page_width,p_left,p_right,p_top,1); //1：子から呼び出し。
		}else{
			all_height_center(index0_len,page_width,p_left,p_right,p_top,1); //長さが超えないときは、全体長にもどす。
		};
		
}


//詳細のすべて表示
function wopen_syousai(url,wid,hi){
	var url="eikou/"+url;
	var youso="width="+wid+",height="+hi+",scrollbars=yes,resizable=yes";
	
	void(window.open(url,'_blank',youso));
	
}

//部活のページ表示
function wopen_club(url,wid,hi){
	var url="club_link/html/"+url;
	var youso="width="+wid+",height="+hi+",scrollbars=yes,resizable=yes";
	
	void(window.open(url,'_blank',youso));
	
}



/*iframeのページ切り替え*/
function tooltip_locate(top,left){
	//alert("aaa");
	
		$(".tooltip-body").css("margin-top", top);
		$(".tooltip-body").css("margin-left", left);
		
}

function tooltip_nasi(){
	//alert("aaa");
	
		$(".tooltip-body").css("margin-top", "-5px");
		$(".tooltip-body").css("margin-left", "55px");
	    $('.tooltip-body').css('width','100px');
		//$(".tooltip_sp").attr("data-tooltip","現在ありません")
		//toolTipText="現在ありません";


}




//	ブラウザ判定
var getBrowser = function(){
    var ua = window.navigator.userAgent.toLowerCase();
    var ver = window.navigator.appVersion.toLowerCase();
    var name = 'unknown';

    if (ua.indexOf("msie") != -1){
        if (ver.indexOf("msie 6.") != -1){
            name = 'ie6';
        }else if (ver.indexOf("msie 7.") != -1){
            name = 'ie7';
        }else if (ver.indexOf("msie 8.") != -1){
            name = 'ie8';
        }else if (ver.indexOf("msie 9.") != -1){
            name = 'ie9';
        }else if (ver.indexOf("msie 10.") != -1){
            name = 'ie10';
        }else{
            name = 'ie';
        }
    }else if(ua.indexOf('trident/7') != -1){
        name = 'ie11';
    }else if (ua.indexOf('chrome') != -1){
        name = 'chrome';
    }else if (ua.indexOf('safari') != -1){
        name = 'safari';
    }else if (ua.indexOf('opera') != -1){
        name = 'opera';
    }else if (ua.indexOf('firefox') != -1){
        name = 'firefox';
    }
    return name;
};


/**
 *  対応ブラウザかどうか判定
 *  
 *  @param  browsers    対応ブラウザ名を配列で渡す(ie6、ie7、ie8、ie9、ie10、ie11、chrome、safari、opera、firefox)
 *  @return             サポートしてるかどうかをtrue/falseで返す
 *
 */
var isSupported = function(browsers){
    var thusBrowser = getBrowser();
    for(var i=0; i<browsers.length; i++){
        if(browsers[i] == thusBrowser){
            return true;
            exit;
        }
    }
    return false;
};








/*


//iframeのページ切り替え  長さは自動取得
function page_change_auto(id_name,taget_page,page_height,ftime){
	//alert("aaa");


		$(id_name).attr("src", taget_page);
		//$(id_name).attr("height",  page_height);
		$("#box_center").fadeOut(ftime);
		$("#box_right").fadeOut(ftime);
		$('#contents_ifr').fadeIn(ftime);
}

// page_change_autoでiframeの子が開くとき親のiframeサイズを変える。
function iframe_hight(){
	
		
	$(window).load(function(){
		var pageHight = $(document).height() + 10; // +10 はIEの無駄にでるスクロール非表示対策
		$('#contents_ifr',parent.document).css({height:(pageHight)});
	});
}




function page_change_parent_auto(id_name,taget_page,ftime){

		$(id_name,parent.document).attr("src", taget_page);
		//$(id_name,parent.document).attr("height",  page_height);
		$("#box_center",parent.document).fadeOut(ftime);
		$("#box_right",parent.document).fadeOut(ftime);
		$('#contents_ifr',parent.document).fadeIn(ftime);
		//高さはiframe_hight()で取得する。これを子ページに書き込んでおく。

}


// page_change_parent_autoでiframeの子が開くとき親のiframeサイズを変える。
function iframe_hight_parent(){
	
	$(window).load(function(){
		var pageHight = $(document).height() + 10; // +10 はIEの無駄にでるスクロール非表示対策
		$('#contents_ifr',parent.document).css({height:(pageHight)});
	});
}

*/



/*
	do_sin=0;
    do{
//alert("aaa");
		if(	pageHight_main!=0){
			
			if(pageHight_center!=0){
				if(pageHight_right!=0){
					
					all_height(pageHight_main,1); //1:子から呼ぶ　0：親から呼ぶ。立ち上がりの全体長を設定する。
					//alert("aaa");
					do_sin=1;	
				}
			}
		}

    }while(do_sin==1);
*/	