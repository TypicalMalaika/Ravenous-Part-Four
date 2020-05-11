const apiKey = "_XU87ohVJd7ToqYmUDxIainq4LgJEoVIU1u_I6emfafZLScFN2kweaU5nHlTzgusFSUyHB-StX-balnCXWRIz3xT2KcP7KAElF2w9s9vrKenPAdGnFGf0nN1oVS5XnYx";

const yelp = {
    searchYelp(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        }).then ((response) => {
            return response.json();
        }).then ((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zipCode,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                }));
            }
        })
    }
};


export default yelp;