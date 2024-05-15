// Simulación de datos de clase
const classData = {
    name: 'Class 02 Level A2',
    description: '1h 14min · 24 Lessons',
    about: 'About Class',
    details: 'Today we will talk about the verb to be ... At the end we will see some colloquial phrases',
  };
  
  // Simulación de datos de video
  const videoData = {
    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
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
  
  // Función para obtener información del video desde el backend
  export async function fetchVideoInfo() {
    // Simulación de una llamada a una API o consulta a la base de datos
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(videoData);
      }); // Simula un retraso en la obtención de datos
    });
  }
  