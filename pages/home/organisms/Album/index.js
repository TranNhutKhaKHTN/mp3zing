import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../../molecules/albumitem';

Album.propTypes = {

};

function Album(props) {
  return (
    <div>
      <AlbumItem></AlbumItem>
    </div>
  );
}

export default Album;