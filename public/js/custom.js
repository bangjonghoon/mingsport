$(function(){ //HTML 문서를 다 읽으면 밑에부분을 시작해!!
   $('.slideshow').slick({
    infinite:true,
    dot:false,
    autoplay:true,
    autiplaySpeed:2000,
    fade:true,
    speed:1000,
    pauseHover:false
   })

   /* TypeIt - Welcome */
$('#typing').typeIt({
	strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."], // 타이핑 텍스트 입력
	speed: 100, // 알파벳 타이핑 속도
	autoStart: true, // 자동 재생 사용
	breakLines: false, // 줄 바꿈 사용안함
});

})


