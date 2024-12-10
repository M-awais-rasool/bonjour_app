import {View, FlatList, StatusBar} from 'react-native';
import React from 'react';
import useStyles from './styles';
import HomeCard from '../../components/homeCard/HomeCard';
import {conjugation, dialogues, grammar, sentences, vocabulary} from './data';

const HomeScreen = (props: any) => {
  const styles = useStyles();

  const arry = [
    {name: 'Vocabulary', icon: 'book'},
    {name: 'Sentences', icon: 'comment'},
    {name: 'Dialogues', icon: 'comments'},
    {name: 'Grammar', icon: 'language'},
    {name: 'Conjugation', icon: 'repeat'},
  ];

  const data: any = {
    Vocabulary: vocabulary,
    Sentences: sentences,
    Dialogues: dialogues,
    Grammar: grammar,
    Conjugation: conjugation,
    Bonus: vocabulary,
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        hidden={false}
        backgroundColor={'#ffff'}
        barStyle={'dark-content'}
      />
      <View style={styles.martgin} />
      <FlatList
        data={arry}
        numColumns={2}
        renderItem={({item, index}) => (
          <HomeCard
            index={index}
            title={item.name}
            icon={item.icon}
            width={index >= arry.length - 1 ? '100%' : '48%'}
            onPress={() =>
              props.navigation.navigate('PLAY_SOUND_SCREEN', {
                category: item.name,
                data: data[item.name],
              })
            }
          />
        )}
        contentContainerStyle={{alignItems: 'center'}}
      />
    </View>
  );
};

export default HomeScreen;
