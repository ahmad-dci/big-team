
window.onload = function(){
    document.getElementById("container").addEventListener('wheel', showMe);

}

var lastPos, newPos, timer, delta;
var delay = 50;

function clear() {
    lastPos = null;
    delta = 0;
  }
function showMe(){
    newPos = window.scrollY;
   
    document.getElementsByClassName("mainBar2")[0].classList.add('mainBarFirstPosition');

      if ( lastPos != null ){ // && newPos < maxScroll 
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      if( scrollY == 0){
        document.getElementsByClassName("mainBar2")[0].classList.remove('visibleTrue');
        document.getElementsByClassName("mainBar2")[0].classList.add('visibleFalse');
        document.getElementsByClassName("mainBar2")[0].classList.remove('ropositionMEAgain');
        document.getElementsByClassName("mainBar2")[0].classList.add('ropositionME');
        
      }
      if(delta < -3){
        document.getElementsByClassName("mainBar2")[0].classList.add('ropositionMEAgain');
        document.getElementsByClassName("mainBar2")[0].classList.remove('ropositionME');

        document.getElementsByClassName("mainBar2")[0].classList.remove('visibleFalse');
        document.getElementsByClassName("mainBar2")[0].classList.add('visibleTrue');
      }
      else if( delta > 3 ){
        document.getElementsByClassName("mainBar2")[0].classList.add('ropositionMEAgain');
        document.getElementsByClassName("mainBar2")[0].classList.remove('ropositionME');
        document.getElementsByClassName("mainBar2")[0].classList.remove('visibleTrue');
        document.getElementsByClassName("mainBar2")[0].classList.add('visibleFalse');
      }
    

    }


function ShowSearchBar(){
 document.getElementsByClassName("searchBar")[0].classList.toggle("ShowSearchBar");
}
// function ShowSideBar(){


//     document.getElementsByClassName("sideBarContainer")[0].classList.remove('sideBarContainerClosing');
//     document.getElementsByClassName("sideBarMask")[0].classList.remove('sideBarMaskHiding');
    
//     document.getElementsByClassName("sideBarContainer")[0].classList.add('sideBarContainerShowing');
//     document.getElementsByClassName("sideBarMask")[0].classList.add('sideBarMaskShowing');

// }
// function ShowSideBar(){
//     window.alert('hello showing');
//     document.getElementsByClassName("sideBarContainer")[0].classList.remove('sideBarContainerClosing');
//     document.getElementsByClassName("sideBarContainer")[0].classList.add('sideBarContainerShowing');
//     document.getElementsByClassName("sideBarMask")[0].classList.toggle('sideBarMaskShowing');
// }
//  function hideSideBar(){
//     document.getElementsByClassName("sideBarContainer")[0].classList.remove('sideBarContainerShowing');
//     document.getElementsByClassName("sideBarMask")[0].classList.remove('sideBarMaskShowing');
//     document.getElementsByClassName("sideBarContainer")[0].classList.add('sideBarContainerClosing');
//     document.getElementsByClassName("sideBarMask")[0].classList.add('sideBarMaskHiding');
//  }
// // 