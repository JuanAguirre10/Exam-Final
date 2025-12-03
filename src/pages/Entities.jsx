import { useState, useEffect } from 'react';
import { useStore } from '../store/store';
import CardList from '../components/CardList';

const Entities = () => {
  const { items, setItems } = useStore();
  const [allCountries, setAllCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://restcountries.com/v3.1/region/europe');
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setAllCountries(data);
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
        setAllCountries([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (allCountries.length > 0) {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setItems(allCountries.slice(startIndex, endIndex));
    }
  }, [page, allCountries, setItems]);

  const totalPages = Math.ceil(allCountries.length / itemsPerPage);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">European Countries</h2>
      
      {items.length === 0 ? (
        <p>No countries found</p>
      ) : (
        <CardList items={items} />
      )}

      {totalPages > 0 && (
        <div className="d-flex justify-content-center gap-2 mt-4">
          <button 
            className="btn btn-primary" 
            onClick={() => setPage(page - 1)} 
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="btn btn-outline-secondary disabled">
            Page {page} of {totalPages}
          </span>
          <button 
            className="btn btn-primary" 
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Entities;