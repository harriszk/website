import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Unknown from "./pages/Unknown";
import Blog from "./projects/blog/Blog";
import BlogEditor from "./projects/blog/BlogEditor";
import Viewer from "./projects/blog/Viewer";

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Unknown />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/blog/*" element={<Blog />} />
                    <Route path="/projects/blog/editor" element={<BlogEditor />} />
                    <Route path="/projects/blog/post/:id" element={<Viewer />} />
                    <Route
                        path="/projects/lung-talk/*"
                        element={<div>Lung Talk Project Placeholder</div>}
                    />
                    <Route path="/about" element={<div>About section</div>} />
                </Routes>
            </main>
            <footer className="bg-gray-900 text-white text-center py-4 mt-6">
                <p className="text-sm">
                    © 2025 Zachary Harris. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default App;
