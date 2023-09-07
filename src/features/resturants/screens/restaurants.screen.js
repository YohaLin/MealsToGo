import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

// 因為是要加在 RestaurantList 的屬性，所以要使用 .attrs 的方式
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <>
      {/* 如果沒有給 flex: 1，會沒有展開全部的高度，概念跟給容器高度一樣（fill with your parent） */}
      {/* 因為安卓沒有 SafeAreaView ，所以給他 StatusBar.currentHeight 的高度（也只有安卓才有這個常數） */}
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading 
              size={50}
              animating={true}
              color={Colors.blue300}
            />
          </LoadingContainer>
        )}
        <Search />
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item}/>
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
