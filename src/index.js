/* Lo primero que tenemos que hacer es crear un import de React 
   De esta forma estamos invocando React en este documento */
   import React from 'react';

   /* Tambien vamos a traer ReactDom que es una de las dependencias que instalamos previamente */
   import ReactDOM  from 'react-dom';
   
   /* Ahora importamos nuestro componente que acabamos de  crear dentro de la carpeta 
      /src/components/App.jsx */
   import App from './components/App';

/* Permite importar el archivo global.scss el cual contine los estylos a aplicar
   a nuestro proyecto */
   import './styles/global.scss';

   
   /* Ahora necesitamos crear un recurso para deccir hacia donde nuestra aplicacion se va a
      importar; el primer elemento que recibe es nuestra aplicacion <APP />, y luego va a utilizar
      document.getElementById('app') para poder mostrar dentro de un archivo HTML nuestra aplicacion  */
   ReactDOM.render(<App />, document.getElementById('app'));
   