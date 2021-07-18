#!/bin/bash
set -e

# cleanup repo
cd ../nbed.github.io
rm -f favicon.png
rm -f index.html
rm -rf improvement-frameworks/
rm -rf portal/
rm -rf school-improvement-indicators/

# copy dist
cp -r ../education/prod/* .

# update site
git add .
git commit -m "Updating production"
# force ask of password
git remote set-url origin https://nbed@github.com/nbed/nbed.github.io.git
git push origin master
