#!/bin/bash

echo -e "\033[0;32mEmptying and rebuilding public folder...\033[0m"

# Delete the public folder
rm -rf public
echo -e "\033[0;32mDeleted public folder...\033[0m"

# Get the git stuff back in place

git submodule init
echo -e "\033[0;32mInitialized git submodule in the public folder...\033[0m"
git submodule update
echo -e "\033[0;32mUpdated git submodule in the public folder...\033[0m"
cd public
git checkout master
echo -e "\033[0;32mAttaching Head...\033[0m"
cd ..


