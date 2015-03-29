# Examples for bootprint

This package contains usage example for the bootprint-package. Download the repository from github,
and run `npm install` in the package-directory. Then you can run the following examples

* **programmatic-usage**: You can run these examples
  * **simple.js** is a simple example that uses the [bootprint-json-schema](http://npmjs.org/bootprint-json-schema)-template.
  * **custom-less.js** extends this example by including a custom [{less}](http://lesscss.org)-file.
  * **custom-full.js** shows all possible customizations (custom partials, custom less-include-paths).
    Custom template would be possible, but is not included yet).
* **config-file** provides a config-file for the command-line-tool. Run
  `bootprint swagger -f bootprint-config.js http://petstore.swagger.io/v2/swagger.json target`