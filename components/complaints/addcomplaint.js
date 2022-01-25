import React, { useState,useEffect  } from 'react';
import { Text,TextInput, View,StyleSheet,ScrollView,TouchableHighlight,Modal } from 'react-native';
import { Form, FormItem,Picker,Label  } from 'react-native-form-component';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';

import complaintService from '../../services/complaintService'
import MapView from '../shared/mapview';

function LocationMap() {
const { t } = useTranslation();
const [visible, setVisible] = useState(false);
  return(
    <View>
    <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{flex:1}}>
            <View style={{ backgroundColor:'#023DC3', height:50,padding:10}}>
              <TouchableHighlight
                onPress={() => {
                  setVisible(false);
                }}>
                <View style={{ flexDirection:'row'}}>
                <Icon name="chevron-left" size={30}  color='#ffffff' />
                 <Text style={{fontSize:18,  color:'#ffffff',marginLeft:10 }}>{t('common:back')}</Text>
                </View>
              </TouchableHighlight>
            </View>
            <MapView />
          </View>
        </Modal>
    <TouchableHighlight onPress={()=>{setVisible(true);}}>
         <View>
             <Icon name="crosshairs" size={30}  color='#023DC3' />
         </View>
     </TouchableHighlight>
     </View>
  );
}

export default function addComplaint() {
const { t } = useTranslation();
const [types, setTypes] = useState([]);
const [selectedType, setSelectedType] = useState([0]);
const [subTypes, setSubtypes] = useState([]);
const [selectedSubtype, setSelectedSubtype] = useState(0);

useEffect(() => {

complaintService.getComplaintTypes().then(data=>{
console.warn('test');
    setTypes(data);
});
complaintService.getComplaintSubtypes(selectedSubtype).then(data=>{
    setSubtypes(data);
});

}, []);
  return (
  <ScrollView>
  <View style={{paddingLeft:15,paddingRight:15,paddingTop:10}}>
   <Text style={{fontSize:18,paddingBottom:10, fontWeight:'bold'}}>{t('common:addComplaintDesc')}</Text>
    <Form  onButtonPress={() => console.warn('do something')}
    buttonStyle={{backgroundColor:'#023DC3', marginTop:0}}>
        <Picker
buttonStyle={styles.textInput}
            items={types}
            placeholder={t('common:selectType')}
            onSelection={(item) => setSelectedType(item.value)}
          />
           <Picker
           buttonStyle={styles.textInput}
           items={subTypes}
           placeholder={t('common:selectSubtype')}
           onSelection={(item) => setSelectedSubtype(item.value)}
                    />

        <FormItem
           placeholder={t('common:enterPaci')}
           isRequired
           textInputStyle={styles.textInput}
           children=<LocationMap/>
          />
          <FormItem
            placeholder={t('common:enterName')}
            isRequired
            textInputStyle={styles.textInput}
           />
           <FormItem
            placeholder={t('common:enterPhone')}
            isRequired
            textInputStyle={styles.textInput}
           />
           <FormItem
           placeholder={t('common:enterRemarks')}
           textInputStyle={styles.textInput}
           />
      </Form>
      </View>
      </ScrollView>
  );

}
const styles = StyleSheet.create({
    textInput: {
        borderBottomColor: '#023DC3',
        borderBottomWidth: 0.5,
        height:30,
        marginTop:5
    }
});