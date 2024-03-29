
/* ----------------------- Toggle Navbar ------------------------------- */
let navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function  hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
};
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

/* ----------------------- Active Section ---------------------- */
document.addEventListener("click", (e)=> {
    if(e.target.classList.contains("link-item")&& e.target.hash !== ""){
        const hash = e.target.hash;
        //console.log(hash);
        document.querySelector(".overlay").classList.add("active"); // activate overlay to prevent multiple clicks
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            //console.log("true");
            toggleNavbar();
        } else {
            //console.log("false");
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(()=> {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500)
    }
});

/* ----------------------- About Tabs --------------------- */
const tabContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

tabContainer.addEventListener("click",(e) => {
   // console.log(e.target);
   if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
    tabContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    //console.log(target);
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
   }
});


/* ------------------------- Portfolio Item Details Popup ---------------------------------- */
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")) {
       // console.log("View");
       togglePortfolioPopup();
       document.querySelector(".portfolio-popup").scrollTo(0,0);
       portfolioItemDetails(e.target.parentElement);
    }
});
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of it
document.addEventListener("click", (e) => {
    //console.log(e.target);
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
});

function portfolioItemDetails(portfolioItem){
  //console.log(portfolioItem);
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
  document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}




