import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './input.css';
import './output.css';

export const metadata = {
  title: 'Movies',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-customGray container lg:px-[100px] lg:py-[15px] text-[14px] font-roboto'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
