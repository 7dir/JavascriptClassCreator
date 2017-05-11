vDatabase['project'] = {
    "JSCC_type": "JSCC",
    "init_date": "2017/03/05 18:13:28",
    "mod_date": "2017/04/04 19:12:24",
    "sStandalone": "YES",
    "tMainAuthor": "Engelbert Niehaus",
    "tMainEMail": "niehaus@uni-landau.de",
    "tPages": "welcome|Welcome|DefaultPage|home\nhome|Home|MenuPage|\nsetting|Settings|OptionsPage|home\nsave|Save|SaveDialog|home\nquit|Quit App|ConfirmPage|home\nlogin|Login|LoginPage|quit\n    ",
    "tPageTypes": "DefaultPage|home|\nMenuPage|welcome|QUIT\nOptionsPage|home|save\nConfirmPage|home|OK\nSaveDialog|home|CANCEL\nLoginPage|home|CANCEL",
    "tButtons": "||\n||\n||",
    "sPageTypeHTML": "",
    "sPageHTML": "setting",
    "sButtonHTML": "QUIT",
    "tLibraries": "string.js\nlocalstorage.js\nwritedom.js",
    "tDatabases": "db_mydata.js\ndb_disapp.js",
    "tExportPrefix": "vDatabase['___DB___'] = ",
    "sExportPrefix": "",
    "sShowGeneralizations": "show",
    "sShowAggregations": "show",
    "sShowAssociations": "show",
    "SelectedClass": "LinkParam",
    "SelectedPage": "setting",
    "SelectedPageType": "",
    "SelectedButton": "QUIT",
    "ClassType": {
        "DOMVar": "Red",
        "DOMVarList": "Red",
        "CheckBoxList": "Red",
        "FuzzyLayer": "Yellow",
        "FuzzyController": "Yellow",
        "DatabaseList": "Green",
        "Database": "Green",
        "AppAbstract": "Abstract",
        "Server": "Blue",
        "App": "Blue",
        "LinkParam": "Blue"
    },
    "ClassList": {
        "App": {
            "tClassname": "App",
            "tSuperClassname": "AppAbstract",
            "sClassType": "Blue",
            "JSCC_mod_date": "",
            "tAuthor": "Engelbert Niehaus",
            "tEMail": "niehaus@uni-landau.de",
            "tAttributes": "aDoc = null\naName = \"DisApp\"\naServer = new Server(\"___SERVER_URL___\")\naDatabaseList = new DatabaseList()\naCurrentPage = \"welcome\"\naFuzzyController = new FuzzyController()",
            "tMethods": "init(pDoc:Document)\nload():Boolean\nsave():Boolean\ncalcRisk()\ncalcResponse()\ngotoPage(pPageID)\nsubmitPage(pPageID)",
            "sAttribList": "aDoc",
            "tAttribName": "aDoc",
            "tAttribType": "",
            "tAttribComment": "Attribute: 'aDoc' Type: '' stores ... ",
            "tAttribDefault": "null",
            "sAttribTypeList": "",
            "tMethodHeader": "calcResponse()",
            "tMethodComment": "Comment for calcResponse",
            "sMethodList": "calcResponse",
            "tLoopObject": "myArray",
            "tLoopMethod": ".myLoopMethod(pID)",
            "AttribName": {},
            "AttribDefault": {
                "aDoc": "null",
                "aName": "\"DisApp\"",
                "aServer": "new Server(\"___SERVER_URL___\")",
                "aDatabaseList": "new DatabaseList()",
                "aCurrentPage": "\"welcome\"",
                "aFuzzyController": "new FuzzyController()"
            },
            "AttribType": {
                "aDoc": "",
                "aName": "String",
                "aServer": "Server",
                "aDatabaseList": "DatabaseList",
                "aCurrentPage": "String",
                "aFuzzyController": "FuzzyController"
            },

            "MethodReturn": {
                "init": "",
                "load": "Boolean",
                "save": "Boolean",
                "calcRisk": "",
                "calcResponse": "",
                "gotoPage": "",
                "submitPage": ""
            },
            "MethodCode": {
                "init": "",
                "load": "",
                "save": "",
                "calcRisk": "",
                "calcResponse": "",
                "gotoPage": "",
                "submitPage": ""
            },
            "MethodComment": {
                "init": "Comment for init",
                "load": "Comment for load",
                "save": "Comment for save",
                "calcRisk": "Comment for calcRisk",
                "calcResponse": "Comment for calcResponse",
                "gotoPage": "Comment for gotoPage",
                "submitPage": "Comment for submitPage"
            },
            "AttribComment": {
                "aDoc": "Attribute: 'aDoc' Type: '' stores ... ",
                "aName": "Attribute: 'aName' Type: 'String' stores ... ",
                "aServer": "Attribute: 'aServer' Type: 'Server' stores ... ",
                "aDatabaseList": "Attribute: 'aDatabaseList' Type: 'DatabaseList' stores ... ",
                "aCurrentPage": "Attribute: 'aCurrentPage' Type: 'String' stores ... ",
                "aFuzzyController": "Attribute: 'aFuzzyController' Type: 'FuzzyController' stores ... "
            },
            "MethodParameter": {
                "init": "pDoc:Document",
                "load": "",
                "save": "",
                "calcRisk": "",
                "calcResponse": "",
                "gotoPage": "pPageID",
                "submitPage": "pPageID"
            }
        },
        "AppAbstract": {
            "tClassname": "AppAbstract",
            "tSuperClassname": "",
            "sClassType": "Abstract",
            "JSCC_mod_date": "28.4.2017",
            "tAuthor": "Engelbert Niehaus",
            "tEMail": "niehaus@uni-landau.de",
            "tAttributes": "",
            "tMethods": "",
            "sAttribList": "",
            "tAttribName": "",
            "tAttribType": "",
            "tAttribComment": "",
            "tAttribDefault": "",
            "sAttribTypeList": "",
            "tMethodHeader": "",
            "tMethodComment": "",
            "sMethodList": "",
            "tLoopObject": "vMyHash",
            "tLoopMethod": ".init()",
            "AttribName": {},
            "AttribDefault": {},
            "AttribType": {},

            "MethodReturn": {},
            "MethodCode": {},
            "MethodComment": {},
            "AttribComment": {},
            "MethodParameter": {}
        },
        "DOMVar": {
            "tClassname": "DOMVar",
            "tSuperClassname": "",
            "sClassType": "Red",
            "JSCC_mod_date": "",
            "tAuthor": "Engelbert Niehaus",
            "tEMail": "niehaus@uni-landau.de",
            "tAttributes": "",
            "tMethods": "",
            "sAttribList": "",
            "tAttribName": "",
            "tAttribType": "",
            "tAttribComment": "",
            "tAttribDefault": "",
            "sAttribTypeList": "",
            "tMethodHeader": "",
            "tMethodComment": "",
            "sMethodList": "",
            "tLoopObject": "vMyHash",
            "tLoopMethod": ".init()",
            "AttribName": {},
            "AttribDefault": {},
            "AttribType": {},

            "MethodReturn": {},
            "MethodCode": {},
            "MethodComment": {},
            "AttribComment": {},
            "MethodParameter": {}
        },
        "DOMVarList": {
            "tClassname": "DOMVarList",
            "tSuperClassname": "",
            "sClassType": "Red",
            "JSCC_mod_date": "28.4.2017",
            "tAuthor": "Engelbert Niehaus",
            "tEMail": "niehaus@uni-landau.de",
            "tAttributes": "",
            "tMethods": "",
            "sAttribList": "",
            "tAttribName": "",
            "tAttribType": "",
            "tAttribComment": "",
            "tAttribDefault": "",
            "sAttribTypeList": "",
            "tMethodHeader": "",
            "tMethodComment": "",
            "sMethodList": "",
            "tLoopObject": "vMyHash",
            "tLoopMethod": ".init()",
            "AttribName": {},
            "AttribDefault": {},
            "AttribType": {},

            "MethodReturn": {},
            "MethodCode": {},
            "MethodComment": {},
            "AttribComment": {},
            "MethodParameter": {}
        },
        "CheckBoxList": {
            "tClassname": "CheckBoxList",
            "tSuperClassname": "",
            "sClassType": "Red",
            "JSCC_mod_date": "28.4.2017",
            "tAuthor": "Engelbert Niehaus",
            "tEMail": "niehaus@uni-landau.de",
            "tAttributes": "",
            "tMethods": "",
            "sAttribList": "",
            "tAttribName": "",
            "tAttribType": "",
            "tAttribComment": "",
            "tAttribDefault": "",
            "sAttribTypeList": "",
            "tMethodHeader": "",
            "tMethodComment": "",
            "sMethodList": "",
            "tLoopObject": "vMyHash",
            "tLoopMethod": ".init()",
            "AttribName": {},
            "AttribDefault": {},
            "AttribType": {},

            "MethodReturn": {},
            "MethodCode": {},
            "MethodComment": {},
            "AttribComment": {},
            "MethodParameter": {}
        },
        "FuzzyLayer": {
            "tClassname": "FuzzyLayer",
            "tSuperClassname": "",
            "sClassType": "Yellow",
            "JSCC_mod_date": "28.4.2017",
            "tAuthor": "Engelbert Niehaus",
            "tEMail": "niehaus@uni-landau.de",
            "tAttributes": "",
            "tMethods": "",
            "sAttribList": "",
            "tAttribName": "",
            "tAttribType": "",
            "tAttribComment": "",
            "tAttribDefault": "",
            "sAttribTypeList": "",
            "tMethodHeader": "",
            "tMethodComment": "",
            "sMethodList": "",
            "tLoopObject": "vMyHash",
            "tLoopMethod": ".init()",
            "AttribName": {},
            "AttribDefault": {},
            "AttribType": {},

            "MethodReturn": {},
            "MethodCode": {},
            "MethodComment": {},
            "AttribComment": {},
            "MethodParameter": {}
        },
        "FuzzyController": {
            "tClassname": "FuzzyController",
            "tSuperClassname": "",
            "sClassType": "Yellow",
            "JSCC_mod_date": "",
            "tAuthor": "Engelbert Niehaus",
            "tEMail": "niehaus@uni-landau.de",
            "tAttributes": "",
            "tMethods": "",
            "sAttribList": "",
            "tAttribName": "",
            "tAttribType": "",
            "tAttribComment": "",
            "tAttribDefault": "",
            "sAttribTypeList": "",
            "tMethodHeader": "",
            "tMethodComment": "",
            "sMethodList": "",
            "tLoopObject": "vMyHash",
            "tLoopMethod": ".init()",
            "AttribName": {},
            "AttribDefault": {},
            "AttribType": {},

            "MethodReturn": {},
            "MethodCode": {},
            "MethodComment": {},
            "AttribComment": {},
            "MethodParameter": {}
        },
        "DatabaseList": {
            "tClassname": "DatabaseList",
            "tSuperClassname": "",
            "sClassType": "Green",
            "JSCC_mod_date": "28.4.2017",
            "tAuthor": "Engelbert Niehaus",
            "tEMail": "niehaus@uni-landau.de",
            "tAttributes": "",
            "tMethods": "",
            "sAttribList": "",
            "tAttribName": "",
            "tAttribType": "",
            "tAttribComment": "",
            "tAttribDefault": "",
            "sAttribTypeList": "",
            "tMethodHeader": "",
            "tMethodComment": "",
            "sMethodList": "",
            "tLoopObject": "vMyHash",
            "tLoopMethod": ".init()",
            "AttribName": {},
            "AttribDefault": {},
            "AttribType": {},

            "MethodReturn": {},
            "MethodCode": {},
            "MethodComment": {},
            "AttribComment": {},
            "MethodParameter": {}
        },
        "Database": {
            "tClassname": "Database",
            "tSuperClassname": "",
            "sClassType": "Green",
            "JSCC_mod_date": "28.4.2017",
            "tAuthor": "Engelbert Niehaus",
            "tEMail": "niehaus@uni-landau.de",
            "tAttributes": "",
            "tMethods": "",
            "sAttribList": "",
            "tAttribName": "",
            "tAttribType": "",
            "tAttribComment": "",
            "tAttribDefault": "",
            "sAttribTypeList": "",
            "tMethodHeader": "",
            "tMethodComment": "",
            "sMethodList": "",
            "tLoopObject": "vMyHash",
            "tLoopMethod": ".init()",
            "AttribName": {},
            "AttribDefault": {},
            "AttribType": {},

            "MethodReturn": {},
            "MethodCode": {},
            "MethodComment": {},
            "AttribComment": {},
            "MethodParameter": {}
        },
        "Server": {
            "tClassname": "Server",
            "tSuperClassname": "",
            "sClassType": "Blue",
            "JSCC_mod_date": "28.4.2017",
            "tAuthor": "Engelbert Niehaus",
            "tEMail": "niehaus@uni-landau.de",
            "tAttributes": "",
            "tMethods": "",
            "sAttribList": "",
            "tAttribName": "",
            "tAttribType": "",
            "tAttribComment": "",
            "tAttribDefault": "",
            "sAttribTypeList": "",
            "tMethodHeader": "",
            "tMethodComment": "",
            "sMethodList": "",
            "tLoopObject": "vMyHash",
            "tLoopMethod": ".init()",
            "AttribName": {},
            "AttribDefault": {},
            "AttribType": {},

            "MethodReturn": {},
            "MethodCode": {},
            "MethodComment": {},
            "AttribComment": {},
            "MethodParameter": {}
        },
        "LinkParam": {
            "sClassType": "Blue",
            "tClassname": "LinkParam",
            "tSuperClassname": "",
            "JSCC_mod_date": "",
            "tAuthor": "Engelbert Niehaus",
            "tEMail": "niehaus@uni-landau.de",
            "tAttributes": "size = 0\naVars = {}\naLink = \"\"",
            "tMethods": "init(pDoc:Document)\nparseURL(pLink:String):String\ngetURL(pVarHash:Hash):String\nsetValue(pVar:String,pValue:String)\ngetValue(pVar:String):String\ndeleteValue(pVar:String)\ngetLink4URL():String\ngetParam4URL():String\ndecodeParam(pParam:String):String\nencodeParam(pParam:String)\ngetTableHTML():String\ngetEditTableHTML(pPrefixID:String):String\ncalcSize()\nencodeHTML(pValue:String,pWrapCode:Boolean):String\nexists(pVar:String):Boolean",
            "sAttribList": "aVars",
            "tAttribName": "aVars",
            "tAttribType": "String",
            "tAttribComment": "Attribute: 'aVars' Type: 'Hash' stores all URL parameters ",
            "tAttribDefault": "{}",
            "sAttribTypeList": "Hash",
            "tMethodHeader": "getEditTableHTML(pPrefixID:String):String",
            "tMethodComment": "creates a Edit HTML table with two column for key and value of the parameter hash aVars.\nThe keys of aVars are used as IDs for the HTML form.\nAn optional ID prefix as parameter can be used to create a unique ID for the DOM elements\nAll parameters are visible in an input field.",
            "sMethodList": "getEditTableHTML",
            "tLoopObject": "vMyHash",
            "tLoopMethod": ".init()",
            "AttribDefault": {
                "size": "0",
                "aVars": "{}",
                "aLink": "\"\""
            },
            "AttribType": {
                "size": "Integer",
                "aVars": "Hash",
                "aLink": "String"
            },
            "AttribComment": {
                "size": "Counts the Number of Parameter",
                "aVars": "Attribute: 'aVars' Type: 'Hash' stores all URL parameters ",
                "aLink": "Attribute: 'aLink' Type: 'String' stores the Link before '?' "
            },
            "MethodComment": {
                "init": "init extract the link with parameters from document.location.search and store aLink",
                "parseURL": "parses the URL stores the variables in 'aVar' e.g. ..&lastname=Niehaus&... stores aVars['name']='Niehaus'",
                "getURL": "Comment for getLink",
                "getLink4URL": "get the Link part of the URL without the URL parameters",
                "getParam4URL": "get the parameter string for the URL starting with ? if aVars contains variables",
                "setValue": "Comment for setValue",
                "getValue": "Comment for getValue(pVar) return the definition of the parameter exists otherwise en empty string",
                "deleteValue": "Comment for deleteValue in the parameter hash aVars\nreturn a Boolean if delete was sucessful, resp. variable pVar exists in Hash aVars",
                "decodeParam": "decode a parameter from the URL",
                "encodeParam": "encode a parameter for a call from the app.",
                "getTableHTML": "creates a HTML table with two column for key and value of the parameter hash aVars",
                "getEditTableHTML": "creates a Edit HTML table with two column for key and value of the parameter hash aVars.\nThe keys of aVars are used as IDs for the HTML form.\nAn optional ID prefix as parameter can be used to create a unique ID for the DOM elements\nAll parameters are visible in an input field.",
                "calcSize": "calculates the number of variables defined in the URL parameters, stores result in length",
                "encodeHTML": "Encodes source code for HTML-Output in as code or textarea in the following way:\n 1) Replace \"&\" character with \"&amp;\"\n 2) Replace \"<\" character with \"&lt;\"\n 3) Replace \">\" character with \"&gt;\"\nThe converted pValue will wrapped with <pre> and <code> tags for direct display as HTML \nand without code tag wrapper if the code is written as inner HTML and value to a textarea.",
                "exists": "checks if the parameter with variable 'pVar' exists in parameter hash this.aVars"
            },
            "MethodReturn": {
                "init": "",
                "parseURL": "String",
                "getURL": "String",
                "setValue": "",
                "getValue": "String",
                "deleteValue": "",
                "getLink4URL": "String",
                "getParam4URL": "String",
                "decodeParam": "String",
                "encodeParam": "",
                "getTableHTML": "String",
                "getEditTableHTML": "String",
                "calcSize": "",
                "encodeHTML": "String",
                "exists": "Boolean"
            },
            "MethodCode": {
                "init": "//save \"document\" object in aDoc as Attribute for further use \nthis.aDoc = pDoc;\nthis.aLink = pDoc.location;\nthis.aVars = this.parseURL(pDoc.document.search)\n",
                "parseURL": "var vLink = pLink || \"\";\nvar params = {},\n    tokens,\n    re = /[?&]?([^=]+)=([^&]*)/g;\nif (vLink != \"\") {\n  vLink = vLink.split('+').join(' ');\n  while (tokens = re.exec(vLink)) {\n        params[decodeURIComponent(tokens[1])] = decodeURIComponent(this.decodeURLparam(tokens[2]));\n     this.calcSize();\n  };\n} else {\n    console.log(\"parseURL(pLink) - pLink contains no parameters\")\n};\nreturn params;",
                "getURL": "var vParam = \"\";\nif (pVars) {\n    vParam = getParam4URL(pVars);\n} else {\n    vParam = getParam4URL();\n};\nreturn this.getLink4URL() + vParam;",
                "setValue": "\n  this.calcSize();",
                "getValue": "var vRet = \"\";\nif (this.aVars.hasOwnProperty(pVar)) {\n    vRet = this.aVars[pVar]\n} else {\n    console.log(\"ERROR: variable '\"+pVar+' does not exist in LinkParam\");\n};\nreturn vRet;",
                "deleteValue": "var vRet = false;\nif (this.aVars.hasOwnProperty(pVar)) {\n    delete this.aVars[pVar];\n    vRet = true;\n    this.calcSize();\n};\nreturn vRet;",
                "getLink4URL": "return this.aLink;",
                "getParam4URL": "  var vHash = this.aVars || {};\n  var vOut = \"\";\n  var vSep = \"?\";\n  for (var iID in vHash) {\n    if (vHash.hasOwnProperty(iID)) {\n      vOut = vSep + encodeURLparam(iID) + \"=\" + encodeURLparam(vHash[iID]);\n      vSep = \"&\";\n    };\n  };\n  return vOut;\n",
                "decodeParam": "pParam = pParam.replace(/\\+/g,  \" \");\npParam = decodeURIComponent(pParam);\nreturn pParam;\n",
                "encodeParam": "var vParam = encodeURIComponent(pParam);\nvParam = vParam.replace(/'/g,\"%27\").replace(/\"/g,\"%22\");\nreturn vParam;",
                "getTableHTML": "var vOut = \"\";\nvar vHash = this.aVars;\nvOut += \"<table border=1>\";\nvar vWrapCode = true;\nfor (var iID in vHash) {\n    if (vHash.hasOwnProperty(iID)) {\n      vOut += \"<tr>\";\n      vOut += \"<td>\";\n      vOut += \"<b>\"+iID+\"</b>\";\n      vOut += \"</td>\";\n      vOut += \"<td>\";\n      // second parameter vWrapCode = true for non textarea use; \n      vOut += this.encodeHTML(vHash[iID],vWrapCode);\n      vOut += \"</td>\";\n      vOut += \"</tr>\";\n    };\n};\nvOut += \"</table>\";\nreturn vOut;",
                "getEditTableHTML": "var vPrefixID = pPredixID || \"\";\nvar vOut = \"\";\nvar vHash = this.aVars;\nvOut += \"<table border=1>\";\nvar vRows = 1;\nvar vContent = \"\";\nvar vMaxRows = 10;\nvar vWrapCode = false;\nfor (var iID in vHash) {\n    if (vHash.hasOwnProperty(iID)) {\n      vContent = this.encodeHTML(vHash[iID],vWrapCode);\n      vRows = (vHash[iID].split(\"\\n\")).length;\n      if (vRows > vMaxRows) {\n          vRows = vMaxRows;\n      };\n      vOut += \"<tr>\";\n      vOut += \"<td>\";\n      vOut += \"<b>\"+iID+\"</b>\";\n      vOut += \"</td>\";\n      vOut += \"<td>\";\n      // second parameter vWrapCode = true for non textarea use; \n      vOut += \"<textarea id='\"+vPrefix+iID+\"'' cols='90' rows='\"+vRows+\"''>\";\n      vOut += vContent;\n      vOut += \"</textarea>\";\n      vOut += \"</td>\";\n      vOut += \"</tr>\";\n    };\n};\nvOut += \"</table>\";\nreturn vOut;",
                "calcSize": "var vRet = 0;\nif (this.aVars) {\n    vRet = keys(this.aVars).length;\n} else {\n    console.log(\"ERROR: variable '\"+pVar+\"' does not exist in LinkParam\");\n};\nreturn vRet;",
                "encodeHTML": "var vValue = pValue || \"\";\nif (vValue != \"\") {\n    vValue = vValue.replace(/</g,\"&lt;\");\n    vValue = vValue.replace(/>/g,\"&gt;\");\n    vValue = vValue.replace(/&/g,\"&amp;\");\n};\nif (pWrapCode && (pWrapCode == true)) {\n    vValue = \"<pre><code>\"+vValue+\"</code></pre>\";\n};\nreturn vValue",
                "exists": "var vRet = false;\nif (pVar) {\n   vRet = this.aVars.hasOwnProperty(pVar)    \n};\nreturn vRet;\n"
            },
            "MethodParameter": {
                "init": "pDoc:Document",
                "parseURL": "pLink:String",
                "getURL": "pVarHash:Hash",
                "setValue": "pVar:String,pValue:String",
                "getValue": "pVar:String",
                "deleteValue": "pVar:String",
                "getLink4URL": "",
                "getParam4URL": "",
                "decodeParam": "pParam:String",
                "encodeParam": "pParam:String",
                "getTableHTML": "",
                "getEditTableHTML": "pPrefixID:String",
                "calcSize": "",
                "encodeHTML": "pValue:String,pWrapCode:Boolean",
                "exists": "pVar:String"
            }
        }
    },
    "DatabaseList": {
        "db_mydata": "{\n  \"name\": \"db_mydata\"\n}",
        "db_disapp": "{\n  \"name\": \"db_disapp\"\n}"
    },
    "ButtonList": {
        "QUIT": {
            "BUTTON_ID": "QUIT",
            "tButtonDefHTML": "<a href=\"#\" id=\"b___BUTTON_ID______COUNTER___\" onclick=\"if (confirm('Do you want to quit!')) window.close();\" data-theme=\"c\">Quit</a>",
            "counter": 1
        },
        "OK": {
            "BUTTON_ID": "OK",
            "tButtonDefHTML": "<a href=\"#\" id=\"b___BUTTON_ID______COUNTER___\" onclick=\"vApp.confirmClick(this.id);\" data-theme=\"a\">OK</a>",
            "counter": 1
        },
        "CANCEL": {
            "BUTTON_ID": "CANCEL",
            "BUTTON_TITLE": "Cancel",
            "tButtonDefHTML": "       <!-- header button: '___BUTTON_TITLE___' -->\n       <a href=\"#\" class=\"b_CANCEL\" id=\"b_CANCEL___COUNTER___\" onclick=\"alert('Click Button CANCEL');return false\" data-theme=\"a\">___BUTTON_TITLE___</a>\n",
            "counter": 2
        }
    },
    "SelectedTypePage": "SaveDialog",
    "PageType": {
        "DefaultPage": {
            "page-type": "DefaultPage",
            "HEADER_BUTTON1": "home",
            "HEADER_BUTTON2": "",
            "template": "     <!-- Page: ___PAGE_ID___     Page Type: DefaultPage -->\n     <div data-role=\"page\" id=\"___PAGE_ID___\">\n         <div data-role=\"header\" data-position=\"fixed\">\n           ___HEADER_BUTTON1___\n            <h1>___PAGE_TITLE___</h1>\n           ___HEADER_BUTTON2___\n       </div>\n         <!-- /header -->\n       <div data-role=\"content\">\n          ___PAGE_CONTENT___\n       </div>\n    <!-- /page ID: ___PAGE_ID___ -->\n    </div>\n"
        },
        "MenuPage": {
            "page-type": "MenuPage",
            "HEADER_BUTTON1": "welcome",
            "HEADER_BUTTON2": "QUIT",
            "template": "     <!-- Page: ___PAGE_ID___     Page Type: MenuPage -->\n     <div data-role=\"page\" id=\"___PAGE_ID___\">\n         <div data-role=\"header\" data-position=\"fixed\">\n           ___HEADER_BUTTON1___\n            <h1>___PAGE_TITLE___</h1>\n           ___HEADER_BUTTON2___\n       </div>\n         <!-- /header -->\n       <div data-role=\"content\">\n          ___PAGE_CONTENT___\n          ___MENU_CONTENT___\n       </div>\n    <!-- /page ID: ___PAGE_ID___ -->\n    </div>\n"
        },
        "OptionsPage": {
            "page-type": "OptionsPage",
            "HEADER_BUTTON1": "home",
            "HEADER_BUTTON2": "save",
            "template": "     <!-- Page: ___PAGE_ID___     Page Type: OptionsPage -->\n     <div data-role=\"page\" id=\"___PAGE_ID___\">\n         <div data-role=\"header\" data-position=\"fixed\">\n           ___HEADER_BUTTON1___\n            <h1>___PAGE_TITLE___</h1>\n           ___HEADER_BUTTON2___\n       </div>\n         <!-- /header -->\n       <div data-role=\"content\">\n          ___PAGE_CONTENT___\n       </div>\n    <!-- /page ID: ___PAGE_ID___ -->\n    </div>\n"
        },
        "ConfirmPage": {
            "page-type": "ConfirmPage",
            "HEADER_BUTTON1": "home",
            "HEADER_BUTTON2": "OK",
            "template": "     <!-- Page: ___PAGE_ID___     Page Type: ConfirmPage -->\n     <div data-role=\"page\" id=\"___PAGE_ID___\">\n         <div data-role=\"header\" data-position=\"fixed\">\n           ___HEADER_BUTTON1___\n            <h1>___PAGE_TITLE___</h1>\n           ___HEADER_BUTTON2___\n       </div>\n         <!-- /header -->\n       <div data-role=\"content\">\n          ___PAGE_CONTENT___\n       </div>\n    <!-- /page ID: ___PAGE_ID___ -->\n    </div>\n"
        },
        "SaveDialog": {
            "page-type": "SaveDialog",
            "HEADER_BUTTON1": "home",
            "HEADER_BUTTON2": "CANCEL",
            "template": "     <!-- Page: ___PAGE_ID___     Page Type: SaveDialog -->\n     <div data-role=\"page\" id=\"___PAGE_ID___\">\n         <div data-role=\"header\" data-position=\"fixed\">\n           ___HEADER_BUTTON1___\n            <h1>___PAGE_TITLE___</h1>\n           ___HEADER_BUTTON2___\n       </div>\n         <!-- /header -->\n       <div data-role=\"content\">\n          ___PAGE_CONTENT___\n       </div>\n    <!-- /page ID: ___PAGE_ID___ -->\n    </div>\n"
        },
        "LoginPage": {
            "page-type": "LoginPage",
            "HEADER_BUTTON1": "home",
            "HEADER_BUTTON2": "CANCEL",
            "template": "     <!-- Page: ___PAGE_ID___     Page Type: LoginPage -->\n     <div data-role=\"page\" id=\"___PAGE_ID___\">\n         <div data-role=\"header\" data-position=\"fixed\">\n           ___HEADER_BUTTON1___\n            <h1>___PAGE_TITLE___</h1>\n           ___HEADER_BUTTON2___\n       </div>\n         <!-- /header -->\n       <div data-role=\"content\">\n          ___PAGE_CONTENT___\n       </div>\n    <!-- /page ID: ___PAGE_ID___ -->\n    </div>\n"
        }
    },
    "PageList": {
        "welcome": {
            "PAGE_ID": "welcome",
            "PAGE_TITLE": "Welcome",
            "page-type": "DefaultPage",
            "parent-id": "home"
        },
        "home": {
            "PAGE_ID": "home",
            "PAGE_TITLE": "Home",
            "page-type": "MenuPage",
            "parent-id": ""
        },
        "setting": {
            "PAGE_ID": "setting",
            "PAGE_TITLE": "Settings",
            "page-type": "OptionsPage",
            "parent-id": "home"
        },
        "save": {
            "PAGE_ID": "save",
            "PAGE_TITLE": "Save",
            "page-type": "SaveDialog",
            "parent-id": "home"
        },
        "quit": {
            "PAGE_ID": "quit",
            "PAGE_TITLE": "Quit App",
            "page-type": "ConfirmPage",
            "parent-id": "home"
        },
        "login": {
            "PAGE_ID": "login",
            "PAGE_TITLE": "Login",
            "page-type": "LoginPage",
            "parent-id": "quit"
        }
    },
    "PageContent": {
        "welcome": "Content for Page 'welcome'",
        "home": "Content for Page 'home'",
        "setting": "Content for Page 'setting'",
        "save": "Content for Page 'save'",
        "quit": "Content for Page 'quit'",
        "login": "Content for Page 'login'"
    },
    "FileList": {
        "index.html": {
            "tElementIDs": "HTML_TITLE|SERVER_URL|USERNAME|SESSION|DATABASE",
            "tElementID": "HTML_TITLE",
            "sElementList": "HTML_TITLE",
            "tElementHTML": "File index.html - Content of element HTML_TITLE",
            "tFilename": "index.html",
            "tAppInitCall": "init(document,vDatabase)",
            "tPageIDs": "welcome|home|quit|newpage",
            "elements": {
                "HTML_TITLE": "File index.html - Content of element HTML_TITLE",
                "SERVER_URL": "File index.html - Content of element SERVER_URL",
                "USERNAME": "File index.html - Content of element USERNAME",
                "SESSION": "File index.html - Content of element SESSION",
                "DATABASE": "File index.html - Content of element DATABASE"
            },
            "sAppClassHTML": "App",
            "tTemplateHTML": "tpl/Default.html"
        },
        "app.html": {
            "tElementIDs": "HTML_TITLE|SERVER_URL|USERNAME|SESSION|DATABASE",
            "tElementID": "",
            "sElementList": "",
            "tElementHTML": "",
            "tFilename": "",
            "tAppInitCall": "init(document,vDatabase)",
            "tPageIDs": "welcome|home|quit|newpage",
            "elements": {
                "HTML_TITLE": "File app.html - Content of element HTML_TITLE",
                "SERVER_URL": "File app.html - Content of element SERVER_URL",
                "USERNAME": "File app.html - Content of element USERNAME",
                "SESSION": "File app.html - Content of element SESSION",
                "DATABASE": "File app.html - Content of element DATABASE"
            }
        },
        "submit.html": {
            "tElementIDs": "HTML_TITLE|SERVER_URL|USERNAME|SESSION|DATABASE",
            "tElementID": "",
            "sElementList": "",
            "tElementHTML": "",
            "tFilename": "",
            "tAppInitCall": "init(document,vDatabase)",
            "tPageIDs": "welcome|home|quit|newpage",
            "elements": {
                "HTML_TITLE": "File submit.html - Content of element HTML_TITLE",
                "SERVER_URL": "File submit.html - Content of element SERVER_URL",
                "USERNAME": "File submit.html - Content of element USERNAME",
                "SESSION": "File submit.html - Content of element SESSION",
                "DATABASE": "File submit.html - Content of element DATABASE"
            }
        }
    },
    "SelectedFile": "index.html",
    "SelectedElement": "HTML_TITLE",
    "BasicClasses": {
        "Boolean": "false",
        "String": "\"\"",
        "Integer": "0",
        "Float": "0.0",
        "Array": "[]",
        "Hash": "{}"
    }
}
