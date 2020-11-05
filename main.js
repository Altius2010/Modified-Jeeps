canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 180;
car1_height = 180;
car1_x = 10;
car1_y = 10;

function add() {
    background_image = new Image();
    background_image.onload = uploadcar1;
    background_image.src = "Road.jpg";
    car1_image = new Image();
    car1_image.onload = uploadcar1;
    car1_image.src = "Jeep_right.png";
}

function uploadcar1() {
    ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car1_image, car1_x, car1_y, car1_width, car1_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("up");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log("down");
    }
    if (keyPressed == '37') {
        car1_left();
        console.log("left");
    }
    if (keyPressed == '39') {
        car1_right();
        console.log("right");
    }
    if (keyPressed == '32') {
        horn();
        console.log("space");
    }
}

function car1_up() {
    car1_image.src = "Jeep_up.png";
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed,  x = " + car1_x + " | y = " + car1_y);
        uploadcar1();
    }
}

function car1_down() {
    car1_image.src = "Jeep_down.png";
    if (car1_y <= 530) {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed,  x = " + car1_x + " | y = " + car1_y);
        uploadcar1();
    }
}

function car1_left() {
    car1_image.src = "Jeep_left.png";
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed,  x = " + car1_x + " | y = " + car1_y);
        uploadcar1();
    }
}

function car1_right() {
    car1_image.src = "Jeep_right.png";
    if (car1_x <= 900) {
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed,  x = " + car1_x + " | y = " + car1_y);
        uploadcar1();
    }
}

function horn() {
    document.getElementById("aud").play();
}