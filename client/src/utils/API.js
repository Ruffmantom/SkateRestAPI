import axios from 'axios';

export default {
    getSkaters: function(){
        return axios.get('api/skaters');
    },
    getSkater: function(id){
        return axios.get('api/skaters/' + id);
    },
    deleteSkater: function(id){
        return axios.delete('api/skaters/' + id);
    },
    saveSkater: function(skaterData){
        return axios.post('api/skaters', skaterData)
    }
} 