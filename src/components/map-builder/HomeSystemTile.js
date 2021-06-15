import React from 'react';
import _ from 'lodash';

import { SYSTEM_PNG_URL } from './map-constants';

import SystemTileSVG from './SystemTileSVG';

const SystemTileContent = ({ type }) => {
  if (type === 'image') {
    // TODO (maybe)
    return <img src={`${SYSTEM_PNG_URL}HS.png`} alt="Home system" className="system-image" />;
  }

  return <SystemTileSVG />;
}

const HomeSystemTile = ({ player, style = {}, contentType }) => {
    return (
      <div className={`system-tile home-system content-${contentType}`} style={style}>
        <SystemTileContent type={contentType} />
        <span className="player-number">P{player}</span>
      </div>
    );
};

export default HomeSystemTile;