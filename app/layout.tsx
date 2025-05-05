import './globals.css';
import BottomNavigation from '../components/BottomNavigation';

export const metadata = {
  title: 'Next.js App with Bottom Navigation',
  description: 'An app with bottom navigation and scroll position preservation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="pb-16">
          {children}
        </main>
        <BottomNavigation />
      </body>
    </html>
  );
}