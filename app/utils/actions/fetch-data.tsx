"use server";

// import { BusinessesProps } from "@app/sections/Search";

const apiKey = process.env.APIKEY;

const baseUrl = "https://api.yelp.com";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
};

export const fetchBusinesses = async ({
  term,
  location,
  sortby,
}: {
  term: FormDataEntryValue | null;
  location: FormDataEntryValue | null;
  sortby: FormDataEntryValue | null;
}) => {
  try {
    const searchParams = `search?location=${location}&term=${term}&sort_by=${sortby}&limit=50`;
    const response = await fetch(
      `${baseUrl}/v3/businesses/${searchParams}`,
      options
    );

     if (!response.ok) {
      if (response.status === 404) throw new Error("404, Not found");
      if (response.status === 500)
        throw new Error("500, internal server error");

      throw new Error(response.status.toString());
    }


    return await response.json();
  } catch (err) {
    console.error(`Unable to fetch API data: ${(err as Error).message}`);
  }
};

export interface FormState {
  data: {
    term: FormDataEntryValue | null;
    location: FormDataEntryValue | null;
    sortby: FormDataEntryValue | null;
  };
}

export async function handleSubmit(prevState: FormState, formData: FormData) {
  const fields = {
    term: formData.get("term"),
    location: formData.get("location"),
    sortby: formData.get("sortby"),
  };

  return {
    ...prevState,
    data: fields,
  };
}
