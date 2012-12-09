(function() {
  var Slideshow;

  Slideshow = (function() {

    function Slideshow(location, info) {
      this.location = location;
      this.html = _.map(info, function(caption, imgUrl) {
        var html;
        html = '<div class="slide">';
        html += '<img src="' + imgUrl + '" alt="" />';
        html += '<p>' + caption + '</p></div>';
        return html;
      });
      $(this.location).html(this.html[0]);
      this.current = 0;
    }

    Slideshow.prototype.next = function() {
      var html;
      html = this.html[++this.current];
      return $(this.location).html(html);
    };

    return Slideshow;

  })();

  document.slideshow = new Slideshow("#slideshow", {
    "This is the logo.": "/images/logo.jpg",
    "This is the next logo.": "/images/logo.jpg"
  });

  document.slideshow.next();

}).call(this);
