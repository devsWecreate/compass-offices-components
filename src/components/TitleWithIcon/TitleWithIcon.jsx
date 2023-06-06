import React from 'react';
import PropTypes from 'prop-types';

export const TitleWithIcon = ({
  tag,
  className,
  children,
  iconName,
}) => {
  const Tag = tag || 'h1';

  return (
    <div className={`flex flex-row`}>
      <span className="material-symbols-outlined">{iconName}</span>
      <Tag className={className}>
        {children}
      </Tag>
    </div>
  );
};

TitleWithIcon.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  iconName: PropTypes.string,
};

TitleWithIcon.defaultProps = {
  tag: 'p',
  className: 'body',
  children: '',
  iconName: '',
};