Consider the following package.json for a Node.js application:

{
  "name": "skill-measure-app",
  "private": true,
  "version": "1.0.0",
  "main": "lib/main.js",
  "scripts": {
    "build": "npm run cleanup & npm run test & npm run publish",
    "cleanup": "rm -fr ./lib",
    "test": "jest",
    "publish": "npm publish lib"
  },
  "dependencies": {
     "jest": "^23.0.1",
     "custom-package": "file:../custom-package"
  }
}

Select all the correct statements.

(Select all acceptable answers.)



As per the specified dependencies, "jest" version 24.0.0 matches the semver requirement. ----- XX


When this package/module is required, the "index.js" file from the root of the package will be returned. ----- XX


package.json dependencies can point to local paths, git urls, and tarballs. ----- Yes


Adding new dependencies to the package.json can be done by running "npm install <dependency-name>" with the "--save" flag.  ----- Yes


NPM will refuse to publish this package because the private property is set to true.  ----- Yes