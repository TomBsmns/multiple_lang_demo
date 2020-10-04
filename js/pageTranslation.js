/*
This file makes use of the revealing module pattern (https://gist.github.com/zcaceres/bb0eec99c02dda6aac0e041d0d4d7bf2)
This has the benefits of keeping your javascript code clean and readable.
For readability reasons, its easy to keep the file name and the module name the same. In this case "pageTranslation".

It makes use of the jquery.MultiLanguage package that will handle the changes for us. (https://www.jqueryscript.net/text/translate-json-multi-language.html)
The text to render comes from the language.json file, which can be found in the root of the project
*/

let pageTranslation = (function (){
    function initialize() {
        $.MultiLanguage('language.json');
    }
    function setLangEn() {
        $.MultiLanguage('language.json','en')
    }

    function setLangNl() {
        $.MultiLanguage('language.json','nl')
    }

    return {
        initialize: initialize,
        setLangEn: setLangEn,
        setLangNl: setLangNl
    }
})();