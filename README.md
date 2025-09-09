## TìmTrọ - Hướng dẫn chạy dự án

Dự án front-end xây dựng bằng React + Vite + TailwindCSS.

### 1) Yêu cầu hệ thống
- Node.js >= 18 và npm (hoặc pnpm/yarn)
- Git

Kiểm tra phiên bản:
```bash
node -v
npm -v
```

### 2) Cài dependencies
```bash
npm install
```

### 3) Chạy môi trường phát triển
```bash
npm run dev
```
Sau đó mở đường dẫn hiển thị (thường là http://localhost:5173).

### 4) Các tuyến chính (routing)
- `http://localhost:5173/profile` : Trang hồ sơ người dùng (`src/pages/UserProfile.jsx`)
- `http://localhost:5173/auth` : Đăng nhập/Đăng ký (`src/pages/Auth.jsx`)
- `http://localhost:5173/landlord`: Bảng điều khiển chủ trọ (`src/pages/LandlordOverview.jsx`)
- Khai báo chung: `src/App.jsx`
