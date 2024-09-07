'use server'

const baseUrl = 'https://api.yelp.com'
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
}

export default async function fetchBusinesses({ term, location, sortby = 'best_match' }
    : { term: string, location: string, sortby: string }) {
        
    const searchParams = `search?location=${location}&term=${term}&sort_by=${sortby}&limit=50`
    const response = await fetch(`${baseUrl}/v3/businesses/${searchParams}`, options)
    return response.json()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function handleSubmit(prevState: any, formData: FormData) {
    const fields = {
        term: String(formData.get('term')),
        location: String(formData.get('location')),
        sortby: String(formData.get('sortby')),
    }


    if (Object.values(fields)) {
        const response = await fetchBusinesses(fields)

        return {
            ...prevState,
            data: response
        }
    }
}