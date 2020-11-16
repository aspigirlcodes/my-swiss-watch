import React, { Component } from "react";
import Slider from "rc-slider"; // Slider UI lib
import "rc-slider/assets/index.css"; // Slider CSS

const { Provider, Consumer } = React.createContext();


function Color() {
  return (
    <Consumer>
      {({colorOptions, colorChoice, handleColor})=>(
        <fieldset className="colors-container">
          {colorOptions.map(option => (
            <label className="colorOption" key={option.description}>
              <input
                type="radio"
                name="colorChoice"
                value={JSON.stringify(option)}
                onChange={handleColor}
                checked={
                  colorChoice.description === option.description
                    ? "checked"
                    : ""
                }
              />
              <ul>
                <li style={{ backgroundColor: option.primary }} />
                <li style={{ backgroundColor: option.secondary }} />
                <li style={{ backgroundColor: option.tertiary }} />
                <li style={{ backgroundColor: option.quaternary }} />
              </ul>
              <span>{option.description}</span>
            </label>
          ))}
        </fieldset>
      )}
      
    </Consumer>
    
  );
}

function StrapSelector(){
  return(
    <Consumer>
      {({strapColors, handleStrapColor}) => (
        <div className="strapSelector">
          <label htmlFor="strap-color-select">Select a Strap Color</label>
          <select onChange={handleStrapColor}>
            {strapColors.map(color =><option key={color} value={color}>{color}</option> )}
          </select>
        </div>
      )}
    </Consumer>
    
  )
}

function Zoom() {
  return (
    <Consumer> 
      {({colorChoice, zoom, handleZoom})=>(
        <div className="zoom">
          <label>
            {zoom > 1.25
              ? "Zoom-out to get the bigger picture."
              : "Zoom-in for a more detailed view."}
          </label>
          <Slider
            value={zoom}
            min={1}
            max={1.5}
            step={0.1}
            onChange={handleZoom}
            trackStyle={{ backgroundColor: colorChoice.secondary }}
            railStyle={{ backgroundColor: colorChoice.tertiary }}
            handleStyle={{
              backgroundColor: colorChoice.primary,
              borderColor: colorChoice.tertiary
            }}
          />
        </div>
      )}
    
    </Consumer>
  );
}

class ProductConfig extends Component {
  static Color = Color;
  static Zoom = Zoom;
  static StrapSelector = StrapSelector

  state = {
    colorChoice: this.props.colorOptions[0],
    zoom: this.props.zoom || 1,
    selectedStrap : this.props.strapColors[0]
  };

  handleColor = e => {
    let change = {};
    change[e.target.name] = JSON.parse(e.target.value);
    this.setState(change);
  };

  handleStrapColor = e => {
    let change = {};
    change['selectedStrap'] = e.target.value;
    console.log(change)
    this.setState(change);
  };

  handleZoom = value => {
    this.setState({ zoom: value });
  };

  render() {
    return (
      <Provider value={{
        colorOptions: this.props.colorOptions,
        strapColors: this.props.strapColors,
        ...this.state,
        handleColor: this.handleColor,
        handleZoom: this.handleZoom,
        handleStrapColor: this.handleStrapColor
        }}>
        {this.props.children({ ...this.state })}
      </Provider>
    );
  }
}

ProductConfig.defaultProps = {
  colorOptions: [
    {
      description: "Iditarod",
      primary: "#fbfbfb", // white
      secondary: "#f67944", // orange
      tertiary: "#2677bb", // blue
      quaternary: "#c7943e" // copper
    },
    {
      description: "La Ruta",
      primary: "#f4f4f4", // white
      secondary: "#3dbd5d", // green
      tertiary: "#303030", // black
      quaternary: "#f77e5e" // cyan
    },
    {
      description: "Vendée",
      primary: "#37bbe4", // blue
      secondary: "#f1f2f0", // white
      tertiary: "#35342f", // black
      quaternary: "#e1e0dd" // grey
    },
    {
      description: "Dakar",
      primary: "#f45844", // red
      secondary: "#a5a6a9", // grey
      tertiary: "#2f292b", // black
      quaternary: "#dfe0e2" // stone
    }
  ]
};

export default ProductConfig;
