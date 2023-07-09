# Proyecto 3: Base de Datos Multimedia

## Introducción

El logro está enfocado a entender y aplicar los algoritmos de búsqueda y recuperación de la información basado en el contenido [Imágenes].

Este proyecto está enfocado al uso una estructura multidimensional para dar soporte a las búsqueda y recuperación eficiente de imágenes en un servicio web de reconocimiento facial.

## Descripción del Sistema

El sistema consta de un backend y un frontend. El backend es un servicio web de reconocimiento facial que implementa la extracción de características, la indexación de vectores característicos y los algoritmos de búsquedas. El frontend es una aplicación web adaptativa que permite interactuar con el servicio web y muestra los resultados de búsqueda de manera interactiva.

### Backend

El backend del sistema se encarga de los siguientes pasos:

1. Extracción de características:
   - Se utiliza la librería Face_Recognition para obtener una representación compacta y representativa del rostro (encoding) a partir de cada imagen de rostro. El tamaño del vector característico es de 128 dimensiones.

2. Indexación y Búsqueda:
   - Implementación del algoritmo de búsqueda KNN secuencial, que realiza búsquedas sin indexación utilizando una cola de prioridad para recuperar los objetos más similares.
   - Implementación del algoritmo de búsqueda por rango, que realiza búsquedas en un radio de distancia al objeto de consulta.
   - Uso de la librería Rtree, para realizar busquedas con indexación de mayor efectividad.  
   - Uso de la libre PCA para reducir el tamaño de los vectores caracteriscos pero sin perder la información  

3. Experimento:
   - Ejecución de los algoritmos de búsqueda KNN secuencial, KNN-RTree y KNN-HighD sobre una colección de objetos de tamaño N. Comparación de la eficiencia en función del tiempo de ejecución.

### Frontend

El frontend del sistema es una aplicación web adaptativa que interactúa con el servicio web de reconocimiento facial. Los pasos del frontend son:

1. Motor de Búsqueda:
   - El usuario puede realizar consultas utilizando cualquier imagen que contenga un rostro.
   - La aplicación web envía la imagen de consulta al servicio web y muestra los resultados de búsqueda.

2. Resultados de Búsqueda:
   - La aplicación web muestra interactivamente los resultados de búsqueda, incluyendo el rostro de consulta y el valor de K (número de objetos más parecidos).

## Requisitos

Se requiere tener instalados los siguientes componentes:

- Python
- uvicorn
- FastAPI
- Rtree
- NumPy
- Face_Recognition

## Instrucciones de Instalación

Para instalar y ejecutar el backend, siga los siguientes pasos:

1. Clonar el repositorio del backend:
```
git clone https://github.com/OBCApps/back-face-recognition.git
cd back-face-recognition
python main.py
```  

2. Clonar el repositorio del Frontend:
```
git clone https://github.com/OBCApps/front-face-recognition.git
cd front-face-recognition
npm install
ng serve --open
```  

## Función de las técnicas

![Flujo de funciones](ruta-a-la-imagen.png)

### Vista Web
#### Vista principal
<center>
<img src="image-2.png" alt="Vista principal" width="600"/>
</center>

#### Vista Agregar imagen
<center>
<img src="image.png" alt="Vista Agregar imagen" width="600"/>
</center>

#### Vista visualizar resultados
<center>
<img src="image-1.png" alt="Vista visualizar resultados" width="600"/>
</center>

### Backends Implementados

![Alt text](image-3.png)

### Tabla de Comparación de tiempos

![Tabla de Comparación](ruta-a-la-imagen.png)

## Conclusión

Según los resultados obtenidos en la tabla de comparación de tiempos, se concluye que el algoritmo KNN-RTree es más eficiente en términos de tiempo de ejecución en comparación con el KNN secuencial y el KNN-HighD. Esto demuestra la importancia de utilizar técnicas de indexación espacial para lograr búsquedas eficientes en grandes colecciones de imágenes de rostros. Sin embargo, es importante considerar el efecto de la dimensionalidad en los índices espaciales y explorar soluciones como PCA, KD-Tree, Locality Sensitive Hashing (LSH) o Faiss para mitigar el problema de la maldición de la dimensionalidad en espacios vectoriales de alta dimensión.
