vJSCC_DB['ClassList']['Wiki2HTML'] = {
    "JSCC_type": "CLASS",
    "JSCC_init_date": "21.1.2018",
    "JSCC_mod_date": "2018/01/21 9:56:05",
    "tClassname": "Wiki2HTML",
    "tSuperClassname": "",
    "sClassType": "Default",
    "tAuthor": "Engelbert Niehaus",
    "tEMail": "niehaus@uni-landau.de",
    "tAttributes": "",
    "tMethods": "parse(wikicode):String\ndeleteCR(wikicode:String):String\nheaders(wikicode:String):String\nhorizontalRule(wikicode:String):String\ninlineElement(wikicode:String):String\nlist(wikicode:String):String\ntable(wikicode:String):String\nparagraph(wikicode:String):String\nmath2jax(wikicode:String,pFormat:String):String\ntoc(wikicode:String):String",
    "sAttribList": "",
    "tAttribName": "",
    "tAttribType": "",
    "tAttribComment": "",
    "tAttribDefault": "",
    "sAttribTypeList": "",
    "tMethodHeader": "parse(wikicode):String",
    "tMethodName": "",
    "tMethodComment": "parses the MediaWiki code in argument and returns a HTML string",
    "sMethodList": "parse",
    "tMethodCode": "\t\tvar html = '<p>function wiki2html(wikicode): an error occurs</p>';\n\t\t\n\t\twikicode = this.deleteCR(wikicode);\n\t\twikicode = this.math2jax(wikicode,\"reveal\");\n\t\twikicode = this.headers(wikicode);\n\t\twikicode = this.horizontalRule(wikicode);\n\t\twikicode = this.inlineElement(wikicode);\n\t\twikicode = this.list(wikicode);\n\t\twikicode = this.table(wikicode);\n\t\twikicode = this.paragraph(wikicode);\n\t\twikicode = this.toc(wikicode);\n\t\t\n\t\thtml = wikicode;\n\t\t\n\t\treturn html;",
    "tLoopObject": "",
    "tLoopMethod": "",
    "AttribType": {},
    "AttribAccess": {},
    "AttribDefault": {},
    "AttribComment": {},
    "MethodParameter": {
        "parse": "wikicode",
        "deleteCR": "wikicode:String",
        "headers": "wikicode:String",
        "horizontalRule": "wikicode:String",
        "inlineElement": "wikicode:String",
        "list": "wikicode:String",
        "table": "wikicode:String",
        "paragraph": "wikicode:String",
        "math2jax": "wikicode:String,pFormat:String",
        "toc": "wikicode:String"
    },
    "MethodReturn": {
        "parse": "String",
        "deleteCR": "String",
        "headers": "String",
        "horizontalRule": "String",
        "inlineElement": "String",
        "list": "String",
        "table": "String",
        "paragraph": "String",
        "math2jax": "String",
        "toc": "String"
    },
    "MethodCode": {
        "parse": "\t/*\n\tThis Library was created with JavascriptClassCreator \n\thttps://niebert.github.io/JavascriptClassCreator\n\tThe library is based on  wiki2HTML library of Elia Contini\n\tpublised under GPL.\n\tParses wiki markup and generates HTML 5 showing a preview.\n    Copyright (C) 2010-2013 Elia Contini\n    \n    This program is free software: you can redistribute it and/or modify\n    it under the terms of the GNU General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    any later version.\n    \n    This program is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU General Public License for more details.\n    \n    You should have received a copy of the GNU General Public License\n    along with this program. If not, see http://www.gnu.org/licenses/.\n */\n\n// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/regexp\n\n\t\tvar html = '<p>function wiki2html(wikicode): an error occurs</p>';\n\t\t\n\t\twikicode = this.deleteCR(wikicode);\n\t\twikicode = this.math2jax(wikicode,\"reveal\");\n\t\twikicode = this.headers(wikicode);\n\t\twikicode = this.horizontalRule(wikicode);\n\t\twikicode = this.inlineElement(wikicode);\n\t\twikicode = this.list(wikicode);\n\t\twikicode = this.table(wikicode);\n\t\twikicode = this.paragraph(wikicode);\n\t\twikicode = this.toc(wikicode);\n\t\t\n\t\thtml = wikicode;\n\t\t\n\t\treturn html;",
        "deleteCR": "wikicode = wikicode.replace(/\\r/g, '');\nreturn wikicode;",
        "headers": "\t    var heading_1_regEx = /^=[\\s]*?([0-9A-Za-z].[^=\\[]*)[\\s]*?=/gm;\n\t\tvar heading_2_regEx = /^==[\\s]*?([0-9A-Za-z].[^=\\[]*)[\\s]*?==/gm;\n\t\tvar heading_3_regEx = /^===[\\s]*?([0-9A-Za-z].[^=\\[]*)[\\s]*?===/gm;\n\t\tvar heading_4_regEx = /^====[\\s]*?([0-9A-Za-z].[^=\\[]*)[\\s]*?====/gm;\n\t\tvar heading_5_regEx = /^=====[\\s]*?([0-9A-Za-z].[^=\\[]*)[\\s]*?=====/gm;\n\t\tvar heading_6_regEx = /^======[\\s]*?([0-9A-Za-z].[^=\\[]*)[\\s]*?======/gm;\n\t\t\n\t\twikicode = wikicode.replace(heading_6_regEx, '<h6>$1</h6>');\n\t\twikicode = wikicode.replace(heading_5_regEx, '<h5>$1</h5>');\n\t\twikicode = wikicode.replace(heading_4_regEx, '<h4>$1</h4>');\n\t\twikicode = wikicode.replace(heading_3_regEx, '<h3>$1</h3>');\n\t\twikicode = wikicode.replace(heading_2_regEx, '<h2>$1</h2>');\n\t\twikicode = wikicode.replace(heading_1_regEx, '<h1>$1</h1>');\n\t\t\n\t\treturn wikicode;",
        "horizontalRule": "\tvar horizontalLine = /----/g;\n\t\t\n\twikicode = wikicode.replace(horizontalLine, '<hr>');\n\t\t\n\treturn wikicode;",
        "inlineElement": "\t\tvar strongEm = /'''''([0-9A-Za-z].*)'''''/g;\n\t\tvar strong = /'''([0-9A-Za-z].*)'''/g;\n\t\tvar em = /''([0-9A-Za-z].*)''/g;\n\t\tvar image = /\\[\\[File:(.[^\\]|]*)([|]thumb|frame)?([|]alt=.[^\\]|]*)?([|].[^\\]|]*)?\\]\\]/g;\n\t\tvar anchor = /\\[([a-zA-Z0-9].[^\\s]*) ([a-zA-Z0-9].[^\\]]*)\\]/g;\n\t\n\t\twikicode = wikicode.replace(strongEm, '<strong><em>$1</em></strong>');\n\t\twikicode = wikicode.replace(strong, '<strong>$1</strong>');\n\t\twikicode = wikicode.replace(em, '<em>$1</em>');\n\t\n\t\twhile(tokens = image.exec(wikicode)) {\n\t\t\tif(tokens.length == 5 &&\n\t\t\t\ttypeof(tokens[2]) != 'undefined' &&\n\t\t\t\ttypeof(tokens[3]) != 'undefined' &&\n\t\t\t\ttypeof(tokens[4]) != 'undefined') {\n\t\t\t\ttokens[2] = tokens[2].replace('|', '');\n\t\t\t\ttokens[3] = tokens[3].replace('|alt=', '');\n\t\t\t\ttokens[4] = tokens[4].replace('|', '');\n\t\t\t\twikicode = wikicode.replace(tokens[0], '<figure class=\"' + tokens[2] + '\"><img src=\"' + tokens[1] + '\" class=\"' + tokens[2] + '\" alt=\"' + tokens[3] + '\"><figcaption>' + tokens[4] + '</figcaption></figure>');\n\t\t\t}\n\t\t\telse\n\t\t\t\twikicode = wikicode.replace(tokens[0], '<div class=\"warning\">WARNING: your image code is incomplete. Good practices for images impose to specify an alternative text, a caption and if the image is a frame or a thumbnail. For example, <code>&#091;&#091;File:anImage.png|thumb|alt=Alternative text|Caption text&#093;&#093;</code></div>');\n\t\t}\n\t\n\t\twikicode = wikicode.replace(anchor, '<a href=\"$1\">$2</a>');\n\t\t\n\t\treturn wikicode;",
        "list": "\t// unordered\n\t\tvar unorderedStartList = /\\n\\n<li>/gm; //|\\r\\n\\r\\n<li>\n\t\tvar unorderedListItem = /^\\*(.*)/gm;\n\t\tvar unorderedEndList = /<\\/li>\\n(?!<li>)/gm; // |<\\/li>\\r\\n(?!<li>)\n\t\t\n\t\twikicode = wikicode.replace(unorderedListItem, '<li>$1</li>');\t\n\t\twikicode = wikicode.replace(unorderedStartList, \"\\n<ul>\\n<li>\");\n\t\twikicode = wikicode.replace(unorderedEndList, \"</li>\\n</ul>\\n\\n\");\n\t\t\n\t\t// ordered\n\t\tvar orderedStartList = /\\n\\n<li>/gm; // |\\r\\n\\r\\n<li> ///([^<\\/li>][>]?[\\n])<li>/g;\n\t\tvar orderedListItem = /^#[:]?[#]* (.*)/gm;\n\t\tvar orderedEndList = /<\\/li>\\n(?!<li>|<\\/ul>)/gm; // |<\\/li>\\r\\n(?!<li>|<\\/ul>) ///<\\/li>\\n(?!<li>)/gm;\n\t\t\n\t\twikicode = wikicode.replace(orderedListItem, '<li>$1</li>');\n\t\twikicode = wikicode.replace(orderedStartList, \"\\n<ol>\\n<li>\");\n\t\twikicode = wikicode.replace(orderedEndList, \"</li>\\n</ol>\\n\\n\");\n\t\t\n\t\treturn wikicode;",
        "table": "\t\t// http://www.mediawiki.org/wiki/Help:Tables\n\t\tvar tableStart = /^\\{\\|/gm;\n\t\tvar tableRow = /^\\|-/gm;\n\t\tvar tableHeader = /^!\\s(.*)/gm;\n\t\tvar tableData = /^\\|\\s(.*)/gm;\n\t\tvar tableEnd = /^\\|\\}/gm;\n\t\n\t\twikicode = wikicode.replace(tableStart, '<table><tr>');\n\t\twikicode = wikicode.replace(tableRow, '</tr><tr>');\n\t\twikicode = wikicode.replace(tableHeader, '<th>$1</th>');\n\t\twikicode = wikicode.replace(tableData, '<td>$1</td>');\n\t\twikicode = wikicode.replace(tableEnd, '</tr></table>');\n\t\t\n\t\treturn wikicode;",
        "paragraph": "\t\tvar paragraph = /\\n\\n([^#\\*=].*)/gm; //|\\r\\n\\r\\n([^#\\*=].*)\n\t\t\n\t\twikicode = wikicode.replace(paragraph, \"\\n<p>$1</p>\\n\");\n\t\t\n\t\treturn wikicode;",
        "math2jax": "",
        "toc": "\tvar toc = /^__TOC__/g;\n\t\t\n\twikicode = wikicode.replace(toc, '');\n\t\t\n\treturn wikicode;"
    },
    "MethodComment": {
        "parse": "parses the MediaWiki code in argument and returns a HTML string",
        "deleteCR": "deleteCR(wikicode) normalizes line breaks in order to have a common base string for all browsers.\ndeleteCR() uses the MediaWiki source code `wikicode` from the parameter of the function and returns a HTML string \nafter removing all CRs.",
        "headers": "Convert all headers in Wiki source code",
        "horizontalRule": "Convert the  horizontal rules in Wiki source code",
        "inlineElement": "Convert for inline elements of the Wiki source code",
        "list": "Convert orderd and unorderd list in the Wiki Source code",
        "table": "Convert the table from WikiSource code in HTML",
        "paragraph": "Convert all paragraphs in the Wiki source code",
        "math2jax": "Convert the MATH-tag to a MathJax compatible HTML enviroment dependent of the pFormat of the parameter of math2jax.\npFormat = 'reveal' 'html' are possible formats",
        "toc": "Convert the table of contents from Wiki source code into HTML"
    },
    "MethodAccess": {
        "parse": "public",
        "deleteCR": "public",
        "headers": "public",
        "horizontalRule": "public",
        "inlineElement": "public",
        "list": "public",
        "table": "public",
        "paragraph": "public",
        "math2jax": "public",
        "toc": "public"
    },
    "sClassList": "Wiki2HTML",
    "tMethodAccess": "public",
    "JSCC_version": "1"
}