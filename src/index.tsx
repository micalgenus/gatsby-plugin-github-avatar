import React, { Component } from 'react';
import axios from 'axios';

import { GithubAvatarProps, GithubAvatarState } from '../typings';

// import PropTypes from 'prop-types';

declare const GATSBY_GITHUB_USERNAME: string | undefined;

export default class GithubAvatar extends Component<GithubAvatarProps, GithubAvatarState> {
  username: string;
  imagePath: string;

  constructor(props: GithubAvatarProps) {
    super(props);
    this.username = typeof GATSBY_GITHUB_USERNAME !== `undefined` && GATSBY_GITHUB_USERNAME !== '' ? GATSBY_GITHUB_USERNAME : '';
    this.imagePath = '';
  }

  componentWillReceiveProps(nextProps: any) {
    this.setState(nextProps);
  }

  async componentDidMount() {
    const githubProfile = await axios({
      method: 'GET',
      url: 'https://api.github.com/users/' + this.username,
    });

    this.setState({ imagePath: githubProfile.data.avatar_url });
    console.log(githubProfile);
  }

  render() {
    const { className } = this.props || { className: '' };
    const { imagePath } = this.state || { imagePath: '' };

    return <img className={className} src={imagePath} alt="Github avatar" />;
  }
}

// Disqus.propTypes = {
//   /*
//    * Tells the Disqus service how to identify the current page.
//    * When the Disqus embed is loaded, the identifier is used to look up
//    * the correct thread.
//    */
//   identifier: PropTypes.string,
//   /*
//    * Tells the Disqus service the title of the current page.
//    * This is used when creating the thread on Disqus.
//    */
//   title: PropTypes.string,
//   /*
//    * Tells the Disqus service the URL of the current page.
//    * This URL is used when a thread is created so that Disqus knows which
//    * page a thread belongs to.
//    * (If undefined, Disqus will use the global.location.href)
//    */
//   url: PropTypes.string,
// };
