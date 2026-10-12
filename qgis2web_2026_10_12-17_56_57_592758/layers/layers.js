var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Fixedgeometries_1 = new ol.format.GeoJSON();
var features_Fixedgeometries_1 = format_Fixedgeometries_1.readFeatures(json_Fixedgeometries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fixedgeometries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fixedgeometries_1.addFeatures(features_Fixedgeometries_1);
var lyr_Fixedgeometries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fixedgeometries_1, 
                style: style_Fixedgeometries_1,
                popuplayertitle: 'Fixed geometries',
                interactive: false,
                title: '<img src="styles/legend/Fixedgeometries_1.png" /> Fixed geometries'
            });
var format_GEOMORPHOLOGYINKALADY_2 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGYINKALADY_2 = format_GEOMORPHOLOGYINKALADY_2.readFeatures(json_GEOMORPHOLOGYINKALADY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGYINKALADY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGYINKALADY_2.addFeatures(features_GEOMORPHOLOGYINKALADY_2);
var lyr_GEOMORPHOLOGYINKALADY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGYINKALADY_2, 
                style: style_GEOMORPHOLOGYINKALADY_2,
                popuplayertitle: 'GEOMORPHOLOGY IN KALADY',
                interactive: false,
                title: '<img src="styles/legend/GEOMORPHOLOGYINKALADY_2.png" /> GEOMORPHOLOGY IN KALADY'
            });
var format_ROADINKALADY_3 = new ol.format.GeoJSON();
var features_ROADINKALADY_3 = format_ROADINKALADY_3.readFeatures(json_ROADINKALADY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADINKALADY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADINKALADY_3.addFeatures(features_ROADINKALADY_3);
var lyr_ROADINKALADY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADINKALADY_3, 
                style: style_ROADINKALADY_3,
                popuplayertitle: 'ROAD IN KALADY',
                interactive: false,
                title: '<img src="styles/legend/ROADINKALADY_3.png" /> ROAD IN KALADY'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Fixedgeometries_1.setVisible(true);lyr_GEOMORPHOLOGYINKALADY_2.setVisible(true);lyr_ROADINKALADY_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Fixedgeometries_1,lyr_GEOMORPHOLOGYINKALADY_2,lyr_ROADINKALADY_3];
lyr_Fixedgeometries_1.set('fieldAliases', {'id': 'id', 'polygonn': 'polygonn', });
lyr_GEOMORPHOLOGYINKALADY_2.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_ROADINKALADY_3.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_Fixedgeometries_1.set('fieldImages', {'id': '', 'polygonn': '', });
lyr_GEOMORPHOLOGYINKALADY_2.set('fieldImages', {'NAME': '', 'TYPE1': '', 'TYPE2': '', });
lyr_ROADINKALADY_3.set('fieldImages', {'NAME': '', 'Length': '', });
lyr_Fixedgeometries_1.set('fieldLabels', {'id': 'no label', 'polygonn': 'no label', });
lyr_GEOMORPHOLOGYINKALADY_2.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_ROADINKALADY_3.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_ROADINKALADY_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});