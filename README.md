author: Jane Valencia

# sass-made-fun

## Cater
Cater is a catering company providing healthy lunch and dinner for local customers in Indonesia.

The following project is a snippet of the company's landing page. The content and source-code should be used for your academic/learning purpose only.

## Preparation
1. Create a project folder
2. Download the source code of this project as ZIP and copy/paste to your project folder.
3. Link your project folder to your own Git repository

## Setup

Run `npm init -y` to have default package.json ready in your project folder.

There are few tools and dependencies required for the project, as follows:

- Parcel `npm install --save-dev parcel-bundler` , a build-tool for web 
- Sass `npm install --save-dev sass` , CSS pre-processor learn more: https://sass-lang.com/install
- push-dir: `npm install --save-dev push-dir` , will be used to push dist/ (production) folder to gh-pages
- (For Windows User only) [Git Credential Manager for Windows](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases)

Hence, your devDependencies in package.json may look like this:

```
  "devDependencies": {
    "parcel-bundler": "^1.12.5",
    "push-dir": "^0.4.1",
    "sass": "^1.45.1",
    "shx": "^0.3.3"
  }
```

Add the following scripts to your package.json:

```
  "browserslist": "> 0.5%, last 2 versions, not dead",
  "scripts": {
    "start": "parcel ./src/index.html",
    "prebuild": "shx rm -rf dist/*",
    "build":"parcel build ./src/index.html --no-minify --public-url ./",
    "push-gh-pages": "push-dir --dir=dist --branch=gh-pages --cleanup --verbose"
  }
```

Prepare .gitignore file on your repo and ensure to exclude the following file/folder:

```
node_modules/
dist/
.cache/
```

**Lastly, make sure you have committed all source-code to git (assumed it is master / main branch).**

## Deploy to gh-pages

npm start ==> have your app served at http://localhost:1234/

npm run build ==> have your project built (minified) under dist/

:::note
**prebuild clean dist/ up and are invoked automatically**
:::

npm run push-gh-pages ==> have whatever is built under dist/ published with github pages

:::tip
NB! Have your git clean before publishing (i.e. any changes commited). Do not change anything until publishing completes as the publishing tool manipulates the tree.
:::
