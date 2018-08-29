import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import BlogList from "./BlogList";
import Blog from "./Blog";
import NotFound from "./NotFound";
import Contact from "./Contact";

const topPage = () => <div><h1>Top Page</h1><p>ここがトップページです</p></div>;
const page1 = () => <div><h1>Page1</h1><p>ここがページ1です</p></div>;
const page2 = () => <div><h1>Page2</h1><p>ここがページ2です</p></div>;
const page3 = () => <div><h1>Page3</h1><p>ここがページ3です</p></div>;
const page404 = () => <div><h1>404</h1><p>存在しないページです</p></div>;
const Menu = () => {
  const liStyle = {
    display: 'inline',
    width: '100px',
  };

  return (
    <Router>
      <div style={{width: '500px', textAlign: 'left'}}>
        <ul style={{display: 'flex'}}>
          <li style={liStyle}><Link to="/">top</Link></li>
          <li style={liStyle}><Link to="/page1">page1</Link></li>
          <li style={liStyle}><Link to="/page2">page2</Link></li>
          <li style={liStyle}><Link to="/page3">page3</Link></li>
          <li style={liStyle}><Link to="/blog">Blogs</Link></li>
        </ul>
        <div style={{marginLeft: '50px'}}>
          <Switch>
            <Route path='/' exact component={topPage}/>
            <Route path='/page1' exact component={page1}/>
            <Route path='/page2' exact component={page2}/>
            <Route path='/page3' exact component={page3}/>
            <Route path='/blog' exact render={() => <BlogList url="http://react.php71/jsonapi/node/article"/>}/>
            <Route path='/blog/:nid' exact component={Blog} />
            <Route path='/contact' exact component={Contact} />
            <Route exact component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Menu;