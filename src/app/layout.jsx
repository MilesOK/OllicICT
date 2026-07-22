import '@fontsource/space-grotesk';
import '../index.css';

export const metadata = {
  title: 'Ollic ICT',
  description: 'Digital skills training program from Ollic ICT Academy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
