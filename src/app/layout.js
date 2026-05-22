import "./globals.css";

export const metadata = {
  title: "CASIO STORE - Máy tính Casio chính hãng",
  description: "Chuyên cung cấp máy tính Casio chính hãng, giá tốt nhất",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}