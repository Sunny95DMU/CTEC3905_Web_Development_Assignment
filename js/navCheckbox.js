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
      
       galleryID.className = "tab-content nav panel";
       
       if(target.id == "asia-tab" || target.id == "europe-tab" || target.id == "northamerica-tab" || target.id == "southamerica-tab" ||  target.id == "africa-tab") {
           
         galleryID.className += " active";
         
         let tab_nav = document.getElementsByName("tab-navigation");
         
         for(var i=0;i<tab_nav.length;i++)
          tab_nav[i].checked = false;
           
         }else {
          galleryID.className = "tab-content nav panel";
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