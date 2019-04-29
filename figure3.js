Reveal.addEventListener('ready', function() {
    var yourVlSpec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v3.0.json',
        description: 'A simple bar chart with embedded data.',
            "title" : "average delay in a day of month",
            "width": 720,
            "height": 720,
 
            "data": {
              "url": "https://raw.githubusercontent.com/vega/vega-datasets/master/data/flights-2k.json"
            },
            "transform": [{"calculate": "date(datum.date)","as": "Date"}],
            "mark": "bar",
            "encoding": {
              "x": {
                "field": "Date",
                "type": "ordinal"
              },
              "y": {
                "aggregate" : "mean",
                "field": "delay",
                "type": "quantitative"
              }
            }
            
    };

    var embedded = vegaEmbed('#vis', yourVlSpec);
});