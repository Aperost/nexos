var jsonFiles = {"app":{"css":"//web.nxfs.nexon.com/nav-lib/assets/css/app.b9caa813.css","js":"//web.nxfs.nexon.com/nav-lib/assets/js/app.7703a451.js"},"chunk-vendors":{"css":"//web.nxfs.nexon.com/nav-lib/assets/css/chunk-vendors.d93c0a94.css","js":"//web.nxfs.nexon.com/nav-lib/assets/js/chunk-vendors.b914154a.js"}};function addScript(id, url) {
	if (document.getElementById(id)) return;
	const script = document.createElement('script');
	script.id = id;
	script.src = url;
	script.type = 'text/javascript';
	script.async = false;
	document.currentScript.parentNode.appendChild(script);
}
function addCSS(id, url) {
	if (document.getElementById(id)) return;
	const link = document.createElement('link');
	link.id = id;
	link.href = url;
	link.rel = 'stylesheet';
	document.currentScript.parentNode.appendChild(link);
}

if (!window.environment) {
	var subdomain = location.hostname.split('.')[0].split('-');
	subdomain = subdomain[subdomain.length - 1];
	var region = 'global';
	if (['th', 'th', 'sea', 'jp'].includes(subdomain)) region = subdomain;
	window.environment = {
		region: region,
	};
}

addCSS('gnb-chunk-css', jsonFiles['chunk-vendors'].css);
addCSS('gnb-app-css', jsonFiles.app.css);

addScript('gnb-chunk-js', jsonFiles['chunk-vendors'].js);
addScript('gnb-app-js', jsonFiles.app.js);
