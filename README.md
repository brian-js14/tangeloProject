Prueba técnica QA - Tangelo

---

2. La colección en formato .json se encuentra relacionada en el repositorio actual
   con el nombre ReqresAPI.postman_collection.json

2.1 La explicación de cada request se encuentra relacionado en un test de cada petición,
en el que, al ser ejecutado se mostrará el test con la respuesta esperada y su significado.

Nota: Se definen variables de entorno {{HOST}} en la colección con el host de las peticiones.

3. En el punto 3 se realizaron 2 test independientes para los flujos de login y búsqueda de un viaje
   y en el del checkout se realizó con los 2 flujos anteriores, desde el login hasta crear la orden
   los archivo se encuentran en las siguientes rutas:

   - /home/brian/tangeloProject/cypress_ui/cypress/integration/3-tangelo-test/

     -checkout.cy.js

     -filterAndSearchPlaces.cy.js

     -login.cy.js
