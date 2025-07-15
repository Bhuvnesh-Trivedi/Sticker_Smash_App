



// import { useLocalSearchParams, useRouter } from 'expo-router';
// import React from 'react';
// import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export default function UserScreen() {
//   const router = useRouter();
//   const params = useLocalSearchParams();
//   const parsedProfiles = params.profiles ? JSON.parse(params.profiles) : [];

//   const handleDelete = (id: string) => {
//     const updated = parsedProfiles.filter((user) => user.id !== id);
//     router.replace({ pathname: '/user', params: { profiles: JSON.stringify(updated) } });
//   };

//   const handleAddUser = () => {
//     router.push({ pathname: '/about', params: { profiles: JSON.stringify(parsedProfiles) } });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Profiles</Text>
//       {parsedProfiles.length === 0 ? (
//         <Text style={styles.noData}>No profiles found.</Text>
//       ) : (
//         <FlatList
//           data={parsedProfiles}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Text>Name: {item.name}</Text>
//               <Text>Age: {item.age}</Text>
//               <Text>Position: {item.position}</Text>
//               <Text>Email: {item.email}</Text>
//               <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteBtn}>
//                 <Text style={styles.deleteText}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         />
//       )}
//       <Button title="Add New User" onPress={handleAddUser} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 24, marginBottom: 20 },
//   noData: { fontSize: 16, color: '#666', marginBottom: 20 },
//   card: { backgroundColor: '#f0f0f0', padding: 15, marginBottom: 15, borderRadius: 8 },
//   deleteBtn: { backgroundColor: '#ff4d4d', padding: 8, marginTop: 10, borderRadius: 5 },
//   deleteText: { color: '#fff', textAlign: 'center' },
// });





// best code-----



// import { useLocalSearchParams, useRouter } from 'expo-router';
// import React, { useState } from 'react';
// import {
//   Alert,
//   Button,
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// export default function UserScreen() {
//   const router = useRouter();
//   const params = useLocalSearchParams();
//   const parsedProfiles = params.profiles ? JSON.parse(params.profiles) : [];

//   const [isVisible, setIsVisible] = useState(false);

//   const handleDelete = (id: string) => {
//     const updated = parsedProfiles.filter((user) => user.id !== id);
//     router.replace({ pathname: '/user', params: { profiles: JSON.stringify(updated) } });
//   };

//   const handleAddUser = () => {
//     router.push({ pathname: '/about', params: { profiles: JSON.stringify(parsedProfiles) } });
//   };

//   const toggleVisibility = () => {
//     if (!isVisible) {
//       Alert.alert('⚠️ Privacy Warning', 'Screenshots are strictly discouraged on this screen.');
//     }
//     setIsVisible((prev) => !prev);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>User Profiles</Text>

//       <Button
//         title={isVisible ? 'Hide User Info' : 'Show User Info'}
//         onPress={toggleVisibility}
//         color={isVisible ? '#ff4d4d' : '#4CAF50'}
//       />

//       {isVisible ? (
//         parsedProfiles.length === 0 ? (
//           <Text style={styles.noData}>No profiles found.</Text>
//         ) : (
//           <View style={styles.warningBanner}>
//             <Text style={styles.bannerText}>🚫 Do not capture or share this information.</Text>
//           </View>
//         ) && (
//           <FlatList
//             data={parsedProfiles}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.card}>
//                 <Text>Name: {item.name}</Text>
//                 <Text>Age: {item.age}</Text>
//                 <Text>Position: {item.position}</Text>
//                 <Text>Email: {item.email}</Text>
//                 <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteBtn}>
//                   <Text style={styles.deleteText}>Delete</Text>
//                 </TouchableOpacity>
//               </View>
//             )}
//           />
//         )
//       ) : (
//         <View style={styles.notice}>
//           <Text style={styles.hiddenText}>
//             👁️‍🗨️ Sensitive user information is hidden for privacy.
//           </Text>
//         </View>
//       )}

//       <Button title="Add New User" onPress={handleAddUser} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 24, marginBottom: 20 },
//   noData: { fontSize: 16, color: '#666', marginBottom: 20 },
//   card: {
//     backgroundColor: '#f0f0f0',
//     padding: 15,
//     marginBottom: 15,
//     borderRadius: 8,
//   },
//   deleteBtn: {
//     backgroundColor: '#ff4d4d',
//     padding: 8,
//     marginTop: 10,
//     borderRadius: 5,
//   },
//   deleteText: { color: '#fff', textAlign: 'center' },
//   warningBanner: {
//     backgroundColor: '#fff0d6',
//     padding: 10,
//     borderRadius: 6,
//     marginBottom: 15,
//   },
//   bannerText: { color: '#d9534f', fontWeight: 'bold', textAlign: 'center' },
//   notice: {
//     marginTop: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   hiddenText: {
//     fontSize: 16,
//     color: '#555',
//     textAlign: 'center',
//     padding: 20,
//   },
// });








/// the very best code--


import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function UserScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const parsedProfiles = params.profiles ? JSON.parse(params.profiles) : [];

  const [isVisible, setIsVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState('');

  const PASSWORD = '123';

  const handleToggle = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setModalVisible(true); // prompt password before showing
    }
  };

  const verifyPassword = () => {
    if (password === PASSWORD) {
      setIsVisible(true);
      setModalVisible(false);
      setPassword('');
    } else {
      Alert.alert('❌ Incorrect Password', 'Access denied.');
      setPassword('');
    }
  };

  const handleDelete = (id: string) => {
    const updated = parsedProfiles.filter((user) => user.id !== id);
    router.replace({ pathname: '/user', params: { profiles: JSON.stringify(updated) } });
  };

  const handleAddUser = () => {
    router.push({ pathname: '/about', params: { profiles: JSON.stringify(parsedProfiles) } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profiles</Text>

      <Button
        title={isVisible ? 'Hide User Info' : 'Show User Info'}
        onPress={handleToggle}
        color={isVisible ? '#ff4d4d' : '#4CAF50'}
      />

      {isVisible ? (
        parsedProfiles.length === 0 ? (
          <Text style={styles.noData}>No profiles found.</Text>
        ) : (
          <FlatList
            data={parsedProfiles}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text>Name: {item.name}</Text>
                <Text>Age: {item.age}</Text>
                <Text>Position: {item.position}</Text>
                <Text>Email: {item.email}</Text>
                <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteBtn}>
                  <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )
      ) : (
        <Text style={styles.hidden}>👁️ User data is hidden</Text>
      )}

      <Button title="Add New User" onPress={handleAddUser} />

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>🔐 Enter Password</Text>
            <TextInput
              secureTextEntry
              placeholder="Enter password"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
            <Button title="Submit" onPress={verifyPassword} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} color="#999" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  noData: { fontSize: 16, color: '#666', marginBottom: 20 },
  hidden: { marginVertical: 30, fontSize: 16, color: '#555', textAlign: 'center' },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  deleteBtn: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    marginTop: 10,
    borderRadius: 5,
  },
  deleteText: { color: '#fff', textAlign: 'center' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '80%',
    elevation: 5,
  },
  modalTitle: { fontSize: 18, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    borderRadius: 6,
  },
});