# 🚀 GUÍA DE DESPLIEGUE EN HOSTINGER - DOGNAVI

## 📋 TABLA DE CONTENIDOS
1. [Preparación Previa](#preparación-previa)
2. [Subir Archivos a Hostinger](#subir-archivos)
3. [Configuración de Dominio](#configuración-dominio)
4. [Integrar Google Analytics](#google-analytics)
5. [Configurar Links de Afiliados](#links-afiliados)
6. [Optimización para SEO](#optimización-seo)
7. [Checklist Post-Lanzamiento](#checklist-post-lanzamiento)

---

## 🎯 PREPARACIÓN PREVIA

### Lo que tienes:
✅ `index.html` - Página principal con calculadora funcional
✅ `blog/senales-sobrealimentacion.html` - Primer artículo completo
✅ Diseño responsive y optimizado
✅ Calculadora de alimentación 100% funcional (JavaScript puro)

### Lo que necesitas antes de empezar:
1. **Cuenta de Hostinger** (Plan Premium o Business recomendado)
2. **Dominio propio** (ej: dognavi.com) - puede ser registrado en Hostinger
3. **Cuenta de Google Analytics** (gratis)
4. **Cuentas de Afiliados:**
   - Amazon Associates (usa: affiliate-program.amazon.com)
   - Chewy Affiliates (si disponible en tu país)
5. **Imágenes optimizadas** para el sitio (opcional pero recomendado)

---

## 📤 SUBIR ARCHIVOS A HOSTINGER

### Método 1: File Manager (Más Simple)

1. **Accede a hPanel de Hostinger:**
   - Ve a: hostinger.com/cpanel
   - Inicia sesión con tus credenciales

2. **Abre el File Manager:**
   - En el panel principal, busca "File Manager"
   - Click en "File Manager"

3. **Navega a la carpeta pública:**
   - Busca la carpeta `public_html`
   - Esta es la raíz de tu sitio web

4. **Sube los archivos:**
   - Click en "Upload Files" (arriba a la derecha)
   - Arrastra y suelta `index.html` directamente en `public_html`
   - Crea carpeta `blog` dentro de `public_html`
   - Sube `senales-sobrealimentacion.html` dentro de la carpeta `blog`

5. **Estructura final debe ser:**
```
public_html/
├── index.html
└── blog/
    └── senales-sobrealimentacion.html
```

### Método 2: FTP (Para Usuarios Avanzados)

1. **Obtén credenciales FTP:**
   - En hPanel > FTP Accounts
   - Crea cuenta FTP o usa las existentes
   - Anota: Host, Username, Password, Puerto (21)

2. **Usa FileZilla (Gratis):**
   - Descarga: filezilla-project.org
   - Conecta usando las credenciales FTP
   - Arrastra archivos a `public_html`

---

## 🌐 CONFIGURACIÓN DE DOMINIO

### Si compraste dominio en Hostinger:
1. Ya está automáticamente conectado
2. Tu sitio estará en: `tudominio.com`

### Si tienes dominio en otro proveedor:
1. **En tu proveedor de dominio:**
   - Busca "DNS Settings" o "Nameservers"
   - Cambia a los nameservers de Hostinger:
     ```
     ns1.dns-parking.com
     ns2.dns-parking.com
     ```
   - Guarda cambios (puede tardar 24-48hrs en propagarse)

2. **En Hostinger:**
   - Ve a: Domains > Add Domain
   - Ingresa tu dominio
   - Selecciona tu hosting
   - Espera propagación

### Verificar que funciona:
- Abre navegador privado
- Ve a: `http://tudominio.com`
- Deberías ver tu página de DogNavi

---

## 📊 INTEGRAR GOOGLE ANALYTICS

### Paso 1: Crear Cuenta de Analytics

1. Ve a: [analytics.google.com](https://analytics.google.com)
2. Click en "Start measuring"
3. Completa datos de tu propiedad
4. Copia tu **Measurement ID** (formato: G-XXXXXXXXXX)

### Paso 2: Actualizar el Código

1. Abre `index.html` en el File Manager de Hostinger
2. Busca esta línea (línea 28-29):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

3. Reemplaza `G-XXXXXXXXXX` con tu ID real:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF456"></script>
```

4. En la línea 33, también reemplázalo:
```javascript
gtag('config', 'G-ABC123DEF456');
```

5. Guarda cambios

### Paso 3: Verificar Instalación
- Instala extensión: "Google Analytics Debugger" en Chrome
- Visita tu sitio
- Abre consola (F12)
- Deberías ver eventos de Analytics

---

## 💰 CONFIGURAR LINKS DE AFILIADOS

### Amazon Associates

1. **Regístrate en Amazon Associates:**
   - Ve a: affiliate-program.amazon.com
   - Completa registro (necesitas dominio verificado)
   - Espera aprobación (puede tomar 24-72hrs)

2. **Obtén tus links:**
   - Busca productos en Amazon
   - Usa la barra de herramientas de Associates
   - Genera link de afiliado
   - Copia el link completo

3. **Actualiza los botones en tu sitio:**
   - Abre `index.html` en File Manager
   - Busca sección de productos (línea ~795):
   ```html
   <a href="#" class="btn-primary">Ver en Amazon</a>
   ```
   
   - Reemplaza `#` con tu link de afiliado:
   ```html
   <a href="https://www.amazon.com/dp/PRODUCTO123?tag=tuID-20" class="btn-primary" target="_blank" rel="nofollow noopener">Ver en Amazon</a>
   ```

4. **Productos recomendados para vincular:**
   - Comederos medidores automáticos
   - Alimento premium para perros
   - Básculas digitales para mascotas
   - Suplementos multivitamínicos caninos
   - Tazones antivuelco
   - Libros de nutrición canina

### Chewy Affiliates (Si aplica)

1. Ve a: chewy.com/app/content/affiliate
2. Regístrate en su programa
3. Similar proceso que Amazon
4. Generalmente mejores comisiones (hasta 30% primera compra)

---

## 🔍 OPTIMIZACIÓN PARA SEO

### Google Search Console

1. **Regístrate en Search Console:**
   - Ve a: [search.google.com/search-console](https://search.google.com/search-console)
   - Agrega tu propiedad (dominio completo)
   
2. **Verificación de propiedad:**
   - Método recomendado: HTML Tag
   - Copia el meta tag que te dan
   - Pégalo en el `<head>` de tu `index.html` (después de línea 40)
   - Guarda y verifica en Search Console

3. **Envía tu Sitemap:**
   - Crea archivo `sitemap.xml` en la raíz:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://tudominio.com/</loc>
       <lastmod>2025-11-03</lastmod>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://tudominio.com/blog/senales-sobrealimentacion.html</loc>
       <lastmod>2025-11-03</lastmod>
       <priority>0.8</priority>
     </url>
   </urlset>
   ```
   - En Search Console: Sitemaps > Agregar sitemap > `sitemap.xml`

### robots.txt

Crea archivo `robots.txt` en la raíz de `public_html`:
```
User-agent: *
Allow: /
Sitemap: https://tudominio.com/sitemap.xml
```

### Personalizar Metadatos

1. Abre `index.html`
2. Línea 9 - Cambia el dominio:
```html
<link rel="canonical" href="https://tudominio.com/" />
```

3. Línea 16 - Agrega tu URL completa:
```html
<meta property="og:url" content="https://tudominio.com/" />
```

---

## ✅ CHECKLIST POST-LANZAMIENTO

### Día 1 - Inmediatamente después de subir

- [ ] Verificar que `index.html` carga correctamente
- [ ] Probar la calculadora de alimentación (completar formulario y ver resultado)
- [ ] Verificar que el artículo del blog carga: `tudominio.com/blog/senales-sobrealimentacion.html`
- [ ] Probar navegación desde móvil (menú hamburguesa)
- [ ] Verificar que Google Analytics está capturando datos (tarda ~24hrs en mostrar)
- [ ] Comprobar que todos los links internos funcionan

### Semana 1 - Tareas Iniciales

- [ ] Enviar sitio a Google Search Console
- [ ] Crear 2 artículos adicionales para el blog (mínimo 1,000 palabras c/u)
- [ ] Configurar cuenta de email profesional (email@tudominio.com)
- [ ] Integrar Mailchimp o ConvertKit para newsletter
- [ ] Hacer primeras publicaciones en redes sociales

### Mes 1 - Optimización

- [ ] Analizar datos de Google Analytics (páginas más visitadas)
- [ ] Optimizar títulos y descripciones según búsquedas
- [ ] Añadir 3-5 artículos más al blog
- [ ] Comenzar link building básico
- [ ] Configurar Google Ads (opcional, si tienes presupuesto)
- [ ] Revisar posicionamiento en Google Search Console

---

## 🎨 AÑADIR IMÁGENES REALES

Actualmente el sitio usa emojis como placeholders. Para profesionalizar:

1. **Necesitas imágenes:**
   - Logo de DogNavi (formato PNG con transparencia)
   - Foto de perro feliz para hero section
   - Imágenes para blog (mínimo 800x600px)

2. **Fuentes gratuitas de imágenes:**
   - Unsplash.com (perros, mascotas)
   - Pexels.com (libres de derechos)
   - Pixabay.com

3. **Optimizar antes de subir:**
   - Usa: tinypng.com
   - Reduce tamaño a <200KB por imagen
   - Formato WebP preferido (o JPG optimizado)

4. **Subir a Hostinger:**
   - Crea carpeta `images` en `public_html`
   - Sube todas las imágenes ahí
   - Actualiza referencias en HTML:
   ```html
   <!-- Cambiar de: -->
   <div class="card-image">🥣</div>
   
   <!-- A: -->
   <img src="/images/calculadora-alimentacion.jpg" alt="Calculadora de alimentación canina">
   ```

---

## 🔒 SEGURIDAD ADICIONAL

### Certificado SSL (HTTPS)

1. En hPanel de Hostinger:
   - Ve a: Advanced > SSL
   - Activa "Free SSL" (Let's Encrypt)
   - Espera 10-15 minutos

2. Forzar HTTPS:
   - Crea archivo `.htaccess` en `public_html`:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

---

## 📈 PRÓXIMOS PASOS PARA MONETIZACIÓN

### Semanas 2-4:
1. **Crear más contenido:**
   - Mínimo 10 artículos de blog (1,000+ palabras)
   - Optimizados para SEO con keywords específicas
   - Links internos entre artículos

2. **Integrar Google AdSense:**
   - Solicita cuenta: adsense.google.com
   - Necesitas mínimo 20-30 artículos publicados
   - Tráfico mínimo: 1,000 visitas/mes

3. **Construir lista de emails:**
   - Ofrecer lead magnet: "Guía PDF de Nutrición Canina"
   - Integrar Mailchimp (gratis hasta 500 suscriptores)
   - Enviar newsletter semanal

### Meses 2-3:
1. **Expandir afiliados:**
   - Agregar más productos
   - Crear reviews detalladas
   - Tablas comparativas

2. **Link Building:**
   - Guest posts en blogs de mascotas
   - Comentarios en foros especializados
   - Intercambio de enlaces con sitios relevantes

3. **Herramientas adicionales:**
   - Calculadora de salud (próxima herramienta)
   - Buscador de raza ideal
   - Generador de planes de alimentación

---

## 🆘 SOLUCIÓN DE PROBLEMAS COMUNES

### Problema: "Mi sitio no carga"
**Solución:**
1. Verifica que `index.html` está en `public_html` (no en subcarpeta)
2. Limpia caché del navegador (Ctrl + Shift + R)
3. Espera propagación DNS (hasta 48hrs si cambiaste nameservers)

### Problema: "La calculadora no funciona"
**Solución:**
1. Abre consola del navegador (F12)
2. Ve a tab "Console"
3. Busca errores JavaScript en rojo
4. Verifica que no editaste accidentalmente el código JS

### Problema: "Google Analytics no muestra datos"
**Solución:**
1. Verifica que instalaste correctamente el Measurement ID
2. Espera 24-48hrs para que aparezcan datos
3. Visita tu sitio desde navegador privado
4. Usa "Analytics Debugger" para verificar eventos

### Problema: "Links de afiliados no rastrean ventas"
**Solución:**
1. Verifica que tu tag de afiliado está en el link
2. Asegúrate de cumplir políticas (disclaimer de afiliados visible)
3. Espera 24-72hrs para que aparezcan en el dashboard de Amazon

---

## 📞 RECURSOS ÚTILES

- **Hostinger Help:** [support.hostinger.com](https://support.hostinger.com)
- **Amazon Associates:** [affiliate-program.amazon.com](https://affiliate-program.amazon.com)
- **Google Analytics:** [analytics.google.com](https://analytics.google.com)
- **Search Console:** [search.google.com/search-console](https://search.google.com/search-console)

---

## 🎉 ¡FELICIDADES!

Has desplegado un sitio web profesional optimizado para:
- ✅ SEO desde día 1
- ✅ Conversión de visitantes
- ✅ Monetización con afiliados
- ✅ Crecimiento orgánico

**Próximo objetivo:** 1,000 visitas/mes en los primeros 3 meses.

Con contenido constante (2-3 artículos/semana) y las herramientas ya implementadas, esto es 100% alcanzable.

---

**¿Dudas específicas sobre algún paso?** Revisa la sección de Solución de Problemas o contacta al soporte de Hostinger.

**Fecha de última actualización:** Noviembre 2025
**Versión:** 1.0
