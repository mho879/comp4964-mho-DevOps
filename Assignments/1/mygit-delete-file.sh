#!/usr/bin/env bash

echo "===== Running mygit-delete-file ======"
read -p "Enter the file with its path to delete: " -r file
echo "Deleting $file..."
rm $file