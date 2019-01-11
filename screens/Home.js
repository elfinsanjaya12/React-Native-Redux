import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticles } from '../store/actions';

class Home extends React.Component {

  static navigationOptions = {
    title: 'Berita Hot',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  constructor() {
    super();
  
    this.state = {
      news: ''
    };
  }

  componentDidMount() {
    axios.get('http://newsapi.org/v2/top-headlines?country=id&apiKey=61e3b1a655ce4bf3ac9ed511a2e9a2b7')
    .then((resp) => {
      // this.setState({
      //   news: resp.data.articles,
      // });
      this.props.getArticles(resp.data.articles);
    })
    .catch((resp) => {
      console.log('catch componentDidMount:', resp);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 7 }}> Top 20 Berita Hot </Text>
        <FlatList 
          data={this.props.redux.articles} 
          keyExtractor={(item) => item.publishedAt}
          renderItem={({item}) => {
            return (
              <View style={styles.newsBlock}>
                <View style={[styles.newsTitle, { flex: 1 }]}>
                  <Text style={{ fontSize: 18, padding: 0 }} onPress={() => this.props.navigation.navigate('NewsPage', {
                    title: item.title,
                    publishedAt: item.publishedAt,
                    desc: item.description,
                    img: item.urlToImage,
                    url: item.url
                  })}> {item.title} </Text>
                  <Text style={{ color: '#fbfbfd', fontSize: 14 }}> Diterbitkan Pada: {item.publishedAt} </Text>
                </View>
                <View style={styles.newsDesc}>
                  <Image source={{ uri: item.urlToImage }} style={{ height: 200, width: 200 }} />
                </View>
              </View>
            )
          }} />
        <Text sytle={{ color: '#eeeeee', fontSize: 12, marginTop: 5 }}> Diberdayakan oleh: https://newsapi.org </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eceff5',
    alignItems: 'center',
  },
  newsBlock: {
    flexDirection: 'column',
    backgroundColor: '#c6cddf',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 3,
    marginTop: 10,
    padding: 8
  },
  newsTitle: {
    alignItems: 'flex-start',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  newsDesc: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  }
});

const mapStateToProps = (state) => {
  return {
    redux: state
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({getArticles}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);