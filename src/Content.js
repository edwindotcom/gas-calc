import React from "react";
// import logo from './logo.svg';
import { Heading, Pane, Text, TextInput } from "evergreen-ui";
// import './App.css';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("foo");
  }
  render() {
    return (
      <Pane display="flex" alignItems="center" justifyContent="center">
        <Pane
          border="default"
          background="tint2"
          border="muted"
          width={800}
          height={600}
        >
          <Heading size={900}>Gas Calculator</Heading>
          <Pane justifyContent="right">
            <Text>Your car MPG: </Text>
            <TextInput name="mpg" placeholder="Text input placeholder..." />
          </Pane>
          <Pane>
            <Text>Gals to buy: </Text>
            <TextInput
              name="galToBuy"
              placeholder="Text input placeholder..."
              alignItems="right"
            />
          </Pane>
          <Pane>
            <Text>Miles to costco </Text>
            <TextInput
              name="milesToCostco"
              placeholder="Text input placeholder..."
              alignItems="right"
            />
          </Pane>
          <Pane>
            <Text>Miles to expensive gas </Text>
            <TextInput
              name="milesToGas"
              placeholder="Text input placeholder..."
              alignItems="right"
            />
          </Pane>
          <Pane>
            <Text>Gas savings:</Text>
            <Text>Savings minus distance:</Text>
          </Pane>
        </Pane>
      </Pane>
    );
  }
}

export default Content;
