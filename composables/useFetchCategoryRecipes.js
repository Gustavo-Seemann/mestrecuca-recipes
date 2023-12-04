export default async (category) => {
    const { data, error } = await useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);

    console.log(category)

    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Unable to fetch category",
        });
    }

    console.log(data.value)

    return data.value.meals;
}