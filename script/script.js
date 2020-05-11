function menu() {
    let menuOpen = document.querySelector('.sidebar__hamburger');
    let sidebar = document.querySelector('.sidebar');
    let sidebarClose = document.querySelector('.sidebar__close');

    menuOpen.addEventListener('click', function (e) {
        e.preventDefault();
        sidebar.classList.add('sidebar_opened');
    })

    sidebarClose.addEventListener('click', function (e) {
        e.preventDefault();
        sidebar.classList.remove('sidebar_opened');
    })
}

function slider() {
    let sliderItem = document.querySelectorAll('.fade-slider__item');
    let activeClass = 'fade-slider__item_visible';
    let index = 0;

    setInterval(function () {
        sliderItem[index].classList.remove(activeClass);
        index++;
        if (index + 1 > sliderItem.length) {
            index = 0;
        }
        sliderItem[index].classList.add(activeClass);
    }, 5000);
}

function filterProduct() {
    const filterList = document.querySelector('.filter');
    let active = 'filter__item_active';
    let controls = document.querySelectorAll('.filter__item');

    let elem = document.querySelector('.product__list');
    let iso = new Isotope(elem, {
        itemSelector: '.product__item',
        filter: '.new'
    });

    filterList.addEventListener('click', function (e) {
        e.preventDefault();
        let target = e.target;
        const filterName = target.getAttribute('data-filter');
        controls.forEach(function (control) {
            control.classList.remove(active);
            target.closest('.filter__item').classList.add(active);
            iso.arrange({
                filter: `.${filterName}`
            })
        });
    })    
}

menu();
slider();
filterProduct();