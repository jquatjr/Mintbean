import '../styles/Page.css'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
export default function Page(){
  const colorings = useSelector(store => store.coloringReducer)
  
  useEffect(()=>{
    const addSvgs = ()=>{
      for(const [key, value] of Object.entries(colorings)){
          let newSvg = document.createElement('svg')
          newSvg.innerHTML = value
          document.querySelector('.page').appendChild(newSvg)
        }
    }
    addSvgs()
  },[colorings])
  
    return (  
        <div className="page">
        
        </div>
      );
    
}