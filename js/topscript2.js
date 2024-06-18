// JavaScript Document

		function goBack() {
		  window.history.back();
		}		
		
		// fetch関数を用いてDefault.aspxに非同期リクエストを行う。これによって、ユーザーは処理が終わるのを待たずに、ページが見れる。
		function count_hp(fname) {
			fetch(access_url + fname)
		}


		// fetch関数を用いてDefault.aspxに非同期リクエストを行う。これによって、ユーザーは処理が終わるのを待たずに、ページが見れる。
		/*fetch('http://www.hiroshima-ch.hiroshima-c.jp/access_pc/Default.aspx?guid=ON&title=hello7')
		.then(response => console.log('Access tracked'))
		.catch(error => console.error('Error:', error));*/
		
		//スマートフォンとPCでは読み込む動画を変える。
		window.onload = function() {

			/*ウエルカムページの動画サイズ。PCとスマートフォン*/
			var video = document.getElementById('schoolVideo');

			// Check if the user is on a mobile device
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				// If on a mobile device, use mobile video
				video.src = "images/school_mini.mp4"; //スマートフォン用の小さい動画 5.8M
			} else {
				// If not on a mobile device, use desktop video
				video.src = "images/school.mp4"; //PC用の動画 16M
			}


		};
 		
		access_url="http://www.hiroshima-ch.hiroshima-c.jp/access_pc/Default.aspx?guid=ON&title=";


		$(window).on('load resize', function() {
			const $slider = $('#slider');
			const $slides = $slider.find('.slide');
			let totalWidth = 0;
		
			$slides.each(function() {
				totalWidth += $(this).outerWidth(true); 
			});
		
			$slider.width(totalWidth); 
		});
	

	

	
		//コンテンツが 下から上へのアニメーション
		document.addEventListener("DOMContentLoaded", function(event) {
			var slideUp = document.querySelectorAll('.slide-up');

			window.addEventListener('scroll', function() {
				slideUp.forEach(function(element) {
					const elementPosition = element.getBoundingClientRect().top;
					const viewPortHeight = window.innerHeight / 1.2; // アニメーションの発生するタイミングはこの数値を変える

					if(elementPosition < viewPortHeight) {
						element.classList.add('show');
					} else {
						element.classList.remove('show'); // アニメーションを一度だけ再生させたい場合この行を消す
					}
				});
			});
		});
	
		
		//★★★★こちらは隣で移動のずれを起こすための、.slide-up2
		//コンテンツが 下から上へのアニメーション
		document.addEventListener("DOMContentLoaded", function(event) {
			var slideUp = document.querySelectorAll('.slide-up2');

			window.addEventListener('scroll', function() {
				slideUp.forEach(function(element) {
					const elementPosition = element.getBoundingClientRect().top;
					const viewPortHeight = window.innerHeight / 1.2; // アニメーションの発生するタイミングはこの数値を変える

					if(elementPosition < viewPortHeight) {
						element.classList.add('show');
					} else {
						element.classList.remove('show'); // アニメーションを一度だけ再生させたい場合この行を消す
					}
				});
			});
		});


		//★★★★こちらは隣で移動のずれを起こすための、.slide-up2
		//コンテンツが 下から上へのアニメーション
		document.addEventListener("DOMContentLoaded", function(event) {
			var slideUp = document.querySelectorAll('.slide-up3');

			window.addEventListener('scroll', function() {
				slideUp.forEach(function(element) {
					const elementPosition = element.getBoundingClientRect().top;
					const viewPortHeight = window.innerHeight / 1.2; // アニメーションの発生するタイミングはこの数値を変える

					if(elementPosition < viewPortHeight) {
						element.classList.add('show');
					} else {
						element.classList.remove('show'); // アニメーションを一度だけ再生させたい場合この行を消す
					}
				});
			});
		});
	
		


	/*★下の動画の位置までスクロールすると動画が開始される。スクロールが移動すると動画が止まる*/
	document.addEventListener("DOMContentLoaded", function() {
	  // video要素を選択
	  const video = document.getElementById("bg-video");

	  // Intersection Observerのオプションを設定
	  const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.2  // 20%以上表示されたらcallbackを実行
	  };

	  // callback関数
	  const callback = (entries, observer) => {
		entries.forEach(entry => {
		  // 要素がビューポート内に20%以上表示された場合
		  if (entry.isIntersecting) {
			video.play();  // 動画を再生
		  } else {
			video.pause(); // 動画を一時停止
		  }
		});
	  };

	  // Intersection Observerをインスタンス化
	  const observer = new IntersectionObserver(callback, options);

	  // video要素を監視対象に追加
	  observer.observe(video);
	});
	
	/*------------------ここまで----------------------*/




