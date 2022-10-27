function setLanguageOptions() {
    var href = document.location.href,
        deflt = href.substring(href.indexOf("default=")+8);
    document.write("<OPTION value=1>"+deflt+"</OPTION>");
    document.write("<OPTION value=2>English</OPTION>");
    document.write(encodeURI(deflt));

}


function validateParams() {
    const params = new URLSearchParams();
    const myId = params.get('my_id');
    document.write("<OPTION value=1>"+myId+"</OPTION>");

}
