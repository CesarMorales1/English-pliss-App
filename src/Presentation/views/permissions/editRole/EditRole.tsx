import {
    View, Text, Image, TouchableOpacity
  } from 'react-native'
  
  import { useState } from 'react'
  import { Picker } from '@react-native-picker/picker'
  
  import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
  import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
  
  import { MyColors } from '../../../theme/AppTheme'
  
  import styles from './styles'
  
  interface editRoleInterface {
    route: {
      params: {
        userInfo: { 
          name: string, 
          email: string, 
          phone: string, 
          rol: "admin" | "student" | "teacher"
        }
      };
    };
  }
  
  export default function EditRole({ route }: editRoleInterface) {
  
    const { params: { userInfo } } = route
  
    const [selected, setSelected] = useState(userInfo.rol)
  
    const permissions = {
      registerView: ["admin", "student", "teacher"],
      listClassesView: ["admin", "student", "teacher"],
      videoClassesView: ["admin", "student", "teacher"],
      editAccountView: ["admin", "student", "teacher"],
      editRoleView: ["admin"],
      newClassView: ["admin", "teacher"],
 
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.containerCard}>
          <View style={styles.containerImg}>
            <Image
              style={styles.userImage}
              source={require("../../../../../assets/my_user.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textBook}>
              { userInfo.name }
            </Text>
            <View style={styles.containerRow}>
              <Image
                source={require("../../../../../assets/user_icon.png")}
                resizeMode="contain"
              />
              <Text style={styles.textMins}>
                { userInfo.email }
              </Text>
            </View>
            <View style={styles.containerRow}>
              <Image
                source={require("../../../../../assets/phone_icon.png")}
                resizeMode="contain"
              />
              <Text style={styles.textMins}>
                { userInfo.phone }
              </Text>
            </View>
            <View style={styles.containerRole}>
              <Text style={styles.role}>
                { userInfo.rol }
              </Text>
            </View>
          </View>
        </View>
  
        <Text style={styles.subTitle}>
          Edit Role
        </Text>
  
        <Text style={styles.chooseRoleText}>
          Choosen the new role
        </Text>
  
        <Picker
          selectedValue={selected}
          onValueChange={item => setSelected(item)}
        >
          <Picker.Item label='Admin' value="admin" />
          <Picker.Item label='Student' value="student" />
          <Picker.Item label='Teacher' value="teacher" />
        </Picker>
  
        <View 
          style={
            [
              styles.containerCard, 
              { flexDirection: "column", alignItems: "flex-start" }
            ]
          }
        >
          <View style={styles.accessHeaderContainer}>
            <Text style={styles.accessHeaderTitle}>
              Access
            </Text>
            <FontAwesomeIcon icon={faCheckCircle} color={MyColors.role} />
          </View>
  
          <View style={styles.accessItems}>
            <Text 
              style={
                [
                  styles.accessItem, 
                  { color: permissions.registerView.includes(selected) ? '#000' : "#999" }
                ]
              }
            >
              1. Register view
            </Text>
            
            <Text 
              style={
                [
                  styles.accessItem, 
                  { color: permissions.listClassesView.includes(selected) ? '#000' : "#999" }
                ]
              }
            >
              2. List classes view
            </Text>
  
            <Text 
              style={
                [
                  styles.accessItem, 
                  { color: permissions.videoClassesView.includes(selected) ? '#000' : "#999" }
                ]
              }
            >
              3. Video classes view
            </Text>
  
            <Text 
              style={
                [
                  styles.accessItem, 
                  { color: permissions.editAccountView.includes(selected) ? '#000' : "#999" }
                ]
              }
            >
              4. Edit account view
            </Text>
  
            <Text 
              style={
                [
                  styles.accessItem, 
                  { color: permissions.editRoleView.includes(selected) ? '#000' : "#999" }
                ]
              }
            >
              5. Edit role view
            </Text>
  
            <Text 
              style={
                [
                  styles.accessItem, 
                  { color: permissions.newClassView.includes(selected) ? '#000' : "#999" }
                ]
              }
            >
              6. New class view
            </Text>
  
          </View>
  
        </View>
  
        <TouchableOpacity style={styles.btnSaveChanges}>
          <Text style={styles.btnSaveChangesText}>
            Save changes
          </Text>
        </TouchableOpacity>
      </View>
    )
  }