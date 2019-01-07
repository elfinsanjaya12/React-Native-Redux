import React from 'react'
import { View, Text } from 'react-native'

// fuction component
const AboutScreen = (props) => {
    const text =  props.navigation.getParam('text', 'ini adlaah nilai default param text')
    return (
        <View>
            <Text>Im About</Text>
            <Text>{text}</Text>
        </View>
    )
}

// class AboutScreen extends React.Component {
//     constructor(props){
//         this.state = {
//             text: 'oke'
//         }
//     }
//     render() {
//         const text =  props.navigation.getParam('text', 'ini adlaah nilai default param text')
//         return (
//             <View>
//                 <Text>{text}</Text>
//             </View>
//         )
//     }
// }

export default AboutScreen