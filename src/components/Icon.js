import React from 'react';

const Icon = ({ name, className = '', size = '1x', ...props }) => {
  const iconClass = `fas fa-${name} fa-${size} ${className}`;
  
  return <i className={iconClass} {...props}></i>;
};

export default Icon;
