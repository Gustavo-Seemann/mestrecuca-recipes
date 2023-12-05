export default async (id) => {
    const { data, error } = await useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Unable to fetch recipe",
        });
    }

    return data?.value.meals[0];
}