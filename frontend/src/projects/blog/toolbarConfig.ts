// toolbarConfig.ts
import type { Editor } from "@tiptap/react";
import {
    BoldIcon,
    ItalicIcon,
    StrikethroughIcon,
    PresentationChartBarIcon,
    ChartBarSquareIcon,
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
import type { JSX } from "react";

export interface ToolbarItem {
    label: string;
    action: (editor: Editor) => void;
    icon?: JSX.Element;
}

export const toolbarConfig: ToolbarItem[] = [
    {
        label: "Bold",
        icon: <BoldIcon className="w-5 h-5" />,
        action: (editor) => editor.chain().focus().toggleBold().run(),
    },
    {
        label: "Italic",
        icon: <ItalicIcon className="w-5 h-5" />,
    action: (editor) => editor.chain().focus().toggleItalic().run(),
    },
    {
        label: "Strikethrough",
        icon: <StrikethroughIcon className="w-5 h-5" />,
    action: (editor) => editor.chain().focus().toggleStrike().run(),
    },
    {
        label: "Heading 1",
        action: (editor) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
        label: "Heading 2",
        action: (editor) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
        label: "Paragraph",
        action: (editor) => editor.chain().focus().setParagraph().run(),
    },
    {
        label: "Block Quote",
        icon: <BlockQuoteIcon className="w-5 h-5" />,
    action: (editor) => editor.chain().focus().toggleBlockquote().run(),
    },
    {
        label: "Bullet List",
        icon: <ListBulletIcon className="w-5 h-5" />,
    action: (editor) => editor.chain().focus().toggleBulletList().run(),
    },
    {
        label: "Numbered List",
        icon: <ListNumberIcon className="w-5 h-5" />,
    action: (editor) => editor.chain().focus().toggleOrderedList().run(),
    },
    {
        label: "Insert Image",
        icon: <PhotoIcon className="w-5 h-5" />,
    action: (editor) => {
            const url = window.prompt("Enter image URL:");
            if (url) {
                editor.chain().focus().setImage({ src: url }).run();
            }
        },
    },
    {
        label: "Insert Inline Math",
        action: (editor) => {
            // Placeholder: depends on how you implement math extension
            const formula = window.prompt("Enter LaTeX formula:");
            if (formula) {
                editor.chain().focus().insertContent(`$${formula}$`).run();
            }
        },
    },
    {
        label: "Insert Block Math",
        action: (editor) => {
            const formula = window.prompt("Enter LaTeX formula:");
            if (formula) {
                editor.chain().focus().insertContent(`$$${formula}$$`).run();
            }
        },
    },
    {
        label: "Undo",
        icon: <UndoIcon className="w-5 h-5" />,
    action: (editor) => editor.chain().focus().undo().run(),
    },
    {
        label: "Redo",
        icon: <RedoIcon className="w-5 h-5" />,
    action: (editor) => editor.chain().focus().redo().run(),
    },
    {
        label: "Clear Formatting",
        icon: <TrashIcon className="w-5 h-5" />,
    action: (editor) =>
            editor.chain().focus().clearNodes().unsetAllMarks().run(),
    },
];
