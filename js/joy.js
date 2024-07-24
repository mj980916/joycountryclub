$(function(){

    $(".menu > li").mouseover(function(){
        $(this).find(".sub").stop().slideDown()
    })
    $(".menu > li").mouseout(function(){
        $(".sub").stop().slideUp()
    })


    var n = 0
    setInterval(function(){

        n = (n + 1) % 4

        $(".top_move").animate({top: n * (-400) + "px"}, 500)

    }, 3000)

    // setInterval(function(){
    //     $(".top_move").animate({t})
    // }, 2500)


    $(".contents h2").click(function(){

        $(".contents h2").removeClass("on");
        $(this).addClass("on")
        $(".contents ul").hide()
        $(this).next().css({display : "flex"})

    })

    $(".p_click").click(function(){
        $(".pop").fadeIn();
    })
    $(".close").click(function(){
        $(".pop").fadeOut();
    })

})//fin.