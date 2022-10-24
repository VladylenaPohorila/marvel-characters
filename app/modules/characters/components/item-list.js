import { View, Text } from 'react-native';
import { styles } from './styles';

export const ItemList = ({ list, title }) => {
    const { containerList, colorText, listTitle } = styles;

    return (
        <View style={containerList}>
            <Text style={listTitle}>{title}</Text>
            {list.map((item, index) => (
                <View key={index}>
                    <Text style={colorText}>
                        {item.name}
                    </Text>
                </View>
            ))}
        </View>
    )
}