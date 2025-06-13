import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <AppRoutes /> {/* All pages like /, /login, /dashboard are handled here */}
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
