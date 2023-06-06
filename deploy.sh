#!/usr/bin/env sh

yarn 
yarn docs:build
cp -R ./src/.vuepress/dist/ ./docs
set -e

#echo 'blog.markuswagner.dev' > CNAME
git init
git add -A
git commit -m 'deploy on GitHub Pages'
git push -f git@github.com:djdiox/djdiox.github.io.git gh-pages
# # abort on errors

# # build
# npm run docs:build

# # navigate into the build output directory
# cd docs/.vuepress/dist

# # if you are deploying to a custom domain
# # echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# # if you are deploying to https://<USERNAME>.github.io
# # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# # if you are deploying to https://<USERNAME>.github.io/<REPO>
# # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# cd -