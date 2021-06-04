import React from "react";
import { Text, ScrollView, StyleSheet, View } from "react-native";
import { Cell, Section, TableView } from 'react-native-tableview-simple';

const cellPropsCustom = {
    cellStyle: 'Basic',
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    backgroundColor: 'white',
  };

const Orders = () => {
    return (
        <ScrollView>
            <TableView style={styles.cell}>
            <Section header="Book Your Order">
              <Cell
                cellStyle="RightDetail"
                title="Programming er 14 gusti"
                detail="Price : $30"
                titleTextColor="black"
                backgroundColor= 'white'
              />
              <Cell
                cellStyle="RightDetail"
                title="Hablu der jonno programming"
                detail="Price : $40"
                titleTextColor="black"
                backgroundColor= 'white'
              />
              <Cell
                cellStyle="RightDetail"
                title="Bolod to boss"
                detail="Price : $50"
                titleTextColor="black"
                backgroundColor= 'white'
              />
              <Cell
                cellStyle="RightDetail"
                title="Eloquent JavaScript: A Modern Introduction to Programming"
                detail="Price : $50"
                titleTextColor="black"
                backgroundColor= 'white'
              />
              <Cell
                cellStyle="RightDetail"
                title="Total"
                detail="Price : $170"
                titleTextColor="black"
                backgroundColor= 'white'
              />
            </Section>
            </TableView>
    
            <Text 
                style={styles.button} 
                onPress={() => Linking.openURL('https://zihanjashim2121.medium.com/a-brief-journey-to-react-c703b3bdeb42')}> Place Your Order
            </Text> 

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "green",
        color: "white",
        width: 150,
        height: 30,
        padding: 5,
        margin: 5,
        borderRadius: 8,
        fontSize: 15,
        textAlign:'center'
      },

});

export default Orders;
