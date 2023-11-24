let container = document.querySelector('#block-wrapper');
let leftArrow = document.querySelector('#slider-L');
let rightArrow = document.querySelector('#slider-R');
let first_block = 0;
let last_block = 3;
let Next_last_block;
let Next_first_block;


let block4 = document.createElement('div');
block4.id="slider-block4";
block4.className = "block";
block4.innerHTML = `
    <div class="group-wrapper">
        <div class="group">
            <img class="Papka" src="img/Papka.png" />
        </div>
    </div>
    <div class="text-wrapper">Папки</div>
    <div class="text-wrapper-2">Тираж от 20 штук </div>
    <p class="text">
        Папки для хранения документов в блочном формате. Изготовим по вашим предпочтениям в кратчайшие сроки.                            </p>
    <div id="button4" class="txt-btn">
        <div class="text-wrapper-3">Подробнее </div>
        <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
            <path d="M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.79289L14.3431 0.428932C13.9526 0.0384078 13.3195 0.0384078 12.9289 0.428932C12.5384 0.819457 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM0 8.5H20V6.5H0V8.5Z" fill="#7875FE"/>
        </svg>
    </div>
`
const blocks_col = document.querySelectorAll('.page3 .block');
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
    
