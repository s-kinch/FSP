import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('turing.jpg')}/>
        // <Text
        //   style={{
        //     // backgroundColor: '#777879',
        //     fontSize: 0.8,
        //     fontWeight: '400',
        //     layoutOrigin: [0.5, 0.5],
        //     paddingLeft: 0.2,
        //     paddingRight: 0.2,
        //     textAlign: 'center',
        //     textAlignVertical: 'center',
        //     transform: [{translate: [0, 0, -3]}],
        //   }}>
        //   yo
        // </Text>
        <VrButton
          style={{width: 0.7}}
          onClick={()=>this._onViewClicked()}>
            <Image style={{width:1, height:1}}
              source={asset('circle.png')}
              inset={[0.2,0.2,0.2,0.2]}
              insetSize={[0.05,0.45,0.55,0.15]} >
            </Image>
        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
