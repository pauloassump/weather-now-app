<template>
    <section v-colorTemp="valueTemp(cityTemp)" class="card-body">
        {{ cityTemp | convertTemp }}º
    </section>
</template>

<script>
export default {
    props: {
        cityTemp: {
            type: Number,
            default: 273,
            required: true
        }
    },
    filters: {
        convertTemp(temp) {
            temp = temp - 273.15
            console.log(temp)
            return temp.toFixed(0)
        }
    },
    methods: {
        valueTemp(value) {
            value = value - 273.15
            if(value <= 5) {
                return '#69A3FF'
            }
            if (value > 5 && value <= 25) {
                return '#FF9632'
            }
            if(value > 25) {
                return '#ED1946'
            }
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped>

</style>