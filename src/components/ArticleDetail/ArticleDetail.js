import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
  } from "react-router-dom";

export default class ArticleDetail extends React.Component {
   
render(){
    const id=this.props.match.params.id;
    const articles=this.props.articles;
    console.log('Article',articles);
    const users=this.props.users;
    const currentArticle=articles.find(item =>item.id == id);
    if(currentArticle === undefined)return <div>404 Content not found</div>

    console.log(currentArticle);
    const author=users.find(obj =>obj.id===currentArticle.created_by);
    return(
       <React.Fragment>
          <h2>
              {currentArticle.title}by {author.name}
          </h2>
          <p>{currentArticle.content}</p>
          <hr/>
       </React.Fragment>
    );
}
}