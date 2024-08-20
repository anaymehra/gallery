import { useEffect, useState } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey = import.meta.env.VITE_APP_PIXABAY_API_KEY;

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [searchTerm, apiKey]);

  return (
    
    <div className="container mx-auto px-4 py-6">
      <ImageSearch searchText={(input)=>{setSearchTerm(input)}}/>
       {!isLoading && images.length ===0 && <h1 className="text-3xl mx-auto mt-32 text-center">No Images Found.</h1>} 
      {isLoading? <h1 className="text-6xl mx-auto mt-32 text-center">Loading</h1>:<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}

export default App;

