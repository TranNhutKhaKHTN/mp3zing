import React from 'react';
import PropTypes from 'prop-types';
import ImgSong from '../../../home/atoms/ImgSong';

ItemBoxSlide.propTypes = {

};

function ItemBoxSlide(props) {
  return (
    <div>
      <ImgSong size="XL"></ImgSong>
      <div>Title</div>
    </div>
  );
}

export default ItemBoxSlide;