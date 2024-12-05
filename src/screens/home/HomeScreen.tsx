import {View, FlatList} from 'react-native';
import React from 'react';
import useStyles from './styles';
import HomeCard from '../../components/homeCard/HomeCard';

const HomeScreen = (props: any) => {
  const styles = useStyles();
  const arry = [
    'Vocabulary',
    'Sentences',
    'Dialogues',
    'Grammar',
    'Conjugation',
    'Bonus',
  ];
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={arry}
        numColumns={2}
        renderItem={({item, index}) => (
          <HomeCard
            index={index}
            title={item}
            onPress={() => props.navigation.navigate('PLAY_SOUND_SCREEN')}
          />
        )}
        contentContainerStyle={{alignItems: 'center'}}
      />
    </View>
  );
};

export default HomeScreen;
