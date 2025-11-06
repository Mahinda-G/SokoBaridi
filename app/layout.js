
export const metadata = {
  title: "Soko Baridi — Government Grants",
  description: "Access and manage government grants with clarity, speed, and compliance."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">{children}</body>
    </html>
  );
}
