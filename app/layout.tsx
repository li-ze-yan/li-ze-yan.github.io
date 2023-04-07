import "./globals.css";
import "react-vertical-timeline-component/style.min.css";

export const metadata = {
  title: "Vector | Portfolio",
  description: "Vector | Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
