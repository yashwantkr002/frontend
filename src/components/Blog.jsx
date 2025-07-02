import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="w-full px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Blog Post 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">How I Built My Portfolio</h3>
              <p className="text-gray-700 mb-4">A behind-the-scenes look at the process, tools, and challenges of building this portfolio website.</p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
          {/* Blog Post 2 */}
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" alt="Blog Post 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">React Tips & Tricks</h3>
              <p className="text-gray-700 mb-4">Some of my favorite tips and best practices for working with React in modern web development.</p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
          {/* Blog Post 3 */}
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" alt="Blog Post 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Why I Love JavaScript</h3>
              <p className="text-gray-700 mb-4">Sharing my passion for JavaScript and why it remains my go-to language for web projects.</p>
              <a href="#" className="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
