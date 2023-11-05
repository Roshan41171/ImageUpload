import  React,{useState} from 'react';
import FileBase from 'react-file-base64';
import Axios from 'axios';

const Form = () => {

    const [myFile,setMyFile] = useState("");
    const [name,setName] = useState("");

    const UploadFile = async (e) => {
      e.preventDefault();
      console.log(name);
      console.log(myFile);
      await Axios.post("http://localhost:5000/fileupload",{
        name:name,
        file:myFile
      })
    }

  return (
    <div>
        <form>
            Name::<input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} /><br />
            <FileBase type="file" multiple={false} onDone={({base64}) => setMyFile(base64)} />
            <button onClick={(e) => UploadFile(e)}>Upload</button>
        </form>
    </div>
  )
}

export default Form