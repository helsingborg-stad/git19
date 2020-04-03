import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import * as MIcons from 'react-icons/md';
import styled from 'styled-components';

const MIcon = ({ name, size, className }) => {
  let iconName = name;
  if (iconName.startsWith('Md')) {
    // react-icon material name, nothing to do.
  } else {
    // Convert react material naming convention to react-icon (eg. arrow-upward -> MdArrowUpward).
    const convertIconNamingConvention = iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');

    iconName = `Md${convertIconNamingConvention}`;
  }

  const IconComponent = MIcons[iconName];

  return (
    <IconContext.Provider value={{ size, className: 'react-icons' }}>
      <IconComponent className={className} />
    </IconContext.Provider>
  );
};

MIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([16, 24, 32, 48]),
};

MIcon.defaultProps = {
  className: '',
  size: 24,
};

export default styled(MIcon)``;
