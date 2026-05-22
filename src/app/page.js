"use client";
import Image from "next/image";
import Link from "next/link";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

const PRODUCTS = [
  { 
    id: 1, 
    name: "Máy tính Casio fx-580VN X", 
    image: "/casio-fx-580vn-den.JPG", 
    price: "789.000đ", 
    oldPrice: "890.000đ", 
    discount: "-11%", 
    remain: "Còn 15/50 suất",
    support: "16.000đ",
    finalPrice: "769.000đ"
  },
  { 
    id: 2, 
    name: "Máy tính Casio fx-880BTG", 
    image: "/Casio fx-880BTG-den.JPG", 
    price: "629.000đ", 
    oldPrice: "890.000đ", 
    discount: "-29%", 
    remain: "Còn 20/50 suất",
    support: "13.000đ",
    finalPrice: "609.000đ"
  },
  { 
    id: 3, 
    name: "Máy tính Casio FX570VN Plus New", 
    image: "/Casio FX570VN Plus den.JPG", 
    price: "619.000đ", 
    oldPrice: "790.000đ", 
    discount: "-22%", 
    remain: "Còn 25/50 suất",
    support: "12.000đ",
    finalPrice: "600.000đ"
  },
  { 
    id: 4, 
    name: "Máy tính Casio AX120B", 
    image: "/Casio AX120B xam.JPG", 
    price: "359.000đ", 
    oldPrice: "420.000đ", 
    discount: "-15%", 
    remain: "Còn 30/50 suất",
    support: "18.000đ",
    finalPrice: "400.000đ"
  },
  { 
    id: 5, 
    name: "Máy tính Casio FX570ES Plus New", 
    image: "/Casio FX570ES Plus.JPG", 
    price: "589.000đ", 
    oldPrice: "780.000đ", 
    discount: "-25%", 
    remain: "Còn 18/50 suất",
    support: "12.000đ",
    finalPrice: "590.000đ"
  },
  { 
    id: 6, 
    name: "Máy tính Casio MX120B", 
    image: "/Casio AX12B den.png", 
    price: "249.000đ", 
    oldPrice: "280.000đ", 
    discount: "-11%", 
    remain: "Còn 40/50 suất",
    support: "5.000đ",
    finalPrice: "244.000đ"
  },
  { 
    id: 7, 
    name: "Máy tính Casio AX12B", 
    image: "/Casio AX12B den.png", 
    price: "299.000đ", 
    oldPrice: "350.000đ", 
    discount: "-15%", 
    remain: "Còn 35/50 suất",
    support: "6.000đ",
    finalPrice: "293.000đ"
  },
  { 
    id: 8, 
    name: "Máy tính Casio GX12B", 
    image: "/Casio AX12B den.png", 
    price: "449.000đ", 
    oldPrice: "600.000đ", 
    discount: "-25%", 
    remain: "Còn 22/50 suất",
    support: "9.000đ",
    finalPrice: "440.000đ"
  }
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#000' }}>
      <Header />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', flex: 1 }}>
        {/* 1 HÀNG 4 SẢN PHẨM */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)',  // Cố định 4 cột
          gap: '25px',
          marginBottom: '40px'
        }}>
          {PRODUCTS.slice(0, 4).map((product) => (
            <Link href={`/chitietsanpham?id=${product.id}`} key={product.id} style={{ 
              background: '#111', 
              borderRadius: '12px', 
              padding: '20px', 
              transition: 'transform 0.3s', 
              border: '1px solid #222',
              textDecoration: 'none',
              display: 'block',
              cursor: 'pointer'
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff', borderRadius: '8px', padding: '20px', marginBottom: '15px' }}>
                <Image src={product.image} alt={product.name} width={180} height={180} style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: '600', margin: '10px 0', color: '#fff', lineHeight: '1.4', height: '42px', overflow: 'hidden' }}>{product.name}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', margin: '10px 0' }}>
                <span style={{ fontSize: '18px', fontWeight: '700', color: '#ff4d4f' }}>{product.price}</span>
                {product.oldPrice && (
                  <>
                    <span style={{ fontSize: '12px', color: '#666', textDecoration: 'line-through' }}>{product.oldPrice}</span>
                    <span style={{ background: 'rgba(255,77,79,0.2)', color: '#ff4d4f', padding: '2px 5px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>{product.discount}</span>
                  </>
                )}
              </div>
              <div style={{ color: '#ffa500', fontSize: '12px', margin: '8px 0' }}>{product.remain}</div>
              <div style={{ display: 'block', width: '100%', padding: '10px', background: '#ff4d4f', color: 'white', textAlign: 'center', borderRadius: '6px', fontWeight: '600', marginTop: '10px', fontSize: '14px' }}>MUA NGAY</div>
            </Link>
          ))}
        </div>

        {/* HÀNG THỨ 2 - 4 SẢN PHẨM */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '25px',
          marginBottom: '40px'
        }}>
          {PRODUCTS.slice(4, 8).map((product) => (
            <Link href={`/chitietsanpham?id=${product.id}`} key={product.id} style={{ 
              background: '#111', 
              borderRadius: '12px', 
              padding: '20px', 
              transition: 'transform 0.3s', 
              border: '1px solid #222',
              textDecoration: 'none',
              display: 'block',
              cursor: 'pointer'
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff', borderRadius: '8px', padding: '20px', marginBottom: '15px' }}>
                <Image src={product.image} alt={product.name} width={180} height={180} style={{ objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '15px', fontWeight: '600', margin: '10px 0', color: '#fff', lineHeight: '1.4', height: '42px', overflow: 'hidden' }}>{product.name}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', margin: '10px 0' }}>
                <span style={{ fontSize: '18px', fontWeight: '700', color: '#ff4d4f' }}>{product.price}</span>
                {product.oldPrice && (
                  <>
                    <span style={{ fontSize: '12px', color: '#666', textDecoration: 'line-through' }}>{product.oldPrice}</span>
                    <span style={{ background: 'rgba(255,77,79,0.2)', color: '#ff4d4f', padding: '2px 5px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>{product.discount}</span>
                  </>
                )}
              </div>
              <div style={{ color: '#ffa500', fontSize: '12px', margin: '8px 0' }}>{product.remain}</div>
              <div style={{ display: 'block', width: '100%', padding: '10px', background: '#ff4d4f', color: 'white', textAlign: 'center', borderRadius: '6px', fontWeight: '600', marginTop: '10px', fontSize: '14px' }}>MUA NGAY</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}