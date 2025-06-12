import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        
        {/* Routes go here inside the main layout */}
        <main className="flex-grow">
          <AppRoutes />
        </main>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
