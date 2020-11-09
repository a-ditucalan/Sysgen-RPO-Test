import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { toast } from 'react-toastify'
import axios from 'axios'
const UploadButton = ({
  fileTypes,
  maxFileSize,
  setFiles,
  files,
  existFile
}) => {
  const onDrop = acceptedFiles => {
    acceptedFiles.map((file, idx) => {
      const isFileExist = files.filter(item => {
        console.log(item.name, 'NAME', file.name)
        return item.name === file.name
      }).length

      if (!isFileExist) {
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })

        let fileList = files
        fileList.push(file)
        setFiles([...fileList])

        // uploadingImg(event.target.result,failed)
      } else {
        toast.error('File already exist')
      }
    })
  }

  const onDropRejected = () => {
    toast.error('Upload Reject')
  }
  return (
    <>
      <div className="dropzone-wrapper">
        <Dropzone
          accept={fileTypes}
          onDrop={onDrop}
          onDropRejected={onDropRejected}
          maxSize={maxFileSize}
          multiple={true}
          noDrag
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({})}>
              <div className="drag-upload">
                Drag 'n' drop some files here, or click to select files
              </div>
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone>
      </div>
    </>
  )
}

UploadButton.defaultProps = {
  multiple: true,
  fileTypes:
    'image/png, image/jpeg, .bmp, .xlsx, .xls, .doc, .docx, .ppt, .pptx, .pdf',
  maxFileCount: 10,
  maxFileSize: 10485760,
  rejectedFileErrorMessage:
    'File size must not exceed 10MB and must be BMP, PNG, JPEG, PDF, DOC, DOCX, XLS, XLSX, PPT',
  disabled: false,
  datacy: ''
}

export default UploadButton
