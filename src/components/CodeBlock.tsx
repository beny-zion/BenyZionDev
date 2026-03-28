'use client';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden font-mono text-sm" dir="ltr">
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-gray-400">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto text-gray-100 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
