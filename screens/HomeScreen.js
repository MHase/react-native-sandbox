import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ListView,
} from 'react-native';
import { WebBrowser, Permissions, Asset } from 'expo';
import { List, ListItem, SearchBar, Header } from 'react-native-elements'
import { MonoText } from '../components/StyledText';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

const categories = [
  'stomatolog',
  'ortopeda',
  'chirurg',
  'dermatolog',
  'psychiatra',
  'psycholog',
  'internista',
  'laryngolog',
  'pediatra',
  'okulista',
  'neurolog',
  'endokrynolog',
  'urolog',
  'fizjoterapeuta',
  'neurochirurg',
  'kardiolog',
  'gastrolog',
  'dietetyk',
  'onkolog',
  'ortodonta',
  'psychoterapeuta',
  'alergolog',
  'radiolog',
  'lekarz medycyny estetycznej',
  'reumatolog',
  'weterynarz',
  'lekarz medycyny pracy',
  'pulmonolog',
  'diabetolog',
  'proktolog',
  'hematolog',
  'neurolog dziecięcy',
  'terapeuta',
  'logopeda',
  'nefrolog',
  'seksuolog',
  'anestezjolog',
  'położna',
  'lekarz chorób zakaźnych',
  'specjalista medycyny naturalnej',
  'diagnostyk',
  'ortopeda dziecięcy',
  'lekarz rehabilitacji medycznej',
  'laryngolog dziecięcy',
  'kardiolog dziecięcy',
  'homeopata',
  'lekarz w trakcie specjalizacji',
  'psychiatra dziecięcy',
  'flebolog',
  'kardiochirurg',
  'audiolog, foniatra',
  'immunolog',
  'genetyk',
  'geriatra',
  'androlog',
  'stomatolog dziecięcy',
  'patomorfolog',
  'optometrysta',
  'protetyk',
  'okulista dziecięcy',
  'bariatra',
  'biegły sądowy',
  'neonatolog',
  'hipertensjolog',
  'hepatolog',
  'transplantolog',
  'lekarz medycyny ratunkowej',
  'histopatolog',
  'chirurg stomatologiczny',
]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'DocPlanner'
  };

  state = {
    categories,
    token: null,
    notification: null,
    title: 'Hello World',
    body: 'Say something!',
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          containerStyle={{ backgroundColor: 'lightgray' }}
          inputStyle={{ backgroundColor: '#fff' }}
          lightTheme
          onChangeText={(e) => this.setState({ categories: categories.filter(category => category.includes(e)) })}
          onClearText={(e) => console.log(e)}
          autoCapitalize='none'
          placeholder='Type Here...'
        />


      <ScrollView contentContainerStyle={styles.contentContainer}>
        <List containerStyle={{ marginTop: 0 }}>
          {this.state.categories.map((category) => (
            <ListItem
              key={category}
              title={category}
            />
          ))}
        </List>
        <List>
          {list.map((l) => (
            <ListItem
              avatar={{uri:l.avatar_url}}
              key={l.name}
              title={l.name}
              hideChevron
            />
          ))}
        </List>



          {/* <SectionList
            renderItem={
              ({item, index, section}) => {
                return (
                  <View style={{ padding: 15, marginLeft: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: 'black', borderBottomWidth: 1 }}>
                    <Text key={index}>{item}</Text>
                    <Text key={index+'s'}>></Text>
                  </View>);
              }
            }
            renderSectionHeader={({section: {title}}) => (
              <Text style={{fontWeight: 'bold'}}>{title}</Text>
            )}
            sections={[
              {title: 'POPULAR SPECIALIZATIONS', data: categories},
            ]}
            keyExtractor={(item, index) => item + index}
          /> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainer: {
    // flex: 1,
  },
});
