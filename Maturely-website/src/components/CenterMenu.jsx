import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between text-[1.5rem]'>
            <a href='/'><li className={liStyle}>Home</li></a>
            <a href='#AboutUs'><li className={liStyle}>About</li></a>
            {/* <a href='/'><li className={liStyle}>Curric</li></a>
            <a href='/'><li className={liStyle}>Event Shedule</li></a> */}
        </ul>
    </div>
    )
}

export default CenterMenu