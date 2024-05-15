import React from 'react'
import { useEffect, useState } from 'react';
import { fetchResourceInfo, fetchImagenInfo } from './ViewModel'; 
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from "./Styles";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { MenuProvider } from 'react-native-popup-menu';
import CommentViewModel from './ViewModel'



export default function CommentScreen() {

    const viewModel = CommentViewModel();
    const [resourceInfo, setResourceInfo] = useState<any>(null);
    const [imagenInfo, setImagenInfo] = useState<any>(null);
  
    useEffect(() => {
        const fetchresourceAndImagenInfo = async () => {
          try {
            const resourceData = await fetchResourceInfo();
            const imagenData = await fetchImagenInfo();
            setResourceInfo(resourceData);
            setImagenInfo(imagenData);
          } catch (error) {
            console.error('Error fetching resource and image info:', error);
          }
        };
      
        fetchresourceAndImagenInfo();
      }, []);
      

return (
    <MenuProvider skipInstanceCheck>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerRow}>
                    {imagenInfo && (
                    <Image
                    style={styles.userImage}
                    source={imagenInfo.uri}
                    resizeMode="contain"
                    />
                    )}

                    <View style={styles.textContainer}>
                        <Text style={styles.textBook}>{resourceInfo?.nameBook}</Text>
                        <Text style={styles.textMins}>{resourceInfo?.timePublic}</Text>
                        <Text style={styles.textComment}>{resourceInfo?.aboutSource}</Text>
                    </View>

                    <Menu>
                        <MenuTrigger>
                            <Image 
                                source={require("../../../../../assets/Ellipsis.png")}
                                style={[styles.img]}
                            />
                        </MenuTrigger>
                        <MenuOptions customStyles={menuStyles}>
                            <MenuOption value={1} text='Editar' onSelect={() => {}} /> 
                            <MenuOption value={2} text='Eliminar' onSelect={() => {}} /> 
                        </MenuOptions>
                    </Menu>
                </View>
            </View>
        </ScrollView>
        
    </MenuProvider>

    );
};

const menuStyles = { 
optionsContainer: { 
        marginTop: -190, 
        marginLeft: -5, 
        padding: 5 
    }, 
optionText: { 
      fontSize: 18, 
      padding: 10, 
    }
}