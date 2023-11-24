// let block_4 = document.createElement('div');
// block_4.id="slider-block4";
// block_4.className = "block";
// block_4.innerHTML = `
//     <div class="group-wrapper">
//         <div class="group">
//             <img class="Papka" src="img/Papka.png" />
//         </div>
//     </div>
//     <div class="text-wrapper">Папки</div>
//     <div class="text-wrapper-2">Тираж от 20 штук </div>
//     <p class="text">
//         Папки для хранения документов в блочном формате. Изготовим по вашим предпочтениям в кратчайшие сроки.                            </p>
//     <div id="button4" class="txt-btn">
//         <div class="text-wrapper-3">Подробнее </div>
//         <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
//             <path d="M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.79289L14.3431 0.428932C13.9526 0.0384078 13.3195 0.0384078 12.9289 0.428932C12.5384 0.819457 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM0 8.5H20V6.5H0V8.5Z" fill="#7875FE"/>
//         </svg>
//     </div>

const allbts = document.querySelectorAll('.txt-btn')

allbts.forEach((item) => {
    item.addEventListener('click', (event) => {
        const {target} = event;
        const button_id = target.parentNode.id;
        console.log(button_id);
        popup_switch(button_id,event);
    })
})

const katalog_target = document.querySelectorAll('.btn-secondary .text-wrapper');
katalog_target.forEach((item) => {
    item.parentNode.addEventListener('mouseenter', () => {
        console.log(item);
        item.parentNode.style.background = '#7875FE';
        item.style.color = '#FFFFFF';
    });

    item.parentNode.addEventListener('mouseleave', () => {
        item.parentNode.style.background = '#FFFFFF';
        item.style.color = '#7875fd';
    });
});

let temp = document.querySelector('#slider-block0')
temp.addEventListener('mouseenter', function(e){
    console.log(e.screenX);
});

function popup_switch (button_id, event){
    if (button_id == "button0")
    {
        const popup = document.querySelector('.pop-up1');
        const popup_close = document.querySelector('.close');
        popup.style.left = `${event.screenX - 300}px`;
        popup.style.display = 'block';

        popup_close.addEventListener('click', function(e){
            popup.style.display = 'none';
        });

        window.addEventListener('click',function (e) {
            if (e.target.parentNode == popup){
                popup.style.display = 'none';
            }
        });

    }else if(button_id == "button1")
    {
        const popup = document.querySelector('.pop-up1');
        const popup_close = document.querySelector('.close');
        popup.style.left = `${event.screenX - 300}px`;
        popup.style.display = 'block';

        popup_close.addEventListener('click', function(e){
            popup.style.display = 'none';
        });

        window.addEventListener('click',function (e) {
            if (e.target.parentNode == popup){
                popup.style.display = 'none';
            }
        });
    }else if(button_id == "button2")
    {
        const popup = document.querySelector('.pop-up1');
        const popup_close = document.querySelector('.close');
        popup.style.left = `${event.screenX - 300}px`;
        popup.style.display = 'block';

        popup_close.addEventListener('click', function(e){
            popup.style.display = 'none';
        });

        window.addEventListener('click',function (e) {
            if (e.target.parentNode == popup){
                popup.style.display = 'none';
            }
        });
    }else if(button_id == "button3")
    {
        const popup = document.querySelector('.pop-up1');
        const popup_close = document.querySelector('.close');
        popup.style.left = `${event.screenX - 300}px`;
        popup.style.display = 'block';

        popup_close.addEventListener('click', function(e){
            popup.style.display = 'none';
        });

        window.addEventListener('click',function (e) {
            if (e.target.parentNode == popup){
                popup.style.display = 'none';
            }
        });
    }else if(button_id == "button4")
    {
        const popup = document.querySelector('.pop-up1');
        const popup_close = document.querySelector('.close');

        popup.style.left = `${event.screenX - 300}px`;
        popup.style.display = 'block';

        popup_close.addEventListener('click', function(e){
            popup.style.display = 'none';
        });

        window.addEventListener('click',function (e) {
            console.log(e.target);
            if (e.target.parentNode == popup){
                popup.style.display = 'none';
            }
        });
    }
}