import React, {useState} from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


function Accordion({ tile, content }) {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{tile}</div>
        <div>{isActive ? <IoIosArrowUp/> : <IoIosArrowDown/>}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  )
}

export default Accordion