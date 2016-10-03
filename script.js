// i represents which photo is being pulled from the array
var i = 0;

function setup(){
    button = createButton('New Photo');
    button.position(0, 0);
    button.mousePressed(newPhoto);
}

function loadJSONcall() {
  $.getJSON(
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=1377128560.1677ed0.3cbc51058d3448be81bf01626ad230e9&callback=?',
        function(data) {
          // Pull data out of API
          var instaData = data;
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
                    return imagePath; //<--- did not stop the loop!
                  }
            }
        }
    );
}

//calls the next photo in the array
function newPhoto(){
loadJSONcall(i++);
}