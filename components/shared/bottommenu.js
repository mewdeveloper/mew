import React from 'react';
import { Text, View,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';

import addComplaint from '../complaints/addcomplaint';
import settings from '../settings/settingshome';

import styles from '../../resources/styles/site';
import mewlogo from '../../resources/images/mew_en.png';



function LogoTitle() {
  return(

  <View style={{ flexDirection: "row",flex:1,height:65 }} >
    <Image
      style={{ width:150, height: 60,alignSelf:'center' }}
      source={mewlogo}
    />
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function bottommenu() {
const { t } = useTranslation();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Add" component={addComplaint}
       options={{
                 tabBarLabel: t('common:add') ,
                 tabBarLabelStyle:{fontSize:14},
                 tabBarInactiveBackgroundColor:'#023DC3',
                 tabBarActiveBackgroundColor:'#3262cf',
                 tabBarInactiveTintColor:'#ffffff',
                 tabBarActiveTintColor:'#ffffff',
                 tabBarIcon: ({ color, size }) => (
                   <MaterialIcons name="add-circle-outline" color={color} size={size} />
                 ),
                 headerStyle: {
                   backgroundColor: '#fbfbfb',
                   height:65
                 },
                 headerTitle: (props) => <LogoTitle {...props} /> }
               }/>
       <Tab.Screen name="Settings" component={settings}

             options={{
                 tabBarLabel: t('common:settings') ,
                 tabBarLabelStyle:{fontSize:14},
                  tabBarInactiveBackgroundColor:'#023DC3',
                  tabBarActiveBackgroundColor:'#3262cf',
                  tabBarInactiveTintColor:'#ffffff',
                 tabBarActiveTintColor:'#ffffff',
                 tabBarIcon: ({ color, size }) => (
                   <MaterialIcons name="settings" color={color} size={size} />
                 ),
                 headerStyle: {
                   backgroundColor: '#fbfbfb',
                   height:65
                 },
                   headerTitle: (props) => <LogoTitle {...props} /> }
                 }/>
    </Tab.Navigator>
  );
}
