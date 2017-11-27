Angular-Cli es un generador (Command line interface) para aplicaciones en [Angular 2](https://angular.io/), permite crear el scaffolding necesario para comenzar a desarrollar nuestra aplicación en [Angular 2](https://angular.io/). Su desarrollo se basó en [Ember Cli](https://ember-cli.com/) asi que quienes lo hayan usado será muy familiar crear sus aplicaciones con Angular-Cli.

Antes de comenzar a usar Angular-Cli debemos asegurarnos de tener la versión de Node superior a 6.9 y NPM 3 o superior. Recomiendo usar NVM para ejecutar las versiones de Node, para conocer sobre su uso: [Node con NVM](http://andresciceri.co/2017/04/10/nvm-use/)

## Instalar Angular-Cli

Para instalar Angular-Cli procedemos a ejecutar en linea de comandos:

``` bash
:$ npm install -g @angular/cli
```

### Verificar instalación

```
:$ ng -v
```
Para comenzar a trabajar con Angular-Cli nos ubicaremos en el directorio donde se creará el proyecto y con los siguientes comandos inciaremos nuestro primer proyecto.

```
:$ ng new NOMBRE_PROYECTO
:$ cd NOMBRE_PROYECTO
:NOMBRE_PROYECTO$ ng serve
```
Por defecto la aplicación correrá en el puerto 4200, al navegar a *http://localhost:4200* podemos ver nuestro proyecto corriendo. Angular-Cli cuenta con un LiveServer que recargar automáticamente el proyecto ante algún cambio.

También podemos modificar el Host y el puerto donde correrá el proyecto.

```
:$ ng serve --host 0.0.0.0 --port 4201
```

## El generador de Angular-Cli

Con Angular-Cli podremos generar **Componentes, Directivas, Servicios, Pipes, Clases, Módulos, etc.** Para ello se usa el comando **ng generate ó ng g**.

### Crear un componente

Para comenzar debemos asegurarnos de detener el servidor, para ello se usa CTRL + C. 

```
:$ ng g component NUEVO_COMPONENTE
:$ ng serve //Ejecutar nuevamente la app
```
El componente estará listo para trabajar, Angular-Cli automáticamente lo adiciona en el NgModule: 

``` Code
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent ....

```
### Crear un servicio

De la misma manera podemos crear un nuevo servicio para el componente creado. Para ello debemos ubicarnos en la carpeta del componente o usar el path deseado.

```
:$ ng g service NUEVO_SERVICIO
 ó
:$ ng g service ./src/app/NUEVO_COMPONENTE/NUEVO_SERVICIO 
```
A diferencia de la generación de un componente el servicio creado no se adiciona al NgModule de manera automática, lo que deberemos hacer manualmente en los **Providers** para que puedan ser inyectados y usados dentro de un componente.

``` Code
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { NuevoServicioService } from './nuevo-componente/nuevo-servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent ....
    .
    .
    .
    providers: [
  		NuevoServicioService,

```

Otros comandos para usar con Angular-Cli son:

Scaffold|Uso
---|---
Directive|ng g directive nueva-directiva
Pipe|ng g pipe nuevo-pipe
Class|ng g class nuevo-clase
Interface|ng g interface nueva-interface
Enum|ng g enum nuevo-enum
Module|ng g module nuevo-module
Guard|ng g guard nuevo-guard

### Generar app compilada

A la hora de poner nuestra aplicación en producción podremos generar los compilados para que sean desplegados en cualquier servidor, sea Apache, Node, IIS, etc.

```
:$ ng g build
```

La aplicación dejará los archivos compilados en el directorio que se haya especificado en el archivo **.angular-cli.json**

``` Code
"apps": [
    {
      "root": "src",
      "outDir": "dist", // Ruta de compilación
      "assets": [
        "assets",
        "favicon.ico"
      ]....
```

### Conclusión

Angular-Cli es una herramienta muy completa que nos ayuda a desarrollar nuestros proyectos con Angular 2, es fácil de usar y muy flexible. Nos permite adicionar scripts externos facilmente así como compilar CSS con Sass, en proximos Post veremos esas opciones.

Así mismo cuenta con Jasmine para ejectuar las pruebas unitarias sobre componentes o servicios creados, temas que veremos en próximos Posts.

### Referencias

Para mayor información o complementar sobre el tema pueden revisar la documentación de Angular-Cli en Github: [Angular-Cli Github](https://github.com/angular/angular-cli)