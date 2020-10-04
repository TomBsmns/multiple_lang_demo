/*
This is the main javascript file for the index page.
It's important to only have one javascript file linked to a html page which contains $(document).ready,
otherwise this results in buggy issues.
 */
$(document).ready(function(){
    pageTranslation.initialize();
})