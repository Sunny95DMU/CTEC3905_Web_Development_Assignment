(function(){
    
  let container = document.getElementById("england-flickr-images") || document.getElementById("hongkong-flickr-images");
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("img01");
  let span = document.getElementsByClassName("gallery-close")[0];

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
  
  function getTarget(e) {
    if(!e) {
      e = window.event;     
    }
    return e.target || e.srcElement; 
  }

  function displayModal(e) {
    let target = getTarget(e);
    modal.style.display = "block";
    modalImg.src = e.target.src;
  }

  function closeModal() {
    modal.style.display = "none";
  }
  
}());


