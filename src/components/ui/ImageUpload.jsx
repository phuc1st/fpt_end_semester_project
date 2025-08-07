import React, { useState, useRef } from 'react';

const ImageUpload = ({ onImagesChange }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    const newImages = imageFiles.map(file => ({
      id: Date.now() + Math.random(),
      file,
      url: URL.createObjectURL(file)
    }));
    
    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);
    if (onImagesChange) {
      onImagesChange(updatedImages);
    }
  };

  const removeImage = (id) => {
    const updatedImages = images.filter(img => img.id !== id);
    setImages(updatedImages);
    if (onImagesChange) {
      onImagesChange(updatedImages);
    }
  };

  return (
    <div>
      <div 
        className={`upload-area rounded-lg p-10 text-center transition-all duration-200 ${
          isDragOver ? 'dragover border-blue-600 bg-blue-50' : 'border-2 border-dashed border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <i className="fa-solid fa-cloud-arrow-up text-4xl text-gray-400"></i>
        <p className="mt-2 font-semibold">Kéo và thả ảnh vào đây</p>
        <p className="text-sm text-gray-500">hoặc</p>
        <button 
          type="button" 
          className="mt-2 bg-white border border-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-50"
          onClick={() => fileInputRef.current?.click()}
        >
          Chọn từ máy tính
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
      
      {images.length > 0 && (
        <div className="mt-4 grid grid-cols-3 md:grid-cols-5 gap-3">
          {images.map((image) => (
            <div key={image.id} className="relative">
              <img 
                src={image.url} 
                alt="Preview" 
                className="w-full h-24 object-cover rounded-md"
              />
              <button
                onClick={() => removeImage(image.id)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
