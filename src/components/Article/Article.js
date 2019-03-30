import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.content = React.createRef();
    this.state = {
      completeArticle: false
    };
  }

  onCancel = event => {
    // event.preventDefault();
    const deleteTitle = event;
    console.log(deleteTitle);
    // this.props.deleteArticleEvent(deleteTitle);
    // this.setState({
    //   completeArticle: true
    // });
  };


  render() {
    return (
      <React.Fragment>
        <h2>          
          <Link to={"/articles/"+this.props.article.id}>{this.props.article.title} by {this.props.author.name}</Link>
        </h2>
        <p>{this.props.article.content}</p>
        <button className='delete-button' onClick={() => { if (window.confirm('Are you sure you want to delete this item?'+this.props.article.title)) this.onCancel(this.props.article.title) } }>Delete</button>
            
        <hr />
      </React.Fragment>
    );
  }
}
