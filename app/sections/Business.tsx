import React from "react";
import Image from "next/image";

export interface BusinessProps {
  categories: [{ alias: string; title: string }];
  display_phone: string;
  id: string;
  image_url: string;
  location: {
    address1: string;
    address2: string;
    city: string;
    country: string;
    state: string;
    zip_code: string;
  };
  name: string;
  phone: string;
  rating: number;
  review_count: number;
  url: string;
}

export default function Business({
  business,
}: {
  business: BusinessProps;
}): React.JSX.Element {
  const isAddressLess20 = (length: number) => {
    return length < 20;
  };

  return (
    <div className="flex flex-col flex-wrap self-center justify-center rounded-xl
   [&_div]:m-1 shadow-gray-900 shadow-lg p-2 m-4 bg-cyan-700 card-clamp">
      <Image
        className="business-image"
        src={business.image_url}
        alt={business.name}
        width={250}
        height={250}
        priority={true}
      />
      <div className="flex justify-center">
        <p className="text-white font-bold mt-2 title-clamp">
          {business.name}
        </p>
      </div>
      <div className="text-white mb-4 text-clamp">
        <div className="text-wrap">
          <p
            style={{
              display:
                isAddressLess20(business.location.address1?.length) ||
                isAddressLess20(business.location.address2?.length)
                  ? "block"
                  : "none",
            }}
          >
            {business.location.address1}&nbsp;
            {business.location.address2 ?? ""}&nbsp;
            <span>
              {business.location.city + ", " + business.location.state}
            </span>
          </p>
        </div>
        <div className="flex [&_*]:w-[50%] font-bold text-yellow-500 text-right">
          <p
            className={`${
              Number(business.rating) >= 3 ? "positive" : "negative"
            } 
                    bg-white rounded-sm text-[10px] md:text-base text-center`}
          >
            {business.rating + "⭐"}
          </p>

          <p className="text-[9px] md:text-base">
            {business.review_count + " reviews"}
          </p>
        </div>
      </div>
    </div>
  );
}
