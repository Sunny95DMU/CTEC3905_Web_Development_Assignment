/*
  This JavaScript file acts as a modal for all the images within the galleries content.
  It helps by enlarging the image, creating a nice effect.
 */

(function(){
  
  //The following are all DOM Objects. 
  //
  //container contains the Section for which gallery it is providing the modal effect for, so if the user is in england
  //gallery, then the england flickr images are loaded
  //
  //modal gets the object for the Modal container. This is used for displaying the image in an enlarged format
  //
  //modalImg is where the images are replaced by the images within the galleries for display
  //
  //span is used for retrieving the gallery close button, so that by clicking it, it will close the Modal
    
  let container = document.getElementById("england-flickr-images") || document.getElementById("hongkong-flickr-images");
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("img01");
  let span = document.getElementsByClassName("gallery-close")[0];
  
  //Here the event listeners are applied to container for displaying the image that has been clicked in large
  //otherwise the modal can also be closed by clicking the close button. They are all carrying click event listeners
  //to activate functions

  if(container.addEventListener) {
    container.addEventListener("click", function(e) {
        displayModal(e);
    }, false);
  }

  if(span.addEventListener) {   
    span.addEventListener("click", function() {
        closeModal();
    }, false);
  }else {
    span.attachEvent("onclick", function() {
      closeModal();
    });
  }
  
  //The following function acts as a method for getting the Event.Object, which allows delegation of the Events
  
  function getTarget(e) {
    if(!e) {                          //Adds browser support by checking if e = event, if it is not recognized 
      e = window.event;               //then a window.event is added to turn e into an object and passes it as  
    }                                 //e.target|e.srcElement dpeneding on browser support
    return e.target || e.srcElement;
  }
  
  //This function acts as the display, so when an image within the gallery is clicked, it will check for the target
  //event object that has been clicked and changes the display of that modal to block and changes the src of the modalImg
  //to the src of the event object that was clicked which was the image, now being shown in enlarged.

  function displayModal(e) {
    let target = getTarget(e);
    modal.style.display = "block";
    modalImg.src = e.target.src;
  }
  
  //This function will close the Modal view by setting the display back to none

  function closeModal() {
    modal.style.display = "none";
  }
  
}());


