const animation=gsap.timeline({
    paused:true,
    default:{
        ease: "power2.out",
        duration: 2,
    }
}).to(".box", {
    opacity: 1,
    stagger: 0.5,
    y: 0,
})


ScrollTrigger.create({
    trigger: ".box:nth-child(1)",
    markers: true,
    scrub: true,
    start: "top 50%",
    end:'bottom 20%',
    // onEnter:()=>{
    //     animation.play()
    // },
    // onLeaveBack:()=>{
    //     animation.reverse()
    // },
    animation,
    toggleActions: "play none none reverse"
})