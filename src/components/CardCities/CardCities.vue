<template>
   <div>
       <div class="loader" v-if="showLoader">
            <img class="img-loader" src="../../assets/img/loader.svg" alt="">
        </div>
       <div class="view-weather" v-else>
            <div class="card" v-for="(city, i) in searchedCities" :key="i">
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

       <router-link to="/">
            <button class="btn-back-home">
                VOLTAR PARA HOME
            </button>
        </router-link>

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
            lastUpdate: new Date
        }
    },
    computed: {
        citiesDefault() {
            return this.$store.state.citiesDefault
        },
        searchedCities() {
            return this.$store.state.searchedCities
        }
    },
    mounted() {
        this.getTemperatures()
        setInterval(() => {
            this.cleanSearchedCities()
            this.getTemperatures()
        }, 10*60000)
    },
    methods: {
        getTemperatures() {
            this.cleanSearchedCities()
            this.citiesDefault.forEach(city => {
                WeatherService.getTemperatures(city.latitude, city.longitude)
                .then(res => {
                    this.showLoader = false,
                    this.searchedCities.push(
                        res.data
                    ),
                    this.lastUpdate = new Date(),
                    this.showTryAgain = false,
                    sessionStorage.setItem('citiesSearch', JSON.stringify(this.searchedCities))
                })
                .catch( e => {
                    if (e.response.status == 400 || e.response.status == 500) {
                        this.showLoader = false,
                        this.showTryAgain = true,
                        this.lastUpdate = new Date()
                    }
                }
                )
            })
            
        },
        cleanSearchedCities () {
            this.$store.state.searchedCities = []
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped>

</style>