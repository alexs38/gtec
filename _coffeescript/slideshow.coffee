class Slideshow
  constructor: (@location, info) ->
    @html = _.map(info, (caption, imgUrl) ->
      html  = '<div class="slide">'
      html += '<img src="' + imgUrl + '" alt="" />'
      html += '<p>' + caption + '</p></div>'
      
      html
    )
    $(@location).html(@html[0])
    @current = 0
    
  next: ->
    html = @html[++@current]
    $(@location).html(html)

document.slideshow = new Slideshow("#slideshow", {
  "This is the logo.": "/images/logo.jpg",
  "This is the next logo.": "/images/logo.jpg"
})

document.slideshow.next()

