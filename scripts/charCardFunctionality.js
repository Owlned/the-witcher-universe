document.querySelectorAll("[class=more-info-characters]").forEach(link => link.onclick = showInfoForChar);

		function showInfoForChar(e) {
			let charCard;
			if (this.id === "more-info-geralt") {
				charCard = document.getElementById('geralt-card');
			} else if (this.id === "more-info-yen") {
				charCard = document.getElementById('yen-card');
			} else if (this.id === "more-info-ciri") {
				charCard = document.getElementById('ciri-card');
			} else if (this.id === "more-info-dandelion") {
				charCard = document.getElementById('dandelion-card');
			} else if (this.id === "more-info-triss") {
				charCard = document.getElementById('triss-card');
			}

			if (charCard.classList.contains('hidden')) {
				charCard.classList.remove('hidden');
				setTimeout(function () {
					charCard.classList.remove('visuallyhidden');
				}, 20);

			}

			clearInterval(autoScrollIdChars);
		}

		document.querySelectorAll("[class=circle-close-char]").forEach(button => button.onclick = closeInfoForChar);

		function closeInfoForChar(e) {
			let charCard;
			if (this.id === "geralt") {
				charCard = document.getElementById('geralt-card');
			} else if (this.id === "yen") {
				charCard = document.getElementById('yen-card');
			} else if (this.id === "ciri") {
				charCard = document.getElementById('ciri-card');
			} else if (this.id === "dandelion") {
				charCard = document.getElementById('dandelion-card');
			} else if (this.id === "triss") {
				charCard = document.getElementById('triss-card');
			}

			if (!charCard.classList.contains('hidden')) {
				charCard.classList.add('visuallyhidden');
				charCard.addEventListener('transitionend', function (e) {
					charCard.classList.add('hidden');
				}, {
					capture: false,
					once: true,
					passive: false
				});
			}

			setTimeout(function () { autoScrollIdChars = setInterval(autoScrollChars, 15000) }, 600);
		}