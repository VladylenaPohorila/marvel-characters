import Reac from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';


export const NoResults = ({ text }) => {
    const { errorData, errorText } = styles;

    return (
        <View style={errorData}>
            <Text style={errorText} >
                {`Opp.. We don't find this name '${text ? text : 'empty'}'`}
            </Text>
        </View>
    )
}