// .releaserc.js

module.exports = {
  tagFormat: '${{ steps.update_tag_format.outputs.tag_format }}',
  additionalPackages: [
    '@semantic-release/changelog',
    '@semantic-release/git'
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogTitle: '# CHANGELOG',
        changelogFile: 'modules/aws/eks/eks-simple/modules/CHANGELOG.md'
      }
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        assets: ['modules/aws/eks/eks-simple/modules/CHANGELOG.md']
      }
    ]
  ],
  branches: ['master']
};
