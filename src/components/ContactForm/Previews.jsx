import React, {useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: '1em'
}

const thumb = {
  display: 'inline-flex',
  borderRadius: '4px',
  border: 'thin solid #939799',
  marginBottom: '2em',
  marginRight: '1em',
  width: 'auto',
  height: '100px',
  padding: '1em',
  boxSizing: 'border-box'
}

const thumbInner = {
  display: 'flex',
  minWidth: '0px',
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
}

// https://tpiros.dev/blog/image-upload-and-metadata-extraction-with-netlify-functions/
if (typeof document !== `undefined`) {
  document.addEventListener('DOMContentLoaded', () => {
    const readFile = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      })
    }
    document.getElementById('uploading').style.visibility = 'hidden'
    const upload = async () => {
      document.getElementById('uploading').style.visibility = 'visible'
      const uploader = document.getElementById('uploader')
      const file = await readFile(uploader.files[0])
  
      try {
        const response = await fetch(
          `${document.location.origin}/.netlify/functions/upload`,
          {
            method: 'POST',
            body: file,
          }
        )
        const data = await response.json();
        if (data.error) {
          const div = document.getElementById('result');
          div.innerHTML = `<div class="box success" role="alert">
            <p class="font-bold">No GPS data</p>
            <p>${data.message}</p>
          </div>`;
        } else {
          document.getElementById('uploading').style.visibility = 'hidden';
          const div = document.getElementById('result');
          div.innerHTML = '';
          const img = document.createElement('img');
          img.src = data.url;
          div.appendChild(img);
        }
      } catch (error) {
        console.error('Error', error)
      }
    }
    uploader.addEventListener('change', upload);
  })
}

export default function Previews(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    }
  })
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [files])

  return (
    <section className="container box">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} type='file' id="uploader" name='picture' />
        <p
          style={{
            marginLeft: '2em'
          }}
        >
          Drag 'n' drop some files here, or click to select files.
          <p><em>One image file only!</em></p>
        </p>
      </div>
      <div        
        style={{
          marginLeft: '2em'
        }}
      >
        <aside 
          id="result" 
          style={thumbsContainer}
        >
          {thumbs}
        </aside>
      </div>      
    </section>
  )
}
