import React from 'react'
import { useEffect, useState } from 'react';
import { fetchClassInfo, fetchImagenInfo } from './ViewModel'; 
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from "./Styles";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { MenuProvider } from 'react-native-popup-menu';
import CommentViewModel from './ViewModel'
import { truncateText } from '../../../components/TruncateText';



export default function CommentScreen() {

    /* PARA TRUNCAR */
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

    const viewModel = CommentViewModel();
    const [classInfo, setClassInfo] = useState<any>(null);
    const [imagenInfo, setImagenInfo] = useState<any>(null);

    useEffect(() => {
        const fetchClassAndImagenInfo = async () => {
          try {
            const classData = await fetchClassInfo();
            const imagenData = await fetchImagenInfo();
            setClassInfo(classData);
            setImagenInfo(imagenData);
          } catch (error) {
            console.error('Error fetching class and image info:', error);
          }
        };
      
        fetchClassAndImagenInfo();
      }, []);
      

return (
    <MenuProvider skipInstanceCheck>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerRow}>
                {imagenInfo && ( // Verifica si la información del video está disponible
                    <Image
                        style={styles.userImage}
                        source={imagenInfo.uri}
                        resizeMode="contain"
                        />
                    )}
                    <Text style={styles.textUser}>{classInfo?.nameUser}</Text>
                    <Text style={styles.textMins}>{classInfo?.timeMins}</Text>
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

                <View style={styles.containerComment}>
                    <TouchableOpacity onPress={toggleExpand}>
                        <Text style={styles.textComment}>
                            {isExpanded ? classInfo?.userComment : truncateText(classInfo?.userComment, 50)}
                        </Text>
                    </TouchableOpacity>
                    {/* <Text style={styles.textComment}>{classInfo?.userComment}</Text> */}
                </View>
            </View>
        </ScrollView>
        
        {/* Enviar comment */}
        
        <View style={styles.containerr}>
            {imagenInfo && ( // Verifica si la información del video está disponible
                <Image
                    style={styles.image}
                    source={imagenInfo.uri}
                    resizeMode="contain"
                    />
            )}

            <TextInput
            style={styles.input}
            placeholder="Write your comment"
            value={viewModel.sendComment}
            onChangeText={viewModel.onChange}
            />

            <TouchableOpacity
            onPress={() => {
                // Lógica para enviar el texto
            }}>
            <Image
            source={require('../../../../../assets/send_icon.png')} 
            style={styles.buttonImage}
            />
        </TouchableOpacity>
        </View>

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