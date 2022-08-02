import React from 'react'

const Theme = props => {
  return(
    <div className='light-and-dark-theme'>
      <input type="checkbox" className="checkbox" id="checkbox" onChange={props.clickMethod} />
      <label htmlFor="checkbox" className="label">
      <i className="fas fa-moon"></i>
      <i className='fas fa-sun'></i>
      <div className='ball'></div>
      </label>
    </div>
  );
}

export default Theme