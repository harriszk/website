import {
    MagnifyingGlassIcon,
    PlusIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import api from "../../api";
import Loading from "../../components/Loading";
import BackButton from "../../components/BackButton";

interface Post {
    id: string;
    title: string;
    createdAt: string;
    content: {
        message: string;
    };
}

const Blog = () => {
    const { data: posts, isLoading } = api.useGetPostsQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });
    const createNewPost = () => {
        // Logic to create a new blog post, e.g., navigate to the editor page
        console.log("Create new post clicked");
    };

    return (
        <div className="flex">
            <BackButton />
            <div className="container mx-auto px-4 py-8">
                <div className="mt-6">
                    <label htmlFor="blog-search" className="sr-only">
                        Search posts
                    </label>
                    <div className="flex items-center gap-4">
                        <div className="relative flex-1">
                            <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 text-gray-400 -translate-y-1/2" />
                            <input
                                id="blog-search"
                                type="search"
                                placeholder="Search..."
                                className="w-full h-14 pl-14 pr-4 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                aria-label="Search posts"
                            />
                        </div>
                        <Link
                            to={"/projects/blog/editor"}
                            className="rounded-lg bg-blue-500 h-14 w-14 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition"
                            onClick={createNewPost}
                        >
                            <PlusIcon className="h-6 w-6 text-white" />
                        </Link>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading && <Loading />}
                    {posts?.map((post: Post) => (
                        <div
                            key={post.id}
                            className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition"
                        >
                            <h2 className="text-2xl font-semibold mb-2">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 mb-4">
                                {new Date(post.createdAt).toLocaleDateString()}
                            </p>
                            <p className="text-gray-800">
                                {post.content.message}
                            </p>
                            <Link
                                to={`/projects/blog/post/${post.id}`}
                                className="text-blue-500 hover:underline mt-4 inline-block"
                            >
                                Read more
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
