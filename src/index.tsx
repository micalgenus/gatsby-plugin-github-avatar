import React, { Component } from 'react';
import axios from 'axios';

import { GithubAvatarProps, GithubAvatarState } from '../typings';

declare const GATSBY_GITHUB_USERNAME: string | undefined;
declare const GATSBY_GITHUB_AVATAR_DEFAULT: number | undefined;

export default class GithubAvatar extends Component<GithubAvatarProps, GithubAvatarState> {
  username: string;

  constructor(props: GithubAvatarProps) {
    super(props);
    this.username = typeof GATSBY_GITHUB_USERNAME !== `undefined` && GATSBY_GITHUB_USERNAME !== '' ? GATSBY_GITHUB_USERNAME : '';
    const defaultId: number | undefined = GATSBY_GITHUB_AVATAR_DEFAULT;

    this.state = {
      username: '',
      imagePath: defaultId ? `https://avatars3.githubusercontent.com/u/${defaultId}?v=4` : '',
    };
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

    return <img className={className} src={imagePath} alt="Github avatar" />;
  }
}
