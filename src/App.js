import './App.css';

class App extends Component {
  state = {
    showPaypal: false
  };

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
    const { showPaypal } = this.state;
    if (showPaypal) {
      return <PaypalButtons />;
    } else {
      return (
        <div className="main">
          <h2> Buy this amaizing tranch-coat from Tommy </h2>
          <img alt="HERITAGE SINGLE BREASTED TRENCH COAT" src={TranchCoat} />
          <h3>
            <b>£178</b>
          </h3>
          <button onClick={this.showPaypalButtons}> Pay </button>
        </div>
      );
    }
  }
}

export default App;
