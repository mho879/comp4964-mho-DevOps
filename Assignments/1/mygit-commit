#!/usr/bin/env bash

echo "===== Running mygit-commit ======"
read -p "Enter the paths of the files you wish to add for the commit. Separate each item with a space if more than one file: " -r files
for item in $files; do
    git add $item
done
read -p "Enter the message to use for this commit: " -e message
git commit -m "$message"