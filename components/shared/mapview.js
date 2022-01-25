import React, { Component }  from 'react';
import { Text, View,Image } from 'react-native';
import ArcGISMapView from 'react-native-arcgis-mapview'
import { setLicenseKey } from 'react-native-arcgis-mapview';

class Mapview extends Component {
constructor(props){
setLicenseKey('AAPK590782fbc34b4773a06e1d25ab4744a0hN_9EOKx-o0xADLrecEe0BQrKcZLlrDhJZMWodDTFKuFgDJR-X1XjBbj8kHQtZ-3');
    super(props);

}


render() {
 return(
        <ArcGISMapView ref={mapView => this.mapView = mapView} style={{flex:1}}
         initialMapCenter={[{latitude: 29.378586, longitude: 47.990341}]}
                  recenterIfGraphicTapped={true}
                  minZoom={70000000}
            basemapUrl='https://www.arcgis.com/home/item.html?id=979c6cc89af9449cbeb5342a439c6a76'
        />
 );
}

}

export default Mapview;