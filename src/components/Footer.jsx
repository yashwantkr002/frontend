import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="w-full px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Yashwant Kumar Das. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/yashwantdas" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
          <a href="https://linkedin.com/in/yashwant-das-b20a51181" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
          {/* Add other social links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;