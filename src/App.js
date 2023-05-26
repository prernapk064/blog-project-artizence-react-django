import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BlogList from './pages/BlogList';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import PrivateRoute from './utils/PrivateRoute';
import BlogDetail from './pages/BlogDetail';
import { AuthProvider } from './context/AuthContext';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Header />
        <Routes>
          {/* <Route path='/' element={<BlogList />} />
          <Route path='blogs/:id' element={<BlogDetail />} /> */}
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute><BlogList/></PrivateRoute>} />
            <Route path="blogs/:id" element={<BlogDetail />} />
          
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
