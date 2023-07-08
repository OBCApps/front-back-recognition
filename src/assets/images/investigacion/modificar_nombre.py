import os

# Ruta de la carpeta que contiene los archivos PNG
ruta_carpeta = 'inveatigacion_png'
modificados = []
# Recorre todos los archivos en la carpeta
for nombre_archivo in os.listdir(ruta_carpeta):
    if nombre_archivo.endswith('.png'):
        # Nuevo nombre del archivo sin espacios ni guiones
        
        nuevo_nombre = nombre_archivo.replace(' ', '_').replace('–', '_')

        # Ruta completa del archivo antiguo y nuevo
        ruta_antigua = os.path.join(ruta_carpeta, nombre_archivo)
        ruta_nueva = os.path.join(ruta_carpeta, nuevo_nombre)
        modificados.append((ruta_antigua , ruta_nueva))
        # Renombrar el archivo
        os.rename(ruta_antigua, ruta_nueva)
print(modificados)