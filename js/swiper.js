
var index = 0;//当前定位图片下标
var leftImgAll = $('.leftImgBox').find('div');
var timer = null;
var duration = 1500;//轮播时长
var step = 0;//步长
var height = leftImgAll.eq(0).outerHeight(true);
var Swiper = {
    init: function () {
        var imgBoxImg = leftImgAll.eq(0).find('img').attr('src');
        $('.swiperleft').find('img').attr('src', imgBoxImg)
        leftImgAll.eq(0).addClass('active')
        Swiper.onFun();
        Swiper.onInterval();
    },
    onFun: function () {
        $('.prevBtn').click(function () {
            index--;
            if (index < 0) {
                index = leftImgAll.length-1;
                step = leftImgAll.length-1-2;
                $('.leftImgBox').css("transform","translate3d(0px, -"+height*step+"px, 0px)");
                Swiper.onExclusive();
            } else {
                if(index<leftImgAll.length-2){
                    step--;
                    $('.leftImgBox').css("transform","translate3d(0px, -"+height*step+"px, 0px)");
                }
                Swiper.onExclusive();
            }
        });
        $('.nextBtn').click(function () {
            index++;
            if (index == leftImgAll.length) {
                index = 0;
                step=0;
                $('.leftImgBox').css("transform","translate3d(0px, 0px, 0px)");
                Swiper.onExclusive();
            } else {
                if(index>1 &&index+1!=leftImgAll.length){
                    step++;
                    $('.leftImgBox').css("transform","translate3d(0px, -"+height*step+"px, 0px)");
                }
                Swiper.onExclusive();
            }
        });
        $('.swiperWrapper').mousemove(function () {
            window.clearInterval(timer)
        })
        $('.swiperWrapper').mouseout(function () {
            Swiper.onInterval();
        });
        $('.leftImgBox .imgBox').on('click', function () {
            var _this = $(this);
            index=_this.index();
            Swiper.onExclusive();
        })
    },
    onExclusive: function () {
        for (var i = 0; i < leftImgAll.length; i++) {
            leftImgAll.eq(i).removeClass('active');
        }
        leftImgAll.eq(index).addClass('active');
        $('.swiperleft').find('img').attr('src', leftImgAll.eq(index).find('img').attr('src'))
    },
    onInterval: function () {
        timer = setInterval(function () {
            index++;
            if (index == leftImgAll.length) {
                index = 0;
                step=0;
                $('.leftImgBox').css("transform","translate3d(0px, 0px, 0px)");
                Swiper.onExclusive();
            } else {
                if(index>1 &&index+1!=leftImgAll.length){
                    step++;
                    $('.leftImgBox').css("transform","translate3d(0px, -"+height*step+"px, 0px)");
                }
                Swiper.onExclusive();
            }
        }, duration)
    }
}
Swiper.init();