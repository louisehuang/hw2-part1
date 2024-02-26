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
            onPressFunction={() => navigation.navigate('Add An Activity', { editMode: false })}
          >
          <Text>+</Text>
        </PressableButton>
      ),
    });
  }, [navigation]);

  // useEffect(() => {
  //   navigation.setOptions({
  //     //title: editMode ? "Edit" : "Add an Activity",
  //     headerRight: () => (
  //       <PressableButton
  //         customStyle={COMMON_STYLES.deleteButton}
  //         onPressFunction={handleDelete}
  //       >
  //         {editMode && <AntDesign name="delete" size={24} color="white" />}
  //       </PressableButton>
  //     ),
  //   });
  // }, [editMode]);
  

  return (

    <View style={COMMON_STYLES.container}>
      <ActivityList type ="special"
      navigation={navigation}/>
      
      
    </View>
  );
};





export default SpecialActivitiesScreen;
