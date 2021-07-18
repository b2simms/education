#!/bin/bash
set -ex

# create a dist version (i.e. replace links, etc)
rm -f school-improvement-indicators.html
cp main-template.html school-improvement-indicators.html

cd scripts
npx tsc
node generate-links
