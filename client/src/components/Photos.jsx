import React from 'react';
import Photo from './Photo';

const Photos = ({ photos }) => (
  <div>
    {photos.map(photo => (
      <Photo key={photo.id} photo={photo} />
    ))}
  </div>
);

export default Photos;
