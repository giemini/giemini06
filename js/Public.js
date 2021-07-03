$(function(){
    $(".A").mouseover(()=>{
        $(".colorblock").css("display","none");
        $(".Ahover").fadeIn(800);
    });
    $(".B").mouseover(()=>{
        $(".colorblock").css("display","none");
        $(".Bhover").fadeIn(800);
    });
    $(".C").mouseover(()=>{
        $(".colorblock").css("display","none");
        $(".Chover").fadeIn(800);
    });
    $(".D").mouseover(()=>{
        $(".colorblock").css("display","none");
        $(".Dhover").fadeIn(800);
    });
    $(".E").mouseover(()=>{
        $(".colorblock").css("display","none");
        $(".Ehover").fadeIn(800);
    });
    $(".F").mouseover(()=>{
        $(".colorblock").css("display","none");
        $(".Fhover").fadeIn(800);
    });
    $(".G").mouseover(()=>{
        $(".colorblock").css("display","none");
        $(".Ghover").fadeIn(800);
    });
    $(".H").mouseover(()=>{
        $(".colorblock").css("display","none");
        $(".Hhover").fadeIn(800);
    });
    $(".I").mouseover(()=>{
        $(".colorblock").css("display","none");
        $(".Ihover").fadeIn(800);
    });
    $(".J").mouseover(()=>{
        $(".colorblock").css("display","none");
        $(".Jhover").fadeIn(800);
    });
    $(".A2").mouseover(()=>{
        $(".colorblock").css("display","none");
        $(".A2hover").fadeIn(800);
    });
    $(".B2").mouseover(()=>{
        $(".colorblock").css("display","none");
        $(".B2hover").fadeIn(800);
    });
    $(".content").mouseout(()=>{
        $(".colorblock").css("display","none");
    });
    $(".A").click(()=>{
        $(".swipe02 .swiperarea").fadeIn();
        $(".openpic").css("display","none");
        $(".swipe02 .swiper-container").css("display","none");
        $("#One").css("display","block");
        $("body").addClass("noscroll");
    });
    $(".C").click(()=>{
        $(".swipe02 .swiperarea").fadeIn();
        $(".openpic").css("display","none");
        $(".swipe02 .swiper-container").css("display","none");
        $(".Two").css("display","block");
        $("body").addClass("noscroll");
    });
    $(".D").click(()=>{
        $(".swipe02 .swiperarea").fadeIn();
        $(".openpic").css("display","none");
        $(".swipe02 .swiper-container").css("display","none");
        $(".Three").css("display","block");
        $("body").addClass("noscroll");
    });
    $(".E").click(()=>{
        $(".swipe02 .swiperarea").fadeIn();
        $(".openpic").css("display","none");
        $(".swipe02 .swiper-container").css("display","none");
        $("#Four").css("display","block");
        $("body").addClass("noscroll");
    });
    $(".F").click(()=>{
        $(".swipe02 .swiperarea").fadeIn();
        $(".openpic").css("display","none");
        $(".swipe02 .swiper-container").css("display","none");
        $(".Fiv").css("display","block");
        $("body").addClass("noscroll");
    });
    $(".G").click(()=>{
        $(".swipe02 .swiperarea").fadeIn();
        $(".openpic").css("display","none");
        $(".swipe02 .swiper-container").css("display","none");
        $(".Six").css("display","block");
        $("body").addClass("noscroll");
    });
    $(".H").click(()=>{
        $(".swipe02 .swiperarea").fadeIn();
        $(".swipe02 .openpic").css("display","none");
        $(".Sev").css("display","block");
        $("body").addClass("noscroll");
    });
    $(".I").click(()=>{
        $(".swipe02 .swiperarea").fadeIn();
        $(".openpic").css("display","none");
        $(".swipe02 .swiper-container").css("display","none");
        $(".Eight").css("display","block");
        $("body").addClass("noscroll");
    });
    $(".A2").click(()=>{
        $(".swipe01 .swiperarea").fadeIn();
        $(".openpic").css("display","none");
        $(".Nine").css("display","block");
        $("body").addClass("noscroll");
    });
    $(".B2").click(()=>{
        $(".swipe01 .swiperarea").fadeIn();
        $(".openpic").css("display","none");
        $(".Ten").css("display","block");
        $("body").addClass("noscroll");
    });
    $(".swiperarea .back").click(()=>{
        $(".swiperarea").fadeOut();
        $(".openpic").css("display","none");
        $("body").removeClass("noscroll");
    });
});