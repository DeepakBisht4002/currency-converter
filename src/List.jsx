import React from 'react'

const List = ({text, del, index}) => {
  return (
    <>
    <div className="container">
    <button className='btn-x' onClick={()=>del(index)}><i class="fa-solid fa-xmark"></i></button>
    <li>{text}</li>
    </div>
      
    </>
  )
}

export default List
