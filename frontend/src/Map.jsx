import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents
} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import L from 'leaflet'

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'


// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow
})


function LocationMarker({ position, setPosition }) {

  useMapEvents({

    click(event) {

      const { lat, lng } = event.latlng

      setPosition([lat, lng])

    }

  })

  return position === null ? null : (

    <Marker position={position}>

      <Popup>

        <strong>Selected Location</strong>

        <br />

        Latitude:
        {position[0].toFixed(6)}

        <br />

        Longitude:
        {position[1].toFixed(6)}

      </Popup>

    </Marker>

  )
}


function Map({ position, setPosition }) {

  const center = [22.9734, 78.6569]

  return (

    <MapContainer

      center={center}

      zoom={5}

      style={{
        width: '100%',
        height: '100%'
      }}

    >

      <TileLayer

        attribution='&copy; OpenStreetMap contributors'

        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

      />

      <LocationMarker

        position={position}

        setPosition={setPosition}

      />

    </MapContainer>

  )
}


export default Map