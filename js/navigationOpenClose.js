(function(){
  
  
  let openMenu = document.getElementById("openMenu");
  let closeMenu = document.getElementById("closeMenu");
  let closeMove = document.getElementById("closeMenuHandler");
  let navbar = document.getElementById("navbar");
  let firstTab = document.getElementById("firstTab");
  let secondTab = document.getElementById("secondTab");
    
  let galleryPanel = document.getElementById("gallery-panel");
  let aboutmePanel = document.getElementById("aboutme-panel");
  let contactmePanel = document.getElementById("contactme-panel");
    
  let asiaPanel = document.getElementById("asia-panel");
  let europePanel = document.getElementById("europe-panel");
  let northamericaPanel = document.getElementById("northamerica-panel");
  let southamericaPanel = document.getElementById("southamerica-panel");
  let africaPanel = document.getElementById("africa-panel");
    
  function getTarget(e) {
      
    if(!e) {
          
      e = window.event;
          
    }
      
    return e.target || e.srcElement;
        
   }

  function openMenuHandler() {
       
    navbar.style.width = "10%";
    closeMenu.className = "nav closeMenu";
      
  }
  
  function closeMenuHandler() {

    navbar.style.width = "0%";
    galleryPanel.style.width = "0%";
    galleryPanel.style.visibility = "hidden";
    aboutmePanel.style.width = "0%";
    aboutmePanel.style.visibility = "hidden";
    contactmePanel.style.width = "0%";
    contactmePanel.style.visibility = "hidden";
    asiaPanel.style.width = "0%";
    asiaPanel.style.visibility = "hidden";
    europePanel.style.width = "0%";
    europePanel.style.visibility = "hidden";
    northamericaPanel.style.width = "0%";
    northamericaPanel.style.visibility = "hidden";
    southamericaPanel.style.width = "0%";
    southamericaPanel.style.visibility = "hidden";
    africaPanel.style.width = "0%";
    africaPanel.style.visibility = "hidden";
    closeMenu.className += " hidden";
    
  }
    
  function openSecondPanel(e) {
      
      let target = getTarget(e);
      
      if(target.id == "gallery-tab") {

          galleryPanel.style.width = "20%";
          galleryPanel.style.visibility = "visible";
          contactmePanel.style.width = "0%";
          contactmePanel.style.visibility = "hidden";
          aboutmePanel.style.width = "0%";
          aboutmePanel.style.visibility = "hidden";
          
          closeMove.style.left = "31%";
          
          asiaPanel.style.width = "0%";
          asiaPanel.style.visibility = "hidden";
          europePanel.style.width = "0%";
          europePanel.style.visibility = "hidden";
          northamericaPanel.style.width = "0%";
          northamericaPanel.style.visibility = "hidden";
          southamericaPanel.style.width = "0%";
          southamericaPanel.style.visibility = "hidden";
          africaPanel.style.width = "0%";
          africaPanel.style.visibility = "hidden";
          
      }else if(target.id == "aboutme-tab") {
          
          galleryPanel.style.width = "0%";
          galleryPanel.style.visibility = "hidden";
          contactmePanel.style.width = "0%";
          contactmePanel.style.visibility = "hidden";
          aboutmePanel.style.width = "25%";
          aboutmePanel.style.visibility = "visible";
          
          closeMove.style.left = "36%";
          
          asiaPanel.style.width = "0%";
          asiaPanel.style.visibility = "hidden";
          europePanel.style.width = "0%";
          europePanel.style.visibility = "hidden";
          northamericaPanel.style.width = "0%";
          northamericaPanel.style.visibility = "hidden";
          southamericaPanel.style.width = "0%";
          southamericaPanel.style.visibility = "hidden";
          africaPanel.style.width = "0%";
          africaPanel.style.visibility = "hidden";
          
      }else if(target.id == "contactme-tab") {
          
          galleryPanel.style.width = "0%";
          galleryPanel.style.visibility = "hidden";
          aboutmePanel.style.width = "0%";
          aboutmePanel.style.visibility = "hidden";
          contactmePanel.style.width = "25%";
          contactmePanel.style.visibility = "visible";
          
          closeMove.style.left = "36%";
          
          asiaPanel.style.width = "0%";
          asiaPanel.style.visibility = "hidden";
          europePanel.style.width = "0%";
          europePanel.style.visibility = "hidden";
          northamericaPanel.style.width = "0%";
          northamericaPanel.style.visibility = "hidden";
          southamericaPanel.style.width = "0%";
          southamericaPanel.style.visibility = "hidden";
          africaPanel.style.width = "0%";
          africaPanel.style.visibility = "hidden";
          
      }
      
  }
    
  function openThirdPanel(e) {
      
      let target = getTarget(e);

      if(target.id == "asia-tab") {
          
          closeMove.style.left = "41%";
          
          asiaPanel.style.width = "10%";
          asiaPanel.style.visibility = "visible";
          europePanel.style.width = "0%";
          europePanel.style.visibility = "hidden";
          northamericaPanel.style.width = "0%";
          northamericaPanel.style.visibility = "hidden";
          southamericaPanel.style.width = "0%";
          southamericaPanel.style.visibility = "hidden";
          africaPanel.style.width = "0%";
          africaPanel.style.visibility = "hidden";
          
      }else if(target.id == "europe-tab") {
          
          closeMove.style.left = "41%";
          
          asiaPanel.style.width = "0%";
          asiaPanel.style.visibility = "hidden";
          europePanel.style.width = "10%";
          europePanel.style.visibility = "visible";
          northamericaPanel.style.width = "0%";
          northamericaPanel.style.visibility = "hidden";
          southamericaPanel.style.width = "0%";
          southamericaPanel.style.visibility = "hidden";
          africaPanel.style.width = "0%";
          africaPanel.style.visibility = "hidden";
          
      }else if(target.id == "northamerica-tab") {
          
          closeMove.style.left = "41%";
          
          asiaPanel.style.width = "0%";
          asiaPanel.style.visibility = "hidden";
          europePanel.style.width = "0%";
          europePanel.style.visibility = "hidden";
          northamericaPanel.style.width = "10%";
          northamericaPanel.style.visibility = "visible";
          southamericaPanel.style.width = "0%";
          southamericaPanel.style.visibility = "hidden";
          africaPanel.style.width = "0%";
          africaPanel.style.visibility = "hidden";
          
      }else if(target.id == "southamerica-tab") {
          
          closeMove.style.left = "41%";
          
          asiaPanel.style.width = "0%";
          asiaPanel.style.visibility = "hidden";
          europePanel.style.width = "0%";
          europePanel.style.visibility = "hidden";
          northamericaPanel.style.width = "0%";
          northamericaPanel.style.visibility = "hidden";
          southamericaPanel.style.width = "10%";
          southamericaPanel.style.visibility = "visible";
          africaPanel.style.width = "0%";
          africaPanel.style.visibility = "hidden";
          
      }else if(target.id == "africa-tab") {
          
          closeMove.style.left = "41%";
          
          asiaPanel.style.width = "0%";
          asiaPanel.style.visibility = "hidden";
          europePanel.style.width = "0%";
          europePanel.style.visibility = "hidden";
          northamericaPanel.style.width = "0%";
          northamericaPanel.style.visibility = "hidden";
          southamericaPanel.style.width = "0%";
          southamericaPanel.style.visibility = "hidden";
          africaPanel.style.width = "10%";
          africaPanel.style.visibility = "visible";
          
      }
      
  }
    
  if(openMenu.addEventListener) {
        
      openMenu.addEventListener("click", function() {
            
          openMenuHandler();
            
      }, false);
    
    }else {
        
      openMenu.attachEvent("onclick", function() {

        openMenuHandler();

      });
    
    }
  
  if(closeMenu.addEventListener) {

    closeMenu.addEventListener("click", function() {
      
      closeMenuHandler();
      
    });
    
  }else {
    
    closeMenu.attachEvent("onclick", function() {
            
      closeMenuHandler();
        
    });
    
  }
    
  if(firstTab.addEventListener) {

    firstTab.addEventListener("click", function(e) {
      
      openSecondPanel(e);
      
    });
    
  }else {
    
    firstTab.attachEvent("onclick", function() {
            
     openSecondPanel();
        
    });
    
  }
    
  if(secondTab.addEventListener) {

    secondTab.addEventListener("click", function(e) {
      
      openThirdPanel(e);
      
    });
    
  }else {
    
    secondTab.attachEvent("onclick", function() {
            
     openThirdPanel();
        
    });
    
  }
  
}());