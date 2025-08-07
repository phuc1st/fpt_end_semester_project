import React, { useEffect, useRef } from 'react';

const ViewsChart = ({ data = [], title = "Thống kê lượt xem 7 ngày qua" }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  // Default data if none provided
  const defaultData = {
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'],
    values: [120, 190, 150, 250, 220, 300, 280]
  };

  const chartData = data.length > 0 ? data : defaultData;

  useEffect(() => {
    // For now, we'll create a simple CSS-based chart since Chart.js is not installed
    // In a real app, you would install Chart.js: npm install chart.js react-chartjs-2
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Simple line chart implementation
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    const maxValue = Math.max(...chartData.values);
    const minValue = Math.min(...chartData.values);
    const valueRange = maxValue - minValue || 1;
    
    // Draw grid lines
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }
    
    // Draw line
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    chartData.values.forEach((value, index) => {
      const x = padding + (chartWidth / (chartData.values.length - 1)) * index;
      const y = padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
    
    // Draw points
    ctx.fillStyle = '#3b82f6';
    chartData.values.forEach((value, index) => {
      const x = padding + (chartWidth / (chartData.values.length - 1)) * index;
      const y = padding + chartHeight - ((value - minValue) / valueRange) * chartHeight;
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });
    
    // Draw labels
    ctx.fillStyle = '#6b7280';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    
    chartData.labels.forEach((label, index) => {
      const x = padding + (chartWidth / (chartData.values.length - 1)) * index;
      ctx.fillText(label, x, height - 10);
    });

  }, [chartData]);

  return (
    <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm mb-6 md:mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={800}
          height={300}
          className="w-full h-auto max-h-80"
          style={{ maxWidth: '100%' }}
        />
        
        {/* Fallback simple chart for mobile */}
        <div className="md:hidden">
          <div className="grid grid-cols-7 gap-1 mt-4">
            {chartData.labels.map((label, index) => {
              const value = chartData.values[index];
              const maxValue = Math.max(...chartData.values);
              const height = (value / maxValue) * 100;
              
              return (
                <div key={index} className="text-center">
                  <div className="bg-gray-200 rounded mb-1" style={{ height: '60px' }}>
                    <div 
                      className="bg-primary rounded w-full"
                      style={{ 
                        height: `${height}%`,
                        marginTop: `${100 - height}%`
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600">{label}</div>
                  <div className="text-xs font-semibold">{value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewsChart;