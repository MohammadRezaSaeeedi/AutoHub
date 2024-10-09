import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export const metadata = {
  title: "Auto | Hub",
  description: "At AutoHub, we offer the best selection of new and pre-owned cars with guaranteed quality and competitive prices. With a wide range of the latest models, we make it easy for you to compare and confidently purchase the vehicle that suits your needs. From budget-friendly to luxury cars, everything is in one place! We provide a smart and convenient car-buying experience, ensuring you hit the road with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
      {children}
      <Footer />
      </body>
      </html>
    );
}