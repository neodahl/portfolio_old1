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