import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { MyColors } from '../theme/AppTheme';

const SwitchComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
        flexDirection:'row',
        alignItems: 'center',
        //justifyContent: 'center',
        //backgroundColor: '#f5fcff',
        marginBottom:50,
    },

    status: {        
        margin: 10,
        marginLeft: 0,
        fontSize: 14,
    },
});

export default SwitchComponent;
