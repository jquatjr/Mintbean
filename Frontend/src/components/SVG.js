
import React, { useState, useEffect, useRef } from 'react';
import {Button} from "@mui/material"
import * as saveSvgAsPng from 'save-svg-as-png'
import 'external-svg-loader'
import '../styles/SVG.css'
const SVG = ({ name, width="100%", height="100%", currentColor, fillColor }) => {
    const svgRef = useRef(null)
    const filename = "mycreation.svg"
    const ImportedIconRef = useRef(null);
    console.log("SVG",svgRef.current)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        const namedImport = await import(`../assets/${name}.svg`);
        ImportedIconRef.current = namedImport.default;
      } catch (err) {
        throw err;
      }
        setLoading(false);
      
    };
    importIcon();
  }, [name]);
  const handleClick= (e) => {
      e.target.style.fill = currentColor
  }
 
  if(!loading && ImportedIconRef.current) {
  return ImportedIconRef.current ? 
        <output className="SVG-container" id="SVG" onClick={handleClick}>
            <svg 
                ref={svgRef}
                id="my-svg"
                className="SVG"
                data-src={`${ImportedIconRef.current}`}
                width="100%"
                height="100%"
            ></svg>
            <Button variant="contained" onClick={()=> saveSvgAsPng.saveSvg(svgRef.current, filename)}>
                Save
            </Button>
        </output> : null
  }
  return null;
};
      
export default SVG; 