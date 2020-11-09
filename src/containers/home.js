import React, { useEffect, useState } from 'react'
import { getPhotos } from '../utils/common'

import Gallery from '../common/Gallery'
import '../stylesheets/main.scss'
import Header from '../components/header'

const Home = () => {
  const [pagination, setPagination] = useState({
    skip: 0,
    limit: 5
  })
  const [listPhoto, setListPhoto] = useState([])
  const [deletePhoto, setDeletePhoto] = useState([])
  useEffect(() => {
    getPhotos(pagination, setListPhoto)
  }, [pagination, deletePhoto])
  const loadMore = () => {
    pagination.skip = pagination.skip + 1
    setPagination({ ...pagination })
  }

  const selectedDeleted = data => {
    let photoDelete = deletePhoto

    const isFileExist = deletePhoto.filter(item => {
      return item.documents === data.documents
    }).length

    if (isFileExist) {
      setDeletePhoto(prevItems => {
        return prevItems.filter(item => item.documents !== data.documents)
      })
    } else {
      photoDelete.push(data)
      setDeletePhoto([...photoDelete])
    }
  }

  console.log(deletePhoto, 'DELETE PHOTO')

  return (
    <>
      <Header
        setPagination={setPagination}
        pagination={pagination}
        listPhoto={listPhoto}
        deletePhoto={deletePhoto}
        setDeletePhoto={setDeletePhoto}
      />
      <Gallery
        photos={listPhoto}
        loadMore={loadMore}
        selectedDeleted={selectedDeleted}
        deletePhoto={deletePhoto}
      />
    </>
  )
}

export default Home
