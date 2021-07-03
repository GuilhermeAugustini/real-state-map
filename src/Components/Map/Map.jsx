/* eslint-disable import/no-unresolved */
import { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { container, canvas } from './Map.module.scss';
import geojson from './geojson.mock.json';
import Control from './Controls/control';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ3VpbGhlcm1lYXVndXN0aW5pIiwiYSI6ImNrcTlnajRkMzBwb2kyb21xeGRpMG1sc2gifQ.2zw3-BqnOepP6RsTxKL0yA';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-47.3891652);
  const [lat, setLat] = useState(-22.7286108);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 9,
      attributionControl: false,
    });
    map.current.on('load', () => {
      const c = Control();
      map.current.addControl(c, 'bottom-right');
      map.current.addSource('properties', {
        type: 'geojson',
        data: geojson,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50,
      });

      map.current.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'properties',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': ['step', ['get', 'point_count'], '#9792e3', 100, '#61e786'],
          'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 35],
        },
      });

      map.current.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'properties',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12,
        },
        paint: {
          'text-color': '#fff',
        },
      });

      map.current.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'properties',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-color': '#9792e3',
          'circle-radius': 7,
          'circle-stroke-width': 10,
          'circle-stroke-color': '#fff',
          'circle-stroke-opacity': 0.7,
          'circle-pitch-alignment': 'map',
          'circle-pitch-scale': 'viewport',
        },
      });
    });

    map.current.on('click', 'clusters', (e) => {
      const features = map.current.queryRenderedFeatures(e.point, {
        layers: ['clusters'],
      });

      const clusterId = features[0].properties.cluster_id;
      const pointCount = features[0].properties.point_count;
      const clusterSource = map.current.getSource('properties');
      clusterSource.getClusterLeaves(clusterId, pointCount, 0, (error, feat) => {
        const valuesImoveis = [];

        feat.forEach((point) => {
          valuesImoveis.push(point.properties.sigla);
        });
      });

      map.current.getSource('properties').getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) return;

        map.current.easeTo({
          center: features[0].geometry.coordinates,
          zoom,
        });
      });
    });

    map.current.on('click', 'unclustered-point', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();

      const codigo = e.features[0].properties.sigla;

      if (codigo) {
        // atualiza
      }

      map.current.flyTo({
        center: e.features[0].geometry.coordinates,
      });

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
    });

    map.current.on('mouseenter', 'clusters', () => {
      map.current.getCanvas().style.cursor = 'pointer';
    });

    map.current.on('mouseleave', 'clusters', () => {
      map.current.getCanvas().style.cursor = '';
    });
  }, []);

  useEffect(() => {
    function handleError(error) {
      const { code } = error;
      return code;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setLng(position.coords.longitude);
      setLat(position.coords.latitude);
    }, handleError);
  }, []);

  useEffect(() => {
    map.current.flyTo({
      center: [lng, lat],
    });
  }, [lng, lat]);

  return (
    <div className={container}>
      <div ref={mapContainer} className={canvas} />
    </div>
  );
}
