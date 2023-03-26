import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import newsData from './news_data.json';
import newsBannerData from './news_banner_data.json';
import NewsCard from './components/NewsCard';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;

  const perfKeyExctractor = (item) => item.u_id.toString();

  const bannerScrollView = () => <ScrollView style={styles.scrollV} horizontal showsHorizontalScrollIndicator={false}>
  {newsBannerData.map(bannerNews => (
    <Image
      style={styles.bannerImage}
      source={{uri: bannerNews.imageUrl}}
    />
  ))}
</ScrollView>

  return (
    <View style={styles.container}>
      <Text style={styles.text}>News</Text>
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {newsBannerData.map(bannerNews => (
            <Image
              style={styles.bannerImage}
              source={{uri: bannerNews.imageUrl}}
            />
          ))}
        </ScrollView> */}
        <FlatList
        ListHeaderComponent={bannerScrollView}
          keyExtractor={perfKeyExctractor}
          data={newsData}
          renderItem={renderNews} //renderi dışarıya taşıyoruz çünkü daha performanslı oluyor.
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ececef',
  },
  bannerImage: {
    width: Dimensions.get('window').height / 5,
    height: Dimensions.get('window').height / 4,
  },
  scrollV:{
    margin:10,
    borderRadius:10,
  },
  text:{
    fontWeight:'bold',
    fontSize:50,
    color:'black',
    margin:10,
  }
});

export default App;
