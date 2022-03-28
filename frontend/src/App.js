import Navbar from './component/navbar/Navbar';
import Sidebar from "./component/sidebar/Sidebar"
import Home from './page/home/Home';
import { NoteProvider } from "./context/Notecontext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <NoteProvider>
          <Navbar />
          <Sidebar />

          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </NoteProvider>
      </Router>


    </div>
  );
}

export default App;
