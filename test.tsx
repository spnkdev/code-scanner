function setLanguageOptions() {
    console.log('Trigger');
    var href = document.location.href,
        deflt = href.substring(href.indexOf("default=")+8);
    document.write("<OPTION value=1>"+deflt+"</OPTION>");
    document.write("<OPTION value=2>English</OPTION>");
    document.write("<Input title='Email' context={ctx} stateName='email' validation={[
                    { message: 'Invalid email', regex: '.+@.+\.[a-z]+' },
                ]} />");
}
