import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from '../src/SearchBar/SearchBar';
import ImageGallery from '../src/ImageGallery/ImageGallery';
import Loader from '../src/Loader/Loader';
import ErrorMessage from '../src/ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../src/LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../src/ImageModal/ImageModal';
import './App.css';
import axios from 'axios';

const API_KEY = 'QxwtyiynyLrOT1cpYeYexFds8RMCeu7pxWoIvifoCIY';
const BASE_URL = 'https://api.unsplash.com';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${BASE_URL}/search/photos`, {
          params: {
            query,
            page,
            per_page: 16,
            client_id: API_KEY
          },
        });
        setImages(prevImage => [...prevImage, ...response.data.results]);
      } catch (error) {
        setError('Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = newQuery => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const openModal = image => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && !loading && <LoadMoreBtn onClick={() => setPage(prevPage => prevPage + 1)} />}
      {showModal && <ImageModal isOpen={showModal} onRequestClose={closeModal} image={modalImage} />}
      <Toaster />
    </>
  );
};

export default App;