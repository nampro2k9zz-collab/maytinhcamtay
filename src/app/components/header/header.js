"use client";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: '#000', padding: '15px 0', borderBottom: '1px solid #222', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: '#ff4d4f', margin: 0, fontSize: '1.5rem' }}>CASIO STORE</h1>
        </Link>
        <nav style={{ display: 'flex', gap: '30px' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Trang chủ</Link>
          <Link href="/chitietsanpham?id=1" style={{ color: '#fff', textDecoration: 'none' }}>Sản phẩm</Link>
          <Link href="/lienhe" style={{ color: '#fff', textDecoration: 'none' }}>Liên hệ</Link>
        </nav>
        <div>
          <Link href="/giohang" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem' }}>🛒</Link>
        </div>
      </div>
    </header>
  );
}