/* covid dashboard */
GetCovidData();
function GetCovidData() {
    fetch('https://hpb.health.gov.lk/api/get-current-statistical')
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("covid-date").innerHTML = data.data.update_date_time;


            //local updates
            var totalCases = data.data.local_total_cases;
            if(parseInt(totalCases) > 10000) {
                document.getElementById("covid-total-cases").innerHTML = (parseInt(totalCases) / 1000).toFixed(1) + "K";
            } else {
                document.getElementById("covid-total-cases").innerHTML = totalCases;
            }

            var recovered = data.data.local_recovered;
            if(parseInt(recovered) > 10000) {
                document.getElementById("covid-recovered").innerHTML = (parseInt(recovered) / 1000).toFixed(1) + "K";
            } else {
                document.getElementById("covid-recovered").innerHTML = recovered;
            }

            var activeCases = data.data.local_active_cases;
            if(parseInt(activeCases) > 10000) {
                document.getElementById("covid-active-cases").innerHTML = (parseInt(activeCases) / 1000).toFixed(1) + "K";
            } else {
                document.getElementById("covid-active-cases").innerHTML = activeCases;
            }

            var deaths = data.data.local_deaths;
            if(parseInt(deaths) > 10000) {
                document.getElementById("covid-deaths").innerHTML = (parseInt(deaths) / 1000).toFixed(1) + "K";
            } else {
                document.getElementById("covid-deaths").innerHTML = deaths;
            }


            //global updates
            var globalTotalCases = data.data.global_total_cases;
            if(parseInt(globalTotalCases) > 1000000) {
                document.getElementById("global-total-cases").innerHTML = (parseInt(globalTotalCases) / 1000000).toFixed(1) + "M";
            } else {
                document.getElementById("global-total-cases").innerHTML = globalTotalCases;
            }

            var globalRecovered = data.data.global_recovered;
            if(parseInt(globalRecovered) > 1000000) {
                document.getElementById("global-recovered").innerHTML = (parseInt(globalRecovered) / 1000000).toFixed(1) + "M";
            } else {
                document.getElementById("global-recovered").innerHTML = globalRecovered;
            }

            var globalDeaths = data.data.global_deaths;
            if(parseInt(globalDeaths) > 1000000) {
                document.getElementById("global-deaths").innerHTML = (parseInt(globalDeaths) / 1000000).toFixed(1) + "M";
            } else {
                document.getElementById("global-deaths").innerHTML = globalDeaths;
            }


            //progress bar functions
            var progressBarRecovered = (recovered * 100) / totalCases;
            document.getElementById("progress-bar-recovered").style.width = progressBarRecovered+"%";

            var progressBarActiveCases = (activeCases * 100) / totalCases;
            document.getElementById("progress-bar-active-cases").style.width = progressBarActiveCases+"%";

            var progressBarDeaths = (deaths * 100) / totalCases;
            document.getElementById("progress-bar-deaths").style.width = progressBarDeaths+"%";
        })
}
