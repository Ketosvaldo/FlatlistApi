import React from 'react';
import Proptypes from 'prop-types';
import {Text, FlatList} from 'react-native';
import styles from './styles';

function List({data, fetchItems, refreshItems, isRefreshing}) {
    return (
        <FlatList
            data = {data}
            renderItem = {({item}) => <Text style={styles.item}>{item.value}</Text>}
            onEndReached = {fetchItems}
            onRefresh = {refreshItems}
            refreshing = {isRefreshing}
        />
    );
}

List.propTypes = {
    data: Proptypes.array.isRequired,
    fetchItems: Proptypes.func.isRequired,
    refreshItems: Proptypes.func.isRequired,
    isRefreshing: Proptypes.bool.isRequired,
}

export default List;