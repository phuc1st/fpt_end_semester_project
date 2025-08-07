import React from 'react';

const FilterTabs = ({ 
  tabs = [], 
  activeTab, 
  onTabChange 
}) => {
  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange && onTabChange(tab.id)}
          className={`tab-button px-3 md:px-4 py-1.5 rounded-md text-sm border-b-2 border-transparent transition-all ${
            activeTab === tab.id
              ? 'border-primary bg-primary-50 text-primary-700 font-semibold'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
          }`}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className="ml-1">({tab.count})</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;