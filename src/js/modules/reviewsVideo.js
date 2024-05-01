const reviewsVideo = document.querySelectorAll('.video__clip');

if (reviewsVideo) {
	
	// creating video
	let createVideo = function(id) {
		let video = document.createElement('video');
		
		video.controls = true;
		// video.playsinline = '';
		video.autoplay = true;
		// video.muted = false;
		video.src = id;
		video.setAttribute('playsinline', '');
		video.setAttribute('controls', 'true');
		
		return video;
	};
	
	// main code
	reviewsVideo.forEach((el) => {
		let videoHref = el.dataset.video;
		let videoTag = el.querySelector('video');
		
		el.addEventListener('click', (e) => {
			e.preventDefault();
			
			// check if video playing
			if (!videoTag) {	
				videoTag = createVideo(videoHref);
				el.querySelector('img').remove();
				el.appendChild(videoTag);
				videoTag.volume = 0.5;
				el.querySelector('button').remove();
			}
		});
	});

}