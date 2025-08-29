import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Civic Issue Reporting Mobile App</Text>
      <Button title="Report Issue" onPress={() => {}} />
    </SafeAreaView>
  );
}