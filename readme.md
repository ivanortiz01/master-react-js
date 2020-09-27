# React
Libreria javascript para crear interfaces web.

[Curso](https://www.udemy.com/course/universidad-react-de-cero-a-master/)

# Comando para crear app en react:
create-react-app
npm install -g create-react-app

# Npm
Gestor de paquetes

# JSX
Anotación para crear componentes de forma declarativa. Renderizado a traves de babel. La siguiente declaracion.
`var title = <h1>Hola React</h1>`
Se transforma asi:
`var title = React.createElement("h1", null, "Hola react");`
Ejemplo:
`var title = <h1>Hola React</h1>`
`var seccion = <h1>Hola <title> ***</h1>`
`var title = React.createElement("h1", null, "Hola react");`
`var seccion = React.createElement("h1", null, "Hola", React.createElement(title, null), "***");`

# Web pack
Libreria que se encarga de importaciones, procesar y traducir css.

# Object.assign
Para combinar propiedades. Solo mira propiedades de 1er nivel. Es parte emmascript Emm6.
const newObject = object.assign({}, obj1, obj2, obj3)

# Operador Spread {...}
Similar a Object.assign. Es parte emmascript Emm6.
cons resultado = {
    ...obj1,
    ...obj2,
    ...obj3,
    ...common {
        ...obj1.common,
        ...obj2.common
    }
}

const frutasVerdes = [ 'kiwi', 'uva' ]
const frutasRojas = ['manzana', 'fresa']
const frutas = [
    ...frutasVerdes,
    'pera',
    ...frutasRojas,
    'otro'
]

# React Lifecycle Method Diagram

[Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

# Fakerjs

Libreria para usar datos dom

# Comunicacion entre componentes

## Padre - hijo
Atraves de ref desdes el componente padre.

## Hijo - padre
Atraves de event bubblig. Es considerado un antipatron

# Hooks
Funcion plana de js, para crear componentes basados en funciones.
## Reglas:
- Ejecutar hooks en nivel raiz.
- No se pueden agregar hooks en condicionales o funciones anidades o bucles.
- Hooks personalizados siempre deben tener prefijo "use", ejemplo useFecth, useResize.
- Hook solo pueden llamar desde hooks personalizados o funciones
- useEffect es de tipo asincrono. Ejecuta despues actualizar dom.
- useLayoutEffect es de tipo sincrono. Ejecuta antes actualizar dom.