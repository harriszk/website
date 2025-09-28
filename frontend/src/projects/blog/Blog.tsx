import BlogEditor from "./BlogEditor";

const Blog = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-gray-700">
                Welcome to the blog section! Here you'll find articles and
                updates about my projects, thoughts on technology, and more.
            </p>
            <BlogEditor />
        </div>
    );
};

export default Blog;
