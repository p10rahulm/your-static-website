#!/bin/bash
while true; do
    read -p "Do you really wish to delete all the content files (y/n)?" yn
    case $yn in
        [Yy]* )
            find content -mindepth 2 -type f -name '[^_]*.md';
            while true; do
                read -p "The above files will be removed. Are you sure you want to go ahead (y/n)?" yn2
                case $yn2 in
                    [Yy]* )                 find content -mindepth 2 -type f -name '[^_]*.md' | xargs rm;                break;;
                    [Nn]* ) exit;;
                    * ) echo "Please answer yes or no.";;
                esac
            done
            break;;
        [Nn]* ) exit;;
        *) echo "Please answer with yes or no.";;
    esac
done
