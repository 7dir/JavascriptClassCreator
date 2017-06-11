vDataJSON["ClassList"] = {
    "type": "object",
    "title": "Class",
    "properties": {
        "name": {
            "title": "Name:",
            "type": "string",
            "default": "MyClass"
        },
        "comment": {
             "title": "Comment:",
           	 "$ref": "#/definitions/comment",
			       "default": "What does the class do?"
        },
        "attributes": {
          "title": "Attribute",
          "type": "array",
          "properties": {
              "visibility": {
                  "title": "Visibility",
                  "$ref": "#/definitions/visibility"
				      },
				      "name": {
				            "type": "string",
				            "minLength": 2,
				            "default": "aMyAttrib"
				      },
				      "init": {
                "type": "string",
                "default": "null"
				      },
				      "class": {
				            "title": "Class",
				            "$ref": "#/definitions/selectclass"
				      },
				      "comment": {
				            "title": "Comment",
                    "$ref": "#/definitions/comment",
                    "default": "What do you stored in this attribute?"
        		  }
			     }
        },
        "methods": {
              "title": "Methods",
			        "type": "object",
			        "id": "method",
			        "properties": {
				            "visibility": {
				                  "title": "Visibility",
				                  "$ref": "#/definitions/visibility"
				             },
				             "name": {
                          "type": "string",
				                  "minLength": 1,
				                  "default": "myMethod"
				             },
				             "parameter": {
				  	                "type": "array",
				  	                "title":"Parameter",
				  	                "format":"table",
			      	              "uniqueItems": true,
     			 	                "items": {
        				                  "type": "object",
        				                  "properties": {
 						                             "name": {
 					   			                               "type":"string",
 					   			                               "title":"Parameter",
 								                                 "minLength": 1,
				  				                               "default": "pVar"
				  			                          },
				  			                          "class": {
				  				                               "title":"Class",
				  				                               "$ref":"#/definitions/selectclass"
				  		                            }
				  		                    }
					                  }
				             },
				             "return": {
				 	                 "title":"Return",
				  	               "$ref":"#/definitions/selectclass"
				             },
				             "comment": {
				                   "title": "Comment",
				                   "$ref": "#/definitions/comment",
				                    "default": "What kind of process does this method perform?"
        		         }
			        }
        }
    },
    "definitions":{
    	"selectclass": {
    		"type":"string",
    		"enum":[
    			"",
    			"String",
    			"Boolean",
    			"Integer",
    			"Float",
    			"Array",
    			"Hash",
    			"RegExp",
    			"Function"
    		],
    	},
    	"comment": {
            "title": "Comment:",
            "type": "string",
            "format": "textarea"
        },
		  "visibility": {
        "type": "string",
        "enum": [
          "public",
          "private"
        ]
		  }
    }
}
