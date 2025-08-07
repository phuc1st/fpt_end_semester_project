import React from 'react';

const ProgressBar = ({ currentStep, totalSteps = 4 }) => {
  const steps = [
    { id: 1, label: 'Cơ bản', icon: 'fa-1' },
    { id: 2, label: 'Tiện ích', icon: 'fa-2' },
    { id: 3, label: 'Hình ảnh', icon: 'fa-3' },
    { id: 4, label: 'Xác nhận', icon: 'fa-4' },
  ];

  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="mb-8">
      <div className="relative w-full">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200"></div>
        <div 
          className="progress-line absolute top-1/2 left-0 h-0.5 bg-blue-600 transition-all duration-400 ease-in-out" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
        <div className="relative flex justify-between">
          {steps.map((step) => {
            const isCompleted = step.id < currentStep;
            const isActive = step.id === currentStep;
            const isActiveOrCompleted = isActive || isCompleted;
            return (
              <div 
                key={step.id}
                className={`progress-step text-center transition-all duration-300`}
              >
                <div className={`w-8 h-8 mx-auto border-2 rounded-full bg-white flex items-center justify-center transition-all duration-300
                  ${isActiveOrCompleted ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-400'}
                  ${isActive ? 'font-extrabold border-4' : ''}
                `}>
                  <span className={`text-base ${isActive ? 'font-extrabold' : 'font-semibold'}`}>{step.id}</span>
                </div>
                <p className={`text-xs mt-1 ${isActiveOrCompleted ? 'text-blue-600' : 'text-gray-400'} ${isActive ? 'font-bold' : ''}`}>{step.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
