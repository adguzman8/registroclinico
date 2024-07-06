import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';



// Create Document Component
function AnamnesisDoc( props) {
// Create styles
const styles = StyleSheet.create({
  page: {
    display:"flex",
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight:'800'
  }

});

  return (
    <Document>
      <Page size="Letter" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Anamnesis</Text>
          <Text style={styles.subtitle}>Datos Paciente:</Text>
          <Text>{props.data[4].name} {props.data[4].lastname}</Text>
          <Text>Nombre de los datos</Text>
          <Text>Nombre de los datos</Text>
          <Text>Alfredo Guzman</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  )

}
export { AnamnesisDoc }