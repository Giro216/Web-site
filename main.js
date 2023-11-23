let container = document.querySelector('#block-wrapper');
let leftArrow = document.querySelector('#slider-L');
let rightArrow = document.querySelector('#slider-R');
let arr_temp = [];
let index = 0;
let n = 0;
// курсор наведен на левую стрелку
leftArrow.addEventListener('mouseenter', function(event){
    leftArrow.setAttribute('style', 'background: rgba(235, 235, 235, 0.58)')

});
// курсор покинул левую стрелку
leftArrow.addEventListener('mouseleave', function(event) {
    leftArrow.setAttribute('style', '')
});

// курсор наведен на правую стрелку
rightArrow.addEventListener('mouseenter', function(event){
    rightArrow.setAttribute('style', 'background: rgba(235, 235, 235, 0.58)');
    rightArrow.addEventListener('click', MoveRight);

});

// курсор покинул правую стрелку
rightArrow.addEventListener('mouseleave', function(event) {
    rightArrow.setAttribute('style', '')
});

// сдвиг вправо
function MoveRight(event){
    if (index == 0)
    {
        let curr_block = document.querySelector(`#slider-block0`);
        arr_temp.push(curr_block.cloneNode(true));
        curr_block.remove();

        let last_block = document.querySelector(`#slider-block4`);
        last_block.setAttribute('style','');
        index = index + 1;
    }else{
        let curr_block = document.querySelector(`#slider-block${index % 5}`);
        arr_temp.push(curr_block.cloneNode(true));
        curr_block.remove();

        //let last_block = document.querySelector(`#slider-block${(index + 4) % 5}`);
        container.append(arr_temp[0]);
        console.log(arr_temp[0]);
        arr_temp.shift();
        n++;
        index++;
    }

    
}