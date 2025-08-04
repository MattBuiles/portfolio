import React from 'react';

const Icon = ({ name, className = '', size = '1x', ...props }) => {
  // Mapeo de íconos para compatibilidad con FontAwesome 6.4.0
  const iconMap = {
    'linkedin': 'linkedin-in',
    'twitter': 'x-twitter',
    'user-circle': 'circle-user',
    'chevron-down': 'arrow-down',
    'comment-alt': 'comment',
    'external-link-alt': 'external-link',
    'atom': 'atom',
    'brain': 'brain',
    'database': 'database',
    'code': 'code',
    'folder-open': 'folder-open',
    'envelope': 'envelope',
    'github': 'github',
    'arrow-down': 'arrow-down'
  };
  
  // Íconos que requieren la clase 'fab' (marcas)
  const brandIcons = ['github', 'linkedin-in', 'x-twitter', 'linkedin', 'twitter'];
  
  const mappedName = iconMap[name] || name;
  const iconPrefix = brandIcons.includes(mappedName) ? 'fab' : 'fas';
  const iconClass = `${iconPrefix} fa-${mappedName} fa-${size} ${className}`;
  
  return <i className={iconClass} {...props}></i>;
};

export default Icon;
