import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router-dom";

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  loadBlogs() {
    fetch(this.props.url, {
      mode: 'cors',
    }).then(function(response) {
      return response.json();
    }).then((blogs) => {
      this.setState({blogs : blogs.data});
    })
  }

  componentWillMount() {
    this.loadBlogs();
  }

  render() {
    const blogs = this.state.blogs.map((blog) => {
      const attributes = blog.attributes;
      const uuid = attributes.uuid;
      const title = attributes.title;
      const href = "/blog/" + attributes.nid;
      // const location = {
      //   pathname: href,
      //   state: { blog: blog }
      // }
      return (
        <li key={uuid}><Link to={href}>{title}</Link></li>
      );
    });
    return (
        <div>
          <Helmet title="BlogList"
            meta={[
              { property: 'og:title', content: 'BlogList' },
              { property: 'og:type', content: 'website' },
              { property: 'og:description', content: 'ブログ一覧' },
            ]} />
          <ul className="bloglist">
            {blogs}
          </ul>

        </div>
    );
  }
}

export default BlogList;
