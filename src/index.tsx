import React, { Component } from 'react';

import { GithubAvatarProps, GithubAvatarState } from '../typings';

declare const GATSBY_GITHUB_AVATAR: string | undefined;

export default class GithubAvatar extends Component<GithubAvatarProps, GithubAvatarState> {
  imagePath: string;

  constructor(props: GithubAvatarProps) {
    super(props);
    this.imagePath = typeof GATSBY_GITHUB_AVATAR !== `undefined` && GATSBY_GITHUB_AVATAR !== '' ? GATSBY_GITHUB_AVATAR : '';
  }

  componentWillReceiveProps({ imagePath, ...nextProps }: any) {
    this.setState(nextProps);
  }

  render() {
    const { className } = this.props || { className: '' };
    const { imagePath } = this.state || { imagePath: '' };

    return <img className={className} src={imagePath} alt="Github avatar" />;
  }
}
