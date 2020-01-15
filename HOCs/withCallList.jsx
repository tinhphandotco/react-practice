import React from "react";

function withCallList(WrappedComponent) {
  class HOC extends React {
    constructor(props) {
      super(props);

      this.state = {
        list: [],
        isLoading
      };
    }

    callApi = () => {
      this.setState({
        isLoading: true
      });
      this.callAPI().then(list => {
        this.setState({
          list,
          isLoading: false
        });
      }).catch(err => {
        this.setState({
          error: 'abc',
          isLoading: false
        })
      })
    }

    render() {
      return <WrappedComponent 
        {
          ...this.props
        }
        isLoading={this.state.isLoading} 
        list={this.state.list}
        callApi={this.callApi}
      />
    }
  }

  return HOC;
}