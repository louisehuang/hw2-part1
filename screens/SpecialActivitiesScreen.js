import React, {useEffect } from 'react';
import { View,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COMMON_STYLES } from "../components/styles";
import { FontAwesome6 } from '@expo/vector-icons';
import PressableButton from "../components/PressableButton";
import ActivityList from '../components/ActivityList';

const SpecialActivitiesScreen = () => {
  const navigation = useNavigation();
  
  //go to add an activity screen, not editMode
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableButton
          customStyle={COMMON_STYLES.addButton}
            onPressFunction={() => navigation.navigate('Add An Activity', { editVersion: false })}
          >
          <Text style={COMMON_STYLES.addButton}>+</Text>
        </PressableButton>
      ),
    });
  }, [navigation]);

  

  return (

    <View style={COMMON_STYLES.container}>
      <ActivityList type ="special"
      navigation={navigation}/>
      
      
    </View>
  );
};





export default SpecialActivitiesScreen;
