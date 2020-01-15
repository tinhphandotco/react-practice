import React from "react";
import Logo from './logo';
import LogoGold from './logoGold';

class Mouse extends React.Component {
  constructor(props) {
    this.state = {
      x: 0,
      y: 0
    }
  }

  move = (e) => {
    this.setState({
      x: 4,
      y: 7
    })
  }

  render() {
    <div onMouseMove={this.move}>
      {
        this.props.render(this.state.x, this.state.y)
      }
    </div>
  }
}


///


class CatMover extends React.Component {

  render() {
    <Mouse render={(x, y) => {
      return <Cat x={x} y={y} />
    }} />
  }
}



class LineDraw extends React.Component {

  render() {
    <Mouse render={(x, y) => {
      return <Line x={x} y={y} />
    }} />
  }
}


class Root {

  render() {
    return (
      <Switch>
        <Route path={'/projects/:id'}  render={props => {
          if (props.params.id < 0) {
            return <ProjectNotFound />
          } else {
            return  <Project id={props.params.id} />
          }
        }} />
        <Route path={'/11222'} render={(props) => <ABC />} />
      </Switch>
    )
  }
}