'use-strict';

class AverageGraphsController {
    constructor($http, $interval) {
        this.$http = $http;
        this.$interval = $interval;
        let ctx1 = document.getElementById('firstQuarterAverages').getContext('2d');
        let ctx2 = document.getElementById('secondQuarterAverages').getContext('2d');
        let ctx3 = document.getElementById('thirdQuarterAverages').getContext('2d');
        let ctx4 = document.getElementById('fourthQuarterAverages').getContext('2d');

        let getAverageStats = () => {
            $http.get('/api/stats/averagestats').then(response => {
                console.log(response);


                let dataFirstQuarter = data1;
                let dataSecondQuarter = data2;
                let dataThirdQuarter = data3;
                let dataFourthQuarter = data4;
                // console.log(response.data[0].firstquarter);
                response.data[0].firstquarter.forEach(function(hour) {
                    dataFirstQuarter.labels.push(hour.hour + ":00");
                    dataFirstQuarter.datasets[0].data.push(hour.channels);
                })
                response.data[0].secondquarter.forEach(function(hour) {
                    dataSecondQuarter.labels.push(hour.hour + ":00");
                    dataSecondQuarter.datasets[0].data.push(hour.channels);
                })
                response.data[0].thirdquarter.forEach(function(hour) {
                    dataThirdQuarter.labels.push(hour.hour + ":00");
                    dataThirdQuarter.datasets[0].data.push(hour.channels);
                })
                response.data[0].fourthquarter.forEach(function(hour) {
                    dataFourthQuarter.labels.push(hour.hour + ":00")
                    dataFourthQuarter.datasets[0].data.push(hour.channels);
                })

                var firstQuarterAverages = new Chart(ctx1).Line(dataFirstQuarter);
                var secondQuarterAverages = new Chart(ctx2).Line(dataSecondQuarter);
                var thirdQuarterAverages = new Chart(ctx3).Line(dataThirdQuarter);
                var fourthQuarterAverages = new Chart(ctx4).Line(dataFourthQuarter);
            })
        }
        getAverageStats();




        let data1 = {
            labels: [],
            datasets: [
                {
                    label: "Live Channels",
                    fillColor: "rgba(187,119,209,0.2)",
                    strokeColor: "rgba(187,119,209,1)",
                    pointColor: "rgba(187,119,209,0.75)",
                    pointColor: "rgba(187,119,209,0.75)",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: []
                },
            ]
        }
        let data2 = {
            labels: [],
            datasets: [
                {
                    label: "Live Channels",
                    fillColor: "rgba(187,119,209,0.2)",
                    strokeColor: "rgba(187,119,209,1)",
                    pointColor: "rgba(187,119,209,0.75)",
                    pointColor: "rgba(187,119,209,0.75)",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: []
                },
            ]
        }
        let data3 = {
            labels: [],
            datasets: [
                {
                    label: "Live Channels",
                    fillColor: "rgba(187,119,209,0.2)",
                    strokeColor: "rgba(187,119,209,1)",
                    pointColor: "rgba(187,119,209,0.75)",
                    pointColor: "rgba(187,119,209,0.75)",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: []
                },
            ]
        }
        let data4 = {
            labels: [],
            datasets: [
                {
                    label: "Live Channels",
                    fillColor: "rgba(187,119,209,0.2)",
                    strokeColor: "rgba(187,119,209,1)",
                    pointColor: "rgba(187,119,209,0.75)",
                    pointColor: "rgba(187,119,209,0.75)",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: []
                },
            ]
        }
    }
}

angular.module('StreamSummaryApp')
    .controller('AverageGraphsController', AverageGraphsController);
