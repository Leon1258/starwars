$(document).ready(function() {
	$('body').particleground({
		dotColor: '#eee',
		lineColor: '#eee'
	});

	$('body').mousemove(function(e) {
		var $this = $(this),
			x = 50 +(e.pageX / 150), 
			y = 90 +(e.pageY / 100);

		$this.css('background-position', x + '% ' + y + '%');
	});
});


'use strict';

/* ---------------------------- begin view ----------------------------- */

// var view = {
// 	// Функция showStars() - отображает созвездия на странице
// 	showStars: function() {
// 		particleground(document.getElementByTagName('body'), {
// 			dotColor: '#eee',
// 			lineColor: '#eee'
// 		});
// 	},

// 	// Функция showParallax() - отображает параллакс на странице
// 	showParallax: function(x, y) {
// 		var elParallax = document.getElementByTagName('body');

// 		elParallax.style.backgroundPosition = x + '% ' + y + '%';
// 	},

// 	// Функция showCount() - отображает на странице счет игрока
// 	showCount: function(element, count) {
// 		element.innerHTML = count;
// 	},

// 	// Функция showMsg() - отображает на странице сообщение
// 	showMsg: function(msg) {
// 		var elMessage = document.getElementById('user-message');
// 		elMessage.innerHTML = msg;
// 	},

// 	// Функция showShip() - отображает на странице корабль (синий или красный)
// 	showShip: function(id, color) {
// 		var elShip = document.getElementById(id);

// 		if(color == 'red') {
// 			elShip.setAttribute('class', 'ship-red');
// 		} else if (color == 'blue') {
// 			elShip.setAttribute('class', 'ship-blue');
// 		}
// 	},

// 	// Функция showAsteroid() - если игрок промахнулся, отображает астероид
// 	showAsteroid: function(id) {
// 		var elAsteroid = document.getElementById(id);

// 		elAsteroid.setAttribute('class', 'asteroid');
// 	},

// 	// Функция soundShot() - звук выстрела
// 	soundShot: function() {
// 		var audio = document.getElementByTagName('audio')[0];

// 		audio.pause();
// 		audio.currentTime = 0;
// 		setTimeout(function() {
// 			audio.play();
// 		}, 20);
// 	}
// }

// /* ----------------------------- end view ------------------------------ */

// /* ---------------------------- begin model ---------------------------- */
// /* ----------------------------- end model ----------------------------- */

// /* -------------------------- begin controller ------------------------- */
// /* --------------------------- end controller -------------------------- */

// /* --------------------- anonymous initialize function ----------------- */
// /* --------------------- anonymous initialize function ----------------- */