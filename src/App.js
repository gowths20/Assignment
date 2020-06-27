import React from 'react';
import HomePage from "./components/homePage";
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adjustHeight:""
    }
  }
 componentDidMount()
 {
  window.addEventListener("resize", this.resize.bind(this));
  this.resize();
 }
 resize() {
  this.setState({adjustHeight: window.innerWidth <= 480?183:383});
}
  render()
  {
    return (
      <div className="App">
        <Header />
          <HomePage height={this.state.adjustHeight} />
        <Footer/>
      </div>
    );
  }
}

export default App;
