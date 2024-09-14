// pages/404.js
import Image from 'next/image';
import errorImage from '../public/images/404-errorpage.png'; // Adjust the path as needed

export default function Custom404() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      backgroundColor: 'white', // Set background color to white
      minHeight: '100vh', // Ensure it covers the full viewport height
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>404 - Page Not Found</h1>
        <Image src={errorImage} alt="404 Error Page" layout="responsive" width={600} height={400} /> {/* Adjust dimensions as needed */}
      </div>
    </div>
  );
}
