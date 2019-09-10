//Api requests

var axios = require('axios');

//Export an object - functions to interact with API 
module.exports= {
    //Method - take in a language and ping GitHUb API for specific lanaguage
    fetchSalesData: function (status){
        var encodedURI = window.encodeURI('https://api.github/search/repositories?q=stars:>1:language:'+ status + '&sort=stars&orders=desc&type=Repositories');
        //API query URI with language passed in
        return axios.get(encodeURI)
            .then(function (response) {
                return response.data.items;
            })
    }
}