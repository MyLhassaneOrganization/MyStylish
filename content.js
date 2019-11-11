// Change the background and font color for all websiyes
let body = document.querySelectorAll('.c1,header,section,p,main,html,input,body,div,pre,code,a,ul,li,blockquote,textarea');
for (elt of body) {
    elt.style.setProperty('background', '#71968a', 'important');
    elt.style.setProperty('color', '#d2d2d2', 'important');
}
let html = document.querySelectorAll('html');
for (elt of html) {
    elt.style.setProperty('color', '#d2d2d2', 'important');
}

// Goole Goole Goole Goole Goole Goole Goole Goole Goole Goole Goole

// Alittle manipulatation in the google results page
let isValidHostname = /google.com\\?/.test(window.location);
if (isValidHostname){

        let div = document.getElementsByTagName('div');
    for (elt of div) {
        elt.style.setProperty('color', '#667b66', 'important');
    }
    let a = document.getElementsByTagName('a');
    for (elt of a) {
        elt.style.setProperty('color', '#515151', 'important');
    }
    let cite = document.getElementsByTagName('Cite');
    for (elt of cite) {
        elt.style.setProperty('color', '#bebebe', 'important');
    }
    let em = document.getElementsByTagName('em');
    for (elt of em) {
        elt.style.setProperty('color', '#d2d2d2', 'important');
    }
}
