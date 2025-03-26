$("document").ready(function () {
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        console.log(pos)
        if(pos >= 150){
            $(".header").addClass("on")
            $(".header h1").find("img").attr("src", "images/logo-c97189.png")
        }else{
            $(".header").removeClass("on")
            $(".header h1").find("img").attr("src", "images/logo-c97189.png")
        }
    })

    let over_img = [
        "images/NO_1_hover.jpg",
        "images/NO_2_hover.jpg",
        "images/NO_3_hover.jpg",
        "images/work-detail02.jpg",
    ]

    let out_img = [
        "images/NO_1_hover.jpg",
        "images/NO_2_hover.jpg",
        "images/NO_3_hover.jpg",
        "images/work-detail.jpg",
    ]

    $(".works-wrap .list li").mouseover(function () { 
        let i = $(this).index();
        $(".works-wrap .list li").eq(i).find("img").attr("src", over_img[i])
    }).mouseout(function(){
        let i = $(this).index();
        $(".works-wrap .list li").eq(i).find("img").attr("src", out_img[i])
    })

    let detail_img = [
        "images/NO_1.jpg",
        "images/NO_2.jpg",
        "images/NO_3.jpg",
        "images/detail-product-detail.jpg",
    ]

    $(".works-wrap .list li").click(function(){

        let i = $(".works-wrap .list li").index(this);

        $(".window").slideDown();
        $(".window-content").slideDown();
        $(".window-content").find("img").attr("src", detail_img[i])
        $("html, body").css("overflow", "hidden")
        if(i === 3){
            $(".window-content").css("width", "860px");
        }else{
            $(".window-content").css("width", "1000px");
        }
    })

    $(".window, .close").click(function(){
        $(".window, .window-content").slideUp();
        $("html, body").css("overflow", "visible")
    })


});