/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets */

/*
 * Brackets ECO template syntax highlighter.
 * © 2015, Steve McArthur, MIT License
 * https://github.com/SteveMcArthur/brackets-eco
 */
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

});
