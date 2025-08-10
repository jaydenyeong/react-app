import { type ChangeEvent, useState } from "react";

interface Props {
  country: string;
  onUpload: (country: string, photoUrl: string) => void;
}

function UploadPhoto({ country, onUpload }: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        onUpload(country, reader.result.toString());
        setFile(null);
      }
    };
    reader.readAsDataURL(file);
  };
  return (
    <div style={{ margin: "10px 0" }}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload Photo
      </button>
    </div>
  );
}

export default UploadPhoto;
