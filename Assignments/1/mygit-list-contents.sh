#!/usr/bin/env bash

echo "===== Running mygit-list-contents ======"
read -p "Enter the directory to list the contents of: " -r directory
ls $directory
