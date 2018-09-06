module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
    	"jest": true,
        browser: true,
  	},
    "rules": {
	    "import/no-named-as-default": 0,
	    "import/no-named-as-default-member": 0,
	    "react/prefer-stateless-function": 0,
	    "no-underscore-dangle": 0,
		},
};