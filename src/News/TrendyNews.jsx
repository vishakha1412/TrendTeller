import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY =  '5d97bbac5e144f8b905dc2e99bc8e4e9'; // Replace with your actual NewsAPI key
const BASE_URL = 'https://newsapi.org/v2';

const categories = ['Sports', 'Politics', 'Entertainment', 'Health', 'Fitness'];

function TrendyNews() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  /*const fetchNews = async (searchTerm = '', category = '') => {
    setLoading(true);
    try {
      const url = `${BASE_URL}/everything?q=${searchTerm || category}&apiKey=${API_KEY}&pageSize=40`;
      const response = await axios.get(url);
      setArticles(response.data.articles);
      console.log(response)
    } catch (error) {
      console.error('Error fetching news:', error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };*/
   const fetchNews = async (searchTerm = '', category = '') => {
  setLoading(true);
  try {
    const url = `${BASE_URL}/everything?q=${searchTerm || category}&apiKey=${API_KEY}&pageSize=40`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setArticles(data.articles);
    console.log(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    setArticles([]);
  } finally {
    setLoading(false);
  }
};



  const handleSearch = () => {
    if (query.trim()) fetchNews(query);
  };
   const handleCategoryClick = ( item) => {
    fetchNews('',  item);
  };

  useEffect(() => {
    fetchNews('', 'Trending');  
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans px-6 py-8">
    
      <div className="bg-blue-100 px-6 py-4 flex justify-between items-center rounded-md">
        <h1 className="text-2xl font-bold text-blue-800">Trendy News</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search News"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>
 <nav className="flex justify-center gap-6 py-4 border-b mt-4">
         
        <button onClick={() => fetchNews('', 'Trending')} className="text-blue-600 hover:underline font-medium">
          Trending
        </button>
      </nav>

  
      <section className="text-center mt-8 mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Stay Update with TrendyNews</h2>
      </section>

      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(( item) => (
          <button
            key={ item}
            onClick={() => handleCategoryClick( item)}
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
          >
            { item}
          </button>
        ))}
      </div>
{loading ? (
        <p className="text-center text-gray-500">Loading news...</p>
      ) : articles.length ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <div key={idx} className="border rounded-lg p-4 shadow hover:shadow-md transition">
             {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="rounded-md object-cover w-full h-40"
        />
      )}
              <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No news found.</p>
      )}
    </div>
  );
}

export default TrendyNews;





