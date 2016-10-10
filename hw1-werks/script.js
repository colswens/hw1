// i represents which photo is being pulled from the array
var i = 0;

function setup(){
  /*This button calls the function newPhoto, which adds (+1) to the variable 'i'. 
  This grabs the next object in the array of data pulled from the API, with each
  object being a photo and all the data associated with it.
  */
    button = createButton('New Photo');
    button.position(0, 0);
    button.mousePressed(newPhoto);
}

function loadJSONcall() {
  $.getJSON(
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=205591248.1677ed0.790a442ea4c3445080e6f9cd6c7b4827&callback=?',
        function(data) {
          //console.log(data) Uncomment this to see the array returned by the API
          // Pull data out of API
          // Open up array
          var Images = data.data.slice(0);
          // Set path as global variable, set to nothing
          var imagePath = null;
          // Find image url in JSON array
            for (var name in Images[i]) {
                if(name == 'images')
                  {
                    var imagePath = Images[i][name];
                    var image =imagePath.standard_resolution.url;
                    document.getElementById("lastPhoto").src = image;
                  }
                  
          //FInd the caption for the photo
                if(name == 'caption')
                  {
                    var imagePath = Images[i][name];
                    var text = imagePath.text;

                    document.getElementById("caption").innerHTML = text;
                    
                    console.log(text);

                  }

            }
        }
    );
}

//calls the next photo in the array
function newPhoto(){
loadJSONcall(i++);
}
