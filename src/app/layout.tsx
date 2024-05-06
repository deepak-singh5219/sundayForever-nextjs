import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col w-full h-full">
          <Navbar />
          <div className="w-full h-full">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
