const countries = require("./resources/countries.json");
// find region population
const cluster = countries.map(country => [country.region,country.population])
    .reduce((cluster, [region, population]) => {
        cluster[region] = (cluster[region] || 0) + population;
        return cluster;
    }, {});
for ([region,population] of Object.entries(cluster))
    console.log(`${region}: ${population}`);
