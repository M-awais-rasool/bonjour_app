import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Tts from 'react-native-tts';
import useStyles from './styles';
import {useTheme} from '../../contextProvider/ContextProvider';

const speakWord = (word: string) => {
  Tts.speak(word);
};

const PlaySoundScreen = (props: any) => {
  const {category, data} = props.route.params;
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const styles = useStyles();
  const {theme} = useTheme();

  useEffect(() => {
    Tts.setDefaultRate(0.4);
    return () => {
      Tts.stop();
    };
  }, []);

  const handlePress = (word: string) => {
    Tts.stop();
    speakWord(word);
    setActiveWord(word);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Image source={require('../../resource/goBack.png')} />
      </TouchableOpacity>
      <Text style={styles.youText}>
        {'YOU'}
        <Text style={styles.frenchText}>{'ENGLISH'}</Text>
      </Text>
      <Text style={styles.subText}>{'Learn by listening repeatedly'}</Text>
      <View style={styles.subContainer}>
        <ScrollView>
          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <Pressable
                key={index}
                style={[styles.wordButton]}
                onPress={() => handlePress(item.name)}
                android_ripple={{color: 'transparent'}}>
                <Image
                  style={{
                    tintColor:
                      activeWord !== item.name
                        ? theme.black
                        : theme.textColor29,
                  }}
                  source={require('../../resource/play.png')}
                />
                <Text
                  style={[
                    styles.wordText,
                    activeWord === item.name && styles.activeText,
                  ]}>
                  {item.name}
                </Text>
              </Pressable>
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default PlaySoundScreen;
