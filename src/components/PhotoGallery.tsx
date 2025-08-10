interface Props {
  photos: string[];
}

function PhotoGallery({ photos }: Props) {
  if (photos.length === 0) {
    return <p>No photos uploaded yet.</p>;
  }
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Trip photo ${index + 1}`}
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      ))}
    </div>
  );
}

export default PhotoGallery;
