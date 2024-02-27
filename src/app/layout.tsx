"use client"
import { Poppins } from "next/font/google";
import "./globals.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query';



// export const metadata = {
//   title: "The Weather App 🌤",
//   description: "Weather app",
// };

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={poppins.className}>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
