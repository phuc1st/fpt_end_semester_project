import React, { useState, useEffect } from 'react';

const AISummary = ({ isLoading: propLoading = false }) => {
  const [isLoading, setIsLoading] = useState(propLoading);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    // Simulate AI processing
    if (propLoading || isLoading) {
      const timer = setTimeout(() => {
        setSummary({
          pros: "Đa số người thuê đánh giá cao vị trí thuận lợi, an ninh tốt và chủ nhà thân thiện.",
          cons: "Một vài ý kiến cho rằng chất lượng wifi chưa ổn định vào buổi tối."
        });
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [propLoading, isLoading]);

  const triggerRegenerate = () => {
    setIsLoading(true);
    setSummary(null);
  };

  return (
    <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <i className="fa-solid fa-wand-magic-sparkles text-blue-500"></i> 
          Tóm tắt từ AI
        </h3>
        {!isLoading && summary && (
          <button
            onClick={triggerRegenerate}
            className="text-blue-600 hover:text-blue-800 text-sm"
            title="Tạo lại tóm tắt"
          >
            <i className="fa-solid fa-rotate-right"></i>
          </button>
        )}
      </div>
      
      <div className="text-sm text-gray-700">
        {isLoading ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
              <p>Đang phân tích các đánh giá...</p>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        ) : summary ? (
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-circle-check text-green-500 mt-1 flex-shrink-0"></i>
              <div>
                <p className="font-semibold mb-1">Ưu điểm:</p>
                <p>{summary.pros}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <i className="fa-solid fa-circle-xmark text-red-500 mt-1 flex-shrink-0"></i>
              <div>
                <p className="font-semibold mb-1">Nhược điểm:</p>
                <p>{summary.cons}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={triggerRegenerate}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              <i className="fa-solid fa-wand-magic-sparkles mr-2"></i>
              Tạo tóm tắt AI
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISummary;