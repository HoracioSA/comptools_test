/* eslint-disable prettier/prettier */
import React, {Children, ReactNode, useState } from 'react'
import { Dimensions} from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { RectButton } from 'react-native-gesture-handler';
import {mix, useTiming} from 'react-native-redash'

import { Box, Text, theme } from '../Theme'

interface Tab{
    label: string,
    id: string
}
interface TabProps{
    tabs: Tab[];
    children: ReactNode
}

const {width, height} = Dimensions.get('window');

export default function Tabs({tabs, children}: TabProps) {
  const [index, setIndex] = useState(0);
  //const selectedTab = tabs[index];
  const transition = useTiming(index);

  const active_line = useAnimatedStyle(() => ({
    transform: [
      {translateX: mix(transition.value, width * 0.25, width * 0.75)},
    ],
  }));

  const tabContent = useAnimatedStyle(() => {
    return {
      transform: [{translateX: -width * transition.value}],
    };
  });
  return (
    <Box flex={1} marginTop="xl">
      <Box flexDirection="row" width={width} backgroundColor="gray_dark">
        {tabs.map((tab, i) => (
          <RectButton key={i} onPress={() => setIndex(i)} style={{flex: 1}}>
            <Box padding="m" style={{paddingBottom: theme.spacing.m}}>
              <Text textAlign="center" color={index ? "green" : "green"}>
                {tab.label}
              </Text>
            </Box>
          </RectButton>
        ))}
        <Animated.View
          style={[
            {
              position: 'absolute',
              backgroundColor: theme.colors.green,
              width: 50,
              height: 4,
              borderRadius: 10,
              left: -24,
              bottom: 0,
            },
            active_line,
          ]}
        />
      </Box>
      <Animated.View
        style={[
          {flex: 1, width: width * tabs.length, flexDirection: 'row'},
          tabContent,
        ]}>
        {Children.map(children, (child, index) => (
          <Box
            flex={1}
            key={index}
            width={width}
            height={height * tabs.length}
          >
              {child}
          </Box>
        ))}
      </Animated.View>
    </Box>
  );
}

// const styles = StyleSheet.create({
//   // anim:{
//   //     width:width * tabs.length,
//   //    flexDirection:"row",
//   // }
// });
