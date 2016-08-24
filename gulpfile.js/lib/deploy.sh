#!/bin/bash

DIRECTORY=public

if [ -d "$DIRECTORY" ];
then

  # go to the out directory and create a *new* Git repo
  cd $DIRECTORY

  # Remove possible existing git repo.
  rm -rf .git

  # Init new repo
  git init

  # The first and only commit to this new Git repo contains all the
  # files present with the commit message "Deploy to gh-pages".
  git checkout -b gh-pages
  git add .
  git commit -m "deploy: to gh-pages"

  # Add origin
  git remote add origin git@github.com:joemidi/$1.git

  # Force push from the current repo's master branch to the remote
  # (All previous history on the master branch will be lost, since we are overwriting it.)
  git push --force origin gh-pages
  open https://joemidi.github.io/$1/

else
  echo "$DIRECTORY does not exist!"
fi