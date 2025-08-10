import { type ChangeEvent, useState } from "react";

interface Props {
  country: string;
  onUpload: (country: string, photoUrl: string) => void;
}

function UploadPhoto({ country, onUpload }: Props) {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    <div className="mb-3 d-flex gap-2">
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="form-control"
      />
      <button
        onClick={handleUpload}
        disabled={!file}
        className="btn btn-primary"
      >
        Upload
      </button>
    </div>
  );
}

export default UploadPhoto;
