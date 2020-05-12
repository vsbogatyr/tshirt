function choiseSize() {
    const clickSize = document.querySelector('.catalog-product__sizes');
    let sizeItem = document.querySelectorAll('.catalog-product__size-item');

    clickSize.addEventListener('click', function (e) {
        e.preventDefault();
        let target = e.target;

        sizeItem.forEach(function (item) {
            item.classList.remove('active');
            target.closest('.catalog-product__size-item').classList.add('active');
        });
    })
}

function choiseColor() {
    let clickColor = document.querySelector('.catalog-product__colors');
    const colorItem = document.querySelectorAll('.catalog-product__color-item');
    let tshirts = document.querySelectorAll('.catalog-product__photos-item');

    clickColor.addEventListener('click', function (e) {
        e.preventDefault();
        let target = e.target;
        let tshirtColor = document.querySelector(`.${target.getAttribute('data-color')}`);

        tshirts.forEach(function (tshirt) {
            tshirt.classList.remove('visible');
            tshirtColor.classList.add('visible');
        })

        colorItem.forEach(function (item) {
            item.classList.remove('active');
            target.closest('.catalog-product__color-item').classList.add('active');
        });
    })
}

function filtetrInfo() {
    const filterList = document.querySelector('.filter');
    let controls = document.querySelectorAll('.filter__item');
    let active = 'filter__item_active';

    filterList.addEventListener('click', function (e) {
        e.preventDefault();
        let target = e.target;
        let idElement = document.querySelector(`#${target.getAttribute('data-info')}`);
        let infoBlock = document.querySelectorAll('.information__block');
        
        infoBlock.forEach(function (infoItem) {
            infoItem.classList.remove('active');
            idElement.classList.add('active');
        })

        controls.forEach(function (control) {
            control.classList.remove(active);
            target.closest('.filter__item').classList.add(active);
        });
    })
}

choiseSize();
choiseColor();
filtetrInfo();
