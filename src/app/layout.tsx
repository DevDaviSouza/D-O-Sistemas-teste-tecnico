import "./globals.css";
import Header from "@/components/Header";
import { FipeProvider } from "@/context/FipeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FipeProvider>
      <html lang="pt-BR">
        <body className={`antialiased`}>
          <Header />
          {children}
        </body>
      </html>
    </FipeProvider>

  );
}
