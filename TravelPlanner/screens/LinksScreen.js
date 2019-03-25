import React from 'react';
import { AppRegistry, FlatList, SectionList, ScrollView, StyleSheet, Button, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { CardStack, Card } from 'react-cardstack';



export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Days',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Add Day"
        color="#fff" //f4511e for Android
      />
    ),

  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Monday'},
            {key: 'Tuesday'},
            {key: 'Wednesday'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});
