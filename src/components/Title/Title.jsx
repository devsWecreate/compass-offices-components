import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({
  tag,
  className,
  children,
}) => {
  const Tag = tag || 'h1';

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
};

Title.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Title.defaultProps = {
  tag: 'h1',
  className: '',
  children: '',
};