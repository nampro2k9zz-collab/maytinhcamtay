"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { useState } from "react";

// DỮ LIỆU SẢN PHẨM
const PRODUCTS = {
  1: {
    id: 1,
    name: "Máy tính Casio fx-580VN X",
    price: "789.000đ",
    oldPrice: "890.000đ",
    discount: "-11%",
    image: "/casio-fx-580vn-den.JPG",
    remain: "Còn 15/50 suất",
    rating: 4.8,
    sold: 245,
    description: "Máy tính Casio fx-580VN X chính hãng, bảo hành 24 tháng. Được trang bị nhiều tính năng vượt trội, phù hợp cho học sinh, sinh viên và kỹ sư.",
    specs: [
      "Màn hình: LCD Natural Display",
      "Nguồn điện: Pin mặt trời + pin dự phòng",
      "Chức năng: 696 chức năng",
      "Kích thước: 162 x 80 x 12.7 mm",
      "Trọng lượng: 105g",
      "Bảo hành: 24 tháng"
    ]
  },
  2: {
    id: 2,
    name: "Máy tính Casio fx-880BTG",
    price: "629.000đ",
    oldPrice: "890.000đ",
    discount: "-29%",
    image: "/Casio fx-880BTG-den.JPG",
    remain: "Còn 20/50 suất",
    rating: 4.9,
    sold: 189,
    description: "Máy tính Casio fx-880BTG chính hãng, máy tính đồ họa màu cao cấp, màn hình LCD độ phân giải cao.",
    specs: [
      "Màn hình: LCD 4.8 inch màu",
      "Nguồn điện: Pin AAA x 4",
      "Tính năng: Vẽ đồ thị, giải toán, lập trình",
      "Bảo hành: 24 tháng"
    ]
  },
  3: {
    id: 3,
    name: "Máy tính Casio FX570VN Plus New",
    price: "619.000đ",
    oldPrice: "790.000đ",
    discount: "-22%",
    image: "/Casio FX570VN Plus den.JPG",
    remain: "Còn 25/50 suất",
    rating: 4.7,
    sold: 156,
    description: "Máy tính Casio FX570VN Plus New chính hãng, máy tính khoa học được ưa chuộng nhất tại Việt Nam.",
    specs: [
      "Màn hình: Natural Display",
      "Chức năng: 696 chức năng",
      "Nguồn điện: Pin mặt trời + pin dự phòng",
      "Bảo hành: 24 tháng"
    ]
  },
  4: {
    id: 4,
    name: "Máy tính Casio AX120B",
    price: "359.000đ",
    oldPrice: "420.000đ",
    discount: "-15%",
    image: "/Casio AX120B xam.JPG",
    remain: "Còn 30/50 suất",
    rating: 4.5,
    sold: 98,
    description: "Máy tính Casio AX120B chính hãng, máy tính bỏ túi cơ bản, thiết kế nhỏ gọn.",
    specs: [
      "Màn hình: LCD",
      "Số chữ số: 12 chữ số",
      "Nguồn điện: Pin mặt trời",
      "Kích thước: 120 x 72 x 12 mm"
    ]
  },
  5: {
    id: 5,
    name: "Máy tính Casio FX570ES Plus New",
    price: "589.000đ",
    oldPrice: "780.000đ",
    discount: "-25%",
    image: "/Casio FX570ES Plus.JPG",
    remain: "Còn 18/50 suất",
    rating: 4.8,
    sold: 312,
    description: "Máy tính Casio FX570ES Plus New chính hãng, màn hình hiển thị tự nhiên.",
    specs: [
      "Màn hình: Natural Display",
      "Chức năng: 417 chức năng",
      "Nguồn điện: Pin mặt trời + pin dự phòng"
    ]
  },
  6: {
    id: 6,
    name: "Máy tính Casio MX120B",
    price: "249.000đ",
    oldPrice: "280.000đ",
    discount: "-11%",
    image: "/Casio AX12B den.png",
    remain: "Còn 40/50 suất",
    rating: 4.4,
    sold: 567,
    description: "Máy tính Casio MX120B chính hãng, giá rẻ, phù hợp cho học sinh.",
    specs: [
      "Màn hình: LCD",
      "Số chữ số: 12 chữ số",
      "Nguồn điện: Pin mặt trời"
    ]
  },
  7: {
    id: 7,
    name: "Máy tính Casio AX12B",
    price: "299.000đ",
    oldPrice: "350.000đ",
    discount: "-15%",
    image: "/Casio AX12B den.png",
    remain: "Còn 35/50 suất",
    rating: 4.6,
    sold: 423,
    description: "Máy tính Casio AX12B chính hãng, thiết kế hiện đại, độ bền cao.",
    specs: [
      "Màn hình: LCD",
      "Số chữ số: 12 chữ số",
      "Nguồn điện: Pin mặt trời + pin dự phòng"
    ]
  },
  8: {
    id: 8,
    name: "Máy tính Casio GX12B",
    price: "449.000đ",
    oldPrice: "600.000đ",
    discount: "-25%",
    image: "/Casio AX12B den.png",
    remain: "Còn 22/50 suất",
    rating: 4.7,
    sold: 345,
    description: "Máy tính Casio GX12B chính hãng, máy tính văn phòng cao cấp.",
    specs: [
      "Màn hình: LCD lớn",
      "Số chữ số: 12 chữ số",
      "Nguồn điện: Pin mặt trời + pin dự phòng"
    ]
  }
};

function ChiTietSanPhamContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const product = PRODUCTS[productId];
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const handleQuantityChange = (type) => {
    if (type === "increase" && quantity < 10) setQuantity(quantity + 1);
    else if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
  };

  const handleBuyNow = () => {
    alert(`✅ Đã thêm ${quantity} sản phẩm "${product?.name}" vào giỏ hàng!`);
  };

  // Nếu không tìm thấy sản phẩm
  if (!product) {
    return (
      <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
        <Header />
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
          <h1 style={{ color: '#fff' }}>🔍 Không tìm thấy sản phẩm</h1>
          <p style={{ color: '#888' }}>Vui lòng quay lại trang chủ và chọn sản phẩm.</p>
          <Link href="/" style={{ display: 'inline-block', padding: '10px 24px', background: '#ff4d4f', color: '#fff', borderRadius: '8px', marginTop: '20px', textDecoration: 'none' }}>
            Quay lại trang chủ
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Header />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: '30px', fontSize: '14px', color: '#888' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Trang chủ</Link>
          <span style={{ margin: '0 5px' }}> / </span>
          <span style={{ color: '#ff4d4f' }}>{product.name}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', background: '#111', padding: '30px', borderRadius: '20px', border: '1px solid #222' }}>
          {/* Cột trái - Hình ảnh */}
          <div>
            <div style={{ background: '#fff', borderRadius: '16px', padding: '30px', textAlign: 'center', minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '280px', objectFit: 'contain' }} />
            </div>
          </div>

          {/* Cột phải - Thông tin */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{product.name}</h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#ffc107' }}>{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
              <span style={{ color: '#ffc107', fontWeight: 'bold' }}>{product.rating}</span>
              <span style={{ color: '#888' }}>Đã bán {product.sold}+</span>
            </div>

            <div style={{ background: '#1a1a1a', borderRadius: '12px', padding: '15px' }}>
              <div style={{ borderBottom: '1px solid #333', paddingBottom: '12px', marginBottom: '12px' }}>
                <p style={{ fontSize: '28px', color: '#ff4d4f', fontWeight: 'bold', margin: 0 }}>
                  {product.price}
                  {product.oldPrice && (
                    <>
                      <span style={{ fontSize: '16px', color: '#888', textDecoration: 'line-through', marginLeft: '10px' }}>{product.oldPrice}</span>
                      <span style={{ fontSize: '14px', background: '#ff4d4f', color: '#fff', padding: '2px 6px', borderRadius: '4px', marginLeft: '10px' }}>{product.discount}</span>
                    </>
                  )}
                </p>
              </div>
              <button onClick={handleBuyNow} style={{ width: '100%', padding: '14px', background: '#ff4d4f', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
                🛒 MUA NGAY
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1a1a1a', padding: '10px 15px', borderRadius: '8px' }}>
              <span>✅</span>
              <span style={{ color: '#4caf50', fontWeight: 'bold' }}>Còn hàng</span>
              <span style={{ color: '#ff9800' }}>({product.remain})</span>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Số lượng:</label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => handleQuantityChange("decrease")} disabled={quantity <= 1} style={{ width: '36px', height: '36px', background: '#222', border: '1px solid #444', color: '#fff', fontSize: '18px', cursor: 'pointer', borderRadius: '4px 0 0 4px' }}>-</button>
                <input type="number" value={quantity} min="1" max="10" style={{ width: '50px', height: '36px', textAlign: 'center', background: '#111', border: '1px solid #444', color: '#fff' }} readOnly />
                <button onClick={() => handleQuantityChange("increase")} disabled={quantity >= 10} style={{ width: '36px', height: '36px', background: '#222', border: '1px solid #444', color: '#fff', fontSize: '18px', cursor: 'pointer', borderRadius: '0 4px 4px 0' }}>+</button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <button onClick={handleBuyNow} style={{ flex: 1, padding: '14px', background: 'transparent', border: '2px solid #ff4d4f', color: '#ff4d4f', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>🛒 THÊM VÀO GIỎ</button>
              <button onClick={handleBuyNow} style={{ flex: 1, padding: '14px', background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>⚡ MUA NGAY</button>
            </div>

            <div style={{ background: '#1a1a1a', padding: '12px 15px', borderRadius: '10px' }}>
              <p style={{ margin: '5px 0' }}>✅ Cam kết hàng chính hãng 100%</p>
              <p style={{ margin: '5px 0' }}>🚚 Miễn phí vận chuyển toàn quốc</p>
              <p style={{ margin: '5px 0' }}>🔧 Bảo hành 24 tháng</p>
              <p style={{ margin: '5px 0' }}>🔄 Đổi trả trong 7 ngày</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ background: '#111', borderRadius: '16px', border: '1px solid #222', marginTop: '30px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #222', background: '#0a0a0a' }}>
            <button onClick={() => setActiveTab("description")} style={{ padding: '12px 24px', background: 'transparent', border: 'none', color: activeTab === "description" ? '#ff4d4f' : '#888', cursor: 'pointer', fontSize: '14px', borderBottom: activeTab === "description" ? '2px solid #ff4d4f' : 'none' }}>
              Mô tả sản phẩm
            </button>
            <button onClick={() => setActiveTab("specs")} style={{ padding: '12px 24px', background: 'transparent', border: 'none', color: activeTab === "specs" ? '#ff4d4f' : '#888', cursor: 'pointer', fontSize: '14px', borderBottom: activeTab === "specs" ? '2px solid #ff4d4f' : 'none' }}>
              Thông số kỹ thuật
            </button>
          </div>
          <div style={{ padding: '20px' }}>
            {activeTab === "description" ? (
              <p style={{ lineHeight: '1.7', color: '#ccc' }}>{product.description}</p>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #222' }}>
                      <td style={{ padding: '10px', fontWeight: 'bold', color: '#fff', width: '35%' }}>📌 {spec.split(":")[0]}:</td>
                      <td style={{ padding: '10px', color: '#ccc' }}>{spec.split(":")[1] || spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ChiTietSanPham() {
  return (
    <Suspense fallback={<div style={{textAlign:'center', padding:'50px', color:'#fff'}}>Đang tải...</div>}>
      <ChiTietSanPhamContent />
    </Suspense>
  );
}