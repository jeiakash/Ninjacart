'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useScrollStore } from '../store/scrollStore';
import ListItemSkeleton from '../components/ListItemSkeleton';
import { truncateText, getRandomColor } from '../utils/helpers';

export default function Home() {
  const { scrollPosition, setScrollPosition } = useScrollStore();
  const listRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  // Generate random color categories for items
  const categories = ['Technology', 'Health', 'Finance', 'Education', 'Entertainment'];
  
  // Simulate data fetching
  useEffect(() => {
    const fetchItems = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Generate 50 dummy items with more data
      const newItems = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        title: `Item #${i + 1}`,
        description: `This is a description for item #${i + 1}. Click to see details.`,
        category: categories[Math.floor(Math.random() * categories.length)],
        color: getRandomColor(),
        rating: (Math.random() * 5).toFixed(1),
        date: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()
      }));
      
      setItems(newItems);
      setLoading(false);
    };
    
    fetchItems();
  }, []);

  // Save scroll position when user navigates away
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollPosition]);

  // Restore scroll position when returning to the page
  useEffect(() => {
    if (scrollPosition > 0) {
      window.scrollTo(0, scrollPosition);
    }
  }, [scrollPosition]);

  // Filter items by category (just UI demo)
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="container mx-auto px-4 pt-4 pb-4" ref={listRef}>
      <h1 className="text-2xl font-bold mb-4">Explore Items</h1>
      
      {/* Category filters */}
      <div className="flex overflow-x-auto pb-2 mb-4 scrollbar-hide">
        <button 
          className={`px-4 py-2 mr-2 rounded-full text-sm font-medium whitespace-nowrap ${
            activeCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setActiveCategory('All')}
        >
          All
        </button>
        {categories.map(category => (
          <button 
            key={category}
            className={`px-4 py-2 mr-2 rounded-full text-sm font-medium whitespace-nowrap ${
              activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Items list */}
      <div className="space-y-4">
        {loading ? (
          // Loading skeleton
          Array.from({ length: 8 }).map((_, index) => (
            <ListItemSkeleton key={index} />
          ))
        ) : filteredItems.length > 0 ? (
          // Items list
          filteredItems.map((item) => (
            <Link href={`/item/${item.id}`} key={item.id}>
              <div className="bg-white rounded-lg shadow p-4 min-h-[100px] cursor-pointer hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-600 mt-2">{truncateText(item.description, 80)}</p>
                  </div>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.id}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-4">⭐ {item.rating}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          // No results
          <div className="text-center py-12">
            <p className="text-gray-500">No items found for this category.</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={() => setActiveCategory('All')}
            >
              View all items
            </button>
          </div>
        )}
      </div>
    </div>
  );
}