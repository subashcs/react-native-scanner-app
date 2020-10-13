import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Card, CardItem, Icon, Spinner} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

export default function (props) {
  const [loading, setLoading] = useState(false);
  const handleScan = (e) => {
    console.log('scanning...');
    setLoading(true);

    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        console.log(image);
        props.navigation.navigate('ImageDetail');
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const submitStamp = () => {};
  return (
    <View style={styles.container}>
      {!loading ? (
        <Card>
          <CardItem bordered style={{marginBottom: 4}}>
            <Button style={styles.button} transparent onPress={handleScan}>
              <Icon name="scan" />
              <Text>Scan Stamp</Text>
            </Button>
          </CardItem>
          <CardItem button disabled>
            <Button transparent disabled block>
              <Icon name="eye" />

              <Text>View My Catalog</Text>
            </Button>
          </CardItem>
        </Card>
      ) : (
        <Spinner color="blue" size="small" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    marginVertical: 5,
  },
});
