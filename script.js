const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Sun & Moon
var clickSM = $('.uil-sm');
var header__css = $('#header-section');
var logoSpan = $('.logo span');
var logo = $('.logo');
var menuColor  = $$('#header-section .main-menu li a');
var bodyBG = $('body');

var width800__css = $$('.width800');
var title = document.querySelectorAll('.title');

var home__css = $('#home-section');
var home__title = $('.home__title'); 
var home__contact = $('.home__contact');

var about__contact = $('#about-section .about__description .about__data a');

var skill__box = $$('#skill-section .skill__box');
var skill__list = $$('#skill-section .skill__list');
var skill__icon = $$('#skill-section .skill__box .uil');
var skill__tabs = $('#qualification-section .qualification__tabs .show__tabs');

clickSM.onclick = function() {
    clickSM.classList.toggle('uil-sun');
    header__css.classList.toggle('header__sun');
    logo.classList.toggle('colorBlack');
    logoSpan.classList.toggle('colorBlue');
    for (var i=0; i<menuColor.length; i++) {
        menuColor[i].classList.toggle('colorBlack');
    }
    clickSM.classList.toggle('colorBlue');
    bodyBG.classList.toggle('body__sun');

    home__css.classList.toggle('colorBlack');
    home__title.classList.toggle('colorBlue');
    home__contact.classList.toggle('bgBlue');

    width800__css.forEach(item => {
        item.classList.toggle('colorBlack');
    })
    title.forEach(item => {
        item.classList.toggle('colorBlue');
    })

    about__contact.classList.toggle('bgBlue');

    skill__box.forEach(item => {
        item.classList.toggle('colorBlack');
    })

    skill__list.forEach(item => {
        item.classList.toggle('colorBlack');
    })

    skill__icon.forEach(item => {
        item.classList.toggle('colorBlue');
    })

    skill__tabs.style.color = '#5792E0';
}

// Mobile-header
var clickMobileMenu = document.querySelector('.uil-apps');
var openMobileMenu = document.querySelector('.mobile-header');
var closeMobileMenu = document.querySelector('.exit__Menu');

clickMobileMenu.onclick = function() {
    openMobileMenu.classList.add('show-header');
}

closeMobileMenu.onclick = function() {
    openMobileMenu.classList.remove('show-header');
}

// Skill
var clickSkill_a = document.querySelector('.a');
var clickSkill_b = document.querySelector('.b');
var clickSkill_c = document.querySelector('.c');
var clickSkill_d = document.querySelector('.d');

var openSkill_a = document.querySelector('.aa');
var openSkill_b = document.querySelector('.bb');
var openSkill_c = document.querySelector('.cc');
var openSkill_d = document.querySelector('.dd');

clickSkill_a.onclick = function() {
    openSkill_a.classList.toggle('open__list');
}

clickSkill_b.onclick = function() {
    openSkill_b.classList.toggle('open__list');
}

clickSkill_c.onclick = function() {
    openSkill_c.classList.toggle('open__list');
}

clickSkill_d.onclick = function() {
    openSkill_d.classList.toggle('open__list');
}

// Qualification
var clickEdu = document.querySelector('.qualification__name-edu');
var clickWork = document.querySelector('.qualification__name-work');

var openEdu = document.querySelector('.qualification__edu');
var openWork = document.querySelector('.qualification__work');

clickEdu.onclick = function() {
    if (openWork.classList.contains('open__tabs')) {
        openWork.classList.remove('open__tabs');
        openWork.classList.add('close__tabs');
        openEdu.classList.remove('close__tabs');
        openEdu.classList.add('open__tabs');

        clickWork.classList.remove('show__tabs');
        clickWork.classList.add('hide__tabs');
        clickEdu.classList.remove('hide__tabs');
        clickEdu.classList.add('show__tabs');
    }
}

clickWork.onclick = function() {
    if (openEdu.classList.contains('open__tabs')) {
        openEdu.classList.remove('open__tabs');
        openEdu.classList.add('close__tabs');
        openWork.classList.remove('close__tabs');
        openWork.classList.add('open__tabs');

        clickEdu.classList.remove('show__tabs');
        clickEdu.classList.add('hide__tabs');
        clickWork.classList.remove('hide__tabs');
        clickWork.classList.add('show__tabs');
    }
}

