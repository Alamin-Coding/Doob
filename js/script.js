// var preloader = document.querySelector(".preloader");

// window.addEventListener("load",function(){
//     setTimeout(()=> {
//         preloader.style.display = "none";
//     },2000)
// })

// Sticky Menu Start
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", ()=> {
    let sticky = window.scrollY;
    (sticky > 100) ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
})
// Sticky Menu End

// Navlink click JS stsrt
const links = document.querySelectorAll(".nav-link");

links.forEach((link)=> {
    link.addEventListener("click", function(){
        links.forEach((e)=> {e.classList.remove('active')})
        this.classList.add('active')
    })
})
// Navlink click JS end

const theme = document.querySelector(".mode")
const dark_icon = document.querySelector(".dark_icon")
let mode = "light"
var link = document.querySelector("#link");
theme.addEventListener("click", ()=> {
    if (mode === "light") {
        link.setAttribute('href','css/darkmode.css')
        dark_icon.setAttribute('src','images/moon.svg')
        mode = "moon"
    } else {
        link.setAttribute('href','css/style.css')
        dark_icon.setAttribute("src","images/sun.svg")
        mode = "light"
    }
})
// Portfolio js
var buttons = document.querySelectorAll(".prot_btn")
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove("active"))
        this.classList.add("active")
    })
})

// MixitUp JS Start
var mixer = mixitup('.mix_main');
// MixitUp JS End

// Feather Icon js start
feather.replace()
// Feather Icon js end


// Venobox JS Start
new VenoBox({
    selector: '.video_link',
});
// Venobox JS End








$(function(){
    $('.clients_slider').slick({
        slidesToShow: 1,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.prev',
        nextArrow: '.next',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    // let num = 0;
    // $(".mode").click(function(){

    //     if (num === 0) {
    //         $("#link").attr("href","css/style.css")
    //         $(".dark_icon").attr("src","images/moon.svg")
    //        num += 1
    //     }
    //     else {
    //         $("#link").attr("href","css/darkmode.css")
    //         $(".dark_icon").attr("src","images/sun.svg")
    //        num -= 1
    //     }
    //    console.log(num);
    // })

})


// Mobile Menu JS Start
const mobileMenOverlay = document.querySelector("#mobile_menu_overlay");
const mobileMenu = document.querySelector(".mobile_menu");

const close_btn = document.querySelector(".close_btn");
const mobile_bars = document.querySelector(".mobile_bars");

const handleMenuShow = ()=> {
  mobileMenOverlay.classList.add("show")
}

const handleMenuColse = ()=> {
  mobileMenOverlay.classList.remove("show")
}

mobileMenOverlay.addEventListener("click", function(e){
  if (!(e.target.closest(".mobile_menu")) || e.target.closest(".nav-link") ) {
    return mobileMenOverlay.classList.remove("show")
  }
})

close_btn.addEventListener("click", handleMenuColse)
mobile_bars.addEventListener("click", handleMenuShow)

// Mobile Menu JS End





