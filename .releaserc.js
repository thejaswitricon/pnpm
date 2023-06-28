module.exports = {
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      [
        '@semantic-release/changelog',
        {
          changelogTitle: '# CHANGELOG',
          changelogFile: 'modules/aws/ecs/ecs-simple/modules/CHANGELOG.md'
        }
      ],
      '@semantic-release/github',
      [
        '@semantic-release/git',
        {
          assets: ['modules/aws/ecs/ecs-simple/modules/CHANGELOG.md']
        }
      ]
    ]
  };
  