
export async function fetchCars() {
    const headers = {
        headers: {
            'X-RapidAPI-Key': '6f0289d155msha70bfa2ae781d40p117d36jsnfc6776e00755',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}
