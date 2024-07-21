import React, { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import SearchBar from '../src/SearchBar/SearchBar'
import ImageGallery from '../src/ImageGallery/ImageGallery'
import './App.css'
import axios from 'axios'

const API_KEY = 'YOUR_UNSPLASH_API_KEY'
const BASE_URL = 'https://api.unsplash.com';

const App = () => {

  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setLoading(true);
      setError(null)
      try {
        const response = await axios.get(`${BASE_URL}/search/photos`, {
          params: {
            query,
            page,
            per_page: 12,
            client_id: API_KEY
          },
        });
        setImages(prevImage => [...prevImage, ...response.data.results]);
      } catch (error) {
        setError('Please try again.');
      } finally {
        setLoading(false)
      }
    };
    fetchImages();
  },[query,page])

  const handleSearchSubmit = newQuery => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1)
}

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images}/>
    </>
  )
}

export default App
