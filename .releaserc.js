module.exports = {
  tagFormat: '${APP_NAME}-v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogTitle: '# CHANGELOG',
      },
    ],
    '@semantic-release/github',
    '@semantic-release/git',
  ],
};
