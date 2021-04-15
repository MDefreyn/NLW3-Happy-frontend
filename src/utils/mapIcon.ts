
import L from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = L.icon({
  iconUrl: mapMarkerImg,
  iconSize: [50, 60],
  iconAnchor: [25, 60],
  popupAnchor: [170, 2]
})

export default mapIcon;