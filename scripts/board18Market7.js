/* 
 * board18Map7.js contains all the functions that
 * implement the keyboard shortcut events.
 */

/* 
 * The setUpKeys function performs all of the bind 
 * operations for the keyboard shortcut events.
 *   KEY  Action
 *  Enter Accept Move
 *    C   Cancel Move
 *    M   Goto Map Board
 *    F   Flip Token
 *    L   Move Left One Box
 *    R   Move Right One Box
 *    U   Move Up One Box
 *    D   Move Down One Box
 */
function setUpKeys() {
  $(document).keydown(function(e){
	  var keycode = (e.keyCode ? e.keyCode : e.which);
    switch(keycode) {
      case 13: // "Enter" keycode
        acceptMove();
        break;
      case 67: // "C" keycode
        trayCanvasApp();
        mainCanvasApp();
        toknCanvasApp();
        break;    
      case 77: // "M" keycode
        window.location = "board18Map.php?dogame=" + BD18.gameID;
        break;
      case 70: // "F" keycode
        if (BD18.boxIsSelected === true && 
            BD18.tokenIsSelected === true){
          flipToken();
        };
        break; 
      case 76: // "L" keycode
        if (BD18.boxIsSelected === true && 
            BD18.tokenIsSelected === true){
          var subX = parseInt(BD18.stockMarket.xStep);
          BD18.curMktX -= subX;
          repositionToken(BD18.curMktX,BD18.curMktY);
        };
        break; 
      case 82: // "R" keycode
        if (BD18.boxIsSelected === true && 
            BD18.tokenIsSelected === true){
          var addX = parseInt(BD18.stockMarket.xStep);
          BD18.curMktX += addX;
          repositionToken(BD18.curMktX,BD18.curMktY);
        };
        break; 
      case 85: // "U" keycode
        if (BD18.boxIsSelected === true && 
            BD18.tokenIsSelected === true){
          var subY = parseInt(BD18.stockMarket.yStep);
          BD18.curMktY -= subY;
          repositionToken(BD18.curMktX,BD18.curMktY);
        };
        break; 
      case 68: // "D" keycode
        if (BD18.boxIsSelected === true && 
            BD18.tokenIsSelected === true){
          var addY = parseInt(BD18.stockMarket.yStep);
          BD18.curMktY += addY;
          repositionToken(BD18.curMktX,BD18.curMktY);
        };
        break;  
      default:
    }
    e.preventDefault();
  });
}