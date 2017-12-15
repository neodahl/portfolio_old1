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
let btn_mo_menu = document.querySelector('.btn_lnb_menu');
let lnb = document.querySelector('.lnb');

btn_mo_menu.addEventListener('click', function(){
	if( this.classList.contains('on') ){
		this.classList.remove('on');
		lnb.classList.remove('on');
	} else {
		this.classList.add('on');
		lnb.classList.add('on');
	}
});








