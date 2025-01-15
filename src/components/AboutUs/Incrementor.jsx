import React, { useState, useEffect } from 'react';

const Incrementor = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [jobs, setJobs] = useState(0);
  const [internships, setInternships] = useState(0);

  const targetValues = {
    projects: 110,
    clients: 400,
    jobs: 1000,
    internships: 2000,
  };

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
      }, 10); // Set interval to 100 milliseconds for faster increments
    };

    increment(setProjects, targetValues.projects, 1);
    increment(setClients, targetValues.clients, 10);
    increment(setJobs, targetValues.jobs, 10);
    increment(setInternships, targetValues.internships, 10);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.labelsRow}>
        <p style={styles.labelText}>Projects</p>
        <p style={styles.labelText}>Clients</p>
        <p style={styles.labelText}>Jobs</p>
        <p style={styles.labelText}>Internships</p>
      </div>
      <div style={styles.numbersRow}>
        <div style={styles.numberContainer}>
          <p style={styles.numberText}>
            {projects.toLocaleString()} {projects === targetValues.projects && '+'}
          </p>
        </div>
        <div style={styles.divider} />
        <div style={styles.numberContainer}>
          <p style={styles.numberText}>
            {clients.toLocaleString()} {clients === targetValues.clients && '+'}
          </p>
        </div>
        <div style={styles.divider} />
        <div style={styles.numberContainer}>
          <p style={styles.numberText}>
            {jobs.toLocaleString()} {jobs === targetValues.jobs && '+'}
          </p>
        </div>
        <div style={styles.divider} />
        <div style={styles.numberContainer}>
          <p style={styles.numberText}>
            {internships.toLocaleString()} {internships === targetValues.internships && '+'}
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  labelsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    textAlign: 'center',
  },
  numbersRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', // Center the row
    alignItems: 'center', // Align items vertically
    width: '100%',
    textAlign: 'center',
    marginTop: '1px',
  },
  numberContainer: {
    flex: 1,
    textAlign: 'center',
  },
  divider: {
    width: '1px', // Width of the divider
    height: '114px', // Height to match the number text
    backgroundColor: '#555555', // Color of the divider
  },
  labelText: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#0437ca',
    flex: 1,
    textAlign: 'center',
  },
  numberText: {
    fontSize: '54px',
    fontWeight: 'bold',
    color: '#0437ca',
    flex: 1,
    textAlign: 'center',
  },
};

export default Incrementor;
