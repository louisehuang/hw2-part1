import React, { useContext, useEffect } from 'react';
import { View,Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COMMON_STYLES } from "../components/styles";
import { Entypo } from '@expo/vector-icons';
import PressableButton from "../components/PressableButton";
import ActivityList from '../components/ActivityList';

const SpecialActivitiesScreen = () => {
  const navigation = useNavigation();
  

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableButton
          customStyle={COMMON_STYLES.addButton}
            onPressFunction={() => navigation.navigate('Add An Activity')}
          >
          <Text>+</Text>
        </PressableButton>
      ),
    });
  }, [navigation]);

  return (

    <View style={COMMON_STYLES.container}>
      <ActivityList type ="specal"/>
      
      
    </View>
  );
};





export default SpecialActivitiesScreen;
