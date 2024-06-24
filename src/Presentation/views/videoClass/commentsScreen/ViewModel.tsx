import React, { useState } from 'react';

const CommentViewModel = () => {
    const [sendComment, setSendComment] = useState('');

    const onChange = (text: string) => {
        setSendComment(text);
    };

    const comment = () => {
        console.log(sendComment);
    };

    return {
        sendComment,
        onChange,
        comment
    };
};
export default CommentViewModel;


// Simulación de datos de clase
const classData = {
    nameUser: 'User',
    timeMins: '14 mins ago',
    userComment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  }; 
  
// Función para obtener información de la clase desde el backend
export async function fetchClassInfo() {
// Simulación de una llamada a una API o consulta a la base de datos
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(classData);
    }); // Simula un retraso en la obtención de datos
});
}

// Simulación de datos de video
const imagenData = {
uri:require('../../../../../assets/logo.png'),
};

// Función para obtener información del video desde el backend
export async function fetchImagenInfo() {
// Simulación de una llamada a una API o consulta a la base de datos
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(imagenData);
    }); // Simula un retraso en la obtención de datos
});
}
  

  
