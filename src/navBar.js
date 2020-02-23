//    grab each element in the heading and nav
//    on a mouse event/touch event loop thru elements
//        move first block set width 
//        move next block set width plus width of last Element
//        cont... 
//    reverse this on mouse out

import React from 'react';

// const navBar;
//     <nav>
//         <div id="cube-container">
//             <div id="cube">
//         {/* /* <!--                    the viewable sides of the cube--> */}
//                 <div id="front"></div>
//                 <div id="left"></div>
//                 <div id="bottom"></div>
//         {/* <!--                    this is where the header begins--> */}
//                 <header>
//                     <div id="heading">
//                         <span class="slideElement">C</span>
//                         <span class="slideElement">H</span>
//                         <span class="slideElement">R</span>
//                         <span class="slideElement">I</span>
//                         <span class="slideElement">S</span>
//                         <span class="slideElement">&nbsp;</span>
//                         <span class="slideElement">S</span>
//                         <span class="slideElement">T</span>
//                         <span class="slideElement">E</span>
//                         <span class="slideElement">H</span>
//                         <span class="slideElement">M</span>
//                     </div>
//                 </header>
//         {/* <!--                    this is where the nav begins--> */}
//                 <div id="nav">
//                     <span class="slideElement navLink">
//                         <span class="slideNavElement" id="navSpacer"></span>
//                     </span>
//                     <span class="slideElement navLink">
//                         <a href="#code">
//                             <span class="slideNavElement">c</span>
//                             <span class="slideNavElement">o</span>
//                             <span class="slideNavElement">d</span>
//                             <span class="slideNavElement">e</span>
//                         </a>
//                     </span>
//                     <span class="slideElement navLink">
//                         <a href="#drawing">
//                             <span class="slideNavElement">d</span>
//                             <span class="slideNavElement">r</span>
//                             <span class="slideNavElement">a</span>
//                             <span class="slideNavElement">w</span>
//                         </a>
//                     </span>
//                     <span class="slideElement navLink">
//                         <a href="#design">
//                             <span class="slideNavElement">d</span>
//                             <span class="slideNavElement">e</span>
//                             <span class="slideNavElement">s</span>
//                             <span class="slideNavElement">i</span>
//                             <span class="slideNavElement">g</span>
//                             <span class="slideNavElement">n</span>
//                         </a>
//                     </span>
//                     <span class="slideElement navLink">
//                         <a href="#music">
//                             <span class="slideNavElement">p</span>
//                             <span class="slideNavElement">l</span>
//                             <span class="slideNavElement">a</span>
//                             <span class="slideNavElement">y</span>
//                         </a>
//                     </span>
//                 </div>
//         {/* <!--                    these are the backsides of the cube-->÷ */}
//                 <div id="right"></div>
//                 <div id="top"></div>
//                 <div id="back"></div>
//             </div>
//         </div>
//     </nav>
// )

// //    this function sets the mouseover action and loops thru the letters, pushing them out one by one
// function horizontalReveal(element, offset) {
//     for(var i = 0; i < element.length; i++) {
//         if (i <= 0) {
//             element[i].style.transform = "translateX(" + offset + "px)";  
//         } else {
//             var width = (element[i].offsetWidth * i) + offset;
//             element[i].style.transform = "translateX(" + width + "px)";
//         };
//     };
// };
// //    this just reverses everything back to 0 so that it collapses
// function horizontalClose(element) {
//     for(var i = element.length - 1; i >= 0; i--) {
//         element[i].style.transform = "translateX(0px)";
//     };
// };

// //    effectively follows the same logic as the horizontalReveal but does it    vertically
// function verticalReveal(element, offset) {
//     for(var i = 0; i < element.length; i++) {
//         if (i <= 0) {
//             element[i].style.transform = "translateY(" + offset + "px)";  
//         } else {
//             var height = (element[i].offsetHeight * i) + offset;
//             element[i].style.transform = "translateY(" + height + "px)";
//         };
//         var linkSlide = element[i].getElementsByClassName("slideNavElement");
//         horizontalReveal(linkSlide, 0);
//     };
// };

// function verticalClose(element) {
//     for(var i = element.length - 1; i >= 0; i--) {
//         element[i].style.transform = "translateY(0px)";
//         horizontalClose(element[i].getElementsByClassName("slideNavElement"))
//     };    
// };

    
// function navReveal(heading, nav, initialOffset, initialOffsetNav) {
//     //    set eventlisteners for both horizontal and vertical actions as well as mouseon and off
//     cube.addEventListener('mouseover', function() {
//         horizontalReveal(heading, initialOffset);
//         verticalReveal(nav, initialOffsetNav);
//     });
//     cube.addEventListener('mouseout', function() {
//         horizontalClose(heading);
//         verticalClose(nav);
//     });
// };


// export default navBar;