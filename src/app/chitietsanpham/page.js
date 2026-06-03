"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import ImageSlider from "../components/slider/slider";

const PRODUCTS = {
  1: { id: 1, name: "Máy tính Casio fx-580VN X", price: "789.000đ", oldPrice: "890.000đ", discount: "-11%", image: "/casio-fx-580vn-den.JPG", colors: ["Đen"], colorImages: { "Đen": "/casio-fx-580vn-den.JPG" }, remain: "Còn 15/50 suất", rating: 4.8, sold: 245, description: "Máy tính Casio fx-580VN X là dòng máy tính khoa học cao cấp nhất hiện nay.", mota1: "✅ 696 chức năng tính toán đa dạng", mota2: "✅ Màn hình Natural Display", mota3: "✅ Giải phương trình, ma trận, số phức", mota4: "✅ Tính tích phân, vi phân", mota5: "✅ Nguồn năng lượng kép", specs: ["Màn hình: LCD Natural Display", "Chức năng: 696 chức năng", "Nguồn điện: Pin mặt trời + pin CR2032", "Kích thước: 162 x 80 x 12.7 mm", "Trọng lượng: 105g"] },
  2: { id: 2, name: "Máy tính Casio fx-880BTG", price: "629.000đ", oldPrice: "890.000đ", discount: "-29%", image: "/Casio fx-880BTG-den.JPG", colors: ["Đen", "Hồng", "Xanh dương"], colorImages: { "Đen": "/Casio fx-880BTG-den.JPG", "Hồng": "/Casio fx-880BTG-hong.JPG", "Xanh dương": "/Casio fx-880BTG-xanhduong.JPG" }, remain: "Còn 20/50 suất", rating: 4.9, sold: 189, description: "Casio fx-880BTG là máy tính đồ họa màu cao cấp.", mota1: "✅ Màn hình LCD 4.8 inch hiển thị màu", mota2: "✅ Vẽ đồ thị hàm số trực quan", mota3: "✅ Tính năng lập trình đơn giản", mota4: "✅ Phù hợp cho các kỳ thi quốc tế", mota5: "✅ 3 màu: Đen, Hồng, Xanh dương", specs: ["Màn hình: LCD 4.8 inch màu", "Độ phân giải: 192 x 108 pixel", "Nguồn điện: Pin AAA x 4", "Chức năng: Vẽ đồ thị, giải toán, lập trình", "Kích thước: 185 x 85 x 18 mm", "Trọng lượng: 230g"] }
};

function ChiTietSanPhamContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const product = PRODUCTS[productId];
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
  const sliderImages = product?.colors?.map(color => ({ color, src: product.colorImages?.[color] })) || [];

  const handleQuantityChange = (type) => {
    if (type === "increase" && quantity < 10) setQuantity(quantity + 1);
    else if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
  };

  const handleBuyNow = () => alert(`✅ Đã thêm ${quantity} sản phẩm "${product?.name}" vào giỏ hàng!`);

  if (!product) return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Header />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#fff' }}>🔍 Không tìm thấy sản phẩm</h1>
        <Link href="/" style={{ display: 'inline-block', padding: '10px 24px', background: '#ff4d4f', color: '#fff', borderRadius: '8px', marginTop: '20px' }}>Quay lại trang chủ</Link>
      </main>
      <Footer />
    </div>
  );

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <Header />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: '30px', fontSize: '14px', color: '#888' }}>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Trang chủ</Link> / <span style={{ color: '#ff4d4f' }}>{product.name}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', background: '#111', padding: '30px', borderRadius: '20px', border: '1px solid #222' }}>
          <div><ImageSlider images={sliderImages} selectedColor={selectedColor} onSelectColor={setSelectedColor} /></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{product.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#ffc107' }}>{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
              <span style={{ color: '#ffc107', fontWeight: 'bold' }}>{product.rating}</span>
              <span style={{ color: '#888' }}>Đã bán {product.sold}+</span>
            </div>

            <div style={{ background: '#1a1a1a', borderRadius: '12px', padding: '15px' }}>
              <p style={{ fontSize: '28px', color: '#ff4d4f', fontWeight: 'bold' }}>{product.price}</p>
              <button onClick={handleBuyNow} style={{ width: '100%', padding: '14px', background: '#ff4d4f', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>🛒 MUA NGAY</button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#1a1a1a', padding: '10px 15px', borderRadius: '8px' }}>
              <span>✅</span><span style={{ color: '#4caf50', fontWeight: 'bold' }}>Còn hàng</span><span style={{ color: '#ff9800' }}>({product.remain})</span>
            </div>

            <div>
              <label>Số lượng:</label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => handleQuantityChange("decrease")} disabled={quantity <= 1} style={{ width: '36px', height: '36px', background: '#222', border: '1px solid #444', color: '#fff', fontSize: '18px', cursor: 'pointer' }}>-</button>
                <input type="number" value={quantity} min="1" max="10" style={{ width: '50px', height: '36px', textAlign: 'center', background: '#111', border: '1px solid #444', color: '#fff' }} readOnly />
                <button onClick={() => handleQuantityChange("increase")} disabled={quantity >= 10} style={{ width: '36px', height: '36px', background: '#222', border: '1px solid #444', color: '#fff', fontSize: '18px', cursor: 'pointer' }}>+</button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <button onClick={handleBuyNow} style={{ flex: 1, padding: '14px', background: 'transparent', border: '2px solid #ff4d4f', color: '#ff4d4f', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>🛒 THÊM VÀO GIỎ</button>
              <button onClick={handleBuyNow} style={{ flex: 1, padding: '14px', background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>⚡ MUA NGAY</button>
            </div>

            <div style={{ background: '#1a1a1a', padding: '12px 15px', borderRadius: '10px' }}>
              <p>✅ Hàng chính hãng 100%</p><p>🚚 Miễn phí vận chuyển</p><p>🔧 Bảo hành 24 tháng</p><p>🔄 Đổi trả trong 7 ngày</p>
            </div>
          </div>
        </div>

        <div style={{ background: '#111', borderRadius: '16px', border: '1px solid #222', marginTop: '30px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #222', background: '#0a0a0a' }}>
            <button onClick={() => setActiveTab("description")} style={{ padding: '15px 30px', background: 'transparent', border: 'none', color: activeTab === "description" ? '#ff4d4f' : '#888', cursor: 'pointer', fontWeight: 'bold', borderBottom: activeTab === "description" ? '2px solid #ff4d4f' : 'none' }}>📖 Mô tả</button>
            <button onClick={() => setActiveTab("specs")} style={{ padding: '15px 30px', background: 'transparent', border: 'none', color: activeTab === "specs" ? '#ff4d4f' : '#888', cursor: 'pointer', fontWeight: 'bold', borderBottom: activeTab === "specs" ? '2px solid #ff4d4f' : 'none' }}>⚙️ Thông số</button>
          </div>
          <div style={{ padding: '25px' }}>
            {activeTab === "description" ? (
              <div><p style={{ lineHeight: '1.8', color: '#ccc' }}>{product.description}</p></div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>{product.specs.map((spec, i) => (<tr key={i} style={{ borderBottom: '1px solid #333' }}><td style={{ padding: '12px', fontWeight: 'bold', color: '#fff', width: '35%' }}>📌 {spec.split(":")[0]}:</td><td style={{ padding: '12px', color: '#ccc' }}>{spec.split(":")[1] || ""}</td></tr>))}</tbody>
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
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px', color: '#fff' }}>Đang tải...</div>}>
      <ChiTietSanPhamContent />
    </Suspense>
  );
}