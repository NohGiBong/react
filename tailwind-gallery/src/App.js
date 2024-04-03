import React, { useState, useEffect } from "react";
import './assets/main.css'
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [term, setTerm] = useState('sky');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
      .then(res => res.json())
      .then(data => {
        console.log(data.hits);
        setImages(data.hits);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        });
  }, [term])

  return (
    <div className="container mx-auto my-7">
      <ImageSearch searchText={text => setTerm(text)} />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
        {images.length === 0 && !Loading && (
          <h1 className="text-5xl text-center mt-32">이미지가 없습니다.</h1>
          )}
    </div>
  );
}

export default App;
