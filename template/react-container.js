import React, { Component } from 'react';
import { connect } from 'react-redux';

class Demo extends Component {
      constructor(props) {
          super(props);
          this.state = {

          };
      }

      componentWillMount() {

      }

      componentDidMount() {

      }

      render() {
          return (<div>{'内容'}</div>);
      }
}

const mapStateToProps = (state) => {
      return {

      };
};

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Demo);
