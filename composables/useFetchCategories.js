export default async () => {
    const { data, error } = await useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');

    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Unable to fetch categories",
        });
    }

    return data.value.categories;
}