import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { SourceModal } from './SourceModal';
import type { SourceRef } from '@/types';

export function Layout() {
  const [sourceModal, setSourceModal] = useState<{ source: SourceRef; isOpen: boolean }>({
    source: { file: '', page: 0, text: '' },
    isOpen: false,
  });

  const openSource = (source: SourceRef) => {
    setSourceModal({ source, isOpen: true });
  };

  const closeSource = () => {
    setSourceModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="pt-20 pb-16">
        <Outlet context={{ openSource }} />
      </main>
      <Footer />
      <SourceModal
        source={sourceModal.source}
        isOpen={sourceModal.isOpen}
        onClose={closeSource}
      />
    </div>
  );
}
