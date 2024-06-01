import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 my-4 mx-2 px-4 py-1 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button