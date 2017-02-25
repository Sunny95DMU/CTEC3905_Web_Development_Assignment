/*
  This JavaScript file acts as a Slider for the 1st Section of the homepage. 
  It allows the sliding of the different div sections one at a time depending
  on the users click from the left or right hand side of the screen.
 */

(function(){
  
  //The two variables declared below gather the sections containing the two arrows 
  //They allow the movement from one div to another when a click is recognized

  let leftarrow = document.getElementById("leftarrow");
  let rightarrow = document.getElementById("rightarrow");
  
  //The variable is being used for setting the Slider images using CSS
  //The reason for using CSS is because the images are uploaded via the CSS
  //and it does not use the traditional HTML appraoch, so because there is no structure
  //it was hard to implement the proper features of a slider

  let headerContainer = document.getElementsByClassName("header container");
  
  //The following variables are used as screen media sizes, used for referencing
  //the current width of the screen and allowing the change of the images from static to fixed

  let lmq = window.matchMedia("(min-width : 1024px) and (max-width : 1224px)");
  let xlmq = window.matchMedia("(min-width : 1224px) and (max-width : 1824px)");
  let xxlmq = window.matchMedia("(min-width : 1225px) and (max-width : 2560px)");
  
  //The following arrays are declared for storing the names of the jpg files that need to be uploaded
  //when the arrows are clicked

  let arr = ["england", "hongkong"];
  let carouselarr = ["England_Carousel.jpg", "HK_Carousel.jpg"];

  //The following variable is declared for knowing the screen is enlarged or not, it is of type boolean
  
  let enlarged;
  
  //The slideIndex variable keeps track of the slider position, this position allows the new image 
  //to be uploaded

  let slideIndex = 1;
  
  //The following is declared, it provides the sliding functionality starting from slide 1.
  
  showDivs(slideIndex);
  
  //The following are listening for screen changes, if any changes discovered, the changeToFixed method 
  //is called for each screen size, allowing the enlarged variable to be set as true or false, indicating screen size

  lmq.addListener(changeToFixed);
  changeToFixed(lmq);

  xlmq.addListener(changeToFixed);
  changeToFixed(xlmq);

  xxlmq.addListener(changeToFixed);
  changeToFixed(xxlmq);

  //The following function acts as a method for getting the Event.Object, which allows delegation of the Events
  
  function getTarget(e) {
    if(!e) {                          //Adds browser support by checking if e = event, if it is not recognized 
      e = window.event;               //then a window.event is added to turn e into an object and passes it as  
    }                                 //e.target|e.srcElement dpeneding on browser support
    return e.target || e.srcElement;
  }
  
  //The following function is a method for increasing the number of slides there are

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  //The following function creates the slides by getting the DOM object and finding out how many
  //slides there are, then allowing the slides to be move up or down depending on the users click

  function showDivs(n) {

  let i;                                                  //acts as the increment for the for loop
  let x = document.getElementsByClassName("mySlides");    //acts as the container for all the slides there are

  if (n > x.length) {slideIndex = 1}                      //if n happens to be greater than the current length,
                                                          //move to the 1st slide
    
  if (n < 1) {slideIndex = x.length}                      //if if slide is less than 1, then the current index becomes
                                                          //the last side
    
  for (i = 0; i < x.length; i++) {                        //this loop disables all the slides to 0
    x[i].style.left = "-100%";
    x[i].style.display = "none";  
  }
  
  //Here the loops are initiated by setting the current slide to whatever the position of slideIndex is
  //and activating the new image to display by changing the className so CSS will automatically pick up
    
  x[slideIndex-1].style.display = "block"; 
  x[slideIndex-1].className = "active mySlides page-header page-header-" + arr[slideIndex-1];

  //Lodas the current slide to fixed if the screen has been enlarged
  //Else loads statically
    
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
  
  //This method is checked by the media query listeners to set the value of enlarged to true or false depending on screen size

  function changeToFixed(mq) {

    if(mq.matches) {
      enlarged = true;
    }else {
      enlarged = false;
    }

  }
  
  //These are if statemenets used to add Listeners to the DOM Objects, it checks for
  //the broswer support, acting as fallback code and attaching the appropriate Event Object
  //depending on the browser support.
  //
  //It then adds the method set with a timer, to animate the slides left or right. The timer 
  //is used for delaying the slide process

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