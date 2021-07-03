$(function(){
    $(".btn01").click(()=>{
        $(".openpage").toggleClass("apear");
        $(".open01").toggleClass("apear");
        $(".btn01 img").attr("src", "images/GreenEnergy/txtbtn01-color.png");
        $(".btn02 img").attr("src", "images/GreenEnergy/txtbtn02.png");
        $(".btn03 img").attr("src", "images/GreenEnergy/txtbtn03.png");
        $(".btn04 img").attr("src", "images/GreenEnergy/txtbtn04.png");
        $(".btn05 img").attr("src", "images/GreenEnergy/txtbtn05.png");
        $(".btn06 img").attr("src", "images/GreenEnergy/txtbtn06.png");
    });
    $(".btn02").click(()=>{
        $(".openpage").toggleClass("apear");
        $(".open02").toggleClass("apear");
        $(".btn01 img").attr("src", "images/GreenEnergy/txtbtn01.png");
        $(".btn02 img").attr("src", "images/GreenEnergy/txtbtn02-color.png");
        $(".btn03 img").attr("src", "images/GreenEnergy/txtbtn03.png");
        $(".btn04 img").attr("src", "images/GreenEnergy/txtbtn04.png");
        $(".btn05 img").attr("src", "images/GreenEnergy/txtbtn05.png");
        $(".btn06 img").attr("src", "images/GreenEnergy/txtbtn06.png");
    });
    $(".btn03").click(()=>{
        $(".openpage").toggleClass("apear");
        $(".open05").toggleClass("apear");
        $(".btn01 img").attr("src", "images/GreenEnergy/txtbtn01.png");
        $(".btn02 img").attr("src", "images/GreenEnergy/txtbtn02.png");
        $(".btn03 img").attr("src", "images/GreenEnergy/txtbtn03-color.png");
        $(".btn04 img").attr("src", "images/GreenEnergy/txtbtn04.png");
        $(".btn05 img").attr("src", "images/GreenEnergy/txtbtn05.png");
        $(".btn06 img").attr("src", "images/GreenEnergy/txtbtn06.png");
    });
    $(".btn04").click(()=>{
        $(".openpage").toggleClass("apear");
        $(".open04").toggleClass("apear");
        $(".btn01 img").attr("src", "images/GreenEnergy/txtbtn01.png");
        $(".btn02 img").attr("src", "images/GreenEnergy/txtbtn02.png");
        $(".btn03 img").attr("src", "images/GreenEnergy/txtbtn03.png");
        $(".btn04 img").attr("src", "images/GreenEnergy/txtbtn04-color.png");
        $(".btn05 img").attr("src", "images/GreenEnergy/txtbtn05.png");
        $(".btn06 img").attr("src", "images/GreenEnergy/txtbtn06.png");
    });
    $(".btn05").click(()=>{
        $(".openpage").toggleClass("apear");
        $(".open03").toggleClass("apear");
        $(".btn01 img").attr("src", "images/GreenEnergy/txtbtn01.png");
        $(".btn02 img").attr("src", "images/GreenEnergy/txtbtn02.png");
        $(".btn03 img").attr("src", "images/GreenEnergy/txtbtn03.png");
        $(".btn04 img").attr("src", "images/GreenEnergy/txtbtn04.png");
        $(".btn05 img").attr("src", "images/GreenEnergy/txtbtn05-color.png");
        $(".btn06 img").attr("src", "images/GreenEnergy/txtbtn06.png");
    });
    $(".btn06").click(()=>{
        $(".openpage").toggleClass("apear");
        $(".open06").toggleClass("apear");
        $(".btn01 img").attr("src", "images/GreenEnergy/txtbtn01.png");
        $(".btn02 img").attr("src", "images/GreenEnergy/txtbtn02.png");
        $(".btn03 img").attr("src", "images/GreenEnergy/txtbtn03.png");
        $(".btn04 img").attr("src", "images/GreenEnergy/txtbtn04.png");
        $(".btn05 img").attr("src", "images/GreenEnergy/txtbtn05.png");
        $(".btn06 img").attr("src", "images/GreenEnergy/txtbtn06-color.png");
    });

    $(".btn01").mouseover(()=>{
        $(".btn01 img").attr("src", "images/GreenEnergy/txtbtn01-color.png");
    });
    $(".btn02").mouseover(()=>{
        $(".btn01 img").attr("src", "images/GreenEnergy/txtbtn01.png");
        $(".btn02 img").attr("src", "images/GreenEnergy/txtbtn02-color.png");
    });
    $(".btn03").mouseover(()=>{
        $(".btn03 img").attr("src", "images/GreenEnergy/txtbtn03-color.png");
    });
    $(".btn04").mouseover(()=>{
        $(".btn04 img").attr("src", "images/GreenEnergy/txtbtn04-color.png");
    });
    $(".btn05").mouseover(()=>{
        $(".btn05 img").attr("src", "images/GreenEnergy/txtbtn05-color.png");
    });
    $(".btn06").mouseover(()=>{
        $(".btn06 img").attr("src", "images/GreenEnergy/txtbtn06-color.png");
    });

    $(".btn01").mouseout(()=>{
        $(".btn01 img").attr("src", "images/GreenEnergy/txtbtn01.png");
    });
    $(".btn02").mouseout(()=>{
        $(".btn02 img").attr("src", "images/GreenEnergy/txtbtn02.png");
    });
    $(".btn03").mouseout(()=>{
        $(".btn03 img").attr("src", "images/GreenEnergy/txtbtn03.png");
    });
    $(".btn04").mouseout(()=>{
        $(".btn04 img").attr("src", "images/GreenEnergy/txtbtn04.png");
    });
    $(".btn05").mouseout(()=>{
        $(".btn05 img").attr("src", "images/GreenEnergy/txtbtn05.png");
    });
    $(".btn06").mouseout(()=>{
        $(".btn06 img").attr("src", "images/GreenEnergy/txtbtn06.png");
    });

    $(".back").click(()=>{
        $(".openpage").removeClass("apear");
        $(".open").removeClass("apear");
    })
});