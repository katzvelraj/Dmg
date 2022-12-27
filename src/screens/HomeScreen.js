import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import NewsItems from './NewsItem';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { getNews, selectCurrentPage, selectIsloading, selectNews, selectIsError, selectIsFetchingNextPage } from '../redux/NewsState';
import { Colors } from '../res/Colors';



const HomeScreen = () => {
  const [isGrid, setGrid] = useState(false);
  const dispatch = useDispatch();
  const newsList = useSelector(selectNews)
  const currentPage = useSelector(selectCurrentPage)
  const isLoading = useSelector(selectIsloading)
  const isError = useSelector(selectIsError)
  const isFetchingNextPage = useSelector(selectIsFetchingNextPage)

  useEffect(() => {
    dispatch(getNews(currentPage));
  }, []);



  const loadNext = () => {
    if (!isLastPage()) {
      dispatch(getNews(currentPage));
    }
  };
  const isLastPage = () => {
    return newsList.length < 10
  }

  const renderLoadingIndicator = () => {
    return <ActivityIndicator style={{
      flex: 1,
      justifyContent: "center", padding: 12
    }} />;
  };


  const renderComponents = () => {
    if (isLoading && !isFetchingNextPage) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size='large' style={styles.loadingContainer}
          />
        </View>
      );
    }
    if (isError) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <Text style={styles.errorStyle}>
            An error occurred while fetching data
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.rootContainerStyle}>
        {newsList.length > 0 ?
          (<FlatList
            keyExtractor={item => item._id}
            data={newsList}
            renderItem={({ item, index }) => (
              <NewsItems article={item} index={index} grid={isGrid} />
            )}
            onEndReached={loadNext}
            onEndReachedThreshold={0.3}
            estimatedItemSize={50}
            numColumns={isGrid ? 2 : 1}
            key={isGrid ? '2' : '1'}
            ListFooterComponent={isFetchingNextPage ? renderLoadingIndicator : null}
          />)
          : null}
      </View>
    );

  };

  return (
    <View style={styles.rootContainerStyle}>
      <Header toggleLayout={() => { setGrid(!isGrid) }} isGrid={isGrid} />
      {renderComponents()}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  loadingStyle: {
    alignSelf: 'center',
    flex: 1,
  },
  errorStyle: {
    textAlign: 'center',
    flex: 1,
    color: Colors.black
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default HomeScreen;
