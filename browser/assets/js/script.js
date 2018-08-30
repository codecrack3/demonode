// function resizeHeaderOnScroll() {
//     const distanceY = window.pageYOffset || document.documentElement.scrollTop,
//         shrinkOn = 50,
//         headerEl = document.getElementById('image-title');

//     if (distanceY > shrinkOn) {
//         headerEl.classList.add("smaller");
//     } else {
//         headerEl.classList.remove("smaller");
//     }
// }
//window.addEventListener('scroll', resizeHeaderOnScroll);

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($("#image-title").length != 0) {
        if (scroll >= 50) {
            $("#image-title").addClass("smaller");
        } else {
            $("#image-title").removeClass("smaller");
        }
    }
});


var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st < lastScrollTop) {
        // downscroll code
        if ($("#menu-startup-show").css('display')!='none') {
            if ($('#menu-startup').hasClass('fa-times')) {
                $('#menu-startup').removeClass('fa-times');
                if ($('#menu-anatomy').hasClass('fa-minus')) {
                    $('#menu-anatomy').removeClass('fa-minus');
                    $('#menu-anatomy').addClass('fa-plus');
                }
            }
            $("#menu-startup-show").hide('fast');
            $("#menu-anatomy-show").hide('fast');

            $("#bg-anatomy").removeClass("bg-menu-anatomy");
        }
        //    } else {
        //       // upscroll code
        //       alert('up');
    }
    lastScrollTop = st;
});

$(document).ready(function () {
    //click on menu startup
    $("#menu-startup").click(function () {
        if ($('#menu-startup').hasClass('fa-times')) {
            if ($('#menu-anatomy').hasClass('fa-minus')) {
                $('#menu-anatomy').removeClass('fa-minus');
                $('#menu-anatomy').addClass('fa-plus');
            }
        }
        $("#menu-startup-show").toggle('fast');
        $("#menu-startup").toggleClass("fa-times");
        $("#menu-anatomy-show").hide('fast');
        $('html, body').removeClass('noscroll');
        $("#bg-anatomy").removeClass("bg-menu-anatomy");
    });
    //click on sub menu anatomy
    $("#menu-startup-show-click-on").click(function () {
        // $("#menu-anatomy-show").toggle('fast');
        // $("#menu-anatomy").toggleClass("fa-minus");
        // $("#bg-anatomy").toggleClass("bg-menu-anatomy");
        $("#menu-anatomy-show").slideToggle('fast');
        $('html, body').toggleClass('noscroll');
        //$("#menu-anatomy").toggleClass('fa-minus');
        if ($('#menu-anatomy').hasClass('fa-plus')) {
            $('#menu-anatomy').removeClass('fa-plus');
            $('#menu-anatomy').addClass('fa-minus');
        } else {
            $('#menu-anatomy').removeClass('fa-minus');
            $('#menu-anatomy').addClass('fa-plus');
        }
        $("#bg-anatomy").toggleClass("bg-menu-anatomy");
    });
    //close download
    $("#close-download").click(function () {
        $("#hidden-download").hide('fast');
        //$("#img-header").css("margin-top","10%");
    });

    //click hide menu nava fa-minus
    $('#menu-startup-show > a:not(:first-child)').click(function () {
        $("#menu-startup-show").hide('fast');
        $('html, body').removeClass('noscroll');
        if ($('#menu-startup').hasClass('fa-times')) {
            $('#menu-startup').removeClass('fa-times');
            $('#menu-startup').addClass('fa-bars');
        }
    });
});


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 170
    }, 500);
});

// $('li a').on('click', function (e) {
//     var targetSec = $(this).text();
//     $('html, body').animate({
//        scrollTop: $('#' + targetSec).offset().top
//     }, 2000);
//  });

function myFunction() {
    var x = document.getElementById("display");
    var y = document.getElementById("changecolor");
    var z = document.getElementById("changearrow");
    if (x.className === "hidden") {
        x.className += " target";
    } else {
        x.className = "hidden";
    }
    if (y.className === "footer") {
        y.className += " changeall";
    } else {
        y.className = "footer";
    }
    if (z.className === "fas fa-chevron-right") {
        z.className += " changear";
    } else {
        z.className = "fas fa-chevron-right";
    }
}

function myFunction2() {
    var x = document.getElementById("display2");
    var y = document.getElementById("changecolor2");
    var z = document.getElementById("changearrow2");
    if (x.className === "hidden2") {
        x.className += " target";
    } else {
        x.className = "hidden2";
    }
    if (y.className === "footer") {
        y.className += " changeall2";
    } else {
        y.className = "footer";
    }
    if (z.className === "fas fa-chevron-right") {
        z.className += " changear2";
    } else {
        z.className = "fas fa-chevron-right";
    }
}

function openModel() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the <span> element that closes the modal
    //var span = document.getElementsByClassName("close")[0];
    var button = document.getElementById('close-btn-download');
    // When the user clicks the button, open the modal  

    modal.style.display = "block";


    // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    //     modal.style.display = "none";
    // }

    button.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

$(document).ready(function () {
    var stickyNav = function () {
        $('.nava').addClass('sticky');
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function () {
        stickyNav();
    });
});

// $(document).ready(function() {
//     // grab the initial top offset of the navigation 
//        var stickyNavTop = $('.menu-left-inchapter-fix').offset().top;
       
//        // our function that decides weather the navigation bar should have "fixed" css position or not.
//        var stickyNavMenu = function(){
//         var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
//         // if we've scrolled more than the navigation, change its position to fixed to stick to top,
//         // otherwise change it back to relative
//         if (scrollTop > stickyNavTop) { 
//             $('.menu-left-inchapter-fix').addClass('ticky-bar-left-chapter');
//         } else {
//             $('.menu-left-inchapter-fix').removeClass('ticky-bar-left-chapter'); 
//         }
//     };

//     stickyNavMenu();
//     // and run it again every time you scroll
//     $(window).scroll(function() {
//       stickyNavMenu();
//     });
//   });
// $(document).ready(function(){
//     setTimeout(function(){
//       $('.container-inspi-stories-image .inspi-stories-image').on("click", function(){
//         var index =  $(this).index();
//         var items = $('.body-stories');
//         var item =  items.children().eq(index);
//         items.scrollLeft((item.width() - 50)  * index);
//         alert('ahihi');
//     });
//     }, 1000);
//   });