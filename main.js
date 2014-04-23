/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that tells brackets how to recognise eco templates and treat them the same as ejs templates*/
define(function (require, exports, module) {
	"use strict";

	var LanguageManager = brackets.getModule("language/LanguageManager");

	var language = LanguageManager.getLanguage("ejs");

	language.addFileExtension("eco");
	language.addFileName("ECO");
	language.setBlockCommentSyntax("<!--", "-->");
});
