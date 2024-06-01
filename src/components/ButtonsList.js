import React from 'react'
import Button from './Button'

const BtnList = ["All","Movies","JavaScript","Games","Live","Songs","Reacjs", "Cricket","Tech News", "Artificial Inteligence"]
const ButtonsList = () => {

  return (
    <div className='flex'>
      {
        BtnList.map((eachBtn, index)=>{
          return <Button name ={eachBtn} key={index}/>
        })
      }
      
    </div>
  )
}

export default ButtonsList