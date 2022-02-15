// This is the client-side script.

// Initialize the HTTP request.
let xhr = new XMLHttpRequest();
// define the request
xhr.open('GET', 'send-ajax-data.php');

// Track the state changes of the request.
xhr.onreadystatechange = function () {
	const DONE = 4; // readyState 4 means the request is done.
	const OK = 200; // status 200 is a successful return.
	if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			console.log(xhr.responseText); // 'This is the output.'
		} else {
			console.log('Error: ' + xhr.status); // An error occurred during the request.
		}
	}
};

// Send the request to send-ajax-data.php
xhr.send(null);
