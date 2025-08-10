import { useEffect, useContext } from "react";
import BusinessCard from "@sections/Business";
import Pagination from "@sections/Pagination";
import { BusinessContext } from "@app/utils/Context";
import { BusinessProps } from "@sections/Business";
import Loading from "@app/loading";

export default function BusinessList({
  businesses,
}: {
  businesses: BusinessProps[];
}): React.JSX.Element {
  const {
    businessList,
    isLoading,
    currentPage,
    postsPerPage,
    setPostsPerPage,
  } = useContext(BusinessContext);


  useEffect(() => {
    setPostsPerPage(10);
  }, [businesses, setPostsPerPage]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = businesses?.slice(firstPostIndex, lastPostIndex);

  if (businessList.error) {
    return (
      <p className="bg-white text-center text-xs p-2 md:text-base text-red-500">
        {businessList.error?.description}
      </p>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {businesses.length || businessList.total !== 0 ? (
        <>
          <div className="text-black flex flex-wrap justify-center my-4`">
            {currentPosts?.map((business: BusinessProps, index: number) => (
              <BusinessCard key={index} business={business} />
            ))}
          </div>
          <Pagination totalPosts={businesses.length} />
        </>
      ) : (
        <p className="bg-white text-black text-center text-xs p-2 md:text-base">
          No results found.
        </p>
      )}
    </>
  );
}
