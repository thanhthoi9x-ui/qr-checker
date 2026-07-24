# Kiểm tra nhãn QR (QR label checker)

Công cụ chạy hoàn toàn trên trình duyệt điện thoại. **Ảnh không được gửi đi đâu cả** — mọi xử lý (quét QR + đọc chữ) chạy ngay trên máy.

## Kiểm tra 2 điều kiện
1. **ITEM No.** (chữ in) ↔ **mã QR**
2. **ITEM** (chữ in) ↔ **mô tả in dưới tem QR**

## Phiên bản
| Đường dẫn | OCR | Ghi chú |
|---|---|---|
| `/paddle/` | **PP-OCRv6** | Khuyên dùng — đọc chính xác hơn (phân biệt đúng `O` và `0`) |
| `/tess/` | Tesseract | Nhẹ hơn |

Cả hai **cài được như app** (Thêm vào màn hình chính) → sau đó **chạy offline**, không cần mạng.

## Công nghệ
- Quét QR: BarcodeDetector (Android) → ZXing → jsQR — luôn chạy offline
- OCR: PaddleOCR PP-OCRv6 (ONNX Runtime Web) hoặc Tesseract.js
- Tự xoay ảnh thẳng dựa trên vị trí mã QR trước khi OCR
