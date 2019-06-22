declare module 'gatsby-plugin-github-avatar' {
  import * as React from 'react';

  export interface GithubAvatarProps extends React.Props<any> {}

  export class GithubAvatar extends React.Component<GithubAvatarProps, any> {
    constructor(props?: GithubAvatarProps, context?: any);

    username: string;
  }

  export default AutosizeInput;
}
