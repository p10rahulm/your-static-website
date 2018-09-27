#!/bin/bash

echo -e "\033[0;32mPulling updates in website output pages from GitHub...\033[0m"


# Go To Public folder
cd public

# Get changes from github.
git pull origin master

# Come Back up to the Project Root
cd ..

echo -e "\033[0;32mPulling updates in website templates from GitHub...\033[0m"

# Get changes from github.
git pull origin master
