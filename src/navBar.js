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
                <div id="cube">
            {/* <!--                    the viewable sides of the cube--> */}
                    <Front id="front"/>
                    <Left id="left"/>
                    <Bottom id="bottom"/>
            {/* <!--                    this is where the header begins--> */}
                    <header>
                        <div id="heading">
                            <span className="slideElement">C</span>
                            <span className="slideElement">H</span>
                            <span className="slideElement">R</span>
                            <span className="slideElement">I</span>
                            <span className="slideElement">S</span>
                            <span className="slideElement">&nbsp;</span>
                            <span className="slideElement">S</span>
                            <span className="slideElement">T</span>
                            <span className="slideElement">E</span>
                            <span className="slideElement">H</span>
                            <span className="slideElement">M</span>
                        </div>
                    </header>
            {/* <!--                    this is where the nav begins--> */}
                    <div id="nav">
                        <span className="slideElement navLink">
                            <span className="slideNavElement" id="navSpacer"></span>
                        </span>
                        <span className="slideElement navLink">
                            <a href="#code">
                                <span className="slideNavElement">c</span>
                                <span className="slideNavElement">o</span>
                                <span className="slideNavElement">d</span>
                                <span className="slideNavElement">e</span>
                            </a>
                        </span>
                        <span className="slideElement navLink">
                            <a href="#drawing">
                                <span className="slideNavElement">d</span>
                                <span className="slideNavElement">r</span>
                                <span className="slideNavElement">a</span>
                                <span className="slideNavElement">w</span>
                            </a>
                        </span>
                        <span className="slideElement navLink">
                            <a href="#design">
                                <span className="slideNavElement">d</span>
                                <span className="slideNavElement">e</span>
                                <span className="slideNavElement">s</span>
                                <span className="slideNavElement">i</span>
                                <span className="slideNavElement">g</span>
                                <span className="slideNavElement">n</span>
                            </a>
                        </span>
                        <span className="slideElement navLink">
                            <a href="#music">
                                <span className="slideNavElement">p</span>
                                <span className="slideNavElement">l</span>
                                <span className="slideNavElement">a</span>
                                <span className="slideNavElement">y</span>
                            </a>
                        </span>
                    </div>
            {/* <!--                    these are the backsides of the cube--> */}
                    <Right id="right" />
                    <Top id="top" />
                    <Back id="back" />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;