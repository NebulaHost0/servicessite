import { urlFor } from '@/lib/sanity'
import Image from 'next/image'

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || ''}
          width={800}
          height={400}
          className="w-full rounded-xl shadow-lg"
        />
        {value.caption && (
          <p className="text-center text-gray-400 text-sm mt-2 italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-gray-100 mt-12 mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-gray-100 mt-10 mb-5 border-b-2 border-blue-600/30 pb-3 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-gray-100 mt-8 mb-4 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold text-gray-100 mt-6 mb-3">
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-300 mb-6 leading-relaxed text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-600 pl-6 my-8 bg-blue-600/5 py-4 rounded-r-lg">
        <div className="text-gray-200 italic text-lg leading-relaxed">
          {children}
        </div>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-none space-y-3 my-6 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-3 my-6 ml-4 text-gray-300">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start text-gray-300 leading-relaxed">
        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: any) => (
      <li className="text-gray-300 leading-relaxed">
        {children}
      </li>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 hover:decoration-blue-300 transition-colors duration-300"
        target={value.blank ? "_blank" : "_self"}
        rel={value.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-gray-100">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-200">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-800 text-blue-400 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
} 