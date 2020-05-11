function choiseSize() {
    const clickSize = document.querySelector('.catalog-product__sizes');
    let sizeItem = document.querySelectorAll('.catalog-product__size-item');
    
    clickSize.addEventListener('click', function(e) {
        e.preventDefault();
        let target = e.target;
        console.log(target);
        
        sizeItem.forEach(function (item) {
            item.classList.remove('active');
            target.closest('.catalog-product__size-item').classList.add('active');
        });
    })    
}

function choiseColor() {
    let clickColor = document.querySelector('.catalog-product__colors');
    const colorItem = document.querySelectorAll('.catalog-product__color-item');
    
    clickColor.addEventListener('click', function(e) {
        e.preventDefault();
        let target = e.target;
        console.log(target);
        
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
        controls.forEach(function (control) {
            control.classList.remove(active);
            target.closest('.filter__item').classList.add(active);
        });
    })    
}

choiseSize();
choiseColor();
filtetrInfo();
