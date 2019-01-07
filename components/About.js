import React, {Component} from 'react'
import { Text, View } from 'react-native'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutText: 'About The App'
        }
    }
    // menampilkan ui
    render() {
        const { deskripsi } = this.props
        const {aboutText} = this.state
        return (
            <View>
                <Text>{aboutText}</Text>
                <Text>{deskripsi}</Text>
            </View>
        )
    }
}

export default About