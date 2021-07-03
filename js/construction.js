
$(function(){
    $(".openpage .close").click(()=>{
        $(".openpage").fadeOut(800);
        $(".loadingbox").removeClass("active");
    });
    $(".earthopen_pic  #open_picclose").click(()=>{
        $(".earthopen_pic").fadeOut(800);
    });
    $("#rebar-1").click(()=>{
        $(".earthopen").fadeIn(800);
    });
    $(".open").click(()=>{
        $(".earthopen_pic").fadeIn(800);
    });
    $("#rebar-2").click(()=>{
        $(".rebaropen").fadeIn(800);
    });
    $("#rebar-3").click(()=>{
        $(".rebaropen-2").fadeIn(800);
    });
    $("#water-2").click(()=>{
        $(".water-1").fadeIn(800);
    });
    $("#water-3").click(()=>{
        $(".water-2").fadeIn(800);
    });
    $("#oxygen-1").click(()=>{
        $(".oxygen-1").fadeIn(800);
    });
    $("#oxygen-2").click(()=>{
        $(".oxygen-2").fadeIn(800);
    });
    $("#oxygen-3").click(()=>{
        $(".oxygen-3").fadeIn(800);
    });
    $("#drain-1").click(()=>{
        $(".holdwater-1").fadeIn(800);
    });
    $("#trap-2").click(()=>{
        $(".trap-2").fadeIn(800);
    });
    $("#design").click(()=>{
        $(".design_pic").fadeIn(800);
    });
    $("#design2").click(()=>{
        $(".design_pic2").fadeIn(800);
    });
    $("#hinet-1").click(()=>{
        $(".hinet-1").fadeIn(800);
        // AutoLogout();
    });
    $(".close_pic").click(()=>{
        $(".openpic").fadeOut(800);
    });
    $("#IPcamra-1").click(()=>{
        $(".IPcamra-1").fadeIn(800);
    });
    $("#first").click(()=>{
        $(".IPcamra-1 .content").removeClass("show");
        $(".IPcamra-1 .openbg").removeClass("show");
        $(".IPcamra-1 .btn").removeClass("color");
        $("#cont1").addClass("show");
        $("#bg1").addClass("show");
        $("#first").addClass("color");
    });
    $("#Sec").click(()=>{
        $(".IPcamra-1 .content").removeClass("show");
        $(".IPcamra-1 .openbg").removeClass("show");
        $(".IPcamra-1 .btn").removeClass("color");
        $("#cont2").addClass("show");
        $("#bg2").addClass("show");
        $("#Sec").addClass("color");
    });
    $("#Tird").click(()=>{
        $(".IPcamra-1 .content").removeClass("show");
        $(".IPcamra-1 .openbg").removeClass("show");
        $(".IPcamra-1 .btn").removeClass("color");
        $("#cont3").addClass("show");
        $("#bg3").addClass("show");
        $("#Tird").addClass("color");
    });
    $("#Four").click(()=>{
        $(".IPcamra-1 .content").removeClass("show");
        $(".IPcamra-1 .openbg").removeClass("show");
        $(".IPcamra-1 .btn").removeClass("color");
        $("#cont4").addClass("show");
        $("#bg4").addClass("show");
        $("#Four").addClass("color");
    });
    $("#camra").click(()=>{
        $(".camra_pic").fadeIn(800);
    });
    $("#camra2").click(()=>{
        $(".camra_pic2").fadeIn(800);
    });
    $("#IPcamra-2").click(()=>{
        $(".IPcamra-2").fadeIn(800);
    });
    
});