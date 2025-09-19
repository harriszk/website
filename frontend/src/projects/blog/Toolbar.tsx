import type { Editor } from "@tiptap/react";
import Button from "./Button";
import {
    BoldIcon,
    ItalicIcon,
    StrikethroughIcon,
    H1Icon,
    H2Icon,
    DocumentTextIcon,
    ChatBubbleLeftIcon,
    ListBulletIcon,
    ArrowUturnLeftIcon,
    ArrowUturnRightIcon,
    TrashIcon,
    PhotoIcon,
    CalculatorIcon,
    Square2StackIcon,
} from "@heroicons/react/24/solid";

interface Props {
    editor: Editor | null;
}

const Toolbar = (props: Props) =>{
    const { editor } = props;

    if (!editor) {
        return null;
    }

    return (
        <div className="flex gap-2 mb-2 flex-wrap">
            <Button
                onClick={() => editor.chain().focus().toggleBold().run()}
                fallbackText="Bold"
                icon={<BoldIcon className="w-5 h-5" />}
            />
            <Button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                fallbackText="Italic"
                icon={<ItalicIcon className="w-5 h-5" />}
            />
            <Button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                fallbackText="Strikethrough"
                icon={<StrikethroughIcon className="w-5 h-5" />}
            />
            <Button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                fallbackText="Heading 1"
                icon={<H1Icon className="w-5 h-5" />}
            />
            <Button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                fallbackText="Heading 2"
                icon={<H2Icon className="w-5 h-5" />}
            />
            <Button
                onClick={() => editor.chain().focus().setParagraph().run()}
                fallbackText="Paragraph"
                icon={<DocumentTextIcon className="w-5 h-5" />}
            />
            <Button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                fallbackText="Block Quote"
                icon={<ChatBubbleLeftIcon className="w-5 h-5" />}
            />
            <Button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                fallbackText="Bullet List"
                icon={<ListBulletIcon className="w-5 h-5" />}
            />
            <Button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                fallbackText="Numbered List"
                // icon={<ListNumberIcon className="w-5 h-5" />}
            />
            <Button
                onClick={() => {
                    const url = window.prompt("Image URL");
                    if (url) {
                        editor.chain().focus().setImage({ src: url }).run();
                    }
                }}
                fallbackText="Insert Image"
                icon={<PhotoIcon className="w-5 h-5" />}
            />
            <Button
                onClick={() => {
                    // Inline math placeholder
                    const formula = window.prompt("Inline LaTeX");
                    if (formula) {
                        editor
                            .chain()
                            .focus()
                            .insertContent(`$${formula}$`)
                            .run();
                    }
                }}
                fallbackText="Insert Inline Math"
                icon={<CalculatorIcon className="w-5 h-5" />}
            />
            <Button
                onClick={() => {
                    // Block math placeholder
                    const formula = window.prompt("Block LaTeX");
                    if (formula) {
                        editor
                            .chain()
                            .focus()
                            .insertContent(`$$${formula}$$`)
                            .run();
                    }
                }}
                fallbackText="Insert Block Math"
                icon={<Square2StackIcon className="w-5 h-5" />}
            />
            <Button
                onClick={() => editor.chain().focus().undo().run()}
                fallbackText="Undo"
                icon={<ArrowUturnLeftIcon className="w-5 h-5" />}
            />
            <Button
                onClick={() => editor.chain().focus().redo().run()}
                fallbackText="Redo"
                icon={<ArrowUturnRightIcon className="w-5 h-5" />}
            />
            <Button
                onClick={() =>
                    editor.chain().focus().unsetAllMarks().clearNodes().run()
                }
                fallbackText="Clear Formatting"
                icon={<TrashIcon className="w-5 h-5" />}
            />
        </div>
    );
}

export default Toolbar;
