import React, { Component, useCallback, useContext, useState } from "react";
import Slider from "rc-slider"; // Slider UI lib
import "rc-slider/assets/index.css"; // Slider CSS

const RootContext = React.createContext();


function Color() {
  const {colorOptions, colorChoice, handleColor} = useContext(RootContext)
  return (
    <fieldset className="colors-container">
      {colorOptions.map(option => (
        <label className="colorOption" key={option.description}>
          <input
            type="radio"
            name="colorChoice"
            value={JSON.stringify(option)}
            onChange={() => handleColor(option)}
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
  );
}

function StrapSelector(){
  const {strapColors, handleStrapColor} = useContext(RootContext)
  return(
    <div className="strapSelector">
      <label htmlFor="strap-color-select">Select a Strap Color</label>
      <select onChange={(e) => handleStrapColor(e.currentTarget.value)}>
        {strapColors.map(color =><option key={color} value={color}>{color}</option> )}
      </select>
    </div>
  )
}

function Zoom() {
  const {colorChoice, zoom, handleZoom} = useContext(RootContext)
  return (
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
  );
}

function ProductConfig(props){
  const {Provider} = RootContext
  const [colorChoice, setColorChoice] = useState(props.colorOptions[0])
  const [zoom, setZoom] = useState(props.zoom || 1)
  const [selectedStrap, setSelectedStrap] = useState(props.strapColors[0])
  
  return (
    <Provider value={{
      colorOptions: props.colorOptions,
      strapColors: props.strapColors,
      colorChoice, zoom, selectedStrap,
      handleColor: (value) => setColorChoice(value),
      handleZoom: (value) => setZoom(value),
      handleStrapColor: (value) => setSelectedStrap(value)
      }}>
      {props.children({ colorChoice, zoom, selectedStrap })}
    </Provider>
  );
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

export {ProductConfig, Color, Zoom, StrapSelector}
