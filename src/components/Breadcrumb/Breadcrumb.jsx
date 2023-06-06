import React from 'react'
import PropTypes from 'prop-types';
import _ from 'lodash'

export const Breadcrumb = ({
  data,
}) => {
  return (
    <div className='flex flex-row'>
      {_.map(data, (item, index) => {
        return (
          <a href={item.href} className='small-body flex flex-row items-center' key={index}>
            <span className={index < data.length - 1 ? "leading-none small-body text-text" : "leading-none small-body text-text-light"}>{item.label}</span>
            {index < data.length - 1 && <span class="material-symbols-outlined text-[15px] leading-none mr-1">
              keyboard_arrow_right
            </span>
            }
          </a>
        )
      })}
    </div>
  )
}


Breadcrumb.propTypes = {
  data: PropTypes.array,
}

Breadcrumb.defaultProps = {
  data: [],
}