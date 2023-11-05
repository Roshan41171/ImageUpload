import React , {useEffect,useState} from 'react';
import Axios from "axios";


const Page = () => {

  const [imageFiles,setImageFiles] = useState([]);

  useEffect (() => {
    Axios.get('http://localhost:5000/readfile').then((response) => {
      setImageFiles(response.data);
    },[imageFiles])
  })
  
  return (
    <div>

    <h1>Hello World</h1>

    {imageFiles.map((imgFile) => (
      <div>
      <h1>Name = {imgFile.Name}</h1>
      <img src={imgFile.imageFile} />
      </div>
    ))}

    </div>
  )
}

export default Page;