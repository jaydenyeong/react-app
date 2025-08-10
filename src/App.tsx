import { useState } from "react";
import CountryList from "./components/CountryList";
import PhotoGallery from "./components/PhotoGallery";
import UploadPhoto from "./components/UploadPhoto";

function App() {
  const countries = [
    "Turkey",
    "Thailand",
    "Indonesia",
    "Malaysia",
    "Netherlands",
    "France",
    "Germany",
    "Switzerland",
    "Italy",
    "Luxembourg",
    "Belgium",
  ];

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [photos, setPhotos] = useState<{ [key: string]: string[] }>({});

  const handleUpload = (country: string, photoUrl: string) => {
    setPhotos((prevPhotos) => ({
      ...prevPhotos,
      [country]: [...(prevPhotos[country] || []), photoUrl],
    }));
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>🌍 My Travel Showcase</h1>
      <CountryList
        items={countries}
        heading="Countries I've Visited"
        onSelectItem={setSelectedCountry}
      />

      {selectedCountry && (
        <>
          <h2>{selectedCountry}</h2>
          <UploadPhoto country={selectedCountry} onUpload={handleUpload} />
          <PhotoGallery photos={photos[selectedCountry] || []} />
        </>
      )}
    </div>
  );
}

export default App;
