import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/MenuItem';

interface Props {
    menuItem: MenuItem
}
export const FlatListMenuItem = ( { menuItem } : Props ) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={()=> navigation.navigate(menuItem.component)}
            activeOpacity={0.7}
        >
            <View style={ styles.container } >
                <Icon 
                    name={menuItem.icon}
                    size={20}
                    color="grey"
                />
                <Text style={ styles.itemText} >{ menuItem.name }</Text>
                <View style={{ flex:1 }} />
                <Icon 
                    name="chevron-forward-outline"
                    size={20}
                    color="grey"
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    itemText:{
        marginLeft: 7,
        fontSize: 17
    }
});