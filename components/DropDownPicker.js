import { SelectList } from "react-native-dropdown-select-list";
import React, { useEffect, useState } from "react";
import { COMMON_STYLES } from './styles';

const DorpDownPicker= ({  editMode, activity, onChangeActivity}) => {
  
  const [selected, setSelectedActivity] = useState("");
  
  useEffect(() => {
    setSelectedActivity(activity);
  }, [activity]);
  //console.log("Activity:", activity);

  function handleEditActivity(activity) {
      if (selected !== activity) {
          onChangeActivity(activity);
          setSelectedActivity(activity);
      }
  }
  const activityOptions = [
    {  key: '1', value: 'Walking' },
    {  key: '2', value: 'Running' },
    {  key: '3', value: 'Swimming' },
    {  key: '4', value: 'Weights' },
    {  key: '5', value: 'Yoga' },
    {  key: '6', value: 'Cycling' },
    {  key: '7', value: 'Hiking' },
  ];
  let placeholder = "Select An Activity";
  if (editMode && activity) {
    placeholder = activity;
  }

  let defaultSelected = null;
  if (editMode && selected) {
      defaultSelected = { key: selected, value: selected };
  }
  return (
      <SelectList
      data={activityOptions}
      setSelected={handleEditActivity}
      placeholder={placeholder}
      placeholderStyle={COMMON_STYLES.dropdownText}
      save="value"
      defaultSelected={defaultSelected}
      inputStyles={COMMON_STYLES.inputText}
      dropdownTextStyles={COMMON_STYLES.dropdownText}
      search={false}
      />
);
};
export default DorpDownPicker;