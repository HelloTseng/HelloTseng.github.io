var pageManage = new Vue({
	el: "#page_manage",
	data: {
		page_swiper: null,
		project_swiper: null,
		page_one_copy: "点击复制",
		myqq: '9,2,1,4,3,5,2,4,7'
	},
	mounted: function() {
		var self = this;
		self.setSwiper();
		$(".page-one-noteicon").hover(function() {
			$this = $(this).children(".page-one-notice");
			$this.stop().fadeIn(200);
		}, function() {
			$this.stop().fadeOut(200);
			setTimeout(function() {
				self.page_one_copy = '点击复制';
			}, 1000);
		});
		$(".project-img").hover(function() {
			$(this).children(".project-name").fadeToggle(100);
		});

		var clipboard = new ClipboardJS('.page-one-copy', {
			text: function() {
				return self.getSafeQQ() + "@qq.com";
			}
		});
		clipboard.on('success', function(e) {
			self.page_one_copy = '复制成功';
		});
	},
	watch: {},
	computed: {},
	methods: {
		copyMail: function() {

		},
		openQQ: function() {
			location.href = "tencent://message/?uin=" + this.getSafeQQ() + "&Site=Sambow&Menu=yes";
		},
		getSafeQQ: function() {
			return this.myqq.replace(/,/g, '');
		},
		getSafeMail: function() {
			return this.getSafeQQ() + "#qq.com";
		},
		getSafeHref: function() {
			var str = "tencent://message/?uin=" + this.getSafeQQ() + "&Site=Sambow&Menu=yes";
			return str;
		},
		slideUp: function() {
			this.page_swiper.slideNext();
		},
		slideTop: function() {
			this.page_swiper.slideTo(0, 1000, false);
		},
		setSwiper: function() {
			var self = this;
			self.page_swiper = new Swiper('.swiper-page', {
				direction: 'vertical', // 垂直切换选项
				mousewheel: true,
				pagination: {
					el: '.swiper-pagination-page',
					clickable: true
				}
			});

			self.project_swiper = new Swiper('.swiper-project', {
				slidesPerView: 3,
				spaceBetween: 16,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
			});
		}
	}
})