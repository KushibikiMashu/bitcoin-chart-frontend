# bitcoin-chart-frontend

Created with: Create React App v3 + Typescript
Library: Highcharts, localforage

This site fetches from Spreadsheet via Google Apps Script.

Localforage let your browser have cache of the response from Spreadsheet so that you will not wait for initial data fetching of bitcoin chart.

Deployed at Netlify.

## installation

```terminal
$ yarn install
$ yarn start
```

Check `localhost:3000`.

Warning: If you are offline, the chart on top page will not be described because of failure in data fetching and app throws error.
