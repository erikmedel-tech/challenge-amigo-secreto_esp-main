
# Challenge: Amigo Secreto 

Aplicación web para organizar un sorteo de **Amigo Secreto**. Permite:
- Agregar participantes a una lista (con validaciones).
- Eliminar participantes.
- Realizar el sorteo asegurando que **nadie se asigne a sí mismo**.
- Ver los resultados en pantalla.

## 🧰 Tecnologías
- HTML, CSS, JavaScript (vanilla)

## 🚀 Cómo usar
1. Abre `index.html` en tu navegador.
2. Ingresa nombres y presiona **Añadir**.
3. Cuando haya al menos 2 personas, presiona **Sortear amigo**.

## 🧪 Reglas y validaciones
- No permite campos vacíos.
- No permite nombres repetidos (no distingue mayúsculas/minúsculas).
- Incluye botón **Eliminar** en cada fila.
- El sorteo genera un *derangement* (ninguna persona se asigna a sí misma).

## 🌐 Publicado en GitHub Pages
Tu sitio está disponible en:  
👉 https://erikmedel-tech.github.io/challenge-amigo-secreto_esp-main/

## 🛠️ Despliegue automático con GitHub Actions
- Este repositorio incluye `.github/workflows/deploy.yml` que:
  - Construye (no hay build) y publica a GitHub Pages.
- Pasos:
  1. Ve a **Settings → Pages** y habilita **GitHub Pages**.
  2. Ve a **Actions** y habilita acciones en el repo si es necesario.
  3. Haz un commit/push a `main` y espera que el workflow publique el sitio.

## 🎤  presentación 
> “Hola, soy Erik Medel y presento mi Challenge Amigo Secreto. La app permite ingresar nombres, validarlos y sortear un amigo secreto por persona evitando autoasignaciones. Practiqué lógica con JavaScript, arrays, manejo del DOM y validaciones de entrada. También incorporé accesibilidad con teclado y la opción de eliminar participantes. ¡Gracias!”

## 📄 Licencia
MIT
