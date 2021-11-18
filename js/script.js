const pg = document.querySelector(".pg");
const bg = document.querySelector(".bg");
const up = document.querySelector("#up");
const down = document.querySelector("#down");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const moveBy = 10;




document.addEventListener('DOMContentLoaded', () => {
    pg.style.position = 'absolute';
    pg.style.left = 0;
    pg.style.top = 0;
    bg.style.backgroundPositionX = 0;
    bg.style.backgroundPositionY = 0;
});

up.addEventListener('click', () => {
    pg.style.top = parseInt(pg.style.top) - moveBy + 'px';
    bg.style.backgroundPositionY = bg.style.backgroundPositionY - moveBy + 'px';

    if (pg.classList.contains("move-down-1")) {
       pg.classList.replace("move-down-1", "move-up-1");
       pg.classList.remove("move-down-2");
    }
    if (pg.classList.contains("move-left-1")) {
        pg.classList.replace("move-left-1", "move-up-1");
        pg.classList.remove("move-left-2");
    }
    else if (pg.classList.contains("move-right-1")) {
        pg.classList.replace("move-right-1", "move-up-1");
        pg.classList.remove("move-right-2");
    }
    pg.classList.toggle("move-up-2");
      
});

down.addEventListener('click', () => {
    pg.style.top = parseInt(pg.style.top) + moveBy + 'px';
    bg.style.backgroundPositionY = bg.style.backgroundPositionY + moveBy + 'px';

    if (pg.classList.contains("move-up-1")) {
        pg.classList.replace("move-up-1", "move-down-1");
        pg.classList.remove("move-up-2");
    }
    if (pg.classList.contains("move-left-1")) {
        pg.classList.replace("move-left-1", "move-down-1");
        pg.classList.remove("move-left-2");
    }
    else if (pg.classList.contains("move-right-1")) {
        pg.classList.replace("move-right-1", "move-down-1");
        pg.classList.remove("move-right-2");
    }
    
    pg.classList.toggle("move-down-2");
       
});

left.addEventListener('click', () => {
    pg.style.left = parseInt(pg.style.left) - moveBy + 'px';

    if (pg.classList.contains("move-down-1")) {
        pg.classList.replace("move-down-1", "move-left-1");
        pg.classList.remove("move-down-2");
    }
    if (pg.classList.contains("move-up-1")) {
        pg.classList.replace("move-up-1", "move-left-1");
        pg.classList.remove("move-up-2");
    }
    else if (pg.classList.contains("move-right-1")) {
        pg.classList.replace("move-right-1", "move-left-1");
        pg.classList.remove("move-right-2");
    }

    pg.classList.toggle("move-left-2");
     
});

right.addEventListener('click', () => {
    pg.style.left = parseInt(pg.style.left) + moveBy + 'px';

    if (pg.classList.contains("move-down-1")) {
        pg.classList.replace("move-down-1", "move-right-1");
        pg.classList.remove("move-down-2");
    }
    if (pg.classList.contains("move-left-1")) {
        pg.classList.replace("move-left-1", "move-right-1");
        pg.classList.remove("move-left-2");
    }
    else if (pg.classList.contains("move-up-1")) {
        pg.classList.replace("move-up-1", "move-right-1");
        pg.classList.remove("move-up-2");
    }

    pg.classList.toggle("move-right-2");
    
});


