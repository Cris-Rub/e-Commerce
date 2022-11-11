# Proyecto: e-Commerce con React
###### Desarrolla por Cristopher Jesus Rubio Sanchez para la Kata Frontend Avanzado del curso "Master in Coding" de Dev.F.
#### Link del proyecto publicado en Netlify: [One2Shop!](https://jolly-duckanoo-894e57.netlify.app)

## Contenido

1. [Descripción del proyecto](#descripción-del-proyecto)
2. [Ver y consultar productos](#ver-y-consultar-productos)
3. [Inicio de Sesión y registro](#inicio-de-sesión-y-registro)
4. [Crear productos como administrador](#crear-productos-como-administrador)

### Descripción del proyecto

Construye un e-commerce (sitio de comercio electrónico) con React a partir de consumir una API de un backend genérico proporcionado.

#### API

**El resumen de los endpoints** de la API con la qué deberás trabajar la puedes encontrar aquí:
https://ecomerce-master.herokuapp.com/docs
**La documentación más completa** la puedes consultar en:
https://documenter.getpostman.com/view/807695/Tzm6jvYY

### Ver y consultar productos

**Características generales:**

- Mostrar productos.
- Mostrar detalles de producto.
- Buscar productos.

Al mostrar los productos en la página principal se consume la API proporcionada utilizando *Axios* renderizando asi cada uno de los productos por medio de *Cards*, diseñadas con *Bootstrap*, que contienen la imagen del producto, el nombre y su precio.

**Funcionalidades**

- Cuando entro al home puedo ver todos los productos.
- El componente NavBar debe estar a la vista en toda la app.
- Siempre hay una barra de búsqueda en la NavBar para hacer búsquedas por productos.
- Si doy click a un producto, puedo ver su detalle completo en una URL / ruta única para este producto.
- Dentro del detalle individual de un producto, se muestra el botón “comprar”.
- La busqueda de productos genera una URL / ruta única para la busqueda de todos los productos.

### Inicio de Sesión y registro

**Características generales**
- Página de signup (registro).
- Página de login (inicio de sesión).

En esta parte de la página se consume la API de inicio de sesión de usuario y se realiza un formulario de registro. También se realiza el renderizado condicional en base de si estamos o no autenticados.
Para iniciar sesión o registrarnos debemos hacer click en *account*, la cual se encunetra en la navbar del lado derecho. Una vez hecho el registro de nuestro usuario se nos redirige a la página para iniciar sesión y para después de realizar el inicio de sesión correcto devolvernos a la página principal y poder cerrar sesión por medio de las opciones añadidas en la parte de *account*.

**Funcionalidades COSTUMER**
*Sin usuario / Con usuario (sin iniciar sesión / con sesión iniciada)*
- Cuando entro al home puedo ver todos los productos
- Siempre hay una barra de búsqueda en la navbar para hacer búsquedas por productos.
- Si doy click a un producto, puedo ver su detalle completo en una URL / ruta única para este producto.

*Sin usuario (sesión no iniciada)*
- En la navbar, del lado derecho, me sugiere hacer signup o login.
- La vista de signup, y la vista de login, son urls diferentes ( /login /signup )
- Hay un botón comprar en la vista individual del detalle de cada producto, pero este está desactivado y debes mostrar (como desees) una invitación a registrarte o iniciar sesión.

*Con usuario (sesión iniciada)*
- En la navbar aparece el nombre de usuario
- Dentro el detalle individual de un producto, se muestra el boton "Comprar" habilitado.

### Crear productos como administrador
La aplicación cuenta con la capacidad de distinguir a un usuario normal de un usuario administrador. El usuario administrador podrá crear nuevos productos.

**Funcionalidades ADMIN**
- Tiene las mismas funcionalidades del COSTUMER.
- Puede dar de alta nuevos productos.
- Hay un enlace en la Navbar para cargar productos.

Se puede visualizar el producto creado recargando en la misma página de inicio de la aplicación.

Se puede probar esta función con el siguiente usuario administrador:
- *usuario: email.Admin@example.com*
- *contraseña: perrito123*
