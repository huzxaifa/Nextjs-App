"use client";

import { useParams } from 'next/navigation';

const DynamicPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>This is {params.name}'s page</h1>
    </div>
  );
};

export default DynamicPage;
