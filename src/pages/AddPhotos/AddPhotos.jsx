import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as photoService from '../../services/photoService'

const AddPhotos = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    cameraBody: '',
    lens: '',
    aperture: '',
    iso: '',
    shutterSpeed: '',
    location: '',
    photoUpload: '',
  })
  
  const [photoData, setPhotoData] = useState({})

  const handleChange = event => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleChangePhoto = (event) => {
    setPhotoData({ photo: event.target.files[0] })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await photoService.create(formData, photoData.photo)
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { title, cameraBody, lens, aperture, iso, shutterSpeed, location, photoUpload } = formData

  const isFormInvalid = () => {
    return !(title && cameraBody && lens && aperture && iso && shutterSpeed && location && photoUpload)
  }

  return (
    <main>
      <h1>hello, {props.user ? props.user.name : 'friend'}</h1>
      <h2>This is where a user will add photos via a form</h2>
      <form
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="title">Photo Title</label>
            <input
              type='text'
              autoComplete='off'
              id='title'
              value={title}
              title='title'
              onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="cameraBody">Camera Body</label>
            <input
              type='text'
              autoComplete='off'
              id='cameraBody'
              value={cameraBody}
              cameraBody='cameraBody'
              onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="lens">Lens</label>
            <input
              type='text'
              autoComplete='off'
              id='lens'
              value={lens}
              lens='lens'
              onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="aperture">Aperture</label>
            <input
              type='text'
              autoComplete='off'
              id='aperture'
              value={aperture}
              aperture='aperture'
              onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="aperture">ISO</label>
            <input
              type='text'
              autoComplete='off'
              id='iso'
              value={iso}
              iso='iso'
              onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="aperture">Shutter Speed</label>
            <input
              type='text'
              autoComplete='off'
              id='shutterSpeed'
              value={shutterSpeed}
              shutterSpeed='shutterSpeed'
              onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="aperture">Location Shot</label>
            <input
              type='text'
              autoComplete='off'
              id='location'
              value={location}
              location='location'
              onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="photo-upload">Upload Photo</label>
            <input
              type="file"
              id="photo-upload"
              name="photo"
              onChange={handleChangePhoto}
            />
        </div>
      </form>
    </main>
  )
}

export default AddPhotos