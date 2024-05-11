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


//-----------------------------------------------------------------------------------
// Simulación de datos de clase
const resourceData = {
    nameBook: 'Evolve 2 WorkBook.pdf',
    timePublic: 'Published on January 3',
    aboutSource: 'Today we will talk about the verb to be and its tenses',
  }; 
  
// Función para obtener información de la clase desde el backend
export async function fetchResourceInfo() {
// Simulación de una llamada a una API o consulta a la base de datos
return new Promise((resolve) => {
    setTimeout(() => {
    resolve(resourceData);
    }); // Simula un retraso en la obtención de datos
});
}


// Simulación de datos de video
const imagenData = {
uri:require('../../../../../assets/Image_pdf.png'),
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
  

  
