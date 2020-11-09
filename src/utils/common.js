import axios from 'axios'
import { toast } from 'react-toastify'
export const uploadPhotos = async (
  album,
  fileUpload,
  setFiles,
  onCloseModal,
  setPagination,
  pagination
) => {
  var formdata = new FormData()
  formdata.append('album', album)

  // Append additional Form Data
  for (const item of fileUpload) {
    formdata.append('documents', item, item.name)
  }

  const requestConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
      redirect: 'follow'
    }
  }

  await axios
    .put('http://localhost:8888/photos', formdata, requestConfig)
    .then(res => {
      toast.success('Succesful uploaded')
      onCloseModal()
      setFiles([])
      setPagination([...pagination])
    })
    .catch(err => {
      console.log(err)
    })
}

export const getPhotos = async (pagination, setListPhoto) => {
  const requestConfig = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  await axios
    .post('http://localhost:8888/photos/list', pagination, requestConfig)
    .then(res => {
      setListPhoto(res.data.documents)

      console.log(res.data.documents, 'LIST')
    })
    .catch(err => {
      console.log(err)
    })
}

export const deletedPhoto = async (deleteData, setDeletePhoto) => {
  await axios
    .delete('http://localhost:8888/photos', {
      headers: {
        'Content-type': 'application/json'
      },
      data: deleteData
    })
    .then(res => {
      setDeletePhoto([])
      toast.success('Succesful Deleted')
    })
    .catch(err => {
      console.log(err)
    })
}
