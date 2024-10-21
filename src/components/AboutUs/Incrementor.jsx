import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Incrementor = () => {
  const [jobSeekers, setJobSeekers] = useState(0);
  const [freelanceRecruiters, setFreelanceRecruiters] = useState(0);
  const [vendors, setVendors] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    // Function to increment numbers gradually
    const increment = (setFunction, targetValue, incrementAmount) => {
      let value = 0;
      const interval = setInterval(() => {
        value += incrementAmount;
        if (value >= targetValue) {
          value = targetValue;
          clearInterval(interval);
        }
        setFunction(value);
      }, 50); // Adjust the speed of increment
    };

    increment(setJobSeekers, 15000, 300);
    increment(setFreelanceRecruiters, 1500, 30);
    increment(setVendors, 100, 2);
    increment(setClients, 40, 1);

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>Job Seekers: {jobSeekers.toLocaleString()}</Text>
      <Text style={styles.numberText}>Freelance Recruiters: {freelanceRecruiters.toLocaleString()}</Text>
      <Text style={styles.numberText}>Vendors: {vendors.toLocaleString()}</Text>
      <Text style={styles.numberText}>Clients: {clients.toLocaleString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 24,
    marginVertical: 10,
  },
});

export default Incrementor;
