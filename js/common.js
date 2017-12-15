/* Header show & hide */
let header = document.querySelector('header');
let memoryY = 0;
window.addEventListener('scroll', function(){
	let presentYoffset = window.scrollY;

	if( (memoryY-presentYoffset) < 0) {
		// hide header
		header.classList.add('hide');
		memoryY = presentYoffset;
	} else {
		// show header
		header.classList.remove('hide');
		memoryY = presentYoffset;

		setTimeout(hideHeader, 3000); //Header 자동 숨기기
	}
});
function hideHeader(){
	header.classList.add('hide');
}




/*lnb menu button*/
$('.btn_lnb_menu').on('click', function(){
		if( $(this).hasClass('on') ) {
			$(this).removeClass('on');
			$('.lnb').removeClass('on');
		} else {
			$(this).addClass('on');
			$('.lnb').addClass('on');
		}
});
















