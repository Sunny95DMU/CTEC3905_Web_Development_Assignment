(function(){
  
  let navbar = document.getElementById("menu-container");
  let offset = document.getElementById("offset");

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

  window.addEventListener('scroll', changeBackground, false); // Move updates position
  
}());