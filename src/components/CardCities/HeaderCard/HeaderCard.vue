<template>
    <header class="card-header">
        <p class="card-title">{{ cityName }}, {{ cityCountry }}</p>
    </header>
</template>

<script>
export default {
    props: {
        cityName: {
            type: String,
            default: "",
            required: true
        },
        cityCountry: {
            type: String,
            default: "",
            required: true
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped>

</style>