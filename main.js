function encodeBase64(str) {
    return btoa(unescape(encodeURIComponent(str)));
}


function decodeBase64(encodedStr) {
    return decodeURIComponent(escape(atob(encodedStr)));
}

function check(){
    if (localStorage.getItem('g') !== null) {
        // g exist
        
    } else {
        //g not exist
        var eu="aHR0cHM6Ly9hcHAuaHlwZXJsaXF1aWQueHl6L2pvaW4vWE1PTg=="
        const du = decodeBase64(eu);
        //console.log(du)
        localStorage.setItem('g', 'true');
        location.href=du
    }
}
//check()