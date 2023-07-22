---
marp: true
theme: uncover
paginate: true
footer: Concepts
style: |
  section { font-size: 26px; } h1, h3 { color: #CF178F; text-shadow: 1px 1px 2px black; } ul { text-align: left; width: 100%; font-size: 24px; list-style: none; } li::before { content: "\2022"; color: #CF178F; font-weight: bold; display: inline-block; width: 1em; margin-left: -1em; text-shadow: 1px 1px 2px black;} strong, em { color: #964CDF}
---

<!-- _class: invert -->

# ¿Qué es RxJs?

- Extensiones reactivas para JavaScript.
- Las extensiones reactivas fueron desarrolladas originalmente por Microsoft como **Rx.NET**.
- Está diseñado para trabajar con acciones y eventos _asíncronos_.

---

<!-- _backgroundColor: #2D282E -->
<!-- _color: white -->

### RxJs

Nos permite observar y reaccionar a los datos a medida que fluyen a través del tiempo

- **Emitir** elementos
- **Reaccionar** a cada elemento emitido
  - Transformar
  - Filtrar
  - Modificar
- **Combinar**
- **Cache**

---

<!-- _backgroundColor: #2D282E -->
<!-- _color: white -->

### ¿Qué usar en lugar de RxJs?

- **Callback**: es una función que se puede llamar después de una operación asíncrona se haya completado. Pero pueden ser difíciles de gestionar cuando se trabaja con operaciones de asíncronas anidadas.
- **Promise**: es un objeto que puede producir un solo valor en algún momento en el futuro, solo puede manejar una sola emisión y no es cancelable.
- **async/await**: es una sintaxis especial que permite escribir código asíncrono que se ve sincrónico, solo puede manejar una sola emisión y es no cancelable.

---

<!-- _backgroundColor: #2D282E -->
<!-- _color: white -->

### ¿Porqué usar RxJs?

- RxJs proporciona una sola técnica para trabajar con cualquier tipo de datos (eventos del teclado, mouse, datos de arreglos, archivos o una API), podemos trabajar con diferentes fuentes utilizando _las mismas técnicas y operadores_.
- Se puede _componer_ información fácilmente a parti de diversas fuentes.
- RxJs puede _producir múltiples valores_ en el tiempo y utiliza un modelo _push_ para notificar cuando ocurren acciones específicas, lo que facilita reaccionar a las interacciones del usuario o cambios en los datos.
- RxJs es _perezoso_, una evaluación no comienza hasta la suscripción, por lo que podemos crear recetas que solo se ejecutan cuando necesitamos el resultado.
- RxJs tiene _manejo de errores_ incorporado.
- Con RxJs podemos cancelar acciones asíncronas.

---

<!-- _class: invert -->

# ¿Qué es el desarrollo reactivo?

- El paradigma declarativo se encarga de los _flujos de datos_ y la _propagación de los cambios_.
- El código es **reactivo** cuando un _cambio_ en alguna _entrada_ conduce a un _cambio automático_ en la _salida_.

---

<!-- _backgroundColor: #2D282E -->
<!-- _color: white -->

### Ventajas del desarrollo reactivo

- Nuestro código puede fácilmente reaccionar a las acciones del usuario y reaccionar los cambios de estado, por tanto _el código observa cambios y reacciona_, en lugar de llamar imperativamente a métodos.
- El código automáticamente _compone y combina_ conjuntos de datos, para calcular nuevos datos.
- Múltiples componentes pueden observar emisiones de datos. Por lo que una aplicación puede _comunicarse entre componentes_ sin un acoplamiento cercano.
- El manejo de errores puede ser también reactivo, haciendo que la aplicación sea _más resistente a la fallas_.
- Las técnicas reactivas pueden ayudarnos a _administrar los datos y el estado_ de la aplicación.

---

<!-- _backgroundColor: #2D282E -->
<!-- _color: white -->

# Streams

- Los elementos en un **stream** pueden venir en varios puntos de tiempo.

|                                                  |                                               |
| ------------------------------------------------ | --------------------------------------------- |
| Timeline                                         | Mouse events                                  |
| ![width:400px](./images/Timeline.jpg)            | ![width:400px](./images/Mouse%20position.jpg) |
| Input events                                     | HTTP request                                  |
| ![width:400px](./images/Text%20input%20data.jpg) | ![width:400px](./images/HTTP%20response.jpg)  |

---

<!-- _backgroundColor: #2D282E -->
<!-- _color: white -->

# Marble diagrams

- Permiten visualizar valores emitidos a través del tiempo

|                                                   |                                                      |
| ------------------------------------------------- | ---------------------------------------------------- |
| Next notification                                 | Complete notification                                |
| ![width:400px](./images/Next%20notification.jpg)  | ![width:400px](./images/Complete%20notification.jpg) |
| Error notification                                | Summary                                              |
| ![width:400px](./images/Error%20notification.jpg) | ![width:400px](./images/Notifications%20summary.jpg) |

---

<!-- _backgroundColor: #2D282E -->
<!-- _color: white -->

# Observer

- Un _observer_ es un objeto que observa y responde a
  notificaciones especificadas como métodos. _next()_ para manejar el siguiente dato emitido, _error()_ para manejar una condición de error y _complete()_ para manejar un procesamiento final o limpieza.
- **Observer**: Una colección de _callbacks_ que saben escuchar los valores entregados por un _observable_.
- **Observer**: es un consumidor de valores entregados por un _observable_.
- En RxJs, un _observer_ es definido como una interfaz con métodos _next()_, _error()_ y _complete()_.

```typescript
const observer: Observer<any> = {
  complete: (): void => console.log("✅ - Done"),
  error: (error: Error): void => console.error("❌ - Something wrong occurred: %O", error),
  next: (value: any): void => console.log("✔️ - Got value %O", value),
};
```

---

<!-- _backgroundColor: #2D282E -->
<!-- _color: white -->

# Subscriber

- Internamente RxJs cada _observer_ es convertido en un _subscriber_
- Un _subscriber_ es básicamente un _observer_ con características adicionales para _de subscribirse_ de un _observable_.

---

<!-- _backgroundColor: #2D282E -->
<!-- _color: white -->
<!-- footer: '' -->

# Observable

- **Observable**: una colección de eventos o valores emitidos tiempo.
- Un _observable_ puede ser síncrono o asíncrono, emitir valores finitos o infinitos.
- Podemos operar los valores emitidos con métodos (map, filter, concat). Dado que los valores se emiten a través del tiempo podemos aplicar operadores basados en el tiempo (delay, timeout.)

```typescript
const observable$: Observable<any> = new Observable((subscriber: Subscriber<any>): void => {
  try {
    subscriber.next();
  } catch (error) {
    subscriber.error(error);
  }
});
```

|                                                        |                                                            |
| ------------------------------------------------------ | ---------------------------------------------------------- |
| ![width:300px](./images/Time%20interval%20counter.jpg) | ![width:300px](./images/Mouse%20text%20click%20events.jpg) |
