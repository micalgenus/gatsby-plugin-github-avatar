import React, { Component } from 'react';
import { GithubAvatarProps } from 'gatsby-plugin-github-avatar';

// import PropTypes from 'prop-types';

export default class GithubAvatar extends Component<GithubAvatarProps> {
  username: string;

  constructor(props: any) {
    super(props);
    this.state = props;
    this.username = typeof GATSBY_GITHUB_USERNAME !== `undefined` && GATSBY_GITHUB_USERNAME !== '' ? GATSBY_GITHUB_USERNAME : '';
  }

  componentWillReceiveProps(nextProps: any) {
    this.setState(nextProps);
  }

  componentWillMount() {
    // if (typeof window != 'undefined' && window.document) {
    //   const component = this;
    //   window.disqus_config = function() {
    //     this.page.identifier = component.state.identifier;
    //     this.page.title = component.state.title;
    //     this.page.url = component.state.url;
    //   };
    //   const script = document.createElement('script');
    //   script.src = `//${this.shortname}.disqus.com/embed.js`;
    //   script.async = true;
    //   document.body.appendChild(script);
    // }
  }

  render() {
    const props = this.props || {};
    return (
      <div id="github_avatar" {...props}>
        {this.username}
      </div>
    );
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
