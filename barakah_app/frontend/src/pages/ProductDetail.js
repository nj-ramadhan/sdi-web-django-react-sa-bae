import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/layout/Header';
import NavigationButton from '../components/layout/Navigation';
import '../styles/Body.css';

const ProductDetail = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('description'); // State to manage active tab

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        // Fetch product details
        const campaignResponse = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/products/${slug}/`);
        setProduct(campaignResponse.data);
        
      } catch (err) {
        console.error('Error fetching product details:', err);
        setError('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="body">
      <Header />

      {/* Campaign Details */}
      <div className="px-4 py-4">
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <img
            src={product.thumbnail || '/placeholder-image.jpg'}
            alt={product.title}
            className="w-full h-56 object-cover"
            onError={(e) => {
              e.target.src = '/placeholder-image.jpg';
            }}
          />
          <div className="p-4">
            <h1 className="text-xl font-bold mb-2">{product.title}</h1>
            <Link
              to={`/beli/${product.slug || product.id}`}
              className="block text-center bg-green-800 text-white py-2 rounded-md text-sm hover:bg-green-900"
            >
              BELI SEKARANG
            </Link>
          </div>    
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mt-4 px-4">
        <div className="flex justify-around bg-white border-b">
          <button
            className={`py-2 px-4 text-sm font-medium ${activeTab === 'description' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('description')}
          >
            Keterangan
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium ${activeTab === 'updates' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('updates')}
          >
            Testimoni ({product.student ? product.student.length : 0})
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === 'description' && (
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-700">{product.description}</p>
            </div>
          )}

          {/* {activeTab === 'donations' && (
            <div className="bg-white p-4 rounded-lg shadow">
              <ul>
                {donations.length > 0 ? (
                  donations.map((donation, index) => (
                    <li key={index} className="border-b py-2 px-4">
                      <div className="flex justify-between items-center">
                        <p className="text-gray-700">
                          <strong>{donation.donor_name}</strong>
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(donation.created_at).toLocaleDateString('id-ID', {day: '2-digit',month: '2-digit',year: 'numeric',})} - {getTimeElapsed(donation.created_at)}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        Rp. {formatIDR(donation.amount)}
                      </p>                      
                    </li>
                  ))
                ) : (
                  <li className="py-2 px-4 text-gray-500">Belum ada donasi yang terverifikasi.</li>
                )}
              </ul>
            </div>
          )} */}
        </div>
      </div>

      <NavigationButton />     
    </div>
  );
};

export default ProductDetail;