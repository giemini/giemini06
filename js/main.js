$(window).on('load', function() {
    $(".loading").fadeOut(300); //關閉loading
});

$(function() {
    $(".humberA").on("click", function() {
        $(".menuArea").toggleClass("action");
        $(".humberA").toggleClass("action");
        $(".humberB").toggleClass("action");
    });
    $(".humberB").on("click", function() {
        $(".menuArea").toggleClass("action");
        $(".humberA").toggleClass("action");
        $(".humberB").toggleClass("action");
    });
    $(".navbtn").on("click", function() {
        $(".Subtn").stop().slideUp(600);
        $(this).children(".Subtn").stop().slideToggle(600);
    });
    $(".Btn .btns").on("click", function() {
        $(".btns").removeClass("checked");
        $(this).addClass("checked");
    });
    $(".btn1").click(function() {
        $(".content").css("display", "none");
        $(".pic").css("display", "none");
        $(".Bread").css("display", "block");
        $(".Bread2").css("display", "none");
        $(".content1").fadeIn(800);
        $(".pic1").fadeIn(800);
    });
    $(".btn2").click(function() {
        $(".content").css("display", "none");
        $(".pic").css("display", "none");
        $(".Bread").css("display", "none");
        // $(".dragarea").fadeOut(800);
        $(".Bread2").css("display", "block");
        $(".content2").fadeIn(800);
        $(".pic2").fadeIn(800);
    });
    $(".btn3").click(function() {
        $(".content").css("display", "none");
        $(".pic").css("display", "none");
        $(".Bread").css("display", "none");
        // $(".dragarea").fadeOut(800);
        $(".Bread2").css("display", "block");
        $(".content3").fadeIn(800);
        $(".pic3").fadeIn(800);
    });
    $(".btn4").click(function() {
        $(".content").css("display", "none");
        $(".pic").css("display", "none");
        $(".Bread").css("display", "none");
        // $(".dragarea").fadeOut(800);
        $(".Bread2").css("display", "block");
        $(".content4").fadeIn(800);
        $(".pic4").fadeIn(800);
    });
    $(".btn5").click(function() {
        $(".content").css("display", "none");
        $(".pic").css("display", "none");
        $(".Bread").css("display", "none");
        // $(".dragarea").fadeOut(800);
        $(".Bread2").css("display", "block");
        $(".content5").fadeIn(800);
        $(".pic5").fadeIn(800);
    });
    $(".openbtn1").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic1").fadeIn(800);
    });
    $(".openbtn2").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic2").fadeIn(800);
    });
    $(".openbtn3").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic3").fadeIn(800);
    });
    $(".openbtn4").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic4").fadeIn(800);
    });
    $(".openbtn5").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic5").fadeIn(800);
    });
    $(".back").click(function() {
        $(".openpic").fadeOut(800);
    });
    $(".carrefourbtn").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic6").fadeIn(800);
    });
    $(".univercitybtn").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic7").fadeIn(800);
    });
    $(".hightspeedbtn").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic8").fadeIn(800);
    });
    $(".citycenterbtn").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic9").fadeIn(800);
    });
    $(".openbtn10").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic10").fadeIn(800);
    });
    $(".openbtn11").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic11").fadeIn(800);
    });
    $(".openbtn12").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic12").fadeIn(800);
    });
    $(".openbtn13").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic13").fadeIn(800);
    });
    $(".openbtn14").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic14").fadeIn(800);
    });
    $(".openbtn15").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic15").fadeIn(800);
    });
    $(".openbtn16").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic16").fadeIn(800);
    });
    $(".openbtn17").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic17").fadeIn(800);
    });
    $(".openbtn18").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic18").fadeIn(800);
    });
    $(".openbtn19").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic19").fadeIn(800);
    });
    $(".openbtn20").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic20").fadeIn(800);
    });
    $(".openbtn21").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic21").fadeIn(800);
    });
    $(".openbtn22").click(function() {
        $(".openpic").css("display", "none");
        $(".openpic22").fadeIn(800);
    });
});

$(function() {
    $(".B2btn").click(() => {
        $(".floor").removeClass("pear");
        $(".B2").addClass("pear");
        $(".floors").removeClass("check");
        $(".B2btn").addClass("check");
    });
    $(".B1btn").click(() => {
        $(".floor").removeClass("pear");
        $(".B1").addClass("pear");
        $(".floors").removeClass("check");
        $(".B1btn").addClass("check");
    });
    $(".1Fbtn").click(() => {
        $(".floor").removeClass("pear");
        $(".1F").addClass("pear");
        $(".floors").removeClass("check");
        $(".1Fbtn").addClass("check");
    });
    $(".2Fbtn").click(() => {
        $(".floor").removeClass("pear");
        $(".2F").addClass("pear");
        $(".floors").removeClass("check");
        $(".2Fbtn").addClass("check");
    });
    $(".3Fbtn").click(() => {
        $(".floor").removeClass("pear");
        $(".3F").addClass("pear");
        $(".floors").removeClass("check");
        $(".3Fbtn").addClass("check");
    });
    $(".4-5Fbtn").click(() => {
        $(".floor").removeClass("pear");
        $(".4-5F").addClass("pear");
        $(".floors").removeClass("check");
        $(".4-5Fbtn").addClass("check");
    });
    $(".6Fbtn").click(() => {
        $(".floor").removeClass("pear");
        $(".6F").addClass("pear");
        $(".floors").removeClass("check");
        $(".6Fbtn").addClass("check");
    });
    $(".7-9Fbtn").click(() => {
        $(".floor").removeClass("pear");
        $(".7-9F").addClass("pear");
        $(".floors").removeClass("check");
        $(".7-9Fbtn").addClass("check");
    });
    $(".10Fbtn").click(() => {
        $(".floor").removeClass("pear");
        $(".10F").addClass("pear");
        $(".floors").removeClass("check");
        $(".10Fbtn").addClass("check");
    });
    $(".11Fbtn").click(() => {
        $(".floor").removeClass("pear");
        $(".11F").addClass("pear");
        $(".floors").removeClass("check");
        $(".11Fbtn").addClass("check");
    });
    $(".12Fbtn").click(() => {
        $(".floor").removeClass("pear");
        $(".12F").addClass("pear");
        $(".floors").removeClass("check");
        $(".12Fbtn").addClass("check");
    });
    $(".13Fbtn").click(() => {
        $(".floor").removeClass("pear");
        $(".13F").addClass("pear");
        $(".floors").removeClass("check");
        $(".13Fbtn").addClass("check");
    });
    $(".RFbtn").click(() => {
        $(".floor").removeClass("pear");
        $(".RF").addClass("pear");
        $(".floors").removeClass("check");
        $(".RFbtn").addClass("check");
    });
})

$(function() {
    $(".H1").mouseover(() => {
        $(".H1 img").attr("src", "./images/floor/H1_color.png");
    });
    $(".H1").mouseout(() => {
        $(".H1 img").attr("src", "./images/floor/H1.png");
    });
    $(".H2").mouseover(() => {
        $(".H2 img").attr("src", "./images/floor/H2_color.png");
    });
    $(".H2").mouseout(() => {
        $(".H2 img").attr("src", "./images/floor/H2.png");
    });
    $(".H3").mouseover(() => {
        $(".H3 img").attr("src", "./images/floor/H3_color.png");
    });
    $(".H3").mouseout(() => {
        $(".H3 img").attr("src", "./images/floor/H3.png");
    });
    $(".H5").mouseover(() => {
        $(".H5 img").attr("src", "./images/floor/H5_color.png");
    });
    $(".H5").mouseout(() => {
        $(".H5 img").attr("src", "./images/floor/H5.png");
    });
    $(".H6").mouseover(() => {
        $(".H6 img").attr("src", "./images/floor/H6_color.png");
    });
    $(".H6").mouseout(() => {
        $(".H6 img").attr("src", "./images/floor/H6.png");
    });
    $(".H7").mouseover(() => {
        $(".H7 img").attr("src", "./images/floor/H7_color.png");
    });
    $(".H7").mouseout(() => {
        $(".H7 img").attr("src", "./images/floor/H7.png");
    });
    $(".H8").mouseover(() => {
        $(".H8 img").attr("src", "./images/floor/H8_color.png");
    });
    $(".H8").mouseout(() => {
        $(".H8 img").attr("src", "./images/floor/H8.png");
    });

    $(".F1").mouseover(() => {
        $(".F1 img").attr("src", "./images/floor/F1_color.png");
    });
    $(".F1").mouseout(() => {
        $(".F1 img").attr("src", "./images/floor/F1.png");
    });
    $(".F2").mouseover(() => {
        $(".F2 img").attr("src", "./images/floor/F2_color.png");
    });
    $(".F2").mouseout(() => {
        $(".F2 img").attr("src", "./images/floor/F2.png");
    });
    $(".F3").mouseover(() => {
        $(".F3 img").attr("src", "./images/floor/F3_color.png");
    });
    $(".F3").mouseout(() => {
        $(".F3 img").attr("src", "./images/floor/F3.png");
    });
    $(".F5").mouseover(() => {
        $(".F5 img").attr("src", "./images/floor/F5_color.png");
    });
    $(".F5").mouseout(() => {
        $(".F5 img").attr("src", "./images/floor/F5.png");
    });
    $(".F6").mouseover(() => {
        $(".F6 img").attr("src", "./images/floor/F6_color.png");
    });
    $(".F6").mouseout(() => {
        $(".F6 img").attr("src", "./images/floor/F6.png");
    });
    $(".F7").mouseover(() => {
        $(".F7 img").attr("src", "./images/floor/F7_color.png");
    });
    $(".F7").mouseout(() => {
        $(".F7 img").attr("src", "./images/floor/F7.png");
    });
    $(".F8").mouseover(() => {
        $(".F8 img").attr("src", "./images/floor/F8_color.png");
    });
    $(".F8").mouseout(() => {
        $(".F8 img").attr("src", "./images/floor/F8.png");
    });

    $(".E1").mouseover(() => {
        $(".E1 img").attr("src", "./images/floor/E1_color.png");
    });
    $(".E1").mouseout(() => {
        $(".E1 img").attr("src", "./images/floor/E1.png");
    });
    $(".E2").mouseover(() => {
        $(".E2 img").attr("src", "./images/floor/E2_color.png");
    });
    $(".E2").mouseout(() => {
        $(".E2 img").attr("src", "./images/floor/E2.png");
    });
    $(".E3").mouseover(() => {
        $(".E3 img").attr("src", "./images/floor/E3_color.png");
    });
    $(".E3").mouseout(() => {
        $(".E3 img").attr("src", "./images/floor/E3.png");
    });
    $(".E5").mouseover(() => {
        $(".E5 img").attr("src", "./images/floor/E5_color.png");
    });
    $(".E5").mouseout(() => {
        $(".E5 img").attr("src", "./images/floor/E5.png");
    });
    $(".E6").mouseover(() => {
        $(".E6 img").attr("src", "./images/floor/E6_color.png");
    });
    $(".E6").mouseout(() => {
        $(".E6 img").attr("src", "./images/floor/E6.png");
    });
    $(".E7").mouseover(() => {
        $(".E7 img").attr("src", "./images/floor/E7_color.png");
    });
    $(".E7").mouseout(() => {
        $(".E7 img").attr("src", "./images/floor/E7.png");
    });
    $(".E8").mouseover(() => {
        $(".E8 img").attr("src", "./images/floor/E8_color.png");
    });
    $(".E8").mouseout(() => {
        $(".E8 img").attr("src", "./images/floor/E8.png");
    });
})

$(function() {
    function loadHeadFunciton() {

        // $(".humberA").click(function() {
        //     $(".menuArea").toggleClass("action");
        //     $(".humberA").toggleClass("action");
        //     $(".humberB").toggleClass("action");
        // });
        // $(".humberB").click(function() {
        //     $(".menuArea").toggleClass("action");
        //     $(".humberA").toggleClass("action");
        //     $(".humberB").toggleClass("action");
        // });
        /*$(".havesmenu").mouseover(function(){
            $(".smenubg" ).css("opacity","1");
        });
        $(".havesmenu").mouseout(function(){
            $(".smenubg" ).css("opacity","0");
        });*/


        /*$(".LoadHeader .menubox .headerBtn .btnAll>li").click(function () {
            $(this).children(".minor_Btn").toggleClass("action");
        });*/
        /*選單開關*/
        /*$(".LoadHeader .menubox .headerBtn .btnAll>li").click(function () {
            var N = $(this).index();
            var total = $(".LoadHeader .menubox .headerBtn .btnAll>li").length;
            for (var i = 0; i < total; i++) {
                if (i == N) {
                    $(".LoadHeader .menubox .headerBtn .btnAll>li").stop().eq(i).children(".news_ul").stop().toggleClass("action");
                } else {
                    $(".LoadHeader .menubox .headerBtn .btnAll>li").stop().eq(i).children(".news_ul").stop().removeClass("action");
                }
            }
        });*/
        /*$(".LoadHeader .menubox .headerBtn .btnAll li .MainItem").click(function () {
            $(".LoadHeader .openBtn .opener").removeClass("action");
            $(".headerBtn").removeClass("action");
        });*/
        /*$(".LoadHeader .menubox .headerBtn .btnAll .news_ul li a").click(function () {
            $(".LoadHeader .openBtn .opener").removeClass("action");
            $(".headerBtn").removeClass("action");
        });*/
    }

    function loadFootFunciton() {}


    // $('footer').load("header.html .loadfooter", function(response, status, xhr) {
    //     loadHeadFunciton();
    // });


    $(window).resize(function() {

    }).resize();

    $(window).scroll(function() {
        var windowHeight = $(window).height(); //視窗高
        var windowWidth = $(window).width(); //視窗高
        var scrollTop = $(window).scrollTop() //現在高
        var scrollLeft = $(window).scrollLeft() //現在高
        var scrollPosition = windowHeight + scrollTop;
        var docHeight = $(document).height(); //HTML總長度

        //動畫用
        $(".animated").each(function() {
            animation_this = $(this);
            if (scrollPosition > animation_this.offset().top) {
                animation_this.css("animation-play-state", "running");
            };
        });

        $(".aniLeft, .aniRight, .aniUp, .aniDown, .aniNoMove, .aniScale ").each(function() {
            var animation_this = $(this);
            if (scrollPosition > animation_this.offset().top + 100) {
                animation_this.addClass("onShow");
            }
        })


        //TOP出現
        $(".fixed_btn").each(function() {
            if (scrollTop > windowHeight / 2) {
                $(this).addClass("show");
            } else {
                $(this).removeClass("show");
            }
        });

    }).scroll();
    /*top*/
    $(".fixed_btn .top_btn").click(function() {
        var scrollTop = $(window).scrollTop() //現在高
        var needTime = scrollTop / 10 + 300;

        $("html,body").stop();
        $("html,body").animate({
            scrollTop: 0
        }, needTime)
    });
});