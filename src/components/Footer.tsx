import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-100">COSC</span>
        </div>
        <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Twitter</a>
          <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Discord</a>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Community of Source Coders. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
