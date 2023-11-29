import { ref } from 'vue';
import axios from 'axios';

export default function () {
  const recipe = ref(null);

  const fetchRandomRecipe = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      recipe.value = response.data;
    } catch (error) {
      console.error('Erro ao buscar receita aleatória', error);
    }
  };

  return { recipe, fetchRandomRecipe };
}
