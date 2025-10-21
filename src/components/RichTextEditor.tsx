import React, { useState, useRef } from 'react';
import { Bold, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const RichTextEditor = ({ value, onChange, placeholder }: RichTextEditorProps) => {
  const [isPreview, setIsPreview] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertTag = (startTag: string, endTag: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = 
      value.substring(0, start) + 
      startTag + selectedText + endTag + 
      value.substring(end);
    
    onChange(newText);

    // Reset cursor position
    setTimeout(() => {
      textarea.focus();
      const newPos = start + startTag.length + selectedText.length + endTag.length;
      textarea.setSelectionRange(newPos, newPos);
    }, 0);
  };

  const toolbarButtons = [
    { icon: Bold, label: 'Bold', start: '<strong>', end: '</strong>' },
    { icon: Italic, label: 'Italic', start: '<em>', end: '</em>' },
    { icon: Underline, label: 'Underline', start: '<u>', end: '</u>' },
    { icon: List, label: 'Bullet List', start: '<ul>\n<li>', end: '</li>\n</ul>' },
    { icon: ListOrdered, label: 'Numbered List', start: '<ol>\n<li>', end: '</li>\n</ol>' },
    { icon: AlignLeft, label: 'Align Left', start: '<div style="text-align: left;">', end: '</div>' },
    { icon: AlignCenter, label: 'Align Center', start: '<div style="text-align: center;">', end: '</div>' },
    { icon: AlignRight, label: 'Align Right', start: '<div style="text-align: right;">', end: '</div>' },
  ];

  const insertHeading = (level: number) => {
    insertTag(`<h${level}>`, `</h${level}>`);
  };

  const insertParagraph = () => {
    insertTag('<p>', '</p>');
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      insertTag(`<a href="${url}" target="_blank" rel="noopener noreferrer">`, '</a>');
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="bg-gray-100 p-2 border-b flex flex-wrap gap-1">
        {/* Text formatting */}
        {toolbarButtons.map((btn, index) => {
          const Icon = btn.icon;
          return (
            <Button
              key={index}
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => insertTag(btn.start, btn.end)}
              title={btn.label}
              className="h-8 w-8 p-0"
            >
              <Icon className="w-4 h-4" />
            </Button>
          );
        })}

        <div className="w-px bg-gray-300 mx-1" />

        {/* Headings */}
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(1)}
          title="Heading 1"
          className="h-8 px-2"
        >
          H1
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(2)}
          title="Heading 2"
          className="h-8 px-2"
        >
          H2
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(3)}
          title="Heading 3"
          className="h-8 px-2"
        >
          H3
        </Button>

        <div className="w-px bg-gray-300 mx-1" />

        {/* Other formatting */}
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={insertParagraph}
          title="Paragraph"
          className="h-8 px-2"
        >
          P
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={insertLink}
          title="Insert Link"
          className="h-8 px-2"
        >
          Link
        </Button>

        <div className="w-px bg-gray-300 mx-1" />

        {/* Preview toggle */}
        <Button
          type="button"
          variant={isPreview ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setIsPreview(!isPreview)}
          className="h-8 px-3 ml-auto"
        >
          {isPreview ? 'Edit' : 'Preview'}
        </Button>
      </div>

      {/* Editor/Preview area */}
      <div className="bg-white">
        {isPreview ? (
          <div 
            className="p-4 min-h-[240px] prose max-w-none"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        ) : (
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={10}
            className="border-0 rounded-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
          />
        )}
      </div>

      {/* Help text */}
      <div className="bg-gray-50 p-2 text-xs text-gray-600 border-t">
        <p>
          <strong>Tip:</strong> Select text and click formatting buttons, or use HTML tags directly. 
          Click Preview to see how your content will look.
        </p>
      </div>
    </div>
  );
};
