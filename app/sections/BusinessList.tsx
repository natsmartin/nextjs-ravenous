import { useEffect, useContext } from "react";
import BusinessCard from "@sections/Business";
import Pagination from "@sections/Pagination";
import { fetchBusinesses } from "@utils/actions/fetch-data";
import { BusinessContext } from "@app/utils/Context";
import { BusinessProps } from "@sections/Business";

export default function BusinessList(): React.JSX.Element {
  const {
    formState,
    businessList,
    setBusinessList,
    error,
    setError,
    currentPage,
    postsPerPage,
    setPostsPerPage,
  } = useContext(BusinessContext);

  const params = formState.data;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBusinesses(params);
        setBusinessList(response);
      } catch (err) {
        setError(err);
      }
    };

    const objValues = Object.values(params);
    const isNull = objValues.map((value) => value ?? true).includes(true);

    if (objValues.length && !isNull) {
      fetchData();
    }
  }, [params, setBusinessList, setError]);

  const businesses = businessList?.businesses;

  useEffect(() => {
    setPostsPerPage(10);
  }, [businessList, setPostsPerPage]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = businesses?.slice(firstPostIndex, lastPostIndex);

  if (businessList?.error || error) {
    return (
      <p className="bg-white text-center text-xs p-2 md:text-base text-red-500">
        {businessList?.error.description || error}
      </p>
    );
  }

  return (
    <>
      <div className="text-black flex flex-wrap justify-center my-4`">
        {currentPosts?.map((business: BusinessProps, index: number) => (
          <BusinessCard key={index} business={business} />
        ))}
      </div>

      <Pagination totalPosts={businesses?.length} />
    </>
  );
}
