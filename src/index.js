let navHome =document.querySelector(".home")
let navShop =document.querySelector(".shop")
let navBlog =document.querySelector(".blog")
let navAbout =document.querySelector(".about")
let navContect =document.querySelector(".contact")

const mainPage =document.querySelector(".main")
let blog =document.querySelector(".card")
let aboutWe =document.querySelector(".aboutUs")
let cardMen =document.querySelector(".men")
let cardLadies =document.querySelector(".ladies")
let contactUs =document.querySelector(".contactUs")
let buy =document.querySelector(".forBuy")

function Shop() {
    mainPage.style.display ="none"
    blog.style.display ="none"
    contactUs.style.display ="none"
    cardMen.style.display ="block"
    cardLadies.style.display ="block"
    
    navHome.style.color ="black"
    navShop.style.color ="blue"
    navBlog.style.color ="black"
    navAbout.style.color ="black"
    navContect.style.color ="black"
    
}

function Blog() {
     mainPage.style.display ="none"
     cardMen.style.display ="none"
     cardLadies.style.display ="none"
     aboutWe.style.display ="none"
     contactUs.style.display ="none"
     blog.style.display ="block"
     navHome.style.color ="black"
     navShop.style.color ="black"
     navBlog.style.color ="blue"
     navAbout.style.color ="black"
     navContect.style.color ="black"
     
}

function Home() {
    mainPage.style.display ="grid"
     cardMen.style.display ="grid"
     cardLadies.style.display ="grid"
     blog.style.display ="block"
     
     contactUs.style.display ="none"
     navHome.style.color ="blue"
     navShop.style.color ="black"
     navBlog.style.color ="black"
     navAbout.style.color ="black"
     navContect.style.color ="black"
}

function About() {
    mainPage.style.display ="none"
    cardMen.style.display ="none"
    cardLadies.style.display ="none"
    blog.style.display ="none"
    aboutWe.style.display ="block"
    
    navHome.style.color ="black"
     navShop.style.color ="black"
     navBlog.style.color ="black"
     navAbout.style.color ="blue"
     navContect.style.color ="black"
}

function Contact() {
    mainPage.style.display ="none"
    cardMen.style.display ="none"
    cardLadies.style.display ="none"
    blog.style.display ="none"
    contactUs.style.display ="block"
    aboutWe.style.display ="none"

    navHome.style.color ="black"
     navShop.style.color ="black"
     navBlog.style.color ="black"
     navAbout.style.color ="black"
     navContect.style.color ="blue"
}

function Buy(img) {
    let buyimage =document.getElementById("buyimg")
    buyimage.src =img.src

    mainPage.style.display ="none"
    cardMen.style.display ="none"
    cardLadies.style.display ="none"
    blog.style.display ="none"
    contactUs.style.display ="none"      
    buy.style.display ="block"      
    navHome.style.color ="black"
     navShop.style.color ="black"
     navBlog.style.color ="black"
     navAbout.style.color ="black"
     navContect.style.color ="blue"
}

function Added() {
    alert("added to cart")
    location.reload()
}
