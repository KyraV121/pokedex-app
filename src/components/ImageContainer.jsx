function ImageContainer({ src, alt }) {
    return (
      <div className="image-container">
        <div className="circular-progress">
          <img src={src} alt={alt} width="200" />
        </div>
      </div>
    );
  }
  