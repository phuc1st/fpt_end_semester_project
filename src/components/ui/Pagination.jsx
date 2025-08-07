import React from 'react';

const Pagination = ({ 
  currentPage = 1, 
  totalPages = 3, 
  onPageChange 
}) => {
  const handlePageClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const renderPageButton = (page) => {
    const isActive = page === currentPage;
    return (
      <button
        key={page}
        onClick={() => handlePageClick(page)}
        className={`relative inline-flex items-center px-3 md:px-4 py-2 border text-sm font-medium transition-colors ${
          isActive
            ? 'border-primary bg-primary text-white'
            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        {page}
      </button>
    );
  };

  return (
    <div className="flex justify-center mt-6 md:mt-8">
      <nav className="inline-flex rounded-md shadow-sm">
        {/* Previous Button */}
        <button
          onClick={() => handlePageClick(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => 
          renderPageButton(page)
        )}

        {/* Next Button */}
        <button
          onClick={() => handlePageClick(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </nav>
    </div>
  );
};

export default Pagination;