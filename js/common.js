
/*추가될 사항들*/






/* Header show & hide */
let pc_header = document.querySelector('.page_wrapper > header');
let memoryY = 0;

window.addEventListener('scroll', function(){
	let presentYoffset = window.scrollY;

	if( (memoryY-presentYoffset) < 0) {
		// hide header
		pc_header.classList.add('hide');
		memoryY = presentYoffset;
	} else {
		// show header
		pc_header.classList.remove('hide');
		memoryY = presentYoffset;

		// setTimeout(hideHeader, 3000); //Header 자동 숨기기

	}
});
function hideHeader(){
	pc_header.classList.add('hide');
}




/*lnb menu button*/
let btn_mo_menu = document.querySelector('.btn_lnb_menu');
let mo_lnb = document.querySelector('.lnb');

btn_mo_menu.addEventListener('click', function(){
	if( this.classList.contains('on') ){
		this.classList.remove('on');
		mo_lnb.classList.remove('on');
	} else {
		this.classList.add('on');
		mo_lnb.classList.add('on');
	}
});




