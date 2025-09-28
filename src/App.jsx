import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Contact } from './pages/contact/Contact';
import { Post } from './pages/post/Post';

function App() {
  return (
    <>
      <BrowserRouter>
        {/*  <nav>
                    <Link to="/">Home </Link>
                    <Link to="/post">Post </Link>
                    <Link to="/contact">Contact </Link>

                </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
