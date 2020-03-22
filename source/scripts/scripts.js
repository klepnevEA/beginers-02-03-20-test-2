
function ready() {

    /*----------------------mobile-menu--------------------*/

    let openMenu = (e) => {
        e.preventDefault();
        mobileMenu.classList.add('mobile-menu--active');
    }

    let closeMenu = (e) => {
        e.preventDefault();
        mobileMenu.classList.remove('mobile-menu--active');
    }


    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu__close');

    mobileNav.addEventListener('click', openMenu);
    mobileMenuClose.addEventListener('click', closeMenu);


    /*---------------------reviews-----------------------*/

    let openPopup = (e) => {
        e.preventDefault();
        popup.classList.add('popup--open');
    }

    const btnReviews = document.getElementsByClassName('btn-reviews');
    const popup = document.getElementById('popup');


    for(let i = 0; i < btnReviews.length; i++) {
        btnReviews[i].addEventListener('click', openPopup);
    }


    /*---------------------accordion-----------------------*/

    let openAccordion = (e) => {
        e.preventDefault();

        if(e.target.closest('.accirdion-menu__elem').classList.contains('accirdion-menu__elem--active')) {
            for(let i = 0; i < accirdionMenuElem.length; i++) {
                accirdionMenuElem[i].classList.remove('accirdion-menu__elem--active');
            };
        } else {
            for(let i = 0; i < accirdionMenuElem.length; i++) {
                accirdionMenuElem[i].classList.remove('accirdion-menu__elem--active');
            };
            e.target.closest('.accirdion-menu__elem').classList.add('accirdion-menu__elem--active');
        }
    }

    const accirdionMenuElem = document.getElementsByClassName('accirdion-menu__elem');

    for(let i = 0; i < accirdionMenuElem.length; i++) {
        accirdionMenuElem[i].addEventListener('click', openAccordion);
    }  


    /*------------map-------------------*/

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [50.751574, 37.573856],
                zoom: 9
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../img/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-15, -38]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([50.751574, 36.573856], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '../img/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

            myPlacemarkWithContent2 = new ymaps.Placemark([51.751574, 38.573856], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '../img/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent)
            .add(myPlacemarkWithContent2);
    });
   
};  

document.addEventListener("DOMContentLoaded", ready);

