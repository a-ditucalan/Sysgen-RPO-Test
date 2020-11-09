import React, { useEffect } from 'react'
import ModalUpload from '../common/ModalUpload'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { deletedPhoto } from '../utils/common'
const Header = ({
  setPagination,
  pagination,
  listPhoto,
  deletePhoto,
  setDeletePhoto
}) => {
  const options = ['5', '10', '25']
  const defaultOption = pagination.limit.toString()
  useEffect(() => {}, [deletePhoto])
  const onChangeDropdown = e => {
    setPagination({ ...pagination, limit: e.value })
  }
  const onClickDelete = () => {
    deletedPhoto(deletePhoto, setDeletePhoto)
  }
  return (
    <div className="header-wrapper container-custom">
      <p className="h1">Photos</p>
      <div className="pagination-wrapper">
        {deletePhoto.length !== 0 && (
          <>
            <button className="btn-delete" onClick={onClickDelete}>
              Delete {deletePhoto.length}{' '}
              {deletePhoto.length > 1 ? 'photos' : 'photo'}
            </button>{' '}
            <div className="hr" />
          </>
        )}
        <ModalUpload
          listPhoto={listPhoto}
          pagination={pagination}
          setPagination={setPagination}
        />{' '}
        <div className="hr" />
        <Dropdown
          options={options}
          onChange={e => onChangeDropdown(e)}
          value={defaultOption}
        />
      </div>
    </div>
  )
}
export default Header
