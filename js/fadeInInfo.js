/*
  This JavaScript file checks for an offset object, if the window scroll,
  meets the Object then the hidden item infos will animate into the screen
  one by one, giving a nice transistional effect
 */

(function(){
  
  //The following variables are used to locate the container item info and info offset,
  //from the DOM object. item info retrieves all the divs with information and applys
  //the animations to each of the elements and delaying their animation time.
  //They are fun using the fdsseq animation found in the CSS file.
  //
  //The other variable is the offset for the animation to activate
  
  let childNodes = document.getElementsByClassName("item info");
  let offset = document.getElementById("info-offset");
  
  //The following function passes the parameter e which indicates an Event object,
  //and sets the offset value by constatnly checking if the scroll has met the offset or not,
  //if offset is met then the animation is added to each of the objects delaying their time.
  
  function changeBackground(e) {  

    let checkOffset = offset.offsetTop - window.scrollY < 0;

    if(checkOffset) {
      
      childNodes[0].style.animation = "fdsseq .5s forwards";
      childNodes[0].style.animationDelay = ".5s";
      childNodes[1].style.animation = "fdsseq .5s forwards";
      childNodes[1].style.animationDelay = "1s";
      childNodes[2].style.animation = "fdsseq .5s forwards";
      childNodes[2].style.animationDelay = "1.5s";
      
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


