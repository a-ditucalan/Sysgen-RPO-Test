import React from 'react'
import Check from '../assets/img/check.png'
const Gallery = ({ photos, loadMore, selectedDeleted, deletePhoto }) => {
  return (
    <>
      <div className="gallery-wrapper container-custom">
        {photos.map((photo, idx) => {
          const isFileExist = deletePhoto.filter(item => {
            return item.documents === photo.name
          }).length

          return (
            <div
              className={`photo-wrapper ${
                deletePhoto.length !== 0 && !isFileExist
                  ? 'unselected-delete'
                  : ''
              }`}
              key={idx}
            >
              {isFileExist ? (
                <img className="check" src={Check} alt="check" />
              ) : (
                ''
              )}
              <img
                className="img-content"
                id={photo.id}
                onClick={() =>
                  selectedDeleted({
                    album: photo.album.toLowerCase(),
                    documents: photo.name
                  })
                }
                src={photo.raw}
                alt={photo.name}
              />
              <p className="photo-name">{photo.name}</p>
              <p className="album-text">{photo.album}</p>
            </div>
          )
        })}
      </div>
      <div className="load-more-wrapper">
        <button onClick={loadMore}>Load more</button>
      </div>
    </>
  )
}

export default Gallery
