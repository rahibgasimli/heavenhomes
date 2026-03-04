import React, { useState } from "react";
import styles from "./mapview.module.css";
import cn from "classnames";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

// MR Bauunternehmen üçün dəqiq koordinatlar
const center = {
  lat: 50.6736121,
  lng: 8.3053192,
};

export default function MapView() {
  // TypeScript xətasının həlli üçün tip təyin edildi
  const [selected, setSelected] = useState<{lat: number, lng: number} | null>(null);

  return (
    <div className={styles.mapWrapper}>
      <LoadScript googleMapsApiKey="AIzaSyDQseUyUqI_D7qkfl-RmsmufqWwmAWEFdc">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={16}
        >
          {/* İşarəni yerləşdiririk */}
          <Marker 
            position={center} 
            onClick={() => setSelected(center)}
            title="MR Bauunternehmen"
          />

          {/* İşarəyə kliklədikdə açılan pəncərə */}
          {selected && (
            <InfoWindow
              position={center}
              onCloseClick={() => setSelected(null)}
            >
              <div style={{ color: "#000", padding: "5px" }}>
                <h4 style={{ margin: "0 0 5px 0" }}>MR Bauunternehmen</h4>
                <p style={{ margin: 0, fontSize: "12px" }}>Austraße 55, 35745 Herborn</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}