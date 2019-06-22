import * as React from 'react';

export interface GithubAvatarProps extends React.Props<any> {
  className?: string;
}

export interface GithubAvatarState {
  username: string;
  imagePath: string;
}

export default class GithubAvatar extends React.Component<GithubAvatarProps, GithubAvatarState> {
  constructor(props?: GithubAvatarProps, context?: any);

  username: string;
}
