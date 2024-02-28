export default async (category) => {
    const { data, error } = await useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);

    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Unable to fetch category",
        });
    }

    if (!data.value.meals) {
        throw createError({
            statusCode: "404",
            message: "No recipes found",
        });
    }

    return data.value.meals;
}