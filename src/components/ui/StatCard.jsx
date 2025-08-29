import React from 'react';

const StatCard = ({ 
  icon, 
  iconColor = 'blue', 
  label, 
  value, 
  onClick 
}) => {
  const iconColorClasses = {
    blue: 'bg-blue-100 text-blue-500',
    green: 'bg-green-100 text-green-500',
    yellow: 'bg-yellow-100 text-yellow-500',
    red: 'bg-red-100 text-red-500',
    purple: 'bg-purple-100 text-purple-500',
    indigo: 'bg-indigo-100 text-indigo-500'
  };

  return (
    <div 
      className={`stat-card bg-white p-4 md:p-5 rounded-lg shadow-sm transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg ${
        onClick ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4 ${iconColorClasses[iconColor]}`}>
          <i className={`fa-solid ${icon} text-lg md:text-2xl`}></i>
        </div>
        <div>
          <p className="text-xs md:text-sm text-gray-500">{label}</p>
          <p className="text-xl md:text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;