/*
  This JavaScript file provides all the dynamic functionality for the navigation bar.
  It provides the closing and opening of the navigation along with opening new tabs.
  It also provides the resizing of the navigation bar, not with full functionality but
  enough to making into a working navigation bar.
  
  Missing features include:
    . resizing of the close button has not been done properly
 */

(function(){  
  
  //The following DOM objects are:
  //
  //openMenu gets the div for openMenu which holds the menu description, when clicked it opens the entire nav
  //
  //closeMenu gets the div for closeMenu which holds the close description, when clicked it closes the entire nav
  //
  //closeMove is the actual object which holds the close description, it is used for moving the close description when resizing
  //
  //navbar is the entire navigation bar that holds all items
  //
  //firstTab is the first section within the navbar
  //secondTab is the section section within the navbar
    
  let openMenu = document.getElementById("openMenu");
  let closeMenu = document.getElementById("closeMenu");
  let closeMove = document.getElementById("closeMenuHandler");
  let navbar = document.getElementById("navbar");
  let firstTab = document.getElementById("firstTab");
  let secondTab = document.getElementById("secondTab");
  
  //The following DOM objects are:
  //
  //The panels listed below are the ones that load new content within the same screen, so it loads a new section.
  //They are needed to keep track of which tab has been clicked, to show or hide current/new tab
  //other panels were not required because they are simply links to other pages.
    
  let galleryPanel = document.getElementById("gallery-panel");
  let aboutmePanel = document.getElementById("aboutme-panel");
  let contactmePanel = document.getElementById("contactme-panel");
  
  //The following DOM objects are:
  //
  //The panels listed below are the ones that load new content within the same screen, so it loads a new section.
  //They are needed to keep track of which tab has been clicked, to show or hide current/new tab
    
  let asiaPanel = document.getElementById("asia-panel");
  let europePanel = document.getElementById("europe-panel");
  let northamericaPanel = document.getElementById("northamerica-panel");
  let southamericaPanel = document.getElementById("southamerica-panel");
  let africaPanel = document.getElementById("africa-panel");
  
  //The following are media query listeners.
  //They listen for changes for screen sizes and if changes are found then the DOM objects are changed accordingly
  //to fit the sizes.
    
  let smq = window.matchMedia("(min-width : 200px) and (max-width : 480px)");
  let mmq = window.matchMedia("(min-width : 480px) and (max-width : 1024px)"); 
  let lmq = window.matchMedia("(min-width : 1024px) and (max-width : 1224px)");
  let xlmq = window.matchMedia("(min-width : 1224px) and (max-width : 1824px)");
  let xxlmq = window.matchMedia("(min-width : 1225px) and (max-width : 2560px)");
  
  //The following boolean operations provide setters, indicating the current size has been activated then they are set to true,
  //it is used for keeping track of which screen size is currently active
    
  let smlScreenBool = false;
  let mediumScreenBool = false;
  let largeScreenBool = false;
  let xlargeScreenBool = false;
  let xxlargeScreenBool = false;
  
  //The following boolean operations check for which tab is currently open.
    
  let secondTabOpen = false;
  let thirdTabOpen = false;

    
  //The following function acts as a method for getting the Event.Object, which allows delegation of the Events
  
  function getTarget(e) {
    if(!e) {                          //Adds browser support by checking if e = event, if it is not recognized 
      e = window.event;               //then a window.event is added to turn e into an object and passes it as  
    }                                 //e.target|e.srcElement dpeneding on browser support
    return e.target || e.srcElement;
  }
  
  //This function openMenuHandler() will first initially start the navbar style with 0 otherwise the resizing will automatically open
  //the navbar when not needed, so it is important to set it to 0. hidden is added to the openMenu classname because it hides the 
  //menu description and opens up the first tab of the website. It will resize depending on the current media query listener response.

  function openMenuHandler() {
      
    navbar.style.width = "0%";
    openMenu.className += " hidden";
    closeMenu.className = "nav closeMenu";
      
    smq.addListener(smqWidthChange);
    smqWidthChange(smq);
    
    mmq.addListener(mmqWidthChange);
    mmqWidthChange(mmq);
    
    lmq.addListener(lmqWidthChange);
    lmqWidthChange(lmq);
    
    xlmq.addListener(xlmqWidthChange);
    xlmqWidthChange(xlmq);
    
    xxlmq.addListener(xxlmqWidthChange);
    xxlmqWidthChange(xxlmq);
      
  }
  
  //This function will hide and set the display to 0 for all panels, tabs, containers, anything to do with the navigation bar
  
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
    openMenu.className = "open menuHandler";
    
  }
  
  //This function will check for which media query listener has been set to true, if found current
  //listener set to true then it checks for whether the event target was one of the following tabs: gallery, aboutme, contactme,
  //if matches then the style is set for that tab, the Panels are then styled and other panels that are not desired will be hidden.
  //
  //This function essentially is opening the second tab
    
  function openSecondPanel(e) {
      
    let target = getTarget(e);

    if(smlScreenBool == true) {

        if(target.id == "gallery-tab") {

            galleryPanel.style.width = "60%";
            galleryPanel.style.left = "0%";
            galleryPanel.style.visibility = "visible";
            contactmePanel.style.width = "0%";
            contactmePanel.style.visibility = "hidden";
            aboutmePanel.style.width = "0%";
            aboutmePanel.style.visibility = "hidden";

            closeMove.style.left = "72%";

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
            aboutmePanel.style.width = "65%";
            aboutmePanel.style.left = "0%";
            aboutmePanel.style.visibility = "visible";

            closeMove.style.left = "72%";

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
            contactmePanel.style.width = "75%";
            contactmePanel.style.left = "0%";
            contactmePanel.style.visibility = "visible";

            closeMove.style.left = "72%";

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
      
      if(mediumScreenBool == true) {
          
        secondTabOpen = true;

        if(target.id == "gallery-tab") {

            galleryPanel.style.width = "60%";
            galleryPanel.style.left = "0%";
            galleryPanel.style.visibility = "visible";
            contactmePanel.style.width = "0%";
            contactmePanel.style.visibility = "hidden";
            aboutmePanel.style.width = "0%";
            aboutmePanel.style.visibility = "hidden";

            closeMove.style.left = "65%";

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
            aboutmePanel.style.width = "60%";
            aboutmePanel.style.left = "0%";
            aboutmePanel.style.visibility = "visible";

            closeMove.style.left = "65%";

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
            contactmePanel.style.width = "60%";
            contactmePanel.style.left = "0%";
            contactmePanel.style.visibility = "visible";

            closeMove.style.left = "65%";

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
      
      if(largeScreenBool == true) {
          
        secondTabOpen = true;

        if(target.id == "gallery-tab") {

            galleryPanel.style.width = "30%";
            galleryPanel.style.left = "30%";
            galleryPanel.style.visibility = "visible";
            contactmePanel.style.width = "0%";
            contactmePanel.style.visibility = "hidden";
            aboutmePanel.style.width = "0%";
            aboutmePanel.style.visibility = "hidden";

            closeMove.style.left = "65%";

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
            aboutmePanel.style.width = "30%";
            aboutmePanel.style.left = "30%";
            aboutmePanel.style.visibility = "visible";

            closeMove.style.left = "65%";

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
            contactmePanel.style.width = "30%";
            contactmePanel.style.left = "30%";
            contactmePanel.style.visibility = "visible";

            closeMove.style.left = "65%";

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
      
      if(xlargeScreenBool == true) {
          
        secondTabOpen = true;

        if(target.id == "gallery-tab") {

            galleryPanel.style.width = "20%";
            galleryPanel.style.left = "10%";
            galleryPanel.style.visibility = "visible";
            contactmePanel.style.width = "0%";
            contactmePanel.style.visibility = "hidden";
            aboutmePanel.style.width = "0%";
            aboutmePanel.style.visibility = "hidden";

            closeMove.style.left = "35%";

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
            aboutmePanel.style.width = "30%";
            aboutmePanel.style.left = "10%";
            aboutmePanel.style.visibility = "visible";

            closeMove.style.left = "35%";

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
            contactmePanel.style.width = "30%";
            contactmePanel.style.left = "10%";
            contactmePanel.style.visibility = "visible";

            closeMove.style.left = "35%";

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
      
      if(xxlargeScreenBool == true) {
          
        secondTabOpen = true;

        if(target.id == "gallery-tab") {

            galleryPanel.style.width = "20%";
            galleryPanel.style.left = "10%";
            galleryPanel.style.visibility = "visible";
            contactmePanel.style.width = "0%";
            contactmePanel.style.visibility = "hidden";
            aboutmePanel.style.width = "0%";
            aboutmePanel.style.visibility = "hidden";

            closeMove.style.left = "35%";

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
            aboutmePanel.style.width = "30%";
            aboutmePanel.style.left = "10%";
            aboutmePanel.style.visibility = "visible";

            closeMove.style.left = "35%";

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
            contactmePanel.style.width = "30%";
            contactmePanel.style.left = "10%";
            contactmePanel.style.visibility = "visible";

            closeMove.style.left = "35%";

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
      
  }
  
  //This function will check for which media query listener has been set to true, if found current
  //listener set to true then it checks for whether the event target was one of the following tabs: asia, europe, north america, south america, africa.
  //if matches then the style is set for that tab, the Panels are then styled and other panels that are not desired will be hidden.
  //
  //This function essentially is opening the third tab
    
  function openThirdPanel(e) {
      
    let target = getTarget(e);

    if(smlScreenBool == true) {

        thirdTabOpen = true;  

        if(target.id == "asia-tab") {

            closeMove.style.left = "72%";

            asiaPanel.style.width = "60%";
            asiaPanel.style.left = "0%";
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

            closeMove.style.left = "72%";

            asiaPanel.style.width = "0%";
            asiaPanel.style.visibility = "hidden";
            europePanel.style.width = "60%";
            europePanel.style.left = "0%";
            europePanel.style.visibility = "visible";
            northamericaPanel.style.width = "0%";
            northamericaPanel.style.visibility = "hidden";
            southamericaPanel.style.width = "0%";
            southamericaPanel.style.visibility = "hidden";
            africaPanel.style.width = "0%";
            africaPanel.style.visibility = "hidden";

        }else if(target.id == "northamerica-tab") {

            closeMove.style.left = "72%";

            asiaPanel.style.width = "0%";
            asiaPanel.style.visibility = "hidden";
            europePanel.style.width = "0%";
            europePanel.style.visibility = "hidden";
            northamericaPanel.style.width = "60%";
            northamericaPanel.style.left = "0%";
            northamericaPanel.style.visibility = "visible";
            southamericaPanel.style.width = "0%";
            southamericaPanel.style.visibility = "hidden";
            africaPanel.style.width = "0%";
            africaPanel.style.visibility = "hidden";

        }else if(target.id == "southamerica-tab") {

            closeMove.style.left = "72%";

            asiaPanel.style.width = "0%";
            asiaPanel.style.visibility = "hidden";
            europePanel.style.width = "0%";
            europePanel.style.visibility = "hidden";
            northamericaPanel.style.width = "0%";
            northamericaPanel.style.visibility = "hidden";
            southamericaPanel.style.width = "60%";
            southamericaPanel.style.left = "0%";
            southamericaPanel.style.visibility = "visible";
            africaPanel.style.width = "0%";
            africaPanel.style.visibility = "hidden";

        }else if(target.id == "africa-tab") {

            closeMove.style.left = "72%";

            asiaPanel.style.width = "0%";
            asiaPanel.style.visibility = "hidden";
            europePanel.style.width = "0%";
            europePanel.style.visibility = "hidden";
            northamericaPanel.style.width = "0%";
            northamericaPanel.style.visibility = "hidden";
            southamericaPanel.style.width = "0%";
            southamericaPanel.style.visibility = "hidden";
            africaPanel.style.width = "60%";
            africaPanel.style.left = "0%";
            africaPanel.style.visibility = "visible";

        }   
      }
      
      if(mediumScreenBool == true) {
          
        thirdTabOpen = true;    

        if(target.id == "asia-tab") {

            closeMove.style.left = "65%";

            asiaPanel.style.width = "60%";
            asiaPanel.style.left = "0%";
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

            closeMove.style.left = "65%";

            asiaPanel.style.width = "0%";
            asiaPanel.style.visibility = "hidden";
            europePanel.style.width = "60%";
            europePanel.style.left = "0%";
            europePanel.style.visibility = "visible";
            northamericaPanel.style.width = "0%";
            northamericaPanel.style.visibility = "hidden";
            southamericaPanel.style.width = "0%";
            southamericaPanel.style.visibility = "hidden";
            africaPanel.style.width = "0%";
            africaPanel.style.visibility = "hidden";

        }else if(target.id == "northamerica-tab") {

            closeMove.style.left = "65%";

            asiaPanel.style.width = "0%";
            asiaPanel.style.visibility = "hidden";
            europePanel.style.width = "0%";
            europePanel.style.visibility = "hidden";
            northamericaPanel.style.width = "60%";
            northamericaPanel.style.left = "0%";
            northamericaPanel.style.visibility = "visible";
            southamericaPanel.style.width = "0%";
            southamericaPanel.style.visibility = "hidden";
            africaPanel.style.width = "0%";
            africaPanel.style.visibility = "hidden";

        }else if(target.id == "southamerica-tab") {

            closeMove.style.left = "65%";

            asiaPanel.style.width = "0%";
            asiaPanel.style.visibility = "hidden";
            europePanel.style.width = "0%";
            europePanel.style.visibility = "hidden";
            northamericaPanel.style.width = "0%";
            northamericaPanel.style.visibility = "hidden";
            southamericaPanel.style.width = "60%";
            southamericaPanel.style.left = "0%";
            southamericaPanel.style.visibility = "visible";
            africaPanel.style.width = "0%";
            africaPanel.style.visibility = "hidden";

        }else if(target.id == "africa-tab") {

            closeMove.style.left = "65%";

            asiaPanel.style.width = "0%";
            asiaPanel.style.visibility = "hidden";
            europePanel.style.width = "0%";
            europePanel.style.visibility = "hidden";
            northamericaPanel.style.width = "0%";
            northamericaPanel.style.visibility = "hidden";
            southamericaPanel.style.width = "0%";
            southamericaPanel.style.visibility = "hidden";
            africaPanel.style.width = "60%";
            africaPanel.style.left = "0%";
            africaPanel.style.visibility = "visible";

        }   
      }
      
      if(largeScreenBool == true) {
          
        if(target.id == "asia-tab") {
          
            closeMove.style.left = "92%";

            asiaPanel.style.width = "30%";
            asiaPanel.style.left = "60%";
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

            closeMove.style.left = "92%";

            asiaPanel.style.width = "0%";
            asiaPanel.style.visibility = "hidden";
            europePanel.style.width = "30%";
            europePanel.style.left = "60%";
            europePanel.style.visibility = "visible";
            northamericaPanel.style.width = "0%";
            northamericaPanel.style.visibility = "hidden";
            southamericaPanel.style.width = "0%";
            southamericaPanel.style.visibility = "hidden";
            africaPanel.style.width = "0%";
            africaPanel.style.visibility = "hidden";

        }else if(target.id == "northamerica-tab") {

            closeMove.style.left = "92%";

            asiaPanel.style.width = "0%";
            asiaPanel.style.visibility = "hidden";
            europePanel.style.width = "0%";
            europePanel.style.visibility = "hidden";
            northamericaPanel.style.width = "30%";
            northamericaPanel.style.left = "60%";
            northamericaPanel.style.visibility = "visible";
            southamericaPanel.style.width = "0%";
            southamericaPanel.style.visibility = "hidden";
            africaPanel.style.width = "0%";
            africaPanel.style.visibility = "hidden";

        }else if(target.id == "southamerica-tab") {

            closeMove.style.left = "92%";

            asiaPanel.style.width = "0%";
            asiaPanel.style.visibility = "hidden";
            europePanel.style.width = "0%";
            europePanel.style.visibility = "hidden";
            northamericaPanel.style.width = "0%";
            northamericaPanel.style.visibility = "hidden";
            southamericaPanel.style.width = "30%";
            southamericaPanel.style.left = "60%";
            southamericaPanel.style.visibility = "visible";
            africaPanel.style.width = "0%";
            africaPanel.style.visibility = "hidden";

        }else if(target.id == "africa-tab") {

            closeMove.style.left = "92%";

            asiaPanel.style.width = "0%";
            asiaPanel.style.visibility = "hidden";
            europePanel.style.width = "0%";
            europePanel.style.visibility = "hidden";
            northamericaPanel.style.width = "0%";
            northamericaPanel.style.visibility = "hidden";
            southamericaPanel.style.width = "0%";
            southamericaPanel.style.visibility = "hidden";
            africaPanel.style.width = "30%";
            africaPanel.style.left = "60%";
            africaPanel.style.visibility = "visible";

        }   
      }
      
      if(xlargeScreenBool == true) {
          
        if(target.id == "asia-tab") {
          
            closeMove.style.left = "41%";

            asiaPanel.style.width = "10%";
            asiaPanel.style.left = "30%";
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
            europePanel.style.left = "30%";
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
            northamericaPanel.style.left = "30%";
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
            southamericaPanel.style.left = "30%";
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
            africaPanel.style.left = "30%";
            africaPanel.style.visibility = "visible";

        }   
      }
      
      if(xxlargeScreenBool == true) {
          
        if(target.id == "asia-tab") {
          
            closeMove.style.left = "41%";

            asiaPanel.style.width = "10%";
            asiaPanel.style.left = "30%";
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
            europePanel.style.left = "30%";
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
            northamericaPanel.style.left = "30%";
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
            southamericaPanel.style.left = "30%";
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
            africaPanel.style.left = "30%";
            africaPanel.style.visibility = "visible";

        }   
    }
      
  }
  
  //This function is the listener, here the boolean values are set to indicate that the current screen size is being used,
  //therefore the value is set to true whilst others are set to false. Then for this screen size, a style is applied for 
  //the navigation bar along with others: close description, panels, etc.. 
    
  function smqWidthChange(mq) {
      
    if(mq.matches) {
        
        smlScreenBool = true;
        mediumScreenBool = false;
        largeScreenBool = false;
        xlargeScreenBool = false;
        xxlargeScreenBool = false;
        
        navbar.style.width = "60%";
        closeMove.style.left = "72%";
        closeMenu.className = "nav closeMenu";
        
        galleryPanel.style.width = "60%";
        galleryPanel.style.left = "0%";
        aboutmePanel.style.width = "65%";
        aboutmePanel.style.left = "0%";
        contactmePanel.style.width = "75%";
        contactmePanel.style.left = "0%";
        
        asiaPanel.style.width = "60%";
        asiaPanel.style.left = "0%";
        europePanel.style.width = "60%";
        europePanel.style.left = "0%";
        northamericaPanel.style.width = "60%";
        northamericaPanel.style.left = "0%";
        southamericaPanel.style.width = "60%";
        southamericaPanel.style.left = "0%";
        africaPanel.style.width = "60%";
        africaPanel.style.left = "0%";

        
    }  
      
  }
  
  //This function is the listener, here the boolean values are set to indicate that the current screen size is being used,
  //therefore the value is set to true whilst others are set to false. Then for this screen size, a style is applied for 
  //the navigation bar along with others: close description, panels, etc.. 
    
  function mmqWidthChange(mq) {
      
    if(mq.matches) {
        
        smlScreenBool = false;
        mediumScreenBool = true;
        largeScreenBool = false;
        xlargeScreenBool = false;
        xxlargeScreenBool = false;
        
        navbar.style.width = "30%";
        closeMove.style.left = "35%";
        closeMenu.className = "nav closeMenu";
        
        if(secondTabOpen == true) {
            closeMove.style.left = "65%";
        }
        
        if(thirdTabOpen == true) {
            closeMove.style.left = "65%";
        }
        
        galleryPanel.style.width = "60%";
        galleryPanel.style.left = "0%";
        aboutmePanel.style.width = "60%";
        aboutmePanel.style.left = "0%";
        contactmePanel.style.width = "60%";
        contactmePanel.style.left = "0%";
        
        asiaPanel.style.width = "60%";
        asiaPanel.style.left = "0%";
        europePanel.style.width = "60%";
        europePanel.style.left = "0%";
        northamericaPanel.style.width = "60%";
        northamericaPanel.style.left = "0%";
        southamericaPanel.style.width = "60%";
        southamericaPanel.style.left = "0%";
        africaPanel.style.width = "60%";
        africaPanel.style.left = "0%";

        
    }
      
  }
  
  //This function is the listener, here the boolean values are set to indicate that the current screen size is being used,
  //therefore the value is set to true whilst others are set to false. Then for this screen size, a style is applied for 
  //the navigation bar along with others: close description, panels, etc.. 
    
  function lmqWidthChange(mq) {
      
    if(mq.matches) {
        
        smlScreenBool = false;
        mediumScreenBool = false;
        largeScreenBool = true;
        xlargeScreenBool = false;
        xxlargeScreenBool = false;
        
        navbar.style.width = "30%";
        closeMove.style.left = "35%";
        closeMenu.className = "nav closeMenu";
        
        if(secondTabOpen == true) {
            closeMove.style.left = "65%";
        }
        
        if(thirdTabOpen == true) {
            closeMove.style.left = "92%";
        }
        
        galleryPanel.style.width = "30%";
        galleryPanel.style.left = "30%";
        aboutmePanel.style.width = "30%";
        aboutmePanel.style.left = "30%";
        contactmePanel.style.width = "30%";
        contactmePanel.style.left = "30%";
        
        asiaPanel.style.width = "30%";
        asiaPanel.style.left = "60%";
        europePanel.style.width = "30%";
        europePanel.style.left = "60%";
        northamericaPanel.style.width = "30%";
        northamericaPanel.style.left = "60%";
        southamericaPanel.style.width = "30%";
        southamericaPanel.style.left = "60%";
        africaPanel.style.width = "30%";
        africaPanel.style.left = "60%";
        
    }
      
  }
  
  //This function is the listener, here the boolean values are set to indicate that the current screen size is being used,
  //therefore the value is set to true whilst others are set to false. Then for this screen size, a style is applied for 
  //the navigation bar along with others: close description, panels, etc.. 
    
  function xlmqWidthChange(mq) {
      
    if(mq.matches) {
        
        smlScreenBool = false;
        mediumScreenBool = false;
        largeScreenBool = false;
        xlargeScreenBool = true;
        xxlargeScreenBool = false;
        
        navbar.style.width = "10%";
        closeMove.style.left = "11%";
        closeMenu.className = "nav closeMenu";
        
        if(secondTabOpen == true) {
            closeMove.style.left = "35%";
        }
        
        if(thirdTabOpen == true) {
            closeMove.style.left = "41%";
        }
        
        galleryPanel.style.width = "20%";
        galleryPanel.style.left = "10%";
        aboutmePanel.style.width = "30%";
        aboutmePanel.style.left = "10%";
        contactmePanel.style.width = "30%";
        contactmePanel.style.left = "10%";
        
        asiaPanel.style.width = "10%";
        asiaPanel.style.left = "30%";
        europePanel.style.width = "10%";
        europePanel.style.left = "30%";
        northamericaPanel.style.width = "10%";
        northamericaPanel.style.left = "30%";
        southamericaPanel.style.width = "10%";
        southamericaPanel.style.left = "30%";
        africaPanel.style.width = "10%";
        africaPanel.style.left = "30%";

        
    }
      
  }
  
  //This function is the listener, here the boolean values are set to indicate that the current screen size is being used,
  //therefore the value is set to true whilst others are set to false. Then for this screen size, a style is applied for 
  //the navigation bar along with others: close description, panels, etc.. 
    
  function xxlmqWidthChange(mq) {
      
    if(mq.matches) {
        
        smlScreenBool = false;
        mediumScreenBool = false;
        largeScreenBool = false;
        xlargeScreenBool = false;
        xxlargeScreenBool = true;
            
        navbar.style.width = "10%";
        closeMove.style.left = "11%";
        closeMenu.className = "nav closeMenu";
        
        if(secondTabOpen == true) {
            closeMove.style.left = "35%";
        }
        
        if(thirdTabOpen == true) {
            closeMove.style.left = "41%";
        }
        
        
        galleryPanel.style.width = "20%";
        galleryPanel.style.left = "10%";
        aboutmePanel.style.width = "30%";
        aboutmePanel.style.left = "10%";
        contactmePanel.style.width = "30%";
        contactmePanel.style.left = "10%";
        
        asiaPanel.style.width = "10%";
        asiaPanel.style.left = "30%";
        europePanel.style.width = "10%";
        europePanel.style.left = "30%";
        northamericaPanel.style.width = "10%";
        northamericaPanel.style.left = "30%";
        southamericaPanel.style.width = "10%";
        southamericaPanel.style.left = "30%";
        africaPanel.style.width = "10%";
        africaPanel.style.left = "30%";

        
    }
      
  }
  
  //Here the Event Listeners are being applied, with fallback incase there is no browser support.
  //Each container holds a click event that does something.
  //
  //openMenu will use the openMenuHandler() to open the navigation bar
  //closeMenu will do the opposite
  //
  //firstTab will use the Event.Object to listen for target clicks and openSecondPanels if needed
  //secondTab does the same to openThirdPanels if needed
    
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