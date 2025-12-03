import { useState, useEffect } from 'react';
import { useStore } from '../store/store';
import CardList from '../components/CardList';

const Entities = () => {
  const { items, setItems } = useStore();
  const [allCountries, setAllCountries] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        if (Array.isArray(data)) {
          setAllCountries(data);
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
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

  return (
    <div className="container py-5">
      <h2 className="mb-4">All Countries</h2>
      <CardList items={items} />

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
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Entities;