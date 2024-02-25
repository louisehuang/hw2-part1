import { SelectList } from "react-native-dropdown-select-list";
import React, { useEffect, useState } from "react";
import { COMMON_STYLES } from './styles';

export default function DorpDownPicker({
    editMode,
    activity,
    onChangeActivity,
  }) {
    const [selected, setSelectedActivity] = useState("");
    
    useEffect(() => {
        setSelectedActivity(activity);
    }, [activity]);

function handleEditActivity(activity) {
    onChangeActivity(activity);
    setSelectedActivity(activity);
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

  const defaultSelected = selected ? { key: selected, value: selected } : null;

    return (
        <SelectList
        data={activityOptions}
        setSelected={handleEditActivity}
        placeholder="Select An Activity"
        save="value"
        defaultSelected={editMode ? defaultSelected : ""}
        dropdownTextStyles={COMMON_STYLES.dropdownText}
        />
);
}




