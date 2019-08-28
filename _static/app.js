const noDiscriminate = ( key, val ) => confirm("By continuing, you agree to not discriminate based on content.") ? open('https://'+key+'.com/'+val, "_blank") : '';

function toggle(obj) {
	var el = document.getElementById(obj);
	el.style.display = (el.style.display != 'none' ? 'none' : '' );
	document.getElementById('hamburger').style.visibility = (document.getElementById('hamburger').style.visibility != '' ? '' : 'hidden' );
}