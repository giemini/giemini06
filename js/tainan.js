$(function(){
    $(".txt01").mouseover(()=>{
        $(".txt01 img").attr("src", "images/Tainan/txt01-color.png");
    });
    $(".txt01").mouseout(()=>{
        $(".txt01 img").attr("src", "images/Tainan/txt01.png");
    });

    $(".txt02").mouseover(()=>{
        $(".txt02 img").attr("src", "images/Tainan/txt02-color.png");
    });
    $(".txt02").mouseout(()=>{
        $(".txt02 img").attr("src", "images/Tainan/txt02.png");
    });

    $(".txt03").mouseover(()=>{
        $(".txt03 img").attr("src", "images/Tainan/txt03-color.png");
    });
    $(".txt03").mouseout(()=>{
        $(".txt03 img").attr("src", "images/Tainan/txt03.png");
    });

    $(".txt04").mouseover(()=>{
        $(".txt04 img").attr("src", "images/Tainan/txt04-color.png");
    });
    $(".txt04").mouseout(()=>{
        $(".txt04 img").attr("src", "images/Tainan/txt04.png");
    });

    $(".txt05").mouseover(()=>{
        $(".txt05 img").attr("src", "images/Tainan/txt05-color.png");
    });
    $(".txt05").mouseout(()=>{
        $(".txt05 img").attr("src", "images/Tainan/txt05.png");
    });

    $(".txt06").mouseover(()=>{
        $(".txt06 img").attr("src", "images/Tainan/txt06-color.png");
    });
    $(".txt06").mouseout(()=>{
        $(".txt06 img").attr("src", "images/Tainan/txt06.png");
    });

    $(".txt01").click(()=>{
        $(".open").fadeIn(800);
        $(".taipeiOpen").toggleClass("apear");
    });
    $(".txt02").click(()=>{
        $(".open").fadeIn(800);
        $(".taoyuanOpen").toggleClass("apear");
    });
    $(".txt03").click(()=>{
        $(".open").fadeIn(800);
        $(".hsinchuOpen").toggleClass("apear");
    });
    $(".txt04").click(()=>{
        $(".open").fadeIn(800);
        $(".taichungOpen").toggleClass("apear");
    });
    $(".txt05").click(()=>{
        $(".open").fadeIn(800);
        $(".tainanOpen").toggleClass("apear");
    });
    $(".txt06").click(()=>{
        $(".open").fadeIn(800);
        $(".kaoshsiungOpen").toggleClass("apear");
    });
    $(".back").click(()=>{
        $(".open").fadeOut(800);
        $(".openpage").removeClass("apear");
    });
});