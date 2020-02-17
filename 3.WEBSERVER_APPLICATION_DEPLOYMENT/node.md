
<!-- 

El directorio public 
contendra los archivos staticos que seran servidos por el servidor
public/index.html
Es un nombre especial que indica que va a ser el archivo que va a ser servido por defecto

----------------

Motor de plantillas
Va a permitir que los render html se muestren de manera dinamica
Donde va a poner insertar un nombre de usuario, una fecha actual
Tambien va a poder crear marcado rehutilizable como un encabezado o pie de pagina que va a ser el mismo para todas sus paginas
Vamos a utilizar un motor de vistas para express handlebarjs.com
Tambien permite rehutilizar piezas de codigo html

-----------------




-----------------

Git
Hacer un repositorio Remoto en un servidor

Clonar el repositorio de github
git clone git@github.com:lacchain/besu-network.git

Ingresar al directorio ~/.ssh
cd .ssh/

Crear/editar archivo config
vim config

Host [Hostname Alias]
        HostName [IP Servidor]
        User [root]

Example:

Host besu
        HostName 191.169.40.61
        User root

Ahora para conectarnos solo ejecutamos
ssh besu




--!>