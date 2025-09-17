import React, { useState } from 'react';
import Header from '../components/layout/Header';
import UserDashboardSidebar from '../components/layout/UserDashboardSidebar';

const UserRentalHistory = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [modalType, setModalType] = useState('create'); // 'create' or 'update'
  const [selectedProperty, setSelectedProperty] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const rentalHistory = [
    {
      id: 1,
      title: "Phòng 101 - Gần ĐH Bách Khoa",
      address: "123 Tô Hiến Thành, P.14, Q.10",
      period: "01/07/2025 - Hiện tại",
      status: "current",
      image: "https://placehold.co/120x90/BFDBFE/1D4ED8?text=Trọ",
      currentRating: 4,
      currentReview: "Phòng ốc sạch sẽ, chủ trọ thân thiện. An ninh tốt."
    },
    {
      id: 2,
      title: "Căn hộ mini đường CMT8",
      address: "456 Cách Mạng Tháng 8, P.11, Q.3",
      period: "01/01/2025 - 30/06/2025",
      status: "past",
      image: "https://placehold.co/120x90/D1FAE5/065F46?text=Trọ"
    }
  ];

  const handleReviewClick = (property, type) => {
    setSelectedProperty(property.title);
    setModalType(type);
    
    if (type === 'update') {
      setRating(property.currentRating);
      setReviewText(property.currentReview);
    } else {
      setRating(0);
      setReviewText('');
    }
    
    setShowReviewModal(true);
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = [...selectedImages, ...files];
    setSelectedImages(newImages);
    
    // Create previews
    const newPreviews = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      url: URL.createObjectURL(file)
    }));
    setImagePreviews([...imagePreviews, ...newPreviews]);
  };

  const removeImage = (previewId) => {
    setImagePreviews(imagePreviews.filter(preview => preview.id !== previewId));
  };

  const handleSubmitReview = () => {
    console.log('Submitting review:', {
      property: selectedProperty,
      rating,
      reviewText,
      images: selectedImages
    });
    alert('Cảm ơn bạn đã gửi đánh giá!');
    setShowReviewModal(false);
    setRating(0);
    setReviewText('');
    setSelectedImages([]);
    setImagePreviews([]);
  };

  const StarRating = ({ rating, onStarClick, interactive = true }) => (
    <div className="flex items-center text-3xl space-x-1">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <i
          key={starValue}
          className={`fa-star ${
            starValue <= rating ? 'fas text-amber-400' : 'far text-gray-300'
          } ${interactive ? 'cursor-pointer hover:text-amber-400 transition-colors' : ''}`}
          onClick={() => interactive && onStarClick(starValue)}
          style={{ fontSize: '1.5rem' }}
        ></i>
      ))}
    </div>
  );

  const RentalItem = ({ property }) => (
    <div className={`flex flex-col md:flex-row items-start gap-4 p-4 border rounded-lg ${
      property.status === 'current' ? 'bg-blue-50' : ''
    }`}>
      <img 
        src={property.image} 
        className="w-full md:w-32 h-auto md:h-24 object-cover rounded-md" 
        alt="Phòng trọ"
      />
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-lg">{property.title}</h3>
          {property.status === 'current' && (
            <span className="text-xs font-bold bg-blue-200 text-blue-800 px-2 py-1 rounded-full">
              Đang ở
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600">{property.address}</p>
        <p className="text-sm text-gray-500 mt-1">Thời gian thuê: {property.period}</p>
      </div>
      <div className="w-full md:w-auto mt-2 md:mt-0">
        <button
          onClick={() => handleReviewClick(property, property.status === 'current' ? 'update' : 'create')}
          className={`w-full md:w-auto font-bold py-2 px-4 rounded-lg ${
            property.status === 'current'
              ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {property.status === 'current' ? 'Cập nhật đánh giá' : 'Viết đánh giá'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header 
        createButtonText="Tạo tin đăng"
        user={{ avatar: "https://placehold.co/40x40/E2E8F0/4A5568?text=U" }}
      />
      
      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          <UserDashboardSidebar />
          <div className="lg:col-span-9">
            <h1 className="text-3xl font-bold mb-8">Trọ đã/đang ở & Đánh giá</h1>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                {rentalHistory.map(property => (
                  <RentalItem key={property.id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 transform scale-95 animate-in zoom-in-95 my-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                {modalType === 'create' ? 'Viết đánh giá' : 'Cập nhật đánh giá'}
              </h3>
              <button 
                onClick={() => setShowReviewModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl transition-colors"
              >
                &times;
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-600">Bạn đang đánh giá cho:</p>
            <p className="font-semibold text-blue-600 mb-6">{selectedProperty}</p>
            
            <form>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Xếp hạng của bạn
                  </label>
                  <StarRating rating={rating} onStarClick={handleStarClick} />
                  <input type="hidden" value={rating} />
                </div>
                
                <div>
                  <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700">
                    Nội dung đánh giá
                  </label>
                  <textarea
                    id="reviewText"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    rows={5}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                    placeholder="Chia sẻ trải nghiệm của bạn về nơi này..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Thêm hình ảnh (tùy chọn)
                  </label>
                  <div 
                    onClick={() => document.getElementById('imageUploadInput').click()}
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-blue-400 transition-colors"
                  >
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <p className="pl-1">Nhấp để tải lên hoặc kéo thả</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF tối đa 10MB</p>
                    </div>
                  </div>
                  <input
                    id="imageUploadInput"
                    type="file"
                    className="hidden"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  
                  {/* Image Previews */}
                  {imagePreviews.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-4">
                      {imagePreviews.map((preview) => (
                        <div key={preview.id} className="relative w-24 h-24 group">
                          <img 
                            src={preview.url} 
                            className="w-full h-full object-cover rounded-md"
                            alt="Preview"
                          />
                          <button
                            onClick={() => removeImage(preview.id)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Xóa ảnh"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  onClick={handleSubmitReview}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Gửi đánh giá
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRentalHistory;
