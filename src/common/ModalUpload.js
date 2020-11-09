import React, { useState } from 'react'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import UploadIcon from '../assets/img/cloud-computing.png'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import UploadButton from './UploadButton'
import { uploadPhotos } from '../utils/common'
const ModalUpload = ({ listPhoto, setPagination, pagination }) => {
  const options = [
    'Select Upload',
    'Travel',
    'Personal',
    'Food',
    'Nature',
    ' Other'
  ]
  const defaultOption = options[0]

  const [open, setOpen] = useState(false)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
  const [files, setFiles] = useState([])
  const [album, setAlbum] = useState(defaultOption)

  const onChangeDropdown = e => {
    setAlbum(e.value.toLowerCase())
  }

  const uploadImg = () => {
    uploadPhotos(
      album,
      files,
      setFiles,
      onCloseModal,
      setPagination,
      pagination
    )
  }

  console.log(album, 'ALBUM')

  return (
    <>
      <button onClick={onOpenModal} className="btn-upload">
        <img className="icon-img" src={UploadIcon} alt="upload" /> Upload
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2 className="title-modal">Upload Photos</h2>
        <UploadButton setFiles={setFiles} files={files} existFile={listPhoto} />
        <div className="modal-preview">
          {files.length !== 0 ? (
            <>
              {files.map((item, i) => {
                return (
                  <div key={i}>
                    <img
                      className="img-item"
                      src={item.preview}
                      alt={item.name}
                    />
                  </div>
                )
              })}
            </>
          ) : (
            <div>no files selected...</div>
          )}
        </div>
        <div className="upload-bottom-wrapper">
          <Dropdown
            options={options}
            onChange={e => onChangeDropdown(e)}
            value={defaultOption}
          />
          <button
            className={`btn-upload-bottom ${
              files.length === 0 || album === 'Select Upload'
                ? 'disableBtn'
                : ''
            }`}
            onClick={uploadImg}
            disabled={files.length === 0 || album === 'Select Upload'}
          >
            <img src={UploadIcon} alt="upload icon" /> Upload
          </button>
        </div>
      </Modal>
    </>
  )
}

export default ModalUpload
