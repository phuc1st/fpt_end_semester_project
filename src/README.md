## 📁 Cấu trúc thư mục

```
src/
├── components/           # Tất cả React components
│   ├── ui/              # UI Components - Building blocks tái sử dụng
│   │   ├── CreatePostCard.jsx
│   │   ├── UserPost.jsx
│   │   ├── ListingPost.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── UserPostCard.jsx
│   │   ├── LandlordProfileCard.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── Pagination.jsx
│   │   ├── ReviewItem.jsx
│   │   └── index.js     # Export tất cả UI components
│   │
│   ├── layout/          # Layout Components - Cấu trúc ứng dụng
│   │   ├── Header.jsx
│   │   ├── LeftSidebar.jsx
│   │   ├── RightSidebar.jsx
│   │   └── index.js     # Export tất cả layout components
│   │
│   └── features/        # Feature Components - Logic nghiệp vụ
│       ├── SearchFilter.jsx
│       ├── SearchHeader.jsx
│       ├── RoommateFilter.jsx
│       ├── ReviewSummary.jsx
│       ├── AISummary.jsx
│       └── index.js     # Export tất cả feature components
│
├── pages/               # Trang chính - Main routes
│   ├── Home.jsx
│   ├── SearchResults.jsx
│   ├── RoommateFinder.jsx
│   ├── DetailedAssessment.jsx
│   └── index.js         # Export tất cả pages
│
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🎯 Nguyên tắc tổ chức

### **UI Components** (`/components/ui/`)
- **Mục đích**: Components tái sử dụng, không chứa business logic
- **Đặc điểm**: Pure components, nhận props và render UI
- **Ví dụ**: Cards, Buttons, Form elements, etc.

### **Layout Components** (`/components/layout/`)
- **Mục đích**: Định nghĩa cấu trúc và layout của ứng dụng
- **Đặc điểm**: Header, Sidebar, Footer, Navigation
- **Ví dụ**: Header, LeftSidebar, RightSidebar

### **Feature Components** (`/components/features/`)
- **Mục đích**: Components chứa logic nghiệp vụ cụ thể
- **Đặc điểm**: Kết hợp nhiều UI components, có state management
- **Ví dụ**: SearchFilter, ReviewSummary, AISummary

### **Pages** (`/pages/`)
- **Mục đích**: Các trang chính của ứng dụng
- **Đặc điểm**: Route components, kết hợp layout + features + UI
- **Ví dụ**: Home, SearchResults, RoommateFinder

## 📦 Import Convention

### Sử dụng named imports từ index files:

```javascript
// ✅ Tốt - Sử dụng index imports
import { Header, LeftSidebar } from '../components/layout';
import { PropertyCard, Pagination } from '../components/ui';
import { SearchFilter, SearchHeader } from '../components/features';

// ❌ Tránh - Import trực tiếp từng file
import Header from '../components/layout/Header';
import LeftSidebar from '../components/layout/LeftSidebar';
```

### Pages import:
```javascript
import { Home, SearchResults } from './pages';
```

## 🔄 Lợi ích của cấu trúc này

1. **Separation of Concerns**: Mỗi loại component có vai trò rõ ràng
2. **Reusability**: UI components có thể tái sử dụng ở nhiều nơi
3. **Maintainability**: Dễ tìm và sửa code
4. **Scalability**: Dễ mở rộng khi thêm features mới
5. **Clean Imports**: Import statements ngắn gọn và rõ ràng

## 🚀 Quy tắc phát triển

- **UI Components**: Chỉ nhận props, không có side effects
- **Feature Components**: Có thể có state và business logic
- **Pages**: Orchestrate tất cả components để tạo trang hoàn chỉnh
- **Index files**: Luôn cập nhật khi thêm component mới 