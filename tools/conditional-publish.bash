#!/usr/bin/env bash

# this script returns 9 if the version in package.json doesn't match what's published or 1 if it does.
# requires node
cd $(dirname $0)
cd ..
LOCAL_VERSION=$(node -e '
const fs = require(`fs`);
console.log(
    JSON.parse(fs.readFileSync(`package.json`)).version
);
')
echo "local version: $LOCAL_VERSION"
PUBLISHED_VERSION=$(vsce show rubbersoft.scramble|grep Version|sed 's/ *Version: *//g')
echo "published version: $PUBLISHED_VERSION"
if [[ "$LOCAL_VERISON" == "$PUBLISHED_VERSION" ]]
then
    echo "same version, not publishing"
else
    vsce publish -p "${PUBLISH_SECRET}"
fi
