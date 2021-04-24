import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";

const CLIENT = {
    sandbox:
      "your_sandbox_key",
    production:
      "your_production_key"
};

const CLIENT_ID =
   process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

//create button here
let PayPalButton = null;

// next create the class and Bind React and ReactDom to window
//as we will be needing them later

class PaypalButton extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        showButtons: false,
        loading: true,
        paid: false
      };
  
      window.React = React;
      window.ReactDOM = ReactDOM;
    }
    
    componentDidMount() {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;
    
        if (isScriptLoaded && isScriptLoadSucceed) {
          PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
          this.setState({ loading: false, showButtons: true });
        }
    }

}
  
export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);