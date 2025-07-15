

import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AboutScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const existingProfiles = params.profiles ? JSON.parse(params.profiles) : [];

  const [user, setUser] = useState({ name: '', age: '', position: '', email: '' });

  const handleSave = () => {
    if (user.name && user.email) {                                        // validation
      const newProfile = { ...user, id: Date.now().toString() };           // creating new profile object
      const updatedProfiles = [...existingProfiles, newProfile];
      Alert.alert('Success', 'User profile added!');
      setUser({ name: '', age: '', position: '', email: '' });
      router.push({ pathname: '/user', params: { profiles: JSON.stringify(updatedProfiles) } });   //updated data is sent in json in string through route params
    } else {
      Alert.alert('Error', 'Name and Email are required!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={user.name}
        onChangeText={(text) => setUser({ ...user, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={user.age}
        onChangeText={(text) => setUser({ ...user, age: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Position"
        value={user.position}
        onChangeText={(text) => setUser({ ...user, position: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(text) => setUser({ ...user, email: text })}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
  },
});