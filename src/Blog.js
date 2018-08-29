import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
    // const blog = this.props.location.state.blog;
    // console.log(this.props.location.state);
    // this.setState({
    //   title: blog.attributes.title,
    // })
    console.log(this.props);
    const params = this.props.match.params;
    // const params = {
    //   nid: '3',
    // };
    const fetchUrl = 'http://react.php71/article/' + params.nid;
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
        <h1>{this.state.title}</h1>
        <div>{this.state.body}</div>
      </article>
    );
  }
}

export default Blog;
