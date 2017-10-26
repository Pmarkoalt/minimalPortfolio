import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';


//Components
import { Home, PortItem} from './views/pages';
import {NotFoundPage, AnimatedSwitch } from './views/components';
import AppData from "./App.data.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  componentDidMount(){

  }



  render(){

    return(
      <main>
        <TransitionGroup>
          { this.state.aboutOpen && <About />}
        </TransitionGroup>
        <Route
					render={({ location }) => (
						<TransitionGroup>
							<AnimatedSwitch
								key={location.key}
								location={location}
							>
								<Route
                  exact path="/"
                  render={props => (
                    <Home {...props} />
                  )}
                />
								<Route
									path="/portitem/:id"
									render={props => (
										<PortItem {...props}  />
									)}
								/>
								<Route render={props => (
                   <NotFoundPage {...props} />
                  )}
                />
							</AnimatedSwitch>
						</TransitionGroup>
					)}
				/>
      </main>
    )
  }
}

export default App;
