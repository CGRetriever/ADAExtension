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
      }
}



