(function(){
  
  let navbar = document.getElementById("menu-container");
  let plans = document.getElementById("plans");
  
  function getTarget(e) {
    if(!e) {
      e = window.event;     
    }
    return e.target || e.srcElement;
  }
  
  function changeBackground(e) {  
    
    let check = plans.offsetTop - window.scrollY < 0;
    
    if(check) {
      navbar.style.transition = "0.3s";
      navbar.style.backgroundColor = "#252323";
      navbar.style.marginTop = "0%";
      navbar.style.padding = "2%";
    }else {
      navbar.style.backgroundColor = "inherit";
      navbar.style.marginTop = "20px";
      navbar.style.padding = "0 5px";
    }
    
  }

  window.addEventListener('scroll', changeBackground, false); // Move updates position
  
}());