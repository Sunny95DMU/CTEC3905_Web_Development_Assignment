/*
  This JavaScript file uses JSON to retrieve all images from the flickr website
  and upload it locally to the current website. It retrieves images from all albums
  by setting the individual album id into the function getFlickrImages, but then that data
  is filtered further for only displaying on certain gallery pages.
 */

(function(){
  
  //The following are DOM objects for retrieving details on the different gallery Sections.
  //Each section represents a new page, a new gallery for the different country
  //Here the images are appended whilst being retrieved by JSON.

  let hkFlickrImages = document.getElementById("hongkong-flickr-images");
  let englandFlickrImages = document.getElementById("england-flickr-images");
  
  //This is calling the functiong getFlickrImages which requires an Album ID with the gallery section
  //so each data is appended correctly to their own Sections.

  getFlickrImages("72157674305791803", hkFlickrImages);
  getFlickrImages("72157678025568046", englandFlickrImages);
  
  //This function requires a AlbumID with the gallery Section required for appending the images.
  //
  //It uses the flickr api link which is getting photos from the flick site. It requires the id which is
  //appended to the link. The link also provides other useful configurations like setting images per page, e.g. 500
  //
  //In order to retrieve these images, it first makes a XMLHttpRequest() which is the way for client and server
  //to share information without overloading of refreshes.
  //Then a onreadystatechange is called for parsing the URL data into an array.
  //
  //The gatherData array is the actual function that formats this information so that it is appened to the correct
  //container and loaded appropriately to the display.

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
  
  /*
    This function gets the array of images and checks the length before it starts formating the image link,
    which is then appended to an img tag which further adds the attribues of the img link as src, and adds the id
    to each img tag to uniquely identify it along with a width and height. Then they are further appended to the figure
    tags, so they act as a container for these images and then the figure tags are appended to the galleryContainers.
   */

  function gatherData(arr, galleryContainer) {  

    let i = 0;

    for(i; i<arr.photoset.photo.length; i++) {

      let img_src = "https://farm" + arr.photoset.photo[i].farm + ".static.flickr.com/" + arr.photoset.photo[i].server + "/" + arr.photoset.photo[i].id + "_" + arr.photoset.photo[i].secret + "_c.jpg";
      
      let img = document.createElement("img");
      let figure = document.createElement("figure");

      img.src = img_src;
      img.id = "flickr-image" + (i + 1);
      img.className = "flickr-images";
      img.style.width = "100%";
      img.style.height = "100%";
      figure.setAttribute("class", "item");

      galleryContainer.appendChild(figure);
      figure.appendChild(img);

    }

  }

}());