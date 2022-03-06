import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    
    state: {
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
        searchedCities: []
    }

})