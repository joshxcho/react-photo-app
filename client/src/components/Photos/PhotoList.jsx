import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

const PhotoList = ({ photos }) => (
  <div className="photo-list-container">
    {photos.map(photo => (
      <Photo key={photo.id} photo={photo} />
    ))}
  </div>
);

export default PhotoList;

PhotoList.propTypes = {
  photos: PropTypes.arrayOf(Object).isRequired,
};
