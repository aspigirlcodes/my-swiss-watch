import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Canvas from "./Canvas";

function Color() {
  return null; // You'll create this in a later exercise
}

function Zoom() {
  return null; // You'll create this in a later exercise
}

class ProductConfig extends React.Component {
  state = {
    colorChoice: null,
    zoom: null
  };

  handleChange = e => {
    let change = {};
    change[e.target.name] = JSON.parse(e.target.value);
    this.setState(change);
  };

  render() {
    return (
      <div>
        {this.props.children(this.state.colorChoice, this.state.zoom, this.handleChange)}
      </div>
    );
  }
}

ReactDOM.render(
  <ProductConfig>
    {(colorChoice, zoom, handleChange) => (
      <div className="product-container">
        <h1>A custom header!</h1>
        <Canvas colorChoice={colorChoice} zoom={zoom} />
        <Color
          colorChoice={colorChoice}
          onChange={handleChange}
        />
        <Zoom zoom={zoom} onChange={handleChange} />
      </div>

    )}
  </ProductConfig>
  , document.getElementById("root"));
