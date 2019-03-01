//https://stackoverflow.com/questions/40997344/wrap-an-image-around-a-cylindrical-object-in-html5-javascript#

var urlImage = "https://media.licdn.com/dms/image/C4D03AQEzfC1Ur9kdkg/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=4O7q8xTPQ3-Of2xsRHbYb5H75hJPK-02h1h698a_leM";

function canvas1() {
  var canvas = document.getElementById("canvas1");
  var ctx = canvas.getContext("2d");

  var productImg = new Image();
  productImg.onload = function() {
    var iw = productImg.width;
    var ih = productImg.height;
    console.log("height");

    canvas.width = iw;
    canvas.height = ih;

    ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
      0, 0, iw, ih);
    loadUpperIMage()
  };

  productImg.src = "http://res.cloudinary.com/pussyhunter/image/upload/c_scale,f_auto,h_350/left_handle_cup_i7ztfs.jpg"


  function loadUpperIMage() {
    var img = new Image();


    img.src = urlImage
    img.onload = function() {

      var iw = img.width;
      var ih = img.height;

      var xOffset = 102, //left padding
        yOffset = 110; //top padding

      //alert(ih)
      var a = 75.0; //image width
      var b = 10; //round ness

      var scaleFactor = iw / (4 * a);

      // draw vertical slices
      for (var X = 0; X < iw; X += 1) {
        var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
        ctx.drawImage(img, X * scaleFactor, 0, iw / 9, ih, X + xOffset, y + yOffset, 1, 174);
      }
    };
  }

};

function canvas2() {

  var canvas = document.getElementById("canvas2");
  var ctx = canvas.getContext("2d");

  var productImg = new Image();
  productImg.onload = function() {
    var iw = productImg.width;
    var ih = productImg.height;
    console.log("height");

    canvas.width = iw;
    canvas.height = ih;

    ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
      0, 0, iw, ih);
    loadUpperIMage()
  };


  productImg.src = "http://res.cloudinary.com/pussyhunter/image/upload/h_350/canter_handle_cup_xyxhdd.jpg"

  function loadUpperIMage() {
    var img = new Image();

    img.src = urlImage

    img.onload = function() {

      var iw = img.width;
      var ih = img.height;

      // alert(iw)

      var xOffset = 101, //left padding
        yOffset = 110; //top padding

      var a = 75.0; //image width
      var b = 10; //round ness

      var scaleFactor = iw / (4 * a);

      // draw vertical slices
      for (var X = 0; X < iw; X += 1) {
        var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
        ctx.drawImage(img, X * scaleFactor, 0, iw / 3, ih, X + xOffset, y + yOffset, 1, 174);

      }
    };
  }

};
function canvas3() {

  var canvas = document.getElementById("canvas3");
  var ctx = canvas.getContext("2d");

  var productImg = new Image();
  productImg.onload = function() {
    var iw = productImg.width;
    var ih = productImg.height;

    canvas.width = iw;
    canvas.height = ih;

    ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
      0, 0, iw, ih);
    loadUpperIMage()
  };

  productImg.src = "http://res.cloudinary.com/pussyhunter/image/upload/h_350/right_handle_cup_dsdhr7.jpg"


  function loadUpperIMage() {
    var img = new Image();

    img.src = urlImage

    img.onload = function() {

      var iw = img.width;
      var ih = img.height;

      //alert(iw)

      var xOffset = 102, //left padding
        yOffset = 110; //top padding

      var a = 75.0; //image width
      var b = 10; //round ness

      var scaleFactor = iw / (3 * a);

      // draw vertical slices
      for (var X = 0; X < iw; X += 1) {
        var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
        ctx.drawImage(img, X * scaleFactor, 0, iw / 1.5, ih, X + xOffset, y + yOffset, 1, 174);
      }
    };
  }

}