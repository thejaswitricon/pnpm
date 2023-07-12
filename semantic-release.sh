#!/bin/bash

# Check if there are any tags available
if [[ -z $(git tag -l) ]]; then
  has_tags="false"
else
  has_tags="true"
fi

# Get the name of the directory that was changed
dirs="$(git diff-tree --no-commit-id --name-only -r "${GITHUB_SHA}" | awk -F/ '{print $0}' | sort -u)"

# Update the tag format to include the name of the directory
APP_NAME=$(echo "${dirs}" | awk '{print tolower($0)}')
tag_format="${APP_NAME}-v\${version}"

# Add new version to changelog or set initial version if no tags are available
if [[ "${has_tags}" == "true" ]]; then
  version=$(git describe --tags --abbrev=0)
else
  version="1.0.0"
  echo "## Changelog" > CHANGELOG.md
fi
sed -i "s|\[[0-9]\+\.[0-9]\+\.[0-9]\+\]|[${version}] $(date +'%Y-%m-%d')|" CHANGELOG.md

# Output the variables for further use in the workflow
echo "has_tags=${has_tags}"
echo "tag_format=${tag_format}"
# echo "version=${version}"

