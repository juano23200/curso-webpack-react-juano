const { resolve } = require('path');
const path = require('path');

/* Permite traer el recurso que viene siendo html-webpack-plugin */
const HtmlWebpackPlugin = require('html-webpack-plugin');//una vez tenemos esta estructura vamos
                                                         //a poder utilizarla en la parte inferior
                                                         //en la sección de los plugins

/* Creacion de una constante con el nombre de MiniCssExtractPlugin para
   poder traer el plugin 'mini-css-extract-plugin' y poderlo utilizar en nuestro código*/
   const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* Creacion de una constante con el nombre de CssMinimizerPlugin para
   poder traer el plugin 'css-minimizer-webpack-plugin' y poderlo utilizar en nuestro codigo*/
   const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

   /* Creacion de una constante con el nombre de TerserPlugin para
      poder traer el plugin 'terser-webpack-plugin' y poderlo utilizar en nuestro codigo*/
   const TerserPlugin = require('terser-webpack-plugin');
   
   /* Creacion de una constante con el nombre de CleanWebpackPlugin para
      poder traer el plugin 'clean-webpack-plugin' y poderlo utilizar en nuestro codigo*/
   const { CleanWebpackPlugin } = require('clean-webpack-plugin');
   

/*  module.exports va a contener un objetp en dpnde va a vivir-estar nuestras
    configuraciones */
module.exports = {
  entry: './src/index.js',//Se indica nuestro punto de entrada principal
  output: {//Se prepara como vamos a enviar nuestro recurso una vez preparado
    path: path.resolve(__dirname, 'dist'),//__dirname permite indicar donde estamos ubicados
                                          //despues se indica que se cree la carpeta /dist
    filename: 'bundle.js',//se le asigna un nombre al bundle antes le colocamos el nombre de main.js
                          //pero ahora le asignamos el nombre de bundle.js
                          //Este archivo va a ser el resultado de lo que va a ser nuestro output

    publicPath: "/",//Indica que la salida se va apuclicar-crear en la raiz del proyecto
  },

  /* Se realiza un resolve, en donde vamos a resolver nuestras diferentes extensiones que vamos 
     a trabajar */
  resolve: {
    extensions: ['.js', '.jsx'],//Se van a trabajar las ectensiones .JavaScript y .jsx
                               //se guardan las extenciones dentro de un arreglo [ ]

    alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@styles': path.resolve(__dirname, 'src/styles/')
    }
                         
  },

  /* Se realiza-crea el bloque module: el cual va a contener-crear las diferentes reglas que vamos a tener */
  module: {
    /* Creacion de la prilera regla la cual nos va a ayudar a trabajar con babel y que va a tener
       todos los elementos  */
    rules: [//Se crea un arreglo el cual va a tener toda la configuracion oportuna de cada una de
            //de las estrucuturas que necesitemos 
      {
        test: /\.(js|jsx)$/,//test nos permite ayudar a tener las extensiones que vamos a trebajar
                            //Se hace el llamado a los dos tipos de extenciones js y jsx
        exclude: /node_modules/,//Procedemos a excluir la carpeta /node_modules/ para no encontrar nada
                                //de estos recursos ahi 
        use: {
          loader: 'babel-loader',//Permite preparar nuestro coodigo JavaScript con React y con babel
        }
      },

      /* Se crea una  regla para poder implementar el html-loader en nuestro proyecto */
      {
        test: /\.html$/,//Permite ayudar a identificar los archivos .html
        use: [
          { loader: 'html-loader' }//Se le dice que utilice el loader: 'html-loader'
        ]
      },

      /* Se crea una  regla para poder implementar el style-loader, css-loader 
     y  sass-loaderen nuestro proyecto */
          {
            test: /\.s[ac]ss$/,//Permite ayudar a identificar la extension de sass .s
                               //o la extencion de css
                               //Esta estructura permite identificar si un archivo es de CSS
                               //o es de Sass
            use: [//se crea un arreglo para contener los elementos que vamos a usar
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
    
    ]
  },

  /* se crea la sección de los plugins y se realiza la configuración para poder utilizar 
     el plugin de html-webpack-plugin en nuestro proyecto */
     plugins: [//Se crea un arreglo el cual va a contener los diferentes plugins que va a tener nuestro proyecto
     new HtmlWebpackPlugin({//Se crea un pluguins, una nueva instancia a HtmlWebpackPlugin
       template: './public/index.html',//Permite leer el archivo index.html y lo envía a la carpeta
                                       //de distribucion /dist
       filename: './index.html'//Le asignamos un nombre al archivo resultante
     }),

    /* Se crea-agrega un nuevo plugin para MiniCssExtractPlugin y poder ser utilizado en el proyecto */
     new MiniCssExtractPlugin({
        filename: '[name].css'//Le asignamos un nombre al archivo resultante
      }),

     /* Se crea-agrega un nuevo plugin para CleanWebpackPlugin y poder ser utilizado en el proyecto */
     new CleanWebpackPlugin(),

  
   ],

   optimization: {//se crea un objeto
    minimize: true,
    minimizer: [//Se crea un arreglo con varias configuraciones el cual
                //contiene las configuraciones de los plugins que acabamos de agragar 
      new CssMinimizerPlugin(),
      new TerserPlugin(),
    ]
  }


}
