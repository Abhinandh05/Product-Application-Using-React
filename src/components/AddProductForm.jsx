import React, { useState } from 'react';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
    category: '',
  });
  const [isLoading, setIsLoading] = useState(false); 
  const categories = ['Electronics', 'Clothing', 'Jewelry', 'Books'];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); 

    
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsLoading(false); 
    }, 2000); 
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 bg-white shadow-xl rounded-lg p-8 border border-gray-300">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Add New Product</h2>
      
      
      {isLoading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
              placeholder="Enter product name"
            />
          </div>

         
          <div>
            <label htmlFor="image" className="block text-lg font-semibold text-gray-700 mb-2">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
            />
          </div>

        
          <div>
            <label htmlFor="price" className="block text-lg font-semibold text-gray-700 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
              placeholder="Enter price"
            />
          </div>

          
          <div>
            <label htmlFor="category" className="block text-lg font-semibold text-gray-700 mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2 transition-all"
            >
              Add Product
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddProductForm;
