import { http } from '../api/config'

export default {
    getTemperatures(latitude, longitude) {
        return http().get('weather', { 
            params: { 
                'lat': latitude, 
                'lon': longitude, 
                'appid': '1d76af5aa4aec1d2e458ececeadd3f84'
            }
        })
    }
}