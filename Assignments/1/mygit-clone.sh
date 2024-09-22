#!/usr/bin/env bash

echo "===== Running mygit-clone ======"
read -p "Enter the Git repository to clone: " -r repo_url
read -p "Enter the directory to clone the Git repository to: " -r directory
git clone $repo_url $directory