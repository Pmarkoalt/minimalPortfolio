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
      <h1> This is a link </h1>
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
