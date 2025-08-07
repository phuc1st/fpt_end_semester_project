import React, { useState } from 'react';
import { Header } from '../components/layout';
import { ProgressBar, AmenityCheckbox, ImageUpload } from '../components/ui';

const amenities = [
  { id: 'wifi', icon: 'fa-solid fa-wifi', label: 'Wifi' },
  { id: 'ac', icon: 'fa-solid fa-snowflake', label: 'Điều hòa' },
  { id: 'hotwater', icon: 'fa-solid fa-temperature-arrow-up', label: 'Nóng lạnh' },
  { id: 'parking', icon: 'fa-solid fa-motorcycle', label: 'Chỗ để xe' },
  { id: 'security', icon: 'fa-solid fa-shield-halved', label: 'An ninh 24/7' },
  { id: 'freedom', icon: 'fa-solid fa-key', label: 'Giờ giấc tự do' },
  { id: 'kitchen', icon: 'fa-solid fa-kitchen-set', label: 'Bếp riêng' },
  { id: 'pets', icon: 'fa-solid fa-paw', label: 'Cho nuôi thú cưng' },
];

const CreateEditListing = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    area: '',
    type: '',
    description: '',
    amenities: [],
    images: [],
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmenityToggle = (amenityId) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter(id => id !== amenityId)
        : [...prev.amenities, amenityId]
    }));
  };

  const handleImagesChange = (images) => {
    setFormData(prev => ({ ...prev, images }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Submitting listing:', formData);
    alert('Tin đăng đã được tạo thành công!');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Thông tin cơ bản</h4>
            <input
              type="text"
              placeholder="Tiêu đề tin đăng (VD: Phòng trọ gần ĐH Bách Khoa)"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="number"
                placeholder="Giá (VNĐ/tháng)"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
              />
              <input
                type="number"
                placeholder="Diện tích (m²)"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.area}
                onChange={(e) => handleInputChange('area', e.target.value)}
              />
              <select
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
              >
                <option value="">Loại hình</option>
                <option value="phong-tro">Phòng trọ</option>
                <option value="can-ho">Căn hộ</option>
                <option value="nha-nguyen-can">Nhà nguyên căn</option>
              </select>
            </div>
            <textarea
              rows={5}
              placeholder="Mô tả chi tiết về phòng trọ..."
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
            <button
              type="button"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              <span>Gợi ý mô tả bằng AI</span>
            </button>
          </div>
        );

      case 2:
        return (
          <div>
            <h4 className="font-bold text-lg mb-4">Tiện ích có sẵn</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {amenities.map((amenity) => (
                <AmenityCheckbox
                  key={amenity.id}
                  id={amenity.id}
                  icon={amenity.icon}
                  label={amenity.label}
                  checked={formData.amenities.includes(amenity.id)}
                  onChange={() => handleAmenityToggle(amenity.id)}
                />
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h4 className="font-bold text-lg mb-4">Hình ảnh & Video</h4>
            <ImageUpload onImagesChange={handleImagesChange} />
          </div>
        );

      case 4:
        return (
          <div>
            <h4 className="font-bold text-lg mb-4 text-center">Xem lại và xác nhận</h4>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <p>Vui lòng kiểm tra kỹ các thông tin đã nhập trước khi đăng tin để đảm bảo tính chính xác.</p>
            </div>
            <div className="mt-4 space-y-2">
              <p><strong>Tiêu đề:</strong> {formData.title}</p>
              <p><strong>Giá:</strong> {formData.price ? `${formData.price}đ/tháng` : 'Chưa nhập'}</p>
              <p><strong>Diện tích:</strong> {formData.area ? `${formData.area}m²` : 'Chưa nhập'}</p>
              <p><strong>Loại hình:</strong> {formData.type || 'Chưa chọn'}</p>
              <p><strong>Tiện ích:</strong> {formData.amenities.length > 0 ? formData.amenities.length + ' tiện ích' : 'Chưa chọn'}</p>
              <p><strong>Hình ảnh:</strong> {formData.images.length > 0 ? formData.images.length + ' ảnh' : 'Chưa tải'}</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header user={{ avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=V' }} />
      <main className="container mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Tạo tin đăng mới</h1>
        <div className="bg-white rounded-lg shadow-xl p-0 md:p-8">
          <ProgressBar currentStep={currentStep} />
          <div className="py-4 px-4 md:px-0">
            {renderStepContent()}
          </div>
          <div className="flex justify-between items-center border-t bg-gray-50 px-4 md:px-8 py-4 mt-6">
            <button
              onClick={prevStep}
              className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-all ${
                currentStep === 1 ? 'invisible' : 'visible'
              }`}
            >
              Quay lại
            </button>
            <div className="flex-grow"></div>
            {currentStep === 4 ? (
              <button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
              >
                Đăng tin ngay
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Tiếp theo
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateEditListing;
