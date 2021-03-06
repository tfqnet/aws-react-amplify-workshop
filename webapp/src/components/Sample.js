import React, { Component } from 'react';
import { API, Analytics, graphqlOperation } from 'aws-amplify';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    }
  }
  componentDidMount() {
    this.getContent();
    Analytics.record({ name: 'sampleVisit' });
  }
  getContent = async () => {
    // TODO: add query
    const graphqlQuery = ``;

    try {
      const response = await API.graphql(graphqlOperation(graphqlQuery));
      console.log(response)
      const items = response.data.getPost;
      if (items.message) {
        this.setState({
          message: items.message
        })
      }
    } catch (e) {
      console.error(e);
    }
  }
  renderContent = () => {
    let { message } = this.state;
    if (message !== "") {
      return (
        <div>{message}</div>
      )
    } else {
      return (
        <h1>This is a sample page...</h1>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}
export default About;