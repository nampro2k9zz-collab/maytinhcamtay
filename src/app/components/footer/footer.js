"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '50px 0 20px', marginTop: '50px', borderTop: '1px solid #222' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginBottom: '40px' }}>
          <div>
            <h3 style={{ color: '#ff4d4f', marginBottom: '15px' }}>Về chúng tôi</h3>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>CASIO STORE - Chuyên cung cấp máy tính Casio chính hãng, giá tốt nhất thị trường.</p>
          </div>
          <div>
            <h3 style={{ color: '#ff4d4f', marginBottom: '15px' }}>Liên kết nhanh</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link href="/" style={{ color: '#888', textDecoration: 'none' }}>Trang chủ</Link></li>
              <li style={{ marginBottom: '10px' }}><Link href="/chitietsanpham?id=1" style={{ color: '#888', textDecoration: 'none' }}>Sản phẩm</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#ff4d4f', marginBottom: '15px' }}>Chính sách</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link href="/chinh-sach-doi-tra" style={{ color: '#888', textDecoration: 'none' }}>Chính sách đổi trả</Link></li>
              <li style={{ marginBottom: '10px' }}><Link href="/chinh-sach-bao-hanh" style={{ color: '#888', textDecoration: 'none' }}>Chính sách bảo hành</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: '#ff4d4f', marginBottom: '15px' }}>Liên hệ</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', color: '#888' }}>📞 Hotline: 1900 1234</li>
              <li style={{ marginBottom: '10px', color: '#888' }}>📧 Email: casio@store.com</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #222' }}>
          <p style={{ color: '#666', fontSize: '0.8rem' }}>&copy; 2024 CASIO STORE. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}