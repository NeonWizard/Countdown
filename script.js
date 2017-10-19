let radials = [];

for (let radialName of ['days', 'hours', 'minutes', 'seconds']) {
	radial = new ProgressBar.Circle(document.querySelector("#radial-"+radialName), {
		color: '#ddd',
		easing: 'easeOut',
		strokeWidth: 7,
		trailColor: "rgb(20, 20, 20)",
		text: {
			value: 0,
			className: 'label-'+radialName
		},
		from: { color: '#aaa', width: 1 },
		to: { color: '#333', width: 4 }
	});

	radial.text.style.fontSize = '2rem';

	radials.push(radial);
}


function setTimers() {
	let now = new Date().getTime();
	let endDate = new Date("December 15, 2017").getTime();
	let dateDif = endDate - now;

	let days = Math.floor(dateDif / (1000 * 60 * 60 * 24));
	let hours = Math.floor((dateDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((dateDif % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((dateDif % (1000 * 60)) / 1000);


	radials[0].animate(days / 365);
	document.querySelector(".label-days").textContent = days;
	radials[1].animate(hours / 24);
	document.querySelector(".label-hours").textContent = hours;
	radials[2].animate(minutes / 60);
	document.querySelector(".label-minutes").textContent = minutes;
	radials[3].animate(seconds / 60);
	document.querySelector(".label-seconds").textContent = seconds;
}


setTimers();
window.setInterval(setTimers, 1000);
