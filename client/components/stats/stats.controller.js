'use-strict';

class StatsController {

      constructor($http, $interval) {
            this.$http = $http;
            this.$interval = $interval;
            this.stats = {};
            let initialGet = 0;

            this.statDate = new Date();

            //function to call on the twitch api summary.
            //also includes the post that will send each api call data to the back end
            var query = () => {
                  $http.get('https://api.twitch.tv/kraken/streams/summary').then(response => {
                        console.log('*** first round ***');
                        console.log(response);
                        //making an object so I dont have the kraken link in every single object stored in the db
                        this.stats.channels = response.data.channels;
                        this.stats.viewers = response.data.viewers;
                        this.stats.date = this.statDate;
                        //posting the statistics to the backend where they will be inserted into mongo
                        if(initialGet !== 0) {
                            console.log('initialget > 0');
                        }
                        $http.get('/api/stats/graphStats').then(response => {
                            console.log('*** GRAPH STATS RES ***');
                            console.log(response);
                        });
                  });
            }
            //needed a function to initially use an http.get
            //because timer will be set to ~30 mins?
            if(initialGet === 0) {
                  query();
                  initialGet += 1;
            }
            $interval(query, 60000);
      }

}

angular.module('StreamSummaryApp')
      .controller('StatsController', StatsController);
