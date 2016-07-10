let draw = SVG('drawing'); //.size(300, 300);
let rect = draw.rect(100, 100).attr({ fill: 'green', stroke: 'blue' });
//
function loadData(filename) {
    return (function () {
        let json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': filename,
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
}
//
const sample = "res/simple_timeline.json";
const anime = "res/no.json";
const foo = loadData(sample);
const bar = loadData(anime);
const tl = new Timeline(foo, "sampleTimeline");
const t2 = new Timeline(bar, "animeTimeline");
//console.log( tl.data);
tl.build();
t2.build();
//# sourceMappingURL=main.js.map