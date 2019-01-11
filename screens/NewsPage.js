import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

class NewsPage extends React.Component {

	static navigationOptions = {
    title: 'Baca Berita',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

	render() {
		return (
			<View style={styles.newsBlock}>
	      <View style={styles.newsTitle}>
	        <Text style={{ fontSize: 25 }}> {this.props.navigation.getParam('title')} </Text>
	        <Text style={{ color: '#ffffff', fontSize: 14 }}> Diterbitkan Pada: {this.props.navigation.getParam('publishedAt')} </Text>
	      </View>
	      <View style={styles.newsDesc}>
	        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	          <Image source={{ uri: this.props.navigation.getParam('img') }} style={{ height: 90, width: 85 }} />
	        </View>
	        <View style={{ flex: 2, alignItems: 'flex-start', justifyContent: 'center' }}>
	          <Text> {this.props.navigation.getParam('desc')} </Text>
	        </View>
	      </View>
	      <View style={{ flex: 1, padding: 10 }}>
	      	<Text> Sumber: {this.props.navigation.getParam('url')} </Text>
	      </View>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eceff5',
    alignItems: 'center',
  },
  newsBlock: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 3,
    marginBottom: 10,
    padding: 8
  },
  newsTitle: {
    alignItems: 'flex-start',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
  },
  newsDesc: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 8
  }
});

const mapStateToProps = (state) => {
	return {
		redux: state
	};
};

export default connect(mapStateToProps)(NewsPage);