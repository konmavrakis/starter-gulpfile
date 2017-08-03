# starter-gulpfile

Gulp starter template with JSlint,JS/CSS minify, image compression and LiveReload

## How to install

  * clone/copy the files to your root of the project
  * change name, description and repository from ``package.json`` to your projects' info
  * run ``npm install``
  * change ``jsFiles``, ``jsDest``, ``stylesFiles``, ``stylesDest``, ``appURL`` to your apps' JS & CSS directories in ``gulpfile.js``
  * change the source of your images folder in ``gulpfile.js`` in line 45 (watch
    out not to break the regex to match all image extensions)

## Running Gulp tasks

  * run ``gulp scripts`` to concat, minify and uglify JS
  * run ``gulp styles`` to minify CSS
  * run ``gulp jslint`` to Lint your JS files
  * run ``gulp livereload`` to start browserSync server
  * run ``gulp images`` to compress images

---

More to be added soonish
