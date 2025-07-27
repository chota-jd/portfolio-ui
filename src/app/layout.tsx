'use client';

import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import { store } from '../store';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Portfolio - Passionate Developer</title>
        <meta name="description" content="A passionate and curious developer's portfolio showcasing world-class projects and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
