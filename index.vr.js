import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Image
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      location: 'lovelace',
      bg: asset('lovelace2.jpg'),
      buttonTransform: [{translate: [-1, 2, -20]}]
      }
  }

  render() {


    return (
      <View>

        <Pano source={this.state.bg}/>




        <VrButton
          onClick={()=>this.setState(
            () => this.state.location === 'lovelace' ? {
              location: 'turing',
              bg: asset('turing.jpg'),
              buttonTransform: [{translate: [-6, 1, -30]}]
            } : {
              location: 'lovelace',
              bg: asset('lovelace2.jpg'),
              buttonTransform: [{translate: [-1, 2, -20]}]
            }
            )}
        >
        <Image
          style={{
            height: 2,
            width: 2,
            layoutOrigin: [0.5, 0.5],
            transform: this.state.buttonTransform
          }}
          source={asset('fi.png')}
        />
        </VrButton>

      </View>
    )
  }
}

/*
toggle() {
  if (this.state.location === 'lovelace'){
    this.setState({
      location: 'turing',
      bg: asset('turing.jpg'),
      buttonTransform: [{translate: [-1, 2, -20]}]
      }
    )
  } else if (this.state.location === 'turing'){
    this.setState({
      location: 'lovelace',
      bg: asset('lovelace2.jpg'),
      buttonTransform: [{translate: [-1, 2, -20]}]
    })
  }
}
*/

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
