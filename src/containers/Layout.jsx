import React from 'react';

// Custom Components
import ColorList from '../components/ColorList';
import ContentMessage from '../components/ContentMessage';

const Layout = () => {
  return (
    <main style={{ minHeight: '100%' }}>
      <ContentMessage message="Colors" />

      <ColorList />
    </main>
  );
};
export default Layout;
