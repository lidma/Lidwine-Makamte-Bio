/*
define variables
calculate the document height and set the offset to a quarter of that value
Add event listerners for scroll and click
*/

let btt = document.getElementById( "back-to-top" ),
body = document.body,
docElem = document.documentElement,
offset = 100,
scrollPos, docHeight,
ischrome = navigator.userAgent.toLowerCase().indexOf( "chrome" ) > -1;

// calculate the document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
  offset = docHeight / 4;
} 

// add scroll event listerner
window.addEventListener("scroll", function( event ) 
{
  scrollPos = body.scrollTop || docElem.scrollTop;
  btt.className = ( scrollPos > offset) ? "visible" : "";
});

// Add click event listerners
btt.addEventListener( "click", function( event ){
    event.preventDefault();

    if ( ischrome) {
      docElem.scrollTop = 0;
    } else {
      body.scrollTop = 0;
    }
});