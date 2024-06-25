module.exports = {
  branches: ['master'],
  repositoryUrl: 'https://github.com/sunset-z/rollup-demo.git',
  plugins: [
    '@semantic-release/changelog',
    '@semantic-release/commit-analyzer',
    '@semantic-release/exec',
    '@semantic-release/git',
    // "@semantic-release/github",
    '@semantic-release/npm',
    '@semantic-release/release-notes-generator',
  ],
};
