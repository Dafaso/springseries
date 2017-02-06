

var open = false;
//
// $("html").click(function(){
//   if (open === true){
//     alert(open + " 1");
//     $("#navigation").css("display","none");
//         open = false;
//         alert(open + "hit");
//   }
// });

$(window).load(function(){
    $(".panel").css("height",(this.innerHeight)-90 + "px");
});


$(window).resize(function(){
    $(".panel").css("height",(this.innerHeight)-90 + "px");
});


$(".navDrop").click(function(){
  $("#navigation").css("display","block");
    open = true;
});

$("#x").click(function(){
  $("#navigation").css("display","none");
  open = false;
});

$(".rideone_detail_button").click(function(){
  $("#rideone_detail").fadeIn(400);
});

$(".backone").click(function(){
  $("#rideone_detail").fadeOut(400);
});

$(".ridetwo_detail_button").click(function(){
  $("#ridetwo_detail").fadeIn(400);
});

$(".backtwo").click(function(){
  $("#ridetwo_detail").fadeOut(400);
});

$(".ridethree_detail_button").click(function(){
  $("#ridethree_detail").fadeIn(400);
});

$(".backthree").click(function(){
  $("#ridethree_detail").fadeOut(400);
});

$(".ridefour_detail_button").click(function(){
  $("#ridefour_detail").fadeIn(400);
});

$(".backfour").click(function(){
  $("#ridefour_detail").fadeOut(400);
});

$(".ridefive_detail_button").click(function(){
  $("#ridefive_detail").fadeIn(400);
});

$(".backfive").click(function(){
  $("#ridefive_detail").fadeOut(400);
});

$(".ridesix_detail_button").click(function(){
  $("#ridesix_detail").fadeIn(400);
});

$(".backsix").click(function(){
  $("#ridesix_detail").fadeOut(400);
});



// $("").click(function(){
//     //scroll DOWN
//         var WH = $(window).height();
//         var SH = $('body').prop("scrollHeight");
//         $("body").stop().animate({scrollTop: SH-WH}, 880);
//                      //.stop() needed!!
// });

$("#welcomelink, #logo").click(function(e){
    //scroll UP
    e.preventDefault();
    $("#navigation").css("display","none");
    $("body").stop().animate({scrollTop:0}, 880);
                     //.stop() needed!!
});

$("#aboutlink").click(function(e){
    //scroll UP
    e.preventDefault();
    $("#navigation").css("display","none");
    $("body").stop().animate({scrollTop:(($(document).height()/9)*1)-10}, 880);
                     //.stop() needed!!
});

$("#week1link").click(function(e){
    //scroll UP
    e.preventDefault();
    $("#navigation").css("display","none");
    $("body").stop().animate({scrollTop:(($(document).height()/9)*2)-20}, 880);
                     //.stop() needed!!
});

$("#week2link").click(function(e){
    //scroll UP
    e.preventDefault();
    $("#navigation").css("display","none");
    $("body").stop().animate({scrollTop:(($(document).height()/9)*3)-30}, 880);
                     //.stop() needed!!
});

$("#week3link").click(function(e){
    //scroll UP
    e.preventDefault();
    $("#navigation").css("display","none");
    $("body").stop().animate({scrollTop:(($(document).height()/9)*4)-40}, 880);
                     //.stop() needed!!
});

$("#week4link").click(function(e){
    //scroll UP
    e.preventDefault();
    $("#navigation").css("display","none");
    $("body").stop().animate({scrollTop:(($(document).height()/9)*5)-50}, 880);
                     //.stop() needed!!
});

$("#week5link").click(function(e){
    //scroll UP
    e.preventDefault();
    $("#navigation").css("display","none");
    $("body").stop().animate({scrollTop:(($(document).height()/9)*6)-60}, 880);
                     //.stop() needed!!
});

$("#week6link").click(function(e){
    //scroll UP
    e.preventDefault();
    $("#navigation").css("display","none");
    $("body").stop().animate({scrollTop:(($(document).height()/9)*7)-70}, 880);
                     //.stop() needed!!
});

$("#newsletterlink").click(function(e){
    //scroll UP
    e.preventDefault();
    $("#navigation").css("display","none");
    $("body").stop().animate({scrollTop:(($(document).height()/9)*8)-80}, 880);
                     //.stop() needed!!
});
