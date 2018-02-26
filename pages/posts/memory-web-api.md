[In Memory Web Api](https://github.com/angular/in-memory-web-api) es un complemento que nos permite simular un Web Server sobre el explorador web. Una vez instalado interceptará toda petición realizada a traves de Http y entregará una simulación de la respuesta.

Nos permite de manera ágil probar los servicios que vayamos desarrollando sin necesidad de tener un API REST al cual realizarle peticiones.

## Casos de Uso
* Prototipar: De una manera rápida y sencilla te permite sacar un prototipo funcional sin necesidad de depender de un web server para el manejo de la información.
* Demos: Puedes crear un demo rápido y crear los CRUDS sin necesidad de tener un web server.
* Test: Te permite implementar tus pruebas (Unit Test & End-to-end-test) sin necesidad de afectar la base de datos real, en especial es muy util cuando implementas Integración Continua.

## Instalar Complemento

Teniendo en cuenta que ya contamos con un proyecto (Sino puede crearlo con [Angular Cli](http://andresciceri.co/article/4)). Para instalar el complemento al proyecto ejecutamos lo siguiente: 
```
:$ npm install angular-in-memory-web-api --save
```

### Adicionar al NgModule

Adicionamos el módulo HttpClientInMemoryWebApiModule en app.module.ts:
```
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
```

Aquí podemos ver que tenemos una clase llamada "InMemoryDataService", la cual exportará los mocks o data de ejemplo la cual mas adelante se explicará en detalle. 

Ahora importamos el módulo dentro de nuestra aplicación.
```
imports: [
    BrowserModule,    
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
```
Podemos ver que el módulo recibe parametros de configuración si deseamos modificar el comportamiento del API, a continuación vemos los atributos que recibe y sus funciones:

Atributo|Uso
---|---
apiBase?: string|Especifica la base para el path del API, por defecto toma el primer path del request ("api/data")
caseSensitiveSearch?: boolean|Especifica si en las búsquedas es Case Sensitive, por defecto es "false"
dataEncapsulation?: boolean|Por defecto es false: La respuesta la pone directamente sobre el body. Si es "true" el contenido los encapsula en una variable "data" ej: {data: ...}
delay?:number|Adiciona un delay en ms para simular latencia, por defecto su valor es 500ms
delete404?:boolean|Por defecto es "false" y responde 204 cuando un item a borrar no existe, si es "true" responde 404
host?:string|Especifica el host para el servicio, ej: "localhost"
passThruUnknownUrl?:boolean|Por defecto es "false", si una petición no se reconoce lo envía con el web server original. Si es "true" responde con un 404
post204?:boolean|Por defecto "true", al hacer un POST no devuelve el item solo 204. Si es "false" regresa el item con un 200
post409?:boolean|Por defecto "false", no actualiza un item con POST. Si es "true" permite actualizar.
put204?:boolean|Por defecto "true", al hacer un PUT no devuelve el item solo 204. Si es "false" regresa el item con un 200
put404?:boolean|Por defecto "false", si un item no existe crea un nuevo. Si es "true" devuelve un 404
rootPath?:string|Path raíz antes de un llamado al API

## Demo - Lista de productos

### Crear Clase InMemoryDataService 

Ahora procedemos a crear la clase InMemoryDataService la cual tendrá la data de pruebas, en este caso Productos:
```
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: 'Manzana' },
      { id: 2, name: 'Peras' },
      { id: 3, name: 'Maíz' },
      { id: 4, name: 'Frijol' }      
    ];
    return {products};
  }
}
```

Sobre la clase implementamos `InMemoryDbService`, el cual debe llevar el metodo `createDb()` donde creamos un array con los objetos a exponer en el servicio; el servicio tendrá el mismo nombre de la variable en este caso: "api/products". Podemos crear multiples arrays con diferente data y agregarlos al `return` ej: `return {products, array2, ...}`

### Queries 

Algo importante y práctico es poder realizar consultas sobre la data, las cuales pueden ser textuales o con un patrón regex.
Por ejemplo:
```
return this.http.get<Product[]>(`api/products/?name=${term}`)
```
Donde `term` puede ser "Manzana" ó "^M" para buscar todos los productos que empiecen con "M".

### Products Services

Ahora procedemos a crear los servicios en nuestra app para las operaciones básicas de nuestra lista de productos, para ello debemos tener claro el path del Memory Web Api:

```
private productsUrl = 'api/products';
```

Podemos implementar nuestros servicios usando el módulo Http como sigue:


```
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ToDoListService {

	private productsUrl = 'api/products';  // URL to web api

  constructor(private http: HttpClient) { }

   /** GET - productos desde el servidor */
  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(products => console.log(`Obtiene los productos`)),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => console.log(`obtiene producto id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  /** POST: crear un producto en el servidor */
  addProduct (product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(
      tap((product: Product) => console.log(`crea un producto w/ id=${product.id}`)),
      catchError(this.handleError<Product>('addHero'))
    );
  }

  /** DELETE: eliminar un producto en el servidor */
  deleteProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`elimina el producto id=${id}`)),
      catchError(this.handleError<Product>('deleteHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead      

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
```

### Products Component

Ahora vemos el llamado de los servicios desde nuestro componente:

```
products: Product[];
	product: Product;

  constructor(private toDoListService: ToDoListService) { }

  ngOnInit() {
  	this.getProducts();
  }

  getProducts(): void {
    this.toDoListService.getProducts()
    .subscribe(products => this.products = products);
  }

  get(id: number): void {  	
    this.toDoListService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.toDoListService.addProduct({ name } as Product)
      .subscribe(product => {
        this.products.push(product);
      });
  }

  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.toDoListService.deleteProduct(product).subscribe();
  }
```

### Demo Live
Para ver su funcionamiento en vivo y revisar el código completo lo puedes hacer aquí [Plunker](https://embed.plnkr.co/K2AJpojs9UItJP167FF4/)
## Conclusión
In Memory Web Api es un complemento muy útil para el desarrollo ágil de nuestras aplicaciones, nos ofrece lo suficiente para poder prototipar, generar un demo o realizar nuestras pruebas de los servicios sin necesidad de tener un web server o hacer uso de data real.

No es necesario crear objetos o clases para mocks y después tener que modificar los servicios para conectarse con el server real, solo con deshabilitar el componente desde el NgModule podemos seguir usando los servicios sin modificarlos. 
