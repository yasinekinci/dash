
<!-- firstly you should add .npmrc file and add below script and access token -->
//npm.pkg.github.com/:_authToken=
@githubUserName:registry=https://npm.pkg.github.com/

<!-- NPM install -->
npm config set legacy-peer-deps true
npm i