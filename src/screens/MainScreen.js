import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchMovies, StartLoading } from "../store/actions/movies";
import SimplePoster from "../components/SimplePoster";
import { SearchBar } from "react-native-elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ListEmptyComponent from "../components/ListEmptyComponent";
import FooterIndicator from "../components/FooterIndicator";

const MainScreen = () => {
  const insets = useSafeAreaInsets();
  const [text, onChangeText] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const MoviesList = useSelector((state) => state.movies.Movies) ?? false;
  const MoviesListToShow = text.length < 3 ? [] : MoviesList;
  const doSearchMovies = (text) => {
    onChangeText(text);
    if (text.length < 3) return true;
    dispatch(StartLoading(true));
    return dispatch(SearchMovies(text));
  };
  const getMorePosts = () => {
    setPage(page + 1);
    return dispatch(SearchMovies(text, page));
  };

  return (
    <View style={{ ...styles.container, marginTop: Math.max(insets.top, 16) }}>
      <Text style={styles.h1}>Search a Movie Title</Text>
      <View style={styles.SearchNarContainer}>
        <SearchBar
          lightTheme={true}
          placeholder="Type Here..."
          onChangeText={doSearchMovies}
          containerStyle={styles.SearchBar}
          value={text}
        />
      </View>

      <FlatList
        ListEmptyComponent={ListEmptyComponent}
        data={MoviesListToShow}
        initialNumToRender={5}
        contentContainerStyle={styles.FlarlistContainerStyle}
        renderItem={(props) => <SimplePoster item={props.item} />}
        keyExtractor={(item) => {
          return item.imdbID.toString();
        }}
        onEndReached={getMorePosts}
        ListFooterComponent={() => <FooterIndicator />}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  SearchBar: {
    width: "80%",
  },
  SearchNarContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  FlarlistContainerStyle: {
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  h1: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});
export default MainScreen;
