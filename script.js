//for tabs in about
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")


function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// media for bars

// function myFunction(x) {
//     x.classList.toggle("activate");
// }

// $(document).ready(function(){
    
// });

// function myFunction(x)
// $('.menu-bar').click(function(){
//     $('.header .menu').toggleClass("activate");
// });

// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY < 500)
//         {
//             $('.scroll-up-btn').show()
//         }
//         else
//         {
//             $('.scroll-up-btn').show()
//         }
//     })

// });

// typescript

var typed = new Typed(".typing",{
    strings: ["MANAGING DIRECTOR OF GREEN GENOME","SHINING SIKH YOUTH ENTREPRENEUR","ENTERPRENURE","FOUNDER AND CEO OF MEDHAVI SKILLVERSITY"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


