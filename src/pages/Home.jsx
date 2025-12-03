import { useEffect } from 'react';
import { useStore } from '../store/store';
import CardList from '../components/CardList';

const Home = () => {
  const { items, setItems } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      if (Array.isArray(data)) {
        setItems(data.slice(0, 6));
      }
    };
    if (items.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4">World Countries</h1>
        <p className="lead">Examen usando la API</p>
      </div>
      <CardList items={items} />
    </div>
  );
};

export default Home;
