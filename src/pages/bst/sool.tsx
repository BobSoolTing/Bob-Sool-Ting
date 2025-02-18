import React from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/BottomBar';
import CategoryBar from '@/components/shared/CategoryBar';
import Writing from '@/components/shared/Writing';
import SearchBar from '@/components/shared/SearchBar';

export default function SoolPage() {
  return <div>술약 페이지입니당</div>;
}

SoolPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <CategoryBar>
        <SearchBar />
        <BottomBar>
          {page}
          <Writing />
        </BottomBar>
      </CategoryBar>
    </>
  );
};
