/*
This is grabbing all of the paragraph elements in the page and changing the bg color
I want to try to make it possible to access the font size and make it bigger if
it is too small
*/
console.log("Chrome extension go/");
let paragraphs = document.getElementsByTagName("p");
for (elt of paragraphs){
     var style = window.getComputedStyle(elt, null).getPropertyValue('font-size');
     var fontSize = parseFloat(style);
     elt.style['background-color'] = '#FF00FF';
     if (fontSize < 20) {
        elt.style['font-size'] = '20px';
     
     break this now!!!
      }
}

/*
This grabs all of the static imgs that load and turn them into whichever image I put
down there
*/
var imgs = document.getElementsByTagName("img");
for(var i=0, l=imgs.length; i<l; i++) {
imgs[i].src = "https://www.usnews.com/dims4/USNEWS/8ad72b6/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F3c%2Fe4d17089c08f5056304921b4cdda90%2Fmedia%3Ac76e88a024eb4d2eaf9640f6d01916deBiden_Inauguration_19990.jpg";
}



