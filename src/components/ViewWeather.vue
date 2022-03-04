<template>
    <div>
        <CardCities />
        <router-link to="/">
            <button>
                Voltar para o inicio
            </button>
        </router-link>
    </div>
</template>

<script>
import WeatherService from '../services/weatherService'
import CardCities from '../components/CardCities/CardCities'

export default {
    components: {
        CardCities
    },
    data() {
        return {
            citiesCordenadas: [
                {
                    name: 'Urubici',
                    latitude: '-28.015663',
                    longitude: '-49.592547'
                },
                {
                    name: 'Nuuk',
                    latitude: '64.18347',
                    longitude: '-51.72157'
                },
                {
                    name: 'Nairobi',
                    latitude: '-1.28333',
                    longitude: '36.81667'
                }
            ],
            citiesWeather: []
        }
    },
    mounted() {
        this.getTemperatures()
    },
    methods: {
        getTemperatures() {
            this.citiesCordenadas.forEach(city => {
                WeatherService.getTemperatures(city.latitude, city.longitude)
                .then(res => {
                    this.citiesWeather.push(res.data)
                })
            })
            console.log(this.citiesWeather)
        }
    }
}
</script>