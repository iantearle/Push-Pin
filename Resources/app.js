// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

Ti.include('Tween.js');
TWEEN.start();

var position1,position2,position3,position4,position5,position6;
var tween;
var rotate = 0;

var li1 = Titanium.UI.createImageView({
	image: 'images/comment.png',
	width: 32,
	height: 32,
	bottom: 16,
	left: 16	
});

var li2 = Titanium.UI.createImageView({
	image: 'images/comment.png',
	width: 32,
	height: 32,
	bottom: 16,
	left: 16
	});
var li3 = Titanium.UI.createImageView({
	image: 'images/comment.png',
	width: 32,
	height: 32,
	bottom: 16,
	left: 16
});
var li4 = Titanium.UI.createImageView({
	image: 'images/comment.png',
	width: 32,
	height: 32,
	bottom: 16,
	left: 16	
});
var li5 = Titanium.UI.createImageView({
	image: 'images/comment.png',
	width: 32,
	height: 32,
	bottom: 16,
	left: 16
});
var li6 = Titanium.UI.createImageView({
	image: 'images/comment.png',
	width: 32,
	height: 32,
	bottom: 16,
	left: 16
});

var pushPin = Titanium.UI.createImageView({
	image: 'images/cross.png',
	width: 40,
    height: 40,
    bottom: 10,
    left: 10
});

/* PushPin */
var t = Ti.UI.create2DMatrix().rotate(-135);
var r = Ti.UI.create2DMatrix().rotate(0);
var spin = Titanium.UI.createAnimation();
spin.transform = t;
var respin = Titanium.UI.createAnimation();
respin.transform = r;
/* PushPin */

var win = Ti.UI.createWindow({ backgroundColor: '#32394a' });

win.add(li1);
win.add(li2);
win.add(li3);
win.add(li4);
win.add(li5);
win.add(li6);
win.add(pushPin);

function animateLi1() {
	li1.left = position1.x;
	li1.bottom = position1.y;
}
function animateLi2() {
	li2.left = position2.x;
	li2.bottom = position2.y;
}
function animateLi3() {
	li3.left = position3.x;
	li3.bottom = position3.y;
}
function animateLi4() {
	li4.left = position4.x;
	li4.bottom = position4.y;
}
function animateLi5() {
	li5.left = position5.x;
	li5.bottom = position5.y;
}
function animateLi6() {
	li6.left = position6.x;
	li6.bottom = position6.y;
}

function openLi1() {
	position1 = {x: 16, y: 16, rotation: 0};
	tween = new TWEEN.Tween(position1).to({x: 14, y: 150, rotation: 359}, 300).delay(20).easing(TWEEN.Easing.Back.EaseOut).onUpdate(animateLi1).start();
}
function openLi2() {
	position2 = {x: 16, y: 16, rotation: 0};
	tween = new TWEEN.Tween(position2).to({x: 56, y: 143, rotation: 359}, 300).delay(30).easing(TWEEN.Easing.Back.EaseOut).onUpdate(animateLi2).start();
}
function openLi3() {
	position3 = {x: 16, y: 16, rotation: 0};
	tween = new TWEEN.Tween(position3).to({x: 94, y: 124, rotation: 359}, 300).delay(40).easing(TWEEN.Easing.Back.EaseOut).onUpdate(animateLi3).start();
}
function openLi4() {
	position4 = {x: 16, y: 16, rotation: 0};
	tween = new TWEEN.Tween(position4).to({x: 124, y: 94, rotation: 359}, 300).delay(50).easing(TWEEN.Easing.Back.EaseOut).onUpdate(animateLi4).start();
}
function openLi5() {
	position5 = {x: 16, y: 16, rotation: 0};
	tween = new TWEEN.Tween(position5).to({x: 143, y: 56, rotation: 359}, 300).delay(60).easing(TWEEN.Easing.Back.EaseOut).onUpdate(animateLi5).start();
}
function openLi6() {
	position6 = {x: 16, y: 16, rotation: 0};
	tween = new TWEEN.Tween(position6).to({x: 150, y: 14, rotation: 359}, 300).delay(70).easing(TWEEN.Easing.Back.EaseOut).onUpdate(animateLi6).start();
}


function closeLi1() {
	position1 = {x: 14, y: 150, rotation: 0};
	tween = new TWEEN.Tween(position1).to({x: 16, y: 16, rotation: 359}, 300).delay(70).easing(TWEEN.Easing.Back.EaseIn).onUpdate(animateLi1).start();
}
function closeLi2() {
	position2 = {x: 56, y: 143, rotation: 0};
	tween = new TWEEN.Tween(position2).to({x: 16, y: 16, rotation: 359}, 300).delay(60).easing(TWEEN.Easing.Back.EaseIn).onUpdate(animateLi2).start();
}
function closeLi3() {
	position3 = {x: 94, y: 124, rotation: 0};
	tween = new TWEEN.Tween(position3).to({x: 16, y: 16, rotation: 359}, 300).delay(50).easing(TWEEN.Easing.Back.EaseIn).onUpdate(animateLi3).start();
}
function closeLi4() {
	position4 = {x: 124, y: 94, rotation: 0};
	tween = new TWEEN.Tween(position4).to({x: 16, y: 16, rotation: 359}, 300).delay(40).easing(TWEEN.Easing.Back.EaseIn).onUpdate(animateLi4).start();
}
function closeLi5() {
	position5 = {x: 143, y: 56, rotation: 0};
	tween = new TWEEN.Tween(position5).to({x: 16, y: 16, rotation: 359}, 300).delay(30).easing(TWEEN.Easing.Back.EaseIn).onUpdate(animateLi5).start();
}
function closeLi6() {
	position6 = {x: 150, y: 14, rotation: 0};
	tween = new TWEEN.Tween(position6).to({x: 16, y: 16, rotation: 359}, 300).delay(20).easing(TWEEN.Easing.Back.EaseIn).onUpdate(animateLi6).start();
}

pushPin.addEventListener('click',function(e){

	if(rotate == 0) {
		
		pushPin.animate(spin);
		
		openLi1();
		openLi2();
		openLi3();
		openLi4();
		openLi5();
		openLi6();

		rotate = 135;
		
	} else {
	
		pushPin.animate(respin);
		
		closeLi1();
		closeLi2();
		closeLi3();
		closeLi4();
		closeLi5();
		closeLi6();
		
		rotate = 0;
		
	}
	
});
win.open();