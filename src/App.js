import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import BlogListPage from './pages/BlogListPage'
import PostPage from './pages/PostPage'
import Nav from './Components/Nav'
import Footer from './Components/Footer';


function App() {
  return (

    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<BlogListPage />} />
        <Route path="/post/:slug" element={<PostPage />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
