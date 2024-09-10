'use server'


const apiKey = process.env.APIKEY

const baseUrl = 'https://api.yelp.com'
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`,
        }
    }

export const fetchBusinesses = async ({ term, location, sortby = 'best_match' }:
     { term: string, location: string, sortby: string }) => {

    const searchParams = `search?location=${location}&term=${term}&sort_by=${sortby}&limit=50`
    const response = await fetch(`${baseUrl}/v3/businesses/${searchParams}`, options)
    const data = await response.json()
    return data
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function handleSubmit(prevState: any, formData: FormData) {
    const fields = {
        term: formData.get('term'),
        location: formData.get('location'),
        sortby: formData.get('sortby'),
    }

    return {
        ...prevState,
        data: fields
    }

}
