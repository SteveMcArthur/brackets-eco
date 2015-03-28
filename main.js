/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets */

/** Simple extension that tells brackets how to recognise eco templates and treat them the same as ejs templates*/
define(function (require, exports, module) {
    "use strict";

    require('./coffeescript2');

    var codemirror = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror");
    codemirror.defineMIME("application/x-eco", {name: "htmlembedded", scriptingModeSpec:"coffeescript2"});
    var LanguageManager = brackets.getModule("language/LanguageManager");

    LanguageManager.defineLanguage("eco", {
        name: "ECO",
        mode: ["htmlembedded", "application/x-eco"],
        fileExtensions: ["eco","html.eco"]
    });


    var language = LanguageManager.getLanguage("coffeescript2");

    console.log("lang= "+language.getName());

//    var language = LanguageManager.getLanguage("ejs");
//
//    language.addFileExtension("eco");
//    language.addFileName("ECO");
//    language.setLineCommentSyntax("<%#", "%>");
//    language.setBlockCommentSyntax("<%##", "%>");
});
