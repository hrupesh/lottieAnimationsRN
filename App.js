import LottieView from 'lottie-react-native';
import React, {useRef} from 'react';
import {Animated, SafeAreaView, StatusBar, Text, View} from 'react-native';
import styles from './AppStyles';
import Assets from './assets';
import {ImageCard} from './ImageCard';
import {StaticData} from './StaticData';

const App = () => {
  const scrollPosition = useRef(new Animated.Value(0)).current;

  const handleScroll = ({nativeEvent}) => {
    const calculatedScrollPosition =
      nativeEvent.contentOffset.y /
      (nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height);
    scrollPosition.setValue(calculatedScrollPosition);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={'rgb(255, 255, 255)'}
        barStyle={'dark-content'}
      />
      <View style={styles.header}>
        <LottieView
          progress={scrollPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })}
          source={Assets.lottieFiles.planePath}
          colorFilters={[{keypath: 'Plane', color: 'rgb(255, 100, 0)'}]}
        />
        <Text style={styles.infoText}>
          {'Long Press Image to Like / Unlike'}
        </Text>
      </View>
      <Animated.FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        onScroll={handleScroll}
        data={StaticData}
        keyExtractor={item => item?.key}
        renderItem={({item}) => <ImageCard data={item} />}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default App;
