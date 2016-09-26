function setup() {
  createCanvas(800, 800);
  strokeWeight(10);
  stroke(0);

  button = createButton('New Photo');
  button.position(150, 65);
  button.mousePressed(getPhotos);

}

function touchMoved() {
  line(touchX, touchY, ptouchX, ptouchY);
  return false;
}

//get photos from instagram API
/*function getPhotos()  {
  JSONObject instagram = loadJSONObject("https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=1377128560.1677ed0.3cbc51058d3448be81bf01626ad230e9");
  JSONArray photos = instagram.getJSONArray("data");
  println(photos);
  for (int i = 0; i < photos.size(); i++) {
    String url1 = photos.getJSONObject(i).getJSONObject("images").getJSONObject("standard_resolution").getString("url");
    PImage img = loadImage(url1, "jpg");
    img.save("output/result"+i+".jpg");
    image(img, 0, 0, 800, 800);
}
}*/

