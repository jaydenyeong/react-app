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
    setPhotos((prev) => ({
      ...prev,
      [country]: [...(prev[country] || []), photoUrl],
    }));
  };

    const handleDelete = (country: string, index: number) => {
    setPhotos((prev) => ({
      ...prev,
      [country]: prev[country].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="container py-4">
      <header className="mb-4 text-center">
        <h1 className="fw-bold">🌍 My Travel Showcase</h1>
        <p className="text-muted">
          Exploring the world, one country at a time.
        </p>
      </header>

      <div className="row">
        {/* Country List */}
        <div className="col-md-4 mb-4">
          <CountryList
            items={countries}
            heading="Countries I've Visited"
            onSelectItem={setSelectedCountry}
          />
        </div>

        {/* Photo Section */}
        <div className="col-md-8">
          {selectedCountry ? (
            <>
              <h2 className="mb-3">{selectedCountry}</h2>
              <UploadPhoto country={selectedCountry} onUpload={handleUpload} />
              <PhotoGallery photos={photos[selectedCountry] || []}
              onDelete={(index) => handleDelete(selectedCountry, index)} />
            </>
          ) : (
            <p className="text-muted">
              Select a country to view and upload photos.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
