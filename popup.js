//
function extrapolateUrlFromCookie(cookie) {
    var prefix = cookie.secure ? "https://" : "http://";
    if (cookie.domain.charAt(0) == ".")
        prefix += "www";

    return prefix + cookie.domain + cookie.path;
}

// Delete NY Times Cookies; Display each on popup window
function deleteCookies() {
	chrome.cookies.getAll({ domain: "nytimes.com" }, function(cookies) { 
		for (var i in cookies) {
			var div = document.createElement("div");
			div.innerHTML = "Removing: " + extrapolateUrlFromCookie(cookies[i]);
			document.body.appendChild(div);
			chrome.cookies.remove({ url: extrapolateUrlFromCookie(cookies[i]),
									name: cookies[i].name});
		}
	})
}

deleteCookies();