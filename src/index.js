import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Canvas from "./Canvas";
import ProductConfig from "./ProductConfig"
import "rc-slider/assets/index.css"; // React Slider CSS


const colorOptions = [
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
  },
  {
    description: "October",
    primary: "#666666", // grey
    secondary: "#ee8012", // orange
    tertiary: "#e4e6dd", // stone
    quaternary: "#000003" // black
  },
  {
    description: "Poison",
    primary: "#303030", // black
    secondary: "#f77e5e", // orange
    tertiary: "#3dbd5d", // green
    quaternary: "#f4f4f4" // white
  },
  {
    description: "Summer",
    primary: "#e6c700", // yellow
    secondary: "#008cbc", // blue
    tertiary: "#007500", // green
    quaternary: "#fef9f7" // white
  },
  {
    description: "Desert",
    primary: "#f0c24f", // sand
    secondary: "#f3f3eb", // cloud
    tertiary: "#151515", // black
    quaternary: "#f0ca75" // tan
  },
  {
    description: "Pop",
    primary: "#0098d8", // blue
    secondary: "#e5e7de", // grey
    tertiary: "#f54123", // red
    quaternary: "#0b3536" // black
  },
  {
    description: "80s",
    primary: "#de3d83", // pink
    secondary: "#00b8b8", // blue
    tertiary: "#e4bd0b" // yellow
  }
];

const colorArray1 = colorOptions.slice(0, 4);

const strapColors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
]

ReactDOM.render(
  <ProductConfig colorOptions={colorArray1} strapColors={strapColors}>
    {(colorOptions, strapColors, { colorChoice, zoom, selectedStrap }, handleColor, handleZoom, handleStrapColor) => (
      <div className="product-container">
        <h1>A custom header!</h1>
        <div className="product-body">
          <div className="column">
            <Canvas colors={colorChoice} zoom={zoom} selectedStrap={selectedStrap} />
          </div>
          <div className="column">
            <p>lorem ipsum...</p>
            <ProductConfig.Color
              colorOptions= {colorOptions}
              colorChoice={colorChoice}
              onChange={handleColor}
            />
            <ProductConfig.Zoom zoom={zoom} handleZoom={handleZoom} colorChoice={colorChoice}/>
            <ProductConfig.StrapSelector
              strapColors= {strapColors}
              handleStrapColor = {handleStrapColor}
            />
          </div>
        </div>
        
      </div>

    )}
  </ProductConfig>
  , document.getElementById("root"));
