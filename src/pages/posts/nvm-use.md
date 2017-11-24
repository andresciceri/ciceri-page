---
title: Como implementar NVM sobre Linux
date: 2017-04-10 14:15:46
tags: Node
---

NVM (Node Version Manager) es un manejador de versiones para NodeJs, el cual nos permite trabajar multiples proyectos de manera paralela con diferentes versiones de NodeJs que permiten ejecutar dependencias que requieran una versión específica de Node.

El uso de NVM en el ambiente de desarrollo es muy útil para la migración de aplicaciones a versiones mas recientes.

## Instalar o Actualizar NVM   

Para la instalación de NVM se puede hacer mediante cUrl o wGet:

### cURL:

``` bash
:$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

### wGet:

``` bash
:$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

Podemos verificar la instalación con el comando:

``` bash
:$ nvm --version
```
## Usar NVM 

Para implementar la última versión estables de NodeJs se ejecuta el comando:

``` bash
:$ nvm install node
```

Para usar la última versión estable instalada:

``` bash
:$ nvm use node
```

Para instalar una versión determinada de NodeJs que necesitemos simplemente debemos especificar el número de versión:

``` bash
:$ nvm install 2.4
ó
:$ nvm install 5.6
```

De la misma manera podemos seleccionar la versión para usar:

``` bash
:$ nvm use 2.4
ó
:$ nvm use 5.6
```

También podemos ver que versiones de NodeJs tenemos instalado y cual estamos usando para ello usamos:

``` bash
:$ nvm ls
:$ nvm current
```
Cuando necesitemos eliminar una versión en especial usamos:

``` bash
:$ nvm uninstall 5.6
```

### Conclusión

Un manejador de versiones es una herramienta muy útil a la hora de desarrollar sobre proyectos que manejan diferentes versiones de Node. 

Se debe tener encuenta que cuando se abre una nueva terminal se debe incializar la versión de Node, es decir hacer uso del comando `use` para empezar a utilizar la versión que se requiera. 

Cuando un proyecto se crea sobre una versión de Node en NVM no será visible cuando se cambie a otra versión ya que las dependencias generales solo son visibles en el ambiente que fueron instaladas.

### Referencias

Para mayor información o complementar sobre el tema pueden revisar la documentación en Github: [NVM Github](https://github.com/creationix/nvm)