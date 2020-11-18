import React, { Component, useEffect, useRef, useState } from "react";
import { drawCanvas } from "./helpers";


function Canvas(props){
  const [date, setDate] = useState(new Date())
  const canvasRef = useRef(null)

  useEffect(()=>{
    const interval = setInterval( setDate(new Date()), 1000)
    const ctx = canvasRef.current.getContext("2d")
    const time = {hours: date.getHours(), minutes: date.getMinutes(), seconds: date.getSeconds()}
    drawCanvas(ctx, props, time, canvasRef.current.width)
    return(() => {
      clearInterval(interval)
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    })
  })

  return(
    <div>
      <canvas ref={canvasRef} width={250} height={250}></canvas>
    </div>
  )

}

/*
class Canvas extends Component {
  state = {
    time: {
      hours: null,
      minutes: null,
      seconds: null
    }
  };

  setTime() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    return this.setState({ time: { hours, minutes, seconds } });
  }

  componentDidMount() {
    this.setTime(
      window.setInterval(() => {
        this.setTime();
      }, 1000)
    );
    this.ctx = this.refs.canvas.getContext("2d");
    drawCanvas(
      this.ctx,
      this.props,
      this.state.time, // { hours, minutes, seconds }
      this.refs.canvas.width
    );
  }

  componentDidUpdate(prevProps) {
    this.ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
    drawCanvas(
      this.ctx,
      this.props,
      this.state.time, // { hours, minutes, seconds }
      this.refs.canvas.width
    );
  }

  render() {
    return <canvas ref="canvas" width={250} height={250} />;
  }
}
*/
export default Canvas;
