var cbtn = document.querySelector("#cursor")
var bbtn = document.querySelector("#cursor-b")

document.addEventListener("mousemove", function (dets) {
    cbtn.style.left = dets.x+ 20 + "px"
    cbtn.style.top = dets.y + "px"
    bbtn.style.left = dets.x - 250 + "px"
    bbtn.style.top = dets.y - 250 + "px"

});

// movese hover time zoom 
var allh4 = document.querySelectorAll("#nav h4");
allh4.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        cbtn.style.scale = 3
        cbtn.style.border = "1px solid #fff"
        cbtn.style.backgroundColor = "transparent"
    })
    element.addEventListener("mouseleave",function(){
        cbtn.style.scale = 1
        cbtn.style.border = "0px solid #95c11e"
        cbtn.style.backgroundColor = "#95c11e"
    })
});

gsap.to("nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        // markers:true,
        scrub: 1

    }
});

// second page to scroll bcg changeing
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -100%",
        scrub: 2
    }
});

// page4 part 
gsap.to(".lquote",{
    // backgroundColor:"red",
    y: -60,
    x: -80,
    scrollTrigger:{
        trigger: ".lquote",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
    }
});

gsap.to(".rquote",{
    // backgroundColor:"red",
    y: 60,
    x: 55,
    scrollTrigger:{
        trigger: ".lquote",
        scroller: "body",
        // markers:true,
        start: "bottom 60%",
        end: "bottom 45%",
        scrub: 4,
    }
});

gsap.from("#page4 h1",{
    y:80,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 60%",
        scrub: 3
    }
})