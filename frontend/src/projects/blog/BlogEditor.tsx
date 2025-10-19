import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Toolbar from "./Toolbar";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
// Math extension (KaTeX-based)
// import MathExtension from "tiptap-extension-math";

const BlogEditor = () => {
    const navigate = useNavigate();

    const [createPost, { data, isLoading, isError }] =
        api.useCreatePostMutation();

    const [title, setTitle] = useState<string>("");

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Placeholder.configure({
                placeholder: "Write your blog post content here...",
            }),
        ],
        content: "<p>Start writing...</p>",
    });

    const handlePublish = async () => {
        // const content = editor?.getHTML();
        const content = editor?.getJSON();
        console.log("Editor JSON:", content);
        // const content = editor?.getText();
        alert("Post saved! Check console for output.");
        const createdAt = new Date().toISOString();
        await createPost({
            title,
            author: "Zachary",
            content,
            createdAt,
            updatedAt: createdAt,
        });
        
        if (!isError) {
            navigate("/projects/blog");
        }
    };

    const message = () => {
        if (isLoading) {
            return <p>Publishing...</p>;
        }
        if (isError) {
            return <p>Error publishing post.</p>;
        }
        if (data) {
            return <p>Post published successfully!</p>;
        }
        return null;
    }

    return (
        <div className="flex">
            <BackButton />
            {message()}
            <div className="w-full p-6 bg-white shadow-md rounded-l space-y-4">
                {/* Title Input */}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter post title..."
                    className="w-full text-2xl font-bold border-b border-gray-300 focus:outline-none p-2"
                />

                {/* Toolbar */}
                <Toolbar editor={editor} />

                {/* Content Editor */}
                <EditorContent
                    editor={editor}
                    className="prose max-w-none border p-4 rounded"
                />

                {/* Publish Button */}
                <button
                    onClick={handlePublish}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
                >
                    Publish
                </button>
            </div>
        </div>
    );
};

export default BlogEditor;
