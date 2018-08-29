import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';
import NotFound from "./NotFound";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notfound: false,
      title: '',
      body: '',
    };
  }

  loadBlog() {
    console.log(this.props);
    const params = this.props.match.params;
    const fetchUrl = 'https://react.dev.studio-umi.jp/article/' + params.nid;
    fetch(fetchUrl, {
      mode: 'cors',
    }).then(function(response) {
      return response.json();
    }).then((blog) => {
      if (blog.length === 0) {
        this.setState({
          notfound: true,
        });
      } else {
        this.setState({
          title: blog[0].title,
          body: blog[0].body,
          blog: blog,
        });  
      }
    })
  }

  componentDidMount() {
    this.loadBlog();
  }

  render() {
    if (this.state.notfound) {
      return <NotFound />
    }
    return (
      <article>
        <Helmet title={this.state.title}
          meta={[
            { property: 'og:title', content: this.state.title },
            { property: 'og:type', content: 'article' },
            { property: 'og:description', content: this.state.body },
          ]} />
        <h1>{this.state.title}</h1>
        <div>{this.state.body}</div>
      </article>
    );
  }
}

export default Blog;
