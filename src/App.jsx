import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer';
import Home from "./pages/Home";


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        
        {/* Routes go here inside the main layout */}
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Home/>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
