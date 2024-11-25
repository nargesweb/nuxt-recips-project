<script lang="ts" setup>
    const props = defineProps(['category'])
    const {data,error } = useFetch(`https://dummyjson.com/products/category/${props.category.name}?limit=3`)

</script>
<template>
    <div>
        <p class="text-xl font-bold"> {{props.category.name }}</p>
        <div class="flex items-center justify-between" v-if="!error ">
           <ProductCart v-for="product in data" :key="product.id"   />
        </div>
    </div>
</template>