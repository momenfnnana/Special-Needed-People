import React, { useState } from 'react';
import { View, Text, Animated, PanResponder, Dimensions } from 'react-native';
import IntroCardData from '../FakeData/IntroCard'
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;
const IntroCard = () => {
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestrue) => {
            position.setValue({ x: gestrue.dx, y: gestrue.dy })
        },
        onPanResponderRelease: (event, gestrue) => {
            if (gestrue.dx > SWIPE_THRESHOLD) {
                forceSwipe('right')
            } else if (gestrue.dx < -SWIPE_THRESHOLD) {
                forceSwipe('left')
                console.log("swipte Left");
            } else {
                resetPosition()
            }
        }
    })

    const [panResponderState, setPanResponderState] = useState(panResponder);
    const [positionState, setPositionState] = useState(position);

    const forceSwipe = (direction) => {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(positionState, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION,
            useNativeDriver: false
        }).start(() => onSwipeComplete(direction));
    }

    const onSwipeComplete = (direction) => {
        const { onSwipeLeft, onSwipeRight } = props;
        direction === 'right' ? onSwipeRight() : onSwipeLeft();
    }

    const resetPosition = () => {
        Animated.spring(positionState, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
        }).start()
    }

    const getCardStyle = () => {
        const rotate = positionState.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        })
        return {
            ...positionState.getLayout(),
            transform: [{ rotate }]
        }
    }
    return (
        <View>
            {
                IntroCardData.map((i, index) => {
                    if (index === 0) {
                        return (
                            <Animated.View
                                key={index.toString()}
                                style={getCardStyle()}
                                {...panResponderState.panHandlers}
                            >
                                <Text>{i.title}</Text>
                            </Animated.View>
                        )
                    }
                    return (
                        <Text key={index.toString()}>{i.title}</Text>
                    )
                })
            }
        </View>
    )
}
export default IntroCard;