'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const a = document.getElementById('link-conversion');

	a.setAttribute('href', a.getAttribute('href')
		.replace('-', 'yamin')
		.replaceAll('-', '.')
		.replace('/', '@gmail.com')
		.replace('to', 'mailto:')
	);
});