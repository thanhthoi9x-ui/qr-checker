# Kiểm tra nhãn QR (QR label checker)

Công cụ chạy hoàn toàn trên trình duyệt điện thoại. **Ảnh không được gửi đi đâu cả** — mọi xử lý (quét QR + đọc chữ) chạy ngay trên máy.

👉 **Mở ứng dụng:** https://thanhthoi9x-ui.github.io/qr-checker/paddle/

## Kiểm tra 2 điều kiện
1. **ITEM No.** (chữ in) ↔ **mã QR**
2. **ITEM** (chữ in) ↔ **mô tả in dưới tem QR**

Chụp ảnh mới hoặc chọn nhiều ảnh có sẵn → bấm **KIỂM TRA TẤT CẢ** → mỗi ảnh ra một thẻ **ĐẠT / CẦN XEM / LỖI**, sửa được nếu đọc sai.

## Cài để chạy offline
Mở link ở trên → chờ hiện `✅ ĐÃ SẴN SÀNG DÙNG OFFLINE` → "Thêm vào màn hình chính".
- **Android:** dùng Chrome, menu ⋮ → "Thêm vào Màn hình chính"
- **iPhone:** phải dùng **Safari**, nút Chia sẻ ⬆️ → "Thêm vào MH chính"

Sau đó dùng offline hoàn toàn, không cần mạng.

## Công nghệ
- **Quét QR:** BarcodeDetector (Android) → ZXing → jsQR — luôn chạy offline
- **Đọc chữ:** PaddleOCR **PP-OCRv6** chạy bằng ONNX Runtime Web
- Tự xoay ảnh thẳng theo vị trí mã QR trước khi đọc chữ (chụp ngang khổ A5 vẫn đúng)

> Bản dùng Tesseract đã được gỡ bỏ: đo trên nhãn thực tế, PP-OCRv6 đúng 3/3 còn Tesseract sai 2/3
> (đọc nhầm chữ `O` thành số `0` trong mã như `PC(O2004)`).
