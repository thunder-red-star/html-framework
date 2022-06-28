// When the document loads, we'll write some miscellaneous statistics about HTML to the span with id 100-percent-statistics.

let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

document.addEventListener('DOMContentLoaded', function() {
	let stats = [
		"of the world's largest websites use HTML",
		"of the Fortune 500 companies use HTML",
		"of web browsers support HTML",
		"of other web frameworks compile to HTML",
	]

	let disclaimers = [
		"Source: Well, all large companies have websites, and obviously all are in (or compile to) HTML.",
		"Source: All Fortune 500 companies have websites, and obviously all are in (or compile to) HTML.",
		"Source: If this isn't obvious to you then I don't know what to say.",
		"Source: Have you heard of production builds? They are just HTML.",
	]

	let span = document.getElementById('100-percent-statistics')
	let disclaimer = document.getElementById('100-percent-disclaimer')

	let idx = 0;
	span.innerHTML = stats[idx]
	disclaimer.innerHTML = disclaimers[idx]
	span.style.transition = 'opacity 0.25s ease-in-out'
	disclaimer.style.transition = 'opacity 0.25s ease-in-out'

	setInterval(async function() {
		span.style.opacity = "0"
		disclaimer.style.opacity = "0"
		await sleep(250)
		idx = (idx + 1) % stats.length
		span.innerHTML = stats[idx]
		disclaimer.innerHTML = disclaimers[idx]
		span.style.opacity = "1"
		disclaimer.style.opacity = "1"
	}, 5000)
});