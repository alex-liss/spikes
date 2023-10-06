# Charts

This project is a spike to compare different  charting JS libraries.

## Notes

### Chart JS


### Apache ECharts
Have to specify either width or height of the chart. Otherwise it will not be displayed.

### Apex Charts
A warning on startup
_Warning: ..\spikes\charts\node_modules\ng-apexcharts\fesm2020\ng-apexcharts.mjs depends on 'apexcharts'. CommonJS or AMD dependencies can cause optimization bailouts._
This is a known issue https://github.com/apexcharts/ng-apexcharts/issues/92

After enabling Angular SSR the Reference Error (window is not defined) occurs in  the apexcharts.common.js.

### Lightweight Charts by TradingView
The license requires specifying TradingView as the product creator. 
One need to add the "attribution notice" from the NOTICE file and a link to Tradingview  site to the page available to the users. 

