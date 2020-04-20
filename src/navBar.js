//    grab each element in the heading and nav
//    on a mouse event/touch event loop thru elements
//        move first block set width 
//        move next block set width plus width of last Element
//        cont... 
//    reverse this on mouse out


import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Left} from './assets/images/C_letter.svg';
import {ReactComponent as Front} from './assets/images/S_letter.svg';
import {ReactComponent as Bottom} from './assets/images/R_letter.svg';
import {ReactComponent as Right} from './assets/images/C_letterdark.svg';
import {ReactComponent as Top} from './assets/images/R_letterdark.svg';
import {ReactComponent as Back} from './assets/images/S_letterdark.svg';
import content from './resources/siteContent';

const NavBar = () => {

    if (document.getElementById("cube")) {
        var cube = document.getElementById("cube");
        var heading = document.getElementById("heading").getElementsByclassNameName("slideElement");
        var nav = document.getElementById("nav").getElementsByclassNameName("slideElement");
        var initialOffset = 175;
        var initialOffsetNav = 100;
        
        navReveal(heading, nav, initialOffset, initialOffsetNav);
    };

    //    this function sets the mouseover action and loops thru the letters, pushing them out one by one
    function horizontalReveal(element, offset) {
        for(var i = 0; i < element.length; i++) {
            if (i <= 0) {
                element[i].style.transform = "translateX(" + offset + "px)";  
            } else {
                var width = (element[i].offsetWidth * i) + offset;
                element[i].style.transform = "translateX(" + width + "px)";
            };
        };
    };
    //    this just reverses everything back to 0 so that it collapses
    function horizontalClose(element) {
        for(var i = element.length - 1; i >= 0; i--) {
            element[i].style.transform = "translateX(0px)";
        };
    };

    //    effectively follows the same logic as the horizontalReveal but does it    vertically
    function verticalReveal(element, offset) {
        for(var i = 0; i < element.length; i++) {
            if (i <= 0) {
                element[i].style.transform = "translateY(" + offset + "px)";  
            } else {
                var height = (element[i].offsetHeight * i) + offset;
                element[i].style.transform = "translateY(" + height + "px)";
            };
            var linkSlide = element[i].getElementsByclassNameName("slideNavElement");
            horizontalReveal(linkSlide, 0);
        };
    };

    function verticalClose(element) {
        for(var i = element.length - 1; i >= 0; i--) {
            element[i].style.transform = "translateY(0px)";
            horizontalClose(element[i].getElementsByclassNameName("slideNavElement"))
        };    
    };

        
    function navReveal(heading, nav, initialOffset, initialOffsetNav) {
        //    set eventlisteners for both horizontal and vertical actions as well as mouseon and off
        cube.addEventListener('mouseover', function() {
            horizontalReveal(heading, initialOffset);
            verticalReveal(nav, initialOffsetNav);
        });
        cube.addEventListener('mouseout', function() {
            horizontalClose(heading);
            verticalClose(nav);
        });
    };

    return (
        <nav>
            <div id="cube-container">
                <div id="cube" onMouseEnter={(e) => verticalReveal(e, 100)} onMouseLeave={(e) => verticalClose(e, 100)}>
                    <header className="nav">
                        <div>
                            <span className="slideElement">CHRIS STEHM</span>
                        </div>
                    </header>
                    <div id="nav">
                        { content[0].pages.map( function (page, key) {
                            return (
                                <span key={key} className="slideElement navLink">
                                    <Link to={`/${page.name}`}>
                                        <span className={`slideNavElement ${page.name}-link`}>{page.title}</span>
                                    </Link>                                
                                </span>
                            );
                        })}
                    </div>
            {/* <!-- sides of the cube--> */}
                    <Front className="cube-face" id="front"/>
                    <Left className="cube-face" id="left"/>
                    <Bottom className="cube-face" id="bottom"/>
                    <Right className="cube-face" id="right" />
                    <Top className="cube-face" id="top" />
                    <Back className="cube-face" id="back" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;