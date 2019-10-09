'use strict';

var githubAvatarDidRunAlready = false;
let username = '';

exports.onPreInit = function(_ref, pluginOptions) {
  // Gatsby adds a pluginOptions that's not needed for this plugin
  delete pluginOptions.plugins;
  username = pluginOptions.username;

  if (githubAvatarDidRunAlready) {
    throw new Error('You can only have single instance of gatsby-plugin-github-avatar in your gatsby-config.js');
  }
  githubAvatarDidRunAlready = true;
};

exports.onCreateWebpackConfig = async ({ plugins, actions }) => {
  var setWebpackConfig = actions.setWebpackConfig;
  setWebpackConfig({
    plugins: [
      plugins.define({
        GATSBY_GITHUB_USERNAME: JSON.stringify(username),
      }),
    ],
  });
};
