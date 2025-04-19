import { Inter, Bitter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const bitter = Bitter({ subsets: ["latin"] });

export const metadata = {
  title: "Show Off Your Latest Catch | Catch Anything",
  description:
    "Catch Anything? is a social media platform for content related to fishing. Connect with fellow fisherman. Share photos of your catch and share where you caught it and what gear you used",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bitter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
