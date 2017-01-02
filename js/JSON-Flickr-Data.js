(function(){
      
  let hkFlickrImages = document.getElementById("hongkong-flickr-images");
  let englandFlickrImages = document.getElementById("england-flickr-images");

  getFlickrImages("72157674305791803", hkFlickrImages);
  getFlickrImages("72157678025568046", englandFlickrImages);
    
  function getFlickrImages(setId, galleryContainer) {

    let URL = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=033e5308293f68eb18e315a31ebd0ee7&photoset_id=" + setId +"&privacy_filter=1&per_page=500&format=json&nojsoncallback=1";
      
    let xhr = new XMLHttpRequest();
      
    xhr.onreadystatechange = function() {
        
        
      if (this.readyState === 4 && this.status === 200) {
        let myArr = JSON.parse(this.responseText);
        gatherData(myArr, galleryContainer);
      }
        
        
    };
        
    xhr.open('GET', URL, true);
    xhr.send(null);
    
  }

  function gatherData(arr, galleryContainer) {  
      
      let i = 0;
      
      for(i; i<arr.photoset.photo.length; i++) {
          
        let img_src = "https://farm" + arr.photoset.photo[i].farm + ".static.flickr.com/" + arr.photoset.photo[i].server + "/" + arr.photoset.photo[i].id + "_" + arr.photoset.photo[i].secret + "_m.jpg";
        let img = document.createElement("img");
        let section = document.createElement("section");
          
        img.src = img_src;
        img.style.width = "100%";
        img.style.height = "100%";
        section.setAttribute("class", "item");
          
        section.appendChild(img);
        galleryContainer.appendChild(section);
          
      }
   
  }
    
}());