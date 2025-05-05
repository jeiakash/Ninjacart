'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getRandomColor } from '../../../utils/helpers';

export default function ItemDetail({ params }) {
  const router = useRouter();
  const { id } = params;
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);
  const [activeTab, setActiveTab] = useState('details');
  
  // Simulate data fetching
  useEffect(() => {
    const fetchItemDetails = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Generate random item details
      const categories = ['Technology', 'Health', 'Finance', 'Education', 'Entertainment'];
      const newItem = {
        id: parseInt(id),
        title: `Item #${id}`,
        description: `This is a detailed description for item #${id}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.`,
        category: categories[Math.floor(Math.random() * categories.length)],
        color: getRandomColor(),
        rating: (Math.random() * 5).toFixed(1),
        price: `${(Math.random() * 100 + 10).toFixed(2)}`,
        inStock: Math.random() > 0.3,
        specifications: [
          { name: 'Dimensions', value: `${Math.floor(Math.random() * 10 + 5)}cm x ${Math.floor(Math.random() * 10 + 5)}cm x ${Math.floor(Math.random() * 5 + 1)}cm` },
          { name: 'Weight', value: `${(Math.random() * 2 + 0.1).toFixed(2)}kg` },
          { name: 'Material', value: ['Plastic', 'Metal', 'Ceramic', 'Wood', 'Glass'][Math.floor(Math.random() * 5)] },
          { name: 'Warranty', value: `${Math.floor(Math.random() * 5 + 1)} year(s)` },
          { name: 'Manufacturing Date', value: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString() },
        ],
        reviews: Array.from({ length: Math.floor(Math.random() * 5 + 3) }, (_, i) => ({
          id: i + 1,
          user: ['John D.', 'Sarah M.', 'Robert K.', 'Emma L.', 'David R.'][Math.floor(Math.random() * 5)],
          rating: Math.floor(Math.random() * 5 + 1),
          comment: ['Great product!', 'Works as expected.', 'Could be better.', 'Excellent quality.', 'I recommend it.'][Math.floor(Math.random() * 5)],
          date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()
        }))
      };
      
      setItem(newItem);
      setLoading(false);
    };
    
    fetchItemDetails();
  }, [id]);

  // Button to add to favorites (just UI demonstration)
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => setIsFavorite(!isFavorite);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <button 
          onClick={() => router.back()}
          className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Back
        </button>
        
        <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-2/3 mb-6"></div>
          <div className="w-full h-40 bg-gray-200 rounded-lg mb-6"></div>
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6 mb-6"></div>
          
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <button 
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Back
      </button>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            {item.category}
          </span>
        </div>
        
        <div className="relative">
          <div 
            className="w-full h-48 rounded-lg mb-6 flex items-center justify-center"
            style={{ backgroundColor: item.color }}
          >
            <span className="text-5xl font-bold text-white">{item.id}</span>
          </div>
          <button 
            onClick={toggleFavorite}
            className={`absolute top-3 right-3 p-2 rounded-full ${
              isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-500'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isFavorite ? 0 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">{item.rating}</span>
            </div>
            <span className={`px-2 py-1 rounded-md text-xs font-medium ${
              item.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {item.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          <span className="text-xl font-bold">${item.price}</span>
        </div>
        
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex -mb-px">
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'details' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'specs' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('specs')}
            >
              Specifications
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'reviews' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        <div>
          {activeTab === 'details' && (
            <div>
              <h2 className="text-xl font-semibold mb-3">About {item.title}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              
              <div className="flex flex-col md:flex-row md:space-x-6 mt-6">
                <div className="flex-1 mb-6 md:mb-0">
                  <h3 className="font-medium text-lg mb-2">Features</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>High-quality materials</li>
                    <li>Durable construction</li>
                    <li>Modern design</li>
                    <li>Easy maintenance</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg mb-2">Usage Instructions</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>Unbox and verify all components</li>
                    <li>Follow assembly instructions</li>
                    <li>Test functionality</li>
                    <li>Register warranty online</li>
                  </ol>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'specs' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Technical Specifications</h2>
              <div className="overflow-hidden bg-gray-50 border border-gray-200 rounded-lg">
                {item.specifications.map((spec, index) => (
                  <div 
                    key={index} 
                    className={`flex ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <div className="w-1/3 px-4 py-3 font-medium text-gray-700 border-r border-gray-200">
                      {spec.name}
                    </div>
                    <div className="w-2/3 px-4 py-3 text-gray-700">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Customer Reviews</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Write a Review
                </button>
              </div>
              
              <div className="space-y-4">
                {item.reviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-medium">{review.user}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg 
                          key={i}
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Call to Action */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-lg font-semibold mb-1">Ready to purchase?</p>
              <p className="text-gray-600">Get {item.title} now while it's in stock.</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
                Add to Cart
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}