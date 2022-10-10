import { useEffect, useRef, useState } from "react";

function Tooltip({text, domRect}) {

    let [position, setPosition] = useState({ x: 0, y: 0 });
    let tooltipElement = useRef();

    useEffect(() => {

      let { width, height } = tooltipElement.current.getBoundingClientRect();

      setPosition({
        y: domRect.y + height,
        x: domRect.x + (domRect.width / 2) - (width / 2),
      })

    }, [domRect]);

    return(
        <span ref={tooltipElement} style={{ left: position.x, top: position.y }}className="tooltip">{text}</span>
    )

}

export default Tooltip;