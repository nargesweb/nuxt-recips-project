<script setup lang="ts">
// const {data,error} = await useAsyncData("recipes" ,()=>
//   $fetch("https://dummyjson.com/recipes?limit=12")
// )
import { type RecipeResponse} from "../types/recipes"
const {data,error} = useFetch<RecipeResponse>('https://dummyjson.com/products/categories')
</script>
<template>
  <div>
    <main>
        <section class="py-20 container">
        <BannerCategory></BannerCategory>
          <template  v-if="!error">
            <CategorySection v-for="category in data" :key="category.slug" :category="category" ></CategorySection>
          </template>
        
    </section>
    </main>
  </div>
</template>


