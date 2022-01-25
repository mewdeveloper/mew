import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { useTranslation } from 'react-i18next';
import { I18nManager } from 'react-native';
import SwitchButton from 'switch-button-react-native';



const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'Arabic' }
];

const Selector = () => {
  const { t,i18n  } = useTranslation();
  const selectedLanguageCode = i18n.language;

  const setLanguage = code => {
  I18nManager.forceRTL(false);
    return i18n.changeLanguage(code=== 1 ? "ar" : "en" )

  };

  return (
    <View style={{ flexDirection:'row',flexWrap: "wrap", padding:10}}>
    <View style={{width:'50%', justifyContent:'center'}}>
    <Text style={{fontSize:16}}>{t('navigate:languageSelector')}</Text>
    </View>
    <View  style={{width:'50%', alignItems:'flex-end'}}>
     <SwitchButton
           onValueChange={(val) => setLanguage(val)}
           text1="Arabic"
           text2="English"
           switchWidth = {150}
           switchBorderRadius = {5}
           switchBorderColor = '#002d93'
           switchBackgroundColor = '#fff'
           btnBorderColor = '#002d93'
           btnBackgroundColor = '#002d93'
            fontColor = '#002d93'
     />
     </View>
    </View>
  );
};


export default Selector;