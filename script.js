
// Accordion USING JS
// document.querySelectorAll('.question').forEach((el) => {
//     el.addEventListener('click', () => {
//         let content = el.nextElementSibling;

//         if(content.style.maxHeight) {
//             document.querySelectorAll('.accordion-content').forEach((acco) => acco.classList.remove('active'))
//         } else {
//             document.querySelectorAll('.answer').forEach((el) => el.style.maxHeight = null)
//             document.querySelectorAll('.accordion-content').forEach((acco) => acco.classList.remove('active'))
//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     })
// })


// let accordions = Array.from(document.querySelectorAll('.question'));

// accordions.forEach((accordion) => {
//     accordion.addEventListener('click', changeStatus)
// })

// function changeStatus(event) {
//     event.preventDefault();
//     let curretnQuestionBtn = event.target.closest('.accordion-content');
//     curretnQuestionBtn.classList.toggle('active');
// }



// ACCORDION USING JQUERY
$(document).ready(function() {
    $('.question').click(function() {

        $('.answer').css('max-height', '0');
        $(this).next('.answer').css('max-height', $('.answer').prop('scrollHeight') + 'px');

        $('.accordion-content').click(function() {
            $('.accordion-content').removeClass('active');
            $(this).addClass('active');
        });
    })
});



/**
 * HEADER: burger-menu
 */
let btnOpenMenu = document.querySelector("#burger-menu");

btnOpenMenu.onclick = function(e) {
    e.preventDefault();

    let sideBarMenu = document.querySelector(".sidebar-menu");
    sideBarMenu.classList.add("opened");
    $('body').css({ "overflow": "hidden" });
    $(".wrapper-for-menu").css({ "display": "block" })
}

let btnCloseMenu = document.querySelector("#close-menu");

btnCloseMenu.onclick = function(e) {
    e.preventDefault();

    let sideBarMenu = document.querySelector(".sidebar-menu");
    sideBarMenu.classList.remove("opened");
    $('body').css({ "overflow": "auto" });
    $(".wrapper-for-menu").css({ "display": "none" })
}

$(".wrapper-for-menu").on("click", function() {
    $(".sidebar-menu").removeClass("opened");
    $(".wrapper-for-menu").css({ "display": "none" });
    $("body").css({ "overflow": "auto" });
});



// SLIDER CLEANING (INCLUDE IN CLEANING) JS

// let sliderNav = document.querySelectorAll(".slider-nav li");

// for(let i = 0; i < sliderNav.length; i++) {
//     sliderNav[i].onclick = function(e) {
//         e.preventDefault();

//         document.querySelector('.slider-nav li.active').classList.remove("active");
//         document.querySelector('.slider-item.active').classList.remove("active");
//         e.target.classList.add("active");
//         let id = e.target.dataset.id;

//         document.querySelector('.slider-item[data-id="' + id + '"]').classList.add("active");
//     }
// }


// SLIDER CLEANING USING JQuery
$('.slider-nav li').on('click', function(e) {
    e.preventDefault();

    $('.slider-nav li.active').removeClass('active');
    let id = $(this).data('id');
    $('.slider-item.active').fadeOut( 150, function() {
        $(this).removeClass('active');
        $('.slider-item[data-id="' + id + '"]').fadeIn( 150, function() {
            $(this).addClass('active');
        });
    });
    $(this).addClass('active');
});

