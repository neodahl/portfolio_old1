/* Header show&off */
let header = document.querySelector('header');
let memoryY = 0;
window.addEventListener('scroll', function(){
	let presentYoffset = window.scrollY;

	if( (memoryY-presentYoffset) < 0) {
		header.classList.add('scree_out');
		memoryY = presentYoffset;
	} else {
		header.classList.remove('scree_out');
		memoryY = presentYoffset;
	}
});





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
















