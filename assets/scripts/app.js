const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "scripting",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "SQL",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "python",
				weight: 10
			}, {
				text: "vipul",
				weight: 15
			}, {
				text: "bootstrap",
				weight: 7
			}, {
				text: "Beautiful Soup",
				weight: 4
			}, {
				text: "C++",
				weight: 8
			}, {
				text: "flutter",
				weight: 11
			}, {
				text: "node",
				weight: 9.6
			}, {
				text: "express",
				weight: 7.7
			}, {
				text: "API",
				weight: 5.6
			}, {
				text: "materialize",
				weight: 3.5
			}, {
				text: "Android Studio",
				weight: 4.6
			}, {
				text: "bootstrap",
				weight: 7
			}, {
				text: "Git | Github",
				weight: 13.5
			}, {
				text: "HDL-Verilog",
				weight: 7.7
			}, {
				text: "Django",
				weight: 4.3
			}
			
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Programmer.", "love everything about code.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
