(function(){
    
    let leftarrow = document.getElementById("leftarrow");
    let rightarrow = document.getElementById("rightarrow");
    
    let headerContainer = document.getElementsByClassName("header container");
    
    let lmq = window.matchMedia("(min-width : 1024px) and (max-width : 1224px)");
    let xlmq = window.matchMedia("(min-width : 1224px) and (max-width : 1824px)");
    let xxlmq = window.matchMedia("(min-width : 1225px) and (max-width : 2560px)");
    
    let arr = ["england", "hongkong"];
    let carouselarr = ["England_carousel.jpg", "HK_Carousel.jpg"];
    
    let enlarged;
    
    let slideIndex = 1;
    showDivs(slideIndex);
    

    lmq.addListener(changeToFixed);
    changeToFixed(lmq);
    
    xlmq.addListener(changeToFixed);
    changeToFixed(xlmq);
    
    xxlmq.addListener(changeToFixed);
    changeToFixed(xxlmq);

    
    function getTarget(e) {
      if(!e) {
        e = window.event;     
      }
      return e.target || e.srcElement;
    }
  

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        
      let i;
      let x = document.getElementsByClassName("mySlides");

      if (n > x.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
         x[i].style.left = "-100%";
         x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block"; 
      x[slideIndex-1].className = "active mySlides page-header page-header-" + arr[slideIndex-1];
        
      if(x[slideIndex-1].className == "active mySlides page-header page-header-" + arr[slideIndex-1] && enlarged) {
          headerContainer[0].style.transition = "all 0.5s";
          headerContainer[0].style.padding = "0";
          headerContainer[0].style.background = "url(images/carousel_background/" + carouselarr[slideIndex-1] + ") no-repeat fixed";
          headerContainer[0].style.backgroundSize = "cover";
          headerContainer[0].style.backgroundPosition = "top";
      }else if(x[slideIndex-1].className == "active mySlides page-header page-header-" + arr[slideIndex-1]) {
          headerContainer[0].style.transition = "all 0.5s";
          headerContainer[0].style.padding = "0";
          headerContainer[0].style.background = "url(images/carousel_background/" + carouselarr[slideIndex-1] + ") no-repeat";
          headerContainer[0].style.backgroundSize = "cover";
          headerContainer[0].style.backgroundPosition = "top";
      }

    }
    
    function changeToFixed(mq) {
        
        if(mq.matches) {
          enlarged = true;
        }else {
          enlarged = false;
        }
        
    }
    
    if(leftarrow.addEventListener) {
        leftarrow.addEventListener("click", function(e) {
          setTimeout(plusDivs(-1), 3000);
        });
      }else {
        leftarrow.attachEvent("onclick", function() {
         setTimeout(plusDivs(-1), 3000);
        });
      }
    
    if(rightarrow.addEventListener) {
        rightarrow.addEventListener("click", function(e) {
          setTimeout(plusDivs(1), 3000);
        });
      }else {
        rightarrow.attachEvent("onclick", function() {
         setTimeout(plusDivs(1), 3000);
        });
      }
    
}());