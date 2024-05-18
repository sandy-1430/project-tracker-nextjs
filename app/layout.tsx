import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/style.scss";
import { Providers } from "@/store/Providers";
import { AuthGuard } from "@/components/auth/auth-guard";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Sidebar } from "@/components/layouts/sidebar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "CC Tracker Web",
  description: "Utlization Tracker for CC Digital Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AuthGuard>
            {children}
          </AuthGuard>
        </Providers>
      </body>
    </html>
  );
}
