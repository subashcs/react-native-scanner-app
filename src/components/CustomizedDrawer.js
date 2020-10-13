import {Button, Icon, Text} from 'native-base';
import React from 'react';
export default function CustomDrawerContent({navigation}) {
  return (
    <Button iconLeft transparent disabled>
      <Icon name="beer" />
      <Text>Save To My Collection</Text>
    </Button>
  );
}
