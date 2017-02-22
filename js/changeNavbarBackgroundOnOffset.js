/*
  This JavaScript file checks for an offset object, if the window scroll,
  meets the Object then menu container gets a background which animates,
  to add a nice effect 
 */

(function(){
  
  //The following variables are declared for retrieving the DOM objects.
  //The menu container is the object for locating the menu container
  //The offset object is used for determining the offset of the object
  //so the animation can begin

  let navbar = document.getElementById("menu-container");
  let offset = document.getElementById("offset");
  
  //The following function passes the parameter e which indicates an Event object,
  //and sets the offset value by constatnly checking if the scroll has met the offset or not,
  //if so then the animation and background is added else reverts back to old style.

  function changeBackground(e) {  

    let checkOffset = offset.offsetTop - window.scrollY < 0;

    if(checkOffset) {
      navbar.style.transition = "0.3s";
      navbar.style.backgroundColor = "#252323";
      navbar.style.marginTop = "0%";
      navbar.style.padding = "1%";
    }else {
      navbar.style.backgroundColor = "inherit";
      navbar.style.marginTop = "20px";
      navbar.style.padding= "0px 15px";
    }

  }
  
  //The listener is added to the window object with the event scroll 
  //passed by the changeBackground function, allowing the listening of any changes

  if(window.addEventListener) {   
    window.addEventListener('scroll', function(){
      changeBackground(); 
    }, false); 
  }else {
    window.attachEvent("onscroll", function(){
      changeBackground();
    });
  }

}());