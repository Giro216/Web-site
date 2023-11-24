let container = document.querySelector('#block-wrapper');
let leftArrow = document.querySelector('#slider-L');
let rightArrow = document.querySelector('#slider-R');
let first_block = 0;
let last_block = 3;
let Next_last_block;
let Next_first_block;

const blocks_col = document.querySelectorAll('.page3 .block');
let block4 = blocks_col[1].cloneNode(true);

// Изменяем содержимое элемента на текст и значения из четвертого блока
block4.querySelector('img').remove();
const new_img = document.createElement('img');
new_img.className = "Papka";
new_img.src = "img/Papka.png";
block4.querySelector('.group').append(new_img);
block4.querySelector('.text-wrapper').textContent = 'Папки';
block4.querySelector('.text-wrapper-2').textContent = 'Тираж от 20 штук';
block4.querySelector('.text').textContent = 'Папки для хранения документов в блочном формате. Изготовим по вашим предпочтениям в кратчайшие сроки.';
block4.setAttribute('id', 'slider-block4');
const blocks = Array.from(blocks_col);
blocks.push(block4);


// курсор наведен на левую стрелку
leftArrow.addEventListener('mouseenter', function(event){
    leftArrow.setAttribute('style', 'background: rgba(235, 235, 235, 0.58)')
    leftArrow.addEventListener('click', MoveLeft);
});

// курсор наведен на правую стрелку
rightArrow.addEventListener('mouseenter', function(event){
    rightArrow.setAttribute('style', 'background: rgba(235, 235, 235, 0.58)');
    rightArrow.addEventListener('click', MoveRight);

});



// курсор покинул левую стрелку
leftArrow.addEventListener('mouseleave', function(event) {
    leftArrow.setAttribute('style', '')
});

// курсор покинул правую стрелку
rightArrow.addEventListener('mouseleave', function(event) {
    rightArrow.setAttribute('style', '')
});

function MoveRight(event)
{
    document.querySelector(`#slider-block${first_block}`).remove();
    first_block++;
    if (first_block >= blocks.length) first_block = 0;

    Next_last_block = last_block + 1;
    if (Next_last_block >= blocks.length) Next_last_block = 0;
    console.log(Next_last_block);
    container.append(blocks[Next_last_block]);
    last_block = Next_last_block;
    console.log(blocks);
}

function MoveLeft(event)
{
    document.querySelector(`#slider-block${last_block}`).remove();
    last_block--;
    if (last_block < 0) last_block = blocks.length - 1;

    Next_first_block = first_block - 1;
    if (Next_first_block < 0) Next_first_block = blocks.length - 1;
    console.log(Next_first_block);
    container.prepend(blocks[Next_first_block]);
    first_block = Next_first_block;
    console.log(blocks);
}
    
