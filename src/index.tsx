import React, { Component } from 'react';
import axios from 'axios';

import { GithubAvatarProps, GithubAvatarState } from '../typings';

declare const GATSBY_GITHUB_USERNAME: string | undefined;
declare const GATSBY_GITHUB_AVATAR_DEFAULT: string | undefined;

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
  }

  render() {
    const { className } = this.props || { className: '' };
    const { imagePath } = this.state || { imagePath: '' };
    const src = imagePath || GATSBY_GITHUB_AVATAR_DEFAULT;

    return <img className={className} src={src} alt="Github avatar" />;
  }
}
