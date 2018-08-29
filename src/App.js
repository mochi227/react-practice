import React, { Component } from 'react';
import Helmet from 'react-helmet';
import './App.css';
import Menu from "./Menu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    fetch('https://react.dev.studio-umi.jp/jsonapi/node/article', {
      mode: 'cors',
    }).then(function(response) {
      return response.json();
    }).then((blogs) => {
      this.setState({blogs : blogs.data});
    })
  }

  render() {
    return (
      <div className="App">
        <Helmet title="default" meta={[
    { property: 'og:title', content: 'defaultTitle' },
    { property: 'og:type', content: 'article' },
    { property: 'og:description', content: 'デフォルトだよ' },
  ]} />
        <Menu blogs={this.state.blogs} />
      </div>
    );
  }
}

export default App;
