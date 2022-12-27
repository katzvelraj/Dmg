import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Colors } from '../res/Colors';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient'
import { utils } from '../res/utils';
const NewsItems = ({ article, grid }) => {
  const date = moment(article?.pub_date).format('DD MMM');
  const url = article.multimedia?.[0]?.url
    ? `https://nytimes.com/${article.multimedia[0].url}`
    : utils.defaultImageUrl;

  if (grid) {
    return (
      <View
        style={
          styles.gridViewContainer
        }>
        <FastImage
          source={{ uri: url }}
          style={styles.imageGrid}
          resizeMode={FastImage.resizeMode.cover}
        />

        <View style={styles.nameContainer}>
          <Text
            style={styles.dateStyle}>
            {date}
          </Text>
          <Text
            style={
              styles.titleStyle
            }>
            {article.headline.main}
          </Text>
          <Text
            style={
              styles.snippetStyle
            }>
            {article?.abstract}
          </Text>
        </View>
      </View>
    );
  }

  return (


    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <FastImage
        source={{ uri: url }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <LinearGradient colors={[Colors.start, Colors.middle, Colors.end]} style={styles.titleContainer}>
        <Text style={styles.text}>{article.headline.main}</Text>
        <Text style={styles.timestamp}>
          {date}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nameContainer: {
    paddingHorizontal: 6
  },
  nameTxt: {
    fontSize: 18,
  },
  dateStyle: {
    color: Colors.secondaryText
  },
  titleStyle: {
    fontSize: 14,
    color: Colors.text
  },
  snippetStyle: {
    fontSize: 14,
    color: Colors.text

  },
  gridViewContainer: {
    flex: 1,
    margin: 4,
    elevation: 4,
    marginBottom: 18,
    backgroundColor: Colors.gridBackgroundColor,
    borderRadius: 8,
    paddingVertical: 8
  },
  imageGrid: {
    width: '90%',
    height: 120,
    marginHorizontal: 5,
    marginBottom: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  container: {
    height: 240,
    marginBottom: 18,
    backgroundColor: Colors.gridBackgroundColor,
    borderRadius: 24,
    marginHorizontal: 16,
  },
  image: {
    flex: 1,
    borderRadius: 24,
    height: 300,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: 160,
    paddingLeft: 16,
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    color: '#fff',
    paddingBottom: 24,
  },
  timestamp: {
    position: 'absolute',
    color: Colors.gridBackgroundColor,
    fontSize: 12,
    fontWeight: '300',
    right: 16,
    bottom: 8,
  },
});

export default NewsItems;
