Reveal.addEventListener('ready', function() {
    var yourVlSpec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v3.0.json',
        description: 'A simple bar chart with embedded data.',
        "width": 1200,
        "height": 600,
       
        "data": {"url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/flights-2k.json"},
        "transform": [{"calculate": "date(datum.date)","as": "Date"}],
        "selection": {
            "CylYr": {
            "type": "single",
            "fields": ["Date"],
            "bind": {
          "Date": {"input": "range","min": 1,"max": 31,"step": 1}
             }
            }
         },
        "mark": "circle",
        "encoding": {
            "x": {"field": "origin","type": "nominal"},
            "y": {"field": "distance","type": "quantitative"},
            "color": {
            "condition": {
                "selection": "CylYr",
                "field": "delay", "type": "quantitative"
            },
            "value": "#E61E33"
            },
            "size": {
                "condition": {"selection": "CylYr", "value": 200},
                "value": 50
              }
        }
        };

    var embedded = vegaEmbed('#vis', yourVlSpec);
});