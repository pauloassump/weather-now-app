<template>
    <footer class="card-footer">
        <section class="info-footer">
            <span>HUMIDITY</span>
            <span>PRESSURE</span>
            <span><strong>{{ cityHumidity }}</strong>%</span>
            <span><strong>{{ cityPressure }}</strong>hPa</span>
        </section>
        <br>
        <span class="update-footer">
            Updated at {{ lastUpdate | moment("h:mm:ss a") }}
        </span>
    </footer>
</template>

<script>
export default {
    props: {
        cityHumidity: {
            type: Number,
            default: 0,
            required: true
        },
        cityPressure: {
            type: Number,
            default: 0,
            required: true
        },
        lastUpdate: {
            type: Date,
            default: new Date,
            required: true
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped>

</style>