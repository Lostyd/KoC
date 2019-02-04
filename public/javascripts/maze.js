// Определяем глобальные переменные для холста и контекста 
var canvas;
var  context;

var money;
var rum;
var morerum;
var ticktock;
var sabelki;
var sunduk;
// Отслеживаем текущую позицию значка
var x = 0;
var y = 0;

// Скорость перемещения значка
var dx = 0;
var dy = 0;

$("#mazebutton").click(function() {
    // Подготавливаем холст
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    // Рисуем фон лабиринта
    drawMaze("../images/maze.png", 344, 262);

    // При нажатии клавиши вызываем функцию processKey()
    window.onkeydown = processKey;
    window.onkeyup = unprocessKey;
});


// Таймер, включающий и отключающий новый лабиринт в любое время
var timer;

function drawMaze(mazeFile, startingX, startingY) {
    var face = "../images/face.png";
    // Остановить таймер (если запущен)
    clearTimeout(timer);

    // Остановить перемещение значка
    dx = 0;
    dy = 0;

    // Загружаем изображение лабиринта
    var imgMaze = new Image();
    var imgFace = new Image();
    imgMaze.onload = function() {
        // Изменяем размер холста в соответствии
        // с размером изображения лабиринта
        canvas.width = imgMaze.width;
        canvas.height = imgMaze.height;

        // Рисуем лабиринт
        context.drawImage(imgMaze, 0,0);

        // Рисуем значок
        x = startingX;
        y = startingY;

        var imgFace = document.getElementById("face");
        context.drawImage(imgFace, x, y);
        context.stroke();

        // Рисуем следующий кадр через 10 миллисекунд
        timer = setTimeout("drawFrame()", 10);
    };
    imgFace.src = face;
    imgMaze.src = mazeFile;
}


function processKey(e) {
    // Если значок находится в движении, останавливаем его
   /* dx = 0;
    dy = 0;*/

    // Если нажата стрелка вверх, начинаем двигаться вверх
    if (e.keyCode == 38) {
        dy = -1;

    }

    // Если нажата стрелка вниз, начинаем двигаться вниз
    if (e.keyCode == 40) {
        dy = 1;

    }

    // Если нажата стрелка влево, начинаем двигаться влево
    if (e.keyCode == 37) {
        dx = -1;

    }

    // Если нажата стрелка вправо, начинаем двигаться вправо
    if (e.keyCode == 39) {
        dx = 1;

    }
}

function unprocessKey(e) {
    // Если значок находится в движении, останавливаем его
  /*  dx = 0;
    dy = 0;*/

    // Если нажата стрелка вверх, начинаем двигаться вверх
    if (e.keyCode == 38) {
        dy = 0;

    }

    // Если нажата стрелка вниз, начинаем двигаться вниз
    if (e.keyCode == 40) {
        dy = 0;

    }

    // Если нажата стрелка влево, начинаем двигаться влево
    if (e.keyCode == 37) {
        dx = 0;

    }

    // Если нажата стрелка вправо, начинаем двигаться вправо
    if (e.keyCode == 39) {
        dx = 0;

    }
}

function checkForCollision() {
    // Перебираем все пикселы и инвертируем их цвет
    var imgData = context.getImageData(x-1, y-2, 7+2, 7+2);
    var pixels = imgData.data;

    // Получаем данные для одного пиксела
    for (var i = 0; n = pixels.length, i < n; i += 4) {
        var red = pixels[i];
        var green = pixels[i+1];
        var blue = pixels[i+2];
        var alpha = pixels[i+3];
        // Смотрим на наличие черного цвета стены, что указывает на столкновение
        if (red < 30 && green < 30 && blue < 30) {
            return true;
        }

        if(46 < red && red < 55 && 150 < green && green<161 && 11 < blue && blue < 21){
            return 'деньги'
        }
        if(37 < red && red < 110 && 204 < green && green < 224 && 194 < blue && blue <214){
            return 'ром'
        }
        if(246 < red && red < 255 && 193 < green && green < 203 && 33 < blue && blue < 43){
            return 'сундук'
        }
        if(0 < red && red < 9 && 243 < green && green < 253 && 228 < blue && blue < 238){
            return 'бочка с ромом'
        }
        if(198 < red && red < 208 && 27 < green && green < 37 && 34 < blue && blue < 44){
            return 'сабли'
        }
        if(244 < red && red < 254 && 228 < green && green < 238 && 32 < blue && blue < 42){
            return 'часики'
        }
    }

    /*деньги р 51 г 156 б 19
ром  р 48 г 214 б 204
сундук р 251 г  198 б 38
бочка с ромом р 4 г 248 б 233
сабли р 203 г 31 б 39
часики р 249 г 232 б 37*/
    // Столкновения не было
    return false;
}

var flag = false;
function drawFrame() {
var imgMaze = new Image();
imgMaze.src = '../images/maze.png';

    // Обновляем кадр только если значок движется
    if (dx != 0 || dy != 0) {
        context.drawImage(imgMaze, 0,0);
        // Закрашиваем перемещение значка желтым цветом
       /* context.beginPath();
        context.fillStyle = "rgb(255,255,255 )";
        context.rect(x, y, 6, 6);
        context.fill();*/

        // Обновляем координаты значка, создавая перемещение
        x += dx;
        y += dy;
var cheker = checkForCollision();

        // Проверка столкновения со стенками лабиринта
        // (вызывается доп. функция)
        if (cheker === true) {

            x -= dx;
            y -= dy;
            dx = 0;
            dy = 0;
        } else if
        (cheker === "деньги" && money !== true){
            dx = 0;
            dy = 0;
            alert("Вы подобрали деньги!!!");
            if(localStorage.getItem('token')){
            socket.emit('money', localStorage.getItem('token'));
            }
            money = true;
        } else if
        (cheker === 'ром' && rum !== true){
            dx = 0;
            dy = 0;
            alert('Вы подобрали ром!!!');
            if(localStorage.getItem('token')){
                socket.emit('rum', localStorage.getItem('token'));
            }
                rum = true;
        } else if
        (cheker === 'сундук' && sunduk !== true){
            dx = 0;
            dy = 0;
            alert('Вы подобрали сундук с золотом!!!');
            if(localStorage.getItem('token')){
                socket.emit('sunduk', localStorage.getItem('token'));
            }
            sunduk = true;
        }else if
        (cheker === 'бочка с ромом' && morerum !== true){
            dx = 0;
            dy = 0;
            alert('Вы подобрали бочку с ромом!!!');
            morerum = true;
        }else if
        (cheker === 'сабли' && sabelki !== true){
            dx = 0;
            dy = 0;
            alert('Вы напоролись на драку!!!');
            sabelki = true;
        }else if
        (cheker === 'часики' && ticktock !== true){
            dx = 0;
            dy = 0;
            alert('Вы нашли часы');
            ticktock = true;
        }


        /*деньги р 51 г 156 б 19
ром  р 48 г 214 б 204
сундук р 251 г  198 б 38
бочка с ромом р 4 г 248 б 233
сабли р 203 г 31 б 39
часики р 249 г 232 б 37*/
        // Перерисовываем значок
        var face = "../images/face.png";
        var imgFace = new Image();
        imgFace.src = face;
        context.drawImage(imgFace, x, y);

        // Проверяем дошел ли пользователь до финиша.
        // Если дошел, то выводим сообщение
        if (y > (canvas.height - 8)) {

            money = false;
            rum = false;
            morerum = false;
            ticktock = false;
            sabelki = false;
            sunduk = false;
            dx = 0;
            dy = 0;
            clearTimeout(timer);
            drawMaze("../images/maze.png", 344, 262);
        }
    }

    // Рисуем следующий кадр через 10 миллисекунд
    timer = setTimeout("drawFrame()", 15);
}

function loadEasy() {
    drawMaze('easy_maze.png', 5, 5);
}

function loadHard() {
    drawMaze('maze.png', 268, 5);
}