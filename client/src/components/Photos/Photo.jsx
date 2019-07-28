import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photo }) => (
  <div className="img-container">
    <img alt="" src={photo.urls.regular} />
  </div>
);

export default Photo;

Photo.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
};
