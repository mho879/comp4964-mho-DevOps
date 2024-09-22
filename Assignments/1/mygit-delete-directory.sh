#!/usr/bin/env bash

echo "===== Running mygit-delete-directory ======"
read -p "Enter the direectory to delete (All subcontents will also be deleted): " -r directory
echo "Deleting directory $directory ..."
rm -r $directory
