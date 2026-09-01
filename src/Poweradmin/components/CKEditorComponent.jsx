'use client';
import { useEffect, useState } from 'react';

export default function CKEditorComponent({ value, onChange }) {
  const [editorState, setEditorState] = useState(null);

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      import('ckeditor5'),
      import('@ckeditor/ckeditor5-react')
    ]).then(([ckeditor5, ckeditorReact]) => {
      if (!isMounted) return;
      setEditorState({
        CKEditor: ckeditorReact.CKEditor,
        ClassicEditor: ckeditor5.ClassicEditor,
        Essentials: ckeditor5.Essentials,
        Paragraph: ckeditor5.Paragraph,
        Bold: ckeditor5.Bold,
        Italic: ckeditor5.Italic,
        Underline: ckeditor5.Underline,
        Strikethrough: ckeditor5.Strikethrough,
        Link: ckeditor5.Link,
        BlockQuote: ckeditor5.BlockQuote,
        Heading: ckeditor5.Heading,
        List: ckeditor5.List,
        Indent: ckeditor5.Indent,
        IndentBlock: ckeditor5.IndentBlock,
        Table: ckeditor5.Table,
        TableToolbar: ckeditor5.TableToolbar,
        HorizontalLine: ckeditor5.HorizontalLine,
        SourceEditing: ckeditor5.SourceEditing,
        GeneralHtmlSupport: ckeditor5.GeneralHtmlSupport,
        FindAndReplace: ckeditor5.FindAndReplace,
        Undo: ckeditor5.Undo,
      });
    }).catch(err => {
      console.warn("CKEditor load fallback:", err);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!editorState) {
    return (
      <textarea
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-[300px] p-4 border border-slate-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder="Write blog content here..."
      />
    );
  }

  const { CKEditor, ClassicEditor, ...plugins } = editorState;

  return (
    <CKEditor
      editor={ClassicEditor}
      data={value || ''}
      config={{
        plugins: Object.values(plugins),
        toolbar: [
          'undo', 'redo', '|',
          'heading', '|',
          'bold', 'italic', 'underline', 'strikethrough', '|',
          'bulletedList', 'numberedList', 'outdent', 'indent', '|',
          'link', 'blockQuote', 'insertTable', 'horizontalLine', '|',
          'sourceEditing', 'findAndReplace'
        ]
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  );
}
