import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Toolbar from "./Toolbar";
// Math extension (KaTeX-based)
// import MathExtension from "tiptap-extension-math";

const BlogEditor = () => {
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

    const handlePublish = () => {
        const content = editor?.getHTML();
        const json = editor?.getJSON();
        const text = editor?.getText();
        console.log({
            title,
            content,
            json,
            text,
        });
        alert("Post saved! Check console for output.");
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl space-y-4">
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
                className="prose max-w-none border p-4 rounded min-h-[300px]"
            />

            {/* Publish Button */}
            <button
                onClick={handlePublish}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
            >
                Publish
            </button>
        </div>
    );
};

export default BlogEditor;
