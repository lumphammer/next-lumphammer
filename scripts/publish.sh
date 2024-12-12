#!/usr/bin/env sh

set -eux

# bail out if we are not on main
if [ "$(git rev-parse --abbrev-ref HEAD)" != "main" ]; then
  echo "You must be on main to publish"
  exit 1
fi

# check that the build at least works before pushing
pnpm run build

if [ $? -ne 0 ]; then
  echo "Build failed"
  exit 1
fi

# push the build to the publish branch
git fetch . main:publish
git push origin publish