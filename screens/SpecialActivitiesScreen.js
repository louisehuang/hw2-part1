import React, { useContext, useEffect } from 'react';
import { View,Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COMMON_STYLES } from "../components/styles";

import PressableButton from "../components/PressableButton";
import ActivityList from '../components/ActivityList';
import { AntDesign } from "@expo/vector-icons";

const SpecialActivitiesScreen = () => {
  const navigation = useNavigation();
  

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableButton
          customStyle={COMMON_STYLES.addButton}
            onPressFunction={() => navigation.navigate('Add An Activity', { editVersion: false })}
          >
          <Text>+</Text>
        </PressableButton>
      ),
    });
  }, [navigation]);

  // useEffect(() => {
  //   navigation.setOptions({
  //     //title: editVersion ? "Edit" : "Add an Activity",
  //     headerRight: () => (
  //       <PressableButton
  //         customStyle={COMMON_STYLES.deleteButton}
  //         onPressFunction={handleDelete}
  //       >
  //         {editVersion && <AntDesign name="delete" size={24} color="white" />}
  //       </PressableButton>
  //     ),
  //   });
  // }, [editVersion]);
  

  return (

    <View style={COMMON_STYLES.container}>
      <ActivityList type ="special"
      navigation={navigation}/>
      
      
    </View>
  );
};





export default SpecialActivitiesScreen;
