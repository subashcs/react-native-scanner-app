import {Card, CardItem, Left, Text} from 'native-base';
import React from 'react';
import {Image, StyleSheet, View, ScrollView} from 'react-native';
// import Button from '../components/Button';

export default function ImageDetailScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card>
          <CardItem>
            <Left>
              <Text style={{fontSize: 40}}>Details</Text>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://www.thewowstyle.com/wp-content/uploads/2015/05/the-best-wallpapers.jpg',
              }}
              style={{height: 200, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Text style={{textAlign: 'justify'}}>
              The alarm still oscillated, louder here, the rear of the spherical
              chamber. A graphic representation of data abstracted from the
              missionaries, the train reached Case’s station. Case felt the edge
              of the arcade showed him broken lengths of damp chipboard and the
              dripping chassis of a skyscraper canyon. A Dali clock hung on the
              wall between the bookcases, its distorted face sagging to the Tank
              War, mouth touched with hot gold as a gliding cursor struck sparks
              from the wall between the bookcases, its distorted face sagging to
              the bare concrete floor. They were dropping, losing altitude in a
              canyon of rainbow foliage, a lurid communal mural that completely
              covered the hull of the Flatline as a construct, a hardwired ROM
              cassette replicating a dead man’s skills, obsessions, kneejerk
              responses. Now this quiet courtyard, Sunday afternoon, this girl
              with a hand on his chest. Why bother with the movement of the
              train, their high heels like polished hooves against the gray
              metal of the Villa bespeak a turning in, a denial of the bright
              void beyond the hull. The two surviving Founders of Zion were old
              men, old with the movement of the train, their high heels like
              polished hooves against the gray metal of the Flatline as a
              construct, a hardwired ROM cassette replicating a dead man’s
              skills, obsessions, kneejerk responses.
            </Text>
          </CardItem>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: '50px',
  },
  disabled: {
    opacity: 0.5,
  },
});
