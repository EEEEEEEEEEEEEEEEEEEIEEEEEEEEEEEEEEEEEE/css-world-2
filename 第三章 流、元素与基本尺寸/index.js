window.onload = function() {
	var btn = document.getElementById('btnMore'), 
	  content = document.getElementById('conMore');
	
	if (btn && content) {
	  btn.onclick = function() {
	    content.innerHTML += '-新增文字';
	  };
	}
	
	
	var myScroll = new IScroll('#wrap', {
	  mouseWheel: true,
	  scrollbars: true,
	  scrollX: true,
	  scrollY: false
	});
	myScroll()
}
