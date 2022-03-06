<template>
   <div>
       <div class="loader" v-if="showLoader">
            <img class="img-loader" src="../../assets/img/loader.svg" alt="">
        </div>
       <div class="view-weather" v-else>
            <div class="card" v-for="(city, i) in citiesWeather" :key="i">
                <HeaderCard
                    :cityName="city.name"
                    :cityCountry="city.sys.country"
                 />
                <hr class="divider" />
                <CardBody
                    :cityTemp="city.main.temp"
                 />
                <CardFooter
                    :cityHumidity="city.main.humidity"
                    :cityPressure="city.main.pressure"
                    :lastUpdate="lastUpdate"
                 />
            </div>
       </div>

       <CardError
            @tryAgain="getTemperatures"
            :lastUpdate="lastUpdate"
            :showTryAgain="showTryAgain"
         />
   </div>
</template>

<script>
import WeatherService from '@/services/weatherService'
import CardError from '@/components/CardCities/CardError/CardError'
import HeaderCard from '@/components/CardCities/HeaderCard/HeaderCard'
import CardBody from '@/components/CardCities/CardBody/CardBody'
import CardFooter from '@/components/CardCities/CardFooter/CardFooter'

export default {
    components: {
        CardError,
        HeaderCard,
        CardBody,
        CardFooter
    },
    data() {
        return {
            showTryAgain: false,
            showLoader: true,
            citiesDefault: [
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
            citiesWeather: [],
            lastUpdate: new Date
        }
    },
    mounted() {
        this.getTemperatures()
        setInterval(() => {
            this.citiesWeather = []
            this.getTemperatures()
        }, 10*60000)
        console.log(this.citiesWeather)
    },
    methods: {
        getTemperatures() {
            this.citiesDefault.forEach(city => {
                WeatherService.getTemperatures(city.latitude, city.longitude)
                .then(res => {
                    this.showLoader = false,
                    this.citiesWeather.push(
                        res.data
                    ),
                    this.lastUpdate = new Date(),
                    this.showTryAgain = false,
                    sessionStorage.setItem('citiesSearch', JSON.stringify(this.citiesWeather))
                })
                .catch(
                    this.showLoader = false, 
                    this.showTryAgain = true,
                    this.lastUpdate = new Date()
                )
            })
            
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped>

</style>