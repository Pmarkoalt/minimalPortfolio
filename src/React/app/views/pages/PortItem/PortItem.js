import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router-dom'

import NotFoundPage from '../../components/NotFoundPage';


class PortItem extends Component{
  constructor(props){
    var params = props.match.params.id;
    super(props)
    this.state = {
      project: this.props.projects[params]
    }
  }

  componentDidMount(){
  }

  render(){
    if (this.state.project){
      return(

      <div className="portItem">
        <Link className="back" to={"/"}> BACK </Link>
        <div className="portItem__imageCont">
          <img className="portItem__imageCont__image" src={this.state.project.image} />
        </div>
        <div className="portItem__textCont">
          <div className="portItem__textCont__headerCont">
            <h1 className="portItem__textCont__headerCont__header"> {this.state.project.title} </h1>
            <div className="portItem__textCont__headerCont__linkCont">
              <a href={this.state.project.website} target="_blank" className="portItem__textCont__headerCont__linkCont__link"> Link </a>
              {this.state.project.github && <a href={this.state.project.github} target="_blank" className="portItem__textCont__headerCont__linkCont__link"> Github </a>}
            </div>
          </div>
          <p className="portItem__textCont__text"> {this.state.project.text} </p>
        </div>
      </div>
      )
    }
    else{
      return(
        <NotFoundPage />
      )

    }


  }
}

export default PortItem;
