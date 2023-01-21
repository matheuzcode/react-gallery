import { useState, useEffect, FormEvent } from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';
import { PhotoItem } from './components/PhotoItem';
import { ShowPhoto } from './components/ShowPhoto';
import { MouseEvent } from 'react'


const App = () => {
  const [upLoading, setUpLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [photoUrl, setPhotoUrl] = useState('');
  const [showComponent, setShowComponent] = useState(false);

  useEffect(()=>{
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    }
    getPhotos();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if(file && file.size > 0) {
      setUpLoading(true);
      let result = await Photos.insert(file);
      setUpLoading(false);

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  const getUrl = (photoKey: number): void => {
      photos.map((item, index) => {
        if(index === photoKey) {
          setPhotoUrl(item.url);
          setShowComponent(true);
        }   
      });
  }

  const closePhoto = () => {
    setShowComponent(false);
  }
 
  return (
    <C.Container> 
      <C.Area>
        <C.Header> Galeria de Fotos </C.Header>

        {!loading && photos.length > 0 && showComponent &&
          <ShowPhoto url={photoUrl} closePhoto={closePhoto}/>
        }

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type='file' name='image' />
          <input type='submit' value='Enviar' />
          {upLoading && 'Enviando...'}
        </C.UploadForm>  

        {loading &&
          <C.ScreenWarning>
            <div className="emoji">✋</div>
            <div>Carregando...</div>
          </C.ScreenWarning> 
        }

        {!loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem click={() => getUrl(index)} key={index} url={item.url} name={item.name}/>
            ))}
          </C.PhotoList>  
        }

        {!loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className="emoji">😞</div>
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning> 
        }
          
      </C.Area>   
    </C.Container>
  );
}

export default App;