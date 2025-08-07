import React from 'react';

const AmenityCheckbox = ({ 
  id, 
  icon, 
  label, 
  checked, 
  onChange 
}) => (
  <div>
    <input 
      type="checkbox" 
      id={id} 
      className="hidden amenity-checkbox"
      checked={checked}
      onChange={onChange}
    />
    <label 
      htmlFor={id} 
      className={`block border rounded-lg p-3 text-center cursor-pointer transition-all duration-200 ${
        checked 
          ? 'border-blue-600 bg-blue-50 text-blue-700' 
          : 'border-gray-300 hover:border-gray-400'
      }`}
    >
      <i className={`${icon} block mb-1`}></i>
      <span className="text-sm">{label}</span>
    </label>
  </div>
);

export default AmenityCheckbox;
