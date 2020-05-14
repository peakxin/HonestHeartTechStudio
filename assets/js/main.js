/*
 * @Author: Peak Xin 
 * @Date: 2020-05-14 16:10:19 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-05-14 22:51:31
 */
$('body').scrollspy({ target: '.navbar-menu' });

var navBar = document.createElement('span');
navBar.setAttribute('class', 'nav-bar');
navBar.style.cssText = 'left: 0; top: 46px; width: 0px; opacity: 0;';
$('.navbar-menu ul').append(navBar)
    .on('mouseover', 'li', function(e) {
        var obj = $(e.target);
        var navBarUlLeft = $('.navbar-menu ul').offset().left;
        var width = obj.outerWidth();
        var left = obj.offset().left - navBarUlLeft;
        navBar.style.cssText = 'left: '+left+'px; top: 46px; width: '+width+'px; opacity: 1;';
    })
    .on('mouseout', 'li', function(e) {
        var obj = $(e.target);
        var navBarUlLeft = $('.navbar-menu ul').offset().left;
        var width = obj.outerWidth();
        var left = obj.offset().left - navBarUlLeft + width/2;
        navBar.style.cssText = 'left: '+left+'px; top: 46px; width: 0; opacity: 0;';
    });
