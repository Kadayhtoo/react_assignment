import React from "react";
import Article from "../Article";

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.content = React.createRef();
    this.state = {
      completeArticle: false
    };
  }
  
  deleteArticleEvent=(title)=>{
    this.props.deleteArticleEvent(title);

  };
  render() {
    const articles = this.props.articles;
    const users = this.props.users;    
    return articles.map((article, index) => {
      const author = users.find(obj => obj.id === article.created_by);
      return <Article key={index} article={article} author={author} />;
    });
  }
}
