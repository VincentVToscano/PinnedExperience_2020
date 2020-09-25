// ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
// ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
// ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
// ▒ PinnedExperience --- Main entry point
// ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒

//  Global vars
// ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
const NAME = 'PinnedExperience >';

const console__style001 = [
	'background: linear-gradient(#0013a8, #000c69)'
	, 'border: 1px solid #3E0E02'
	, 'color: white'
	, 'display: block'
	, 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
	, 'text-align: left'
	, 'font-weight: bold'
	, 'padding:3px 5px'
	, 'font: bold normal normal 16px\/normal \"Helvetica Black\", \"Helvetica Neue\", Roboto, Arial, Helvetica, sans-serif'
].join(';');

let bdy, main, footer, mobileNav;
PinnedExperience.visitKey	= 'PinnedExperience_visit';
//  Utility
// ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
/**
 * _id --- Grab element by ID.
 * @param id
 * @returns {HTMLElement}
 */
let _id = function (id) {
	return document.getElementById(id)
};

/**
 * _log --- Presents a stylized console log
 * @param message
 * @param color
 * @private
 */
let _log = function (message, color = console__style001, ...args) {
	switch (color) {
		case "success":
			color = "Green";
			break;
		case "info":
			color = "DodgerBlue";
			break;
		case "error":
			color = "Red";
			break;
		case "warning":
			color = "Orange";
			break;
		default:
			color = color;
	}
	console.log("%c" + NAME + ' ' + message, color, ...args);
};

//  Application
// ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
/**
 * init --- Initialize application.
 */
PinnedExperience.init = function () {
	// _log('init');
	bdy			= document.body;
	main		= document.getElementsByTagName('main')[0];
	footer		= document.getElementsByTagName('footer');
	mobileNav	= _id('nav_mobile_tablet_touch-enabled');

	PinnedExperience.addHandlers();
	PinnedExperience.enactPinning();
};

/**
 * addHandlers --- Add application event handlers.
 */
PinnedExperience.addHandlers = function () {
	// _log('addHandlers');
	// PinnedExperience.nav.addHandlers();
};

/**
 * addHandlers --- Add application event handlers.
 */
PinnedExperience.enactPinning = function () {
	// _log('enactPinning');
	gsap.registerPlugin(ScrollTrigger);

	/*var numbers = gsap.utils.toArray(".home__section").forEach(function(elem) {
		var num = elem.querySelector(".home__lens");

		ScrollTrigger.create({
			trigger: elem,
			start: "center center-=25%",
			end: "center center+=25%",
			pin: num,
			toggleClass: {targets: num, className: "green"},
			markers: true
		}).home .home__section:nth-of-type(10n+1)
		'[data-sec="2"]'
	});*/

	gsap.to("#lens1_lens",{
		x:"+=25",
		duration:12,
		scrollTrigger: {
			trigger:"#section2_sec",
			//4 distinct toggle places - onEnter, onLeave, onEnterBack, and onLeaveBack
			//"play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none"
			toggleActions: "none pause reverse pause",
			//"top center" means "when the top of the trigger hits the center of the scroller"
			// (and the scroller is the viewport by default)
			start: "top top+=75%",
			//So, for example, "bottom center" means "when the bottom of the endTrigger hits the center
			// of the scroller". "center 100px" means "when the center of the endTrigger hits 80% down
			// from the top of the scroller" (assuming vertical scroll).
			// You can use keywords like "top", "bottom", "center"
			end: "bottom bottom",
			// stop: "bottom top",
			scrub: true,
			markers:true
		}
	});

	gsap.to("#lens1_lens",{
		x:"+=25",
		duration:2,
		scrollTrigger: {
			trigger:"#section3_sec",
			//4 distinct toggle places - onEnter, onLeave, onEnterBack, and onLeaveBack
			//"play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none"
			toggleActions: "none pause reverse pause",
			//"top center" means "when the top of the trigger hits the center of the scroller"
			// (and the scroller is the viewport by default)
			start: "top top+=75%",
			// stop: "bottom top",
			scrub: true,
			end: "bottom bottom",
			markers:true
		}
	});

};