import './index.scss';

import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import { useTranslation } from 'react-i18next';

interface IAuthorMapProps {
  longitude: number;
  latitude: number;
}

const AuthorMap: React.FC<IAuthorMapProps> = ({ longitude, latitude }) => {
  const { t } = useTranslation();
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoidWxhZHppbWlyLWF0cm9zaGNoYW5rYSIsImEiOiJjazNoZTNtNGMwYW84M21xdHhwc2hqcXZpIn0.GpqDhq5ctOG4hKxhZ_xKjg',
  });

  return (
    <>
      <h4 className="map-title">{t('businessPlace')}</h4>
      <Map
        className="Author-page__map-container"
        style="mapbox://styles/mapbox/streets-v11"
        center={[latitude, longitude]}
      />
    </>
  );
};

export default AuthorMap;
