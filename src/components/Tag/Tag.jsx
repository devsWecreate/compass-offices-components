import React from 'react'
import PropTypes from 'prop-types';

export const Tag = ({
  label,

}) => {
  return (
    <div className='tag' >
      <p>{label}</p>
    </div>
  )
}


Tag.propTypes = {
  label: PropTypes.string.isRequired,
}


Tag.defaultProps = {
  label: 'Hong Kong',
}