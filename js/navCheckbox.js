(function(){
    
  function getTarget(e) {
      
      if(!e) {
          
          e = window.event;
          
      }
      
      return e.target || e.srcElement;
        
   }
    
   function checkGalleryInput(e) {
       
       let target = getTarget(e);
       let galleryID = document.getElementById("gallery-panel");
       
       console.log("Working");
       
       if(target.id == "asia-tab" || target.id == "europe-tab" || target.id == "northamerica-tab" || target.id == "southamerica-tab" ||  target.id == "africa-tab") {
           
         console.log("Target: " + e.target);
         galleryID.className = "active";
           
       } 
   
   }
    
   let el = document.getElementById("gallery-panel");
    
    if(el.addEventListener) {
        
        el.addEventListener("click", function(e) {
            
            checkGalleryInput(e);
            
        }, false);
    
    }else {
        
        el.attachEvent("onclick", function(e) {
            
            checkGalleryInput(e);
        
        });
    
    }
    
}());