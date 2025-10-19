import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import { generateHTML } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import BackButton from "../../components/BackButton";

const Viewer = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const { data: posts } = api.useGetPostsQuery();
    const [deletePost, { data }] = api.useDeletePostMutation();

    const editPost = () => {
        if (!id) {
            return;
        }
    };

    const removePost = async () => {
        if (!id) {
            return;
        }

        await deletePost(id).then(() => {
            // Optionally, navigate away or give feedback to the user
            console.log("Post deleted", data);
        });

        navigate("/projects/blog");
    };

    return (
        <div className="flex">
            <BackButton />
            <div className="w-full h-full flex-1">
                {posts ? (
                    (() => {
                        const post = posts.find(
                            (p: any) => String(p.id) === id,
                        );
                        if (!post) return <p>Post not found</p>;

                        console.log("Viewing post:", post);

                        return (
                            <div className="bg-white rounded shadow p-6">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-3xl font-semibold mb-2 mr-auto  ">
                                        {post.title}
                                    </h2>
                                    <button
                                        aria-label="Edit post"
                                        className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-200 text-red-500 hover:bg-gray-150 hover:text-red-700 transition-shadow shadow-sm hover:shadow-md"
                                        onClick={editPost}
                                    >
                                        <PencilSquareIcon className="h-5 w-5" />
                                    </button>
                                    <button
                                        aria-label="Delete post"
                                        className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-200 text-red-500 hover:bg-gray-150 hover:text-red-700 transition-shadow shadow-sm hover:shadow-md"
                                        onClick={removePost}
                                    >
                                        <TrashIcon className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="mt-2 space-y-1 text-sm text-gray-600">
                                    {(() => {
                                        const d = new Date(post.createdAt);
                                        if (Number.isNaN(d.getTime()))
                                            return "Invalid date";
                                        const pad = (n: number) =>
                                            String(n).padStart(2, "0");
                                        const mm = pad(d.getMonth() + 1);
                                        const dd = pad(d.getDate());
                                        const yyyy = d.getFullYear();
                                        const hh = pad(d.getHours());
                                        const min = pad(d.getMinutes());
                                        return `Created At: ${mm}/${dd}/${yyyy} ${hh}:${min}`;
                                    })()}
                                    <span className="block">
                                        By {post.author}
                                    </span>
                                </div>
                                <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded text-sm overflow-auto">
                                    <code
                                        dangerouslySetInnerHTML={{
                                            __html: generateHTML(post.content, [
                                                StarterKit,
                                            ]),
                                        }}
                                    >
                                        {/* {JSON.stringify(
                                                    content,
                                                    null,
                                                    2,
                                                )} */}
                                    </code>
                                </pre>
                            </div>
                        );
                    })()
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Viewer;
