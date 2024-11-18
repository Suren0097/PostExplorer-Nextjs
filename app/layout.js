import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "PostExplorer - Explore and Learn",
  description: "Explore posts from the JSONPlaceholder API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto my-8">{children}</main>
      </body>
    </html>
  );
}
