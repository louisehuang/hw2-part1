import { Text, View } from 'react-native'
import React from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {database} from "../firebase-files/firebaseSetup"
import { Entypo } from '@expo/vector-icons';
import { COMMON_STYLES } from "../components/styles";
import PressableButton from "./PressableButton";


export default function ActivitiesList({ type, navigation }) {
    const [activities, setActivities] = useState([]);

  useEffect(() => {
    const activitiesCollection = collection(database, "activities");

    // Create a query based on the type
    let queryActivities;
    if (type === "special") {
      queryActivities = query(
        activitiesCollection,
        where("special", "==", true)
      );
    } else {
      queryActivities = activitiesCollection;
    }

    // Subscribe to the query
    const unsub = onSnapshot(queryActivities, (snapshot) => {
      const fetchedActivities = [];
      snapshot.forEach((doc) => {
        fetchedActivities.push({ id: doc.id, ...doc.data() });
      });
      fetchedActivities.sort((a, b) => new Date(b.date) - new Date(a.date));
      setActivities(fetchedActivities);
    });

    return () => unsub();
  }, [type]); 

  // Handle the edit activity press
  function handleEdit(activity) {
    navigation.navigate("Add An Activity", {
      editMode: true,
      activityId: activity.id,
    });
  }

  return (
    <View style={COMMON_STYLES.container}>
      
      <FlatList
        data={activities}
        keyExtractor={(activity) => activity.id}
        renderItem={({ activity }) => (
          <PressableButton
            customStyle={COMMON_STYLES.resetButton}
            onPressFunction={() => handleEdit(activity)}
          >
            <Text style={COMMON_STYLES.activityText}>{item.type}</Text>
          
          <View style={COMMON_STYLES.specialContainer}>
            <View style={COMMON_STYLES.iconInfo}>
            {item.special && <Entypo name="warning" size={15} color="gold" />}
            </View>

            <View style={COMMON_STYLES.activityInfo}>
              <Text style={COMMON_STYLES.activityInfoText}>     
                {activity.formattedDate}
              </Text>
            </View>
              
            <View style={COMMON_STYLES.activityInfo}>  
              <Text style={COMMON_STYLES.activityInfoText}>
                {activity.duration} min</Text>
              </View>  
            </View>
          </PressableButton>
        )}
      />
    </View>
  );
}


