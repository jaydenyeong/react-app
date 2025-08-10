interface Props {
  photos: string[];
  onDelete: (index: number) => void;
}

function PhotoGallery({ photos, onDelete }: Props) {
  if (photos.length === 0) {
    return <p className="text-muted">No photos uploaded yet.</p>;
  }

  return (
    <div className="row">
      {photos.map((photo, index) => (
        <div key={index} className="col-md-4 mb-3">
          <div className="card shadow-sm position-relative">
            <img
              src={photo}
              alt={`Trip photo ${index + 1}`}
              className="card-img-top"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <button
              onClick={() => onDelete(index)}
              className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhotoGallery;
