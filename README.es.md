# Files — previsualización de inicio de sesión

[ENGLISH](README.md) | **ESPAÑOL**

Mantenido por Criptonautas. Sin afiliación ni respaldo de Filestash.

La página que ves al abrir Files, la biblioteca colectiva de Criptonautas, sin haber
iniciado sesión. Files corre [Filestash](https://github.com/mickael-kerjean/filestash)
detrás de un proveedor de identidad; esta página va delante.

## Qué hace

- Muestra el símbolo de Criptonautas, el nombre, una línea que dice para quién es la
  biblioteca y un botón que inicia la sesión y vuelve a la biblioteca.
- Elige el idioma según el navegador: español si está en español, inglés en cualquier
  otro caso. El español está en el marcado, así que la página se lee aunque
  JavaScript esté desactivado.
- Sigue el modo claro u oscuro del sistema, con la paleta del kit de marca e Inter Tight.
- No guarda datos ni llama a nada: sin cookies y sin pedidos más allá de su propia
  fuente y su script. Les pide a los buscadores que no la indexen.

## Por qué una página y no un redirect

Sin sesión, el proxy responde 401. Mandar eso directo al login deja un salto en
blanco, sin nada que leer: un enlace compartido no muestra previsualización y quien
llega no ve dónde cayó. Servida con estado 200, esta página dice qué es Files y quién
puede entrar antes de pedirle a nadie que inicie sesión.

## Archivos

| Archivo | Qué es |
|---|---|
| `public/preview.html` | la página |
| `public/lang.js` | pasa el texto a inglés cuando el navegador no está en español |
| `public/inter-tight.woff2` | Inter Tight, tomada tal cual del kit de marca de Criptonautas |
| `OFL-inter-tight.txt` | la licencia de la fuente |

## Cómo servirla

Archivos estáticos, sin build. Serví `public/` en `/_preview/` fuera del login, y
respondé las peticiones sin sesión con `public/preview.html` y estado 200. La página
usa URLs absolutas `/_preview/` porque se puede servir en cualquier ruta.

Con una Content-Security-Policy necesita:

```
script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'
```

## Licencia

Código bajo [MIT](LICENSE). Inter Tight bajo SIL OFL 1.1, en
[`OFL-inter-tight.txt`](OFL-inter-tight.txt). El símbolo de Criptonautas es la marca
de la comunidad, de uso abierto con las reglas publicadas en <https://criptonautas.co/kit>.

Texto de este README bajo [CC BY-NC-SA 4.0](CC-BY-NC-SA-4.0.txt).
