(function(){
  
  
  let openMenu = document.getElementById("openMenu");
  let menuContainer = document.getElementById("menu-container");
  
  
  let closeMenu = document.getElementById("closeMenu");
  let navigationBar = document.getElementById("navbar");
  
  
  function openMenuHandler() {
    openMenu.className = "open menuHandler hidden";
    closeMenu.className = "nav closeMenu";
    navbar.className = " navbar navbar-default";
  }
  
  function closeMenuHandler() {
    

    closeMenu.className += " hidden";
    navbar.className += " hidden";
    console.log(navbar.className);
    openMenu.className = "open menuHandler";
    
  }
  
    
  if(menuContainer.addEventListener) {
        
      menuContainer.addEventListener("click", function() {
            
          openMenuHandler();
            
      }, false);
    
    }else {
        
      menuContainer.attachEvent("onclick", function() {

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
  
}());