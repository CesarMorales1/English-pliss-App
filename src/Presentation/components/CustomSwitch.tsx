import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { MyColors } from '../theme/AppTheme';

interface Props {
    value: boolean;
    property: string;
    onChangeText: (property: string, value: any) => void;
}

const SwitchComponent: React.FC<Props> = ({ value, property, onChangeText }) => {
    const [isEnabled, setIsEnabled] = useState(value);

    useEffect(() => {
        setIsEnabled(value);
    }, [value]);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        onChangeText(property, !isEnabled);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.status}>
                {isEnabled ? "Allow" : "Not allow"}
            </Text>
            <Switch
                trackColor={{ false: "#767577", true: "#DCDCEA" }}
                thumbColor={isEnabled ? MyColors.primary : MyColors.secondary}
                ios_backgroundColor="#DCDCEA"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
    },
    status: {
        margin: 10,
        marginLeft: 0,
        fontSize: 14,
    },
});

export default SwitchComponent;
