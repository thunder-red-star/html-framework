// When the document loads, we'll write some miscellaneous statistics about HTML to the span with id 100-percent-statistics.

let sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

document.addEventListener('DOMContentLoaded', function() {
	let stats = [
		"of the world's largest websites use HTML",
		"of the Fortune 500 companies use HTML",
		"of web browsers support HTML"
	]

	let span = document.getElementById('100-percent-statistics')

	let idx = 0;
	span.innerHTML = stats[idx]
	span.style.transition = 'opacity 0.25s ease-in-out'

	setInterval(async function() {
		span.style.opacity = "0"
		await sleep(250)
		idx = (idx + 1) % stats.length
		span.innerHTML = stats[idx]
		span.style.opacity = "1"
	}, 5000)
});