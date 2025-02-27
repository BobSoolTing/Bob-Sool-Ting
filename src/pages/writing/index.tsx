import React from 'react';
import { ReactNode } from 'react';
import Header from '@/components/shared/bst/Header';
import BottomBar from '@/components/shared/bst/BottomBar';

export default function WritingPage() {
  return <div>게시글 작성 페이지입니당</div>;
}

WritingPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'게시글 작성'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
