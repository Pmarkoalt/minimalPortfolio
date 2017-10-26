import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      active: "",
      public: false,
      rawle: false,
      head: false,
      port: false,
      band: false
    }
    this.handleActive = this.handleActive.bind(this);
    this.handlePublic = this.handlePublic.bind(this);
    this.handleRawle = this.handleRawle.bind(this);
    this.handleHead = this.handleHead.bind(this);
    this.handlePort = this.handlePort.bind(this);
    this.handleBand = this.handleBand.bind(this);
  }

  handleActive(event){
    if (event === this.state.active){
      return this.setState({
        active: ""
      })
    }
    this.setState({
      active: event
    });
  }

  handlePublic(event){
    this.setState({
      public: !this.state.public
    });
  }

  handleRawle(event){
    this.setState({
      rawle: !this.state.rawle
    });
  }

  handleHead(event){
    this.setState({
      head: !this.state.head
    });
  }

  handlePort(event){
    this.setState({
      port: !this.state.port
    });
  }

  handleBand(event){
    this.setState({
      band: !this.state.band
    });
  }

  render(){
    return(
      <div id="home">
        <div className="name">
          <h1 className="titles"> PETER MARKOSKI </h1>
          <h1 className="titles"> DEVELOPER </h1>
        </div>
        <div onClick={() => this.handleActive("info")} className="info">
          <h1 className="links"> INFO </h1>
          <div className={"info__content " + (this.state.active === "info" ? " infoActive " : "")}>
            <p className="info__content__text"> I'm Peter Markoski, a creative developer and musician based in Washington DC. I currently work for Expression Networks and PUBLIC.GROUP. Before that I worked within the Entertainment Industry in the television and radio sectors. My passions and work expierences provide me with unique perspective on media which I try to incorporate into all my projects. I make websites that are visually engaging, expandable, and fast. Check out my latest work below. </p>
          </div>
        </div>
        <div className="work">
          <h1 onClick={() => this.handleActive("work")} className="links"> WORK </h1>
          <div className={"work__content " + (this.state.active === "work" ? " workActive " : "")}>
            <div className="work__content__text">
              <h3 className="work__content__text__selected"> SELECTED </h3>
              <ul className="work__content__text__list">
                <Link to={"/portitem/public"}>
                  <li className="listItem" onMouseEnter={this.handlePublic} onMouseLeave={this.handlePublic}> PUBLIC.GROUP </li>
                </Link>
                <Link to={"/portitem/rawle"}>
                  <li className="listItem" onMouseEnter={this.handleRawle} onMouseLeave={this.handleRawle}> RAWLE NIGHT LONG </li>
                </Link>
                <Link to={"/portitem/headshoppe"}>
                  <li className="listItem" onMouseEnter={this.handleHead} onMouseLeave={this.handleHead}> HEADSHOPPE </li>
                </Link>
                <Link to={"/portitem/portfolio"}>
                  <li className="listItem" onMouseEnter={this.handlePort} onMouseLeave={this.handlePort}> PORTFOLIO TEMPLATE </li>
                </Link>
                <Link to={"/portitem/bandspace"}>
                  <li className="listItem" onMouseEnter={this.handleBand} onMouseLeave={this.handleBand}> BANDSPACE </li>
                </Link>
              </ul>
            </div>
            <div className="work__content__images">
              <img className={"work__content__images__item " + (this.state.public ? "displayImage" : "" )} src="/public/imgs/public.png" />
              <img className={"work__content__images__item " + (this.state.rawle ? "displayImage" : "")} src="/public/imgs/rawle.jpeg" />
              <img className={"work__content__images__item " + (this.state.head ? "displayImage" : "")} src="/public/imgs/head.png" />
              <img id="doughnut" className={(this.state.port ? "displayImage" : "")}  src="/public/imgs/portfolio.png" />
              <img id="amp" className={(this.state.band ? "displayImage" : "")} src="/public/imgs/amplifier.png" />
            </div>
          </div>
        </div>
        <div className="contact">
          <h1 onClick={() => this.handleActive("contact")} className="links"> CONT@CT </h1>
          <div className="contact__content">
            <a href="mailto:pmarko.alt@gmail.com?subject=Introduction">Pmarko.alt@gmail.com</a>
            <a href="https://www.linkedin.com/in/peter-markoski/" target="_blank"> LinkedIn </a>
            <a href="https://teamtreehouse.com/petermarkoski" target="_blank"> Team TreeHouse </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
