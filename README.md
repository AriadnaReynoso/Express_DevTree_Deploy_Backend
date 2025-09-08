# Devtree

## English

Devtree is a web application designed to allow users to create and customize their own profile pages with a collection of links in a simple, attractive, and intuitive way. Built with a modern tech stack, Devtree combines a user-friendly frontend with a robust backend, enabling real-time profile editing, drag-and-drop link organization, and secure user data management. The project emphasizes clean design, scalability, and a seamless user experience, making it ideal for individuals and creators to showcase their online presence.

### Features

-**Customizable Profiles**: Users can create personalized profiles with a unique handle, description, and profile image.
-**Dynamic Link Management**: Add, edit, and organize links using an intuitive drag-and-drop interface.
-**Real-Time Editing**: Profile changes are reflected instantly, providing a smooth user experience.
-**Secure Authentication**: User accounts are protected with JWT-based authentication and password hashing.
-**Responsive Design**: The application is fully responsive, ensuring compatibility across devices.
-**Scalable Architecture**: Built with modular backend and frontend, facilitating the addition of new features.

### Tech Stack

Devtree leverages a modern and robust set of technologies to deliver a seamless and high-performance experience. Below is a detailed breakdown of the frameworks, libraries, and tools used, along with their purpose in the project.

#### Frontend

The frontend is built with React, TypeScript, and Tailwind CSS, providing a dynamic, type-safe, and visually appealing user interface.

-**@tailwindcss/forms**: A Tailwind plugin to style form elements consistently, ensuring inputs and textareas align with the application’s aesthetic.
-**React Router DOM**: Handles client-side routing, enabling seamless navigation between pages like login, register, and profile views.
-**React Hook Form**: Simplifies form handling and validation, used in login, registration, and profile editing forms for efficient state management and error handling.
-**@tanstack/react-query**: Manages server-state, caching, and data fetching, ensuring efficient data updates for user profiles and links without page reloads.
    -**@tanstack/react-query-devtools**: Provides debugging tools for React Query, aiding in cache inspection during development.
-**@dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities**: Enables drag-and-drop functionality for reordering links in the profile, providing an intuitive user experience.
-**Axios**: A promise-based HTTP client for making API requests to the backend, used for authentication, profile updates, and link management.
-**Sonner**: A lightweight toast notification library for displaying success and error messages to users (e.g., after login or profile updates).
-**react-slugify**: Generates URL-friendly slugs for user handles, ensuring clean and shareable profile URLs.
-**@heroicons/react**: Supplies a set of SVG icons for use in buttons, navigation, and other UI elements.

#### Backend

The backend is built with Node.js, Express, MongoDB, and TypeScript, providing a secure and scalable RESTful API for user and link management.

-**MongoDB & Mongoose**: MongoDB serves as the NoSQL database for storing user data and links, while Mongoose provides an ORM for schema validation and data modeling.
-**jsonwebtoken**: Implements JWT-based authentication, generating and verifying tokens for secure user sessions.
-**bcrypt**: Hashes user passwords for secure storage, protecting sensitive data.
-**express-validator**: Validates and sanitizes incoming request data, ensuring secure and correct input for API endpoints.
-**cloudinary**: Manages image uploads for user profile pictures, providing cloud storage and image optimization.
-**formidable**: Parses multipart form data for handling file uploads (profile images).
-**slug**: Generates URL-friendly slugs for user handles, mirroring the frontend’s slug functionality.
-**uuid**: Generates unique identifiers for links or other entities, ensuring uniqueness in the database.
-**cors**: Enables Cross-Origin Resource Sharing, allowing the frontend to communicate with the backend.
-**colors**: Enhances console logging with colored output for better debugging during development.
-**nodemon**: Automatically restarts the server on code changes, improving development efficiency.

### Project Structure

#### Frontend:

-**Built with React, TypeScript, and Tailwind CSS.**
-**Organized with components for forms, navigation, and drag-and-drop link management.**
-**Uses React Query for state management and API integration, with Axios for HTTP requests.**
-**Deployable as a static site after building with Vite.**


#### Backend:

-**Built with Node.js, Express, and TypeScript.**
-**Uses MongoDB with Mongoose for data storage.**
-**Structured with controllers, middleware, models, and routes for modular API endpoints.**
-**Secured with JWT authentication and bcrypt for password hashing.**

Author
Developed by Ariadna Reynoso.

## Español

Devtree es una aplicación web inspirada en Linktree, diseñada para permitir a los usuarios crear y personalizar sus propios perfiles con una colección de enlaces de manera sencilla, atractiva e intuitiva. Construida con un stack tecnológico moderno, Devtree combina un frontend amigable con un backend robusto, ofreciendo edición de perfiles en tiempo real, organización de enlaces mediante drag-and-drop y una gestión segura de los datos del usuario. El proyecto destaca por su diseño limpio, escalabilidad y una experiencia de usuario fluida, siendo ideal para individuos y creadores que deseen mostrar su presencia en línea.

### Características

-**Perfiles Personalizables**: Los usuarios pueden crear perfiles personalizados con un identificador único, descripción e imagen de perfil.
-**Gestión Dinámica de Enlaces**: Permite añadir, editar y organizar enlaces mediante una interfaz intuitiva de drag-and-drop.
-**Edición en Tiempo Real**: Los cambios en el perfil se reflejan instantáneamente, ofreciendo una experiencia de usuario fluida.
-**Autenticación Segura**: Las cuentas de usuario están protegidas con autenticación basada en JWT y hash de contraseñas.
-**Diseño Responsivo**: La aplicación es completamente responsiva, garantizando compatibilidad en todos los dispositivos.
-**Arquitectura Escalable**: Construida con un backend y frontend modulares, facilitando la adición de nuevas funcionalidades.

### Stack Tecnológico

Devtree utiliza un conjunto de tecnologías modernas y robustas para ofrecer una experiencia fluida y de alto rendimiento. A continuación, se detalla cada framework, librería y herramienta utilizada, junto con su propósito en el proyecto.

#### Frontend

El frontend está construido con React, TypeScript y Tailwind CSS, proporcionando una interfaz de usuario dinámica, segura en tipado y visualmente atractiva.

-**@tailwindcss/forms**: Plugin de Tailwind para estilizar formularios de manera consistente, asegurando que inputs y textareas se alineen con la estética de la aplicación.
-**React Router DOM**: Maneja el enrutamiento del lado del cliente, permitiendo una navegación fluida entre páginas como login, registro y vista de perfil.
-**React Hook Form**: Simplifica la gestión y validación de formularios, utilizado en los formularios de login, registro y edición de perfil para un manejo eficiente del estado y errores.
-**@tanstack/react-query**: Gestiona el estado del servidor, caché y obtención de datos, asegurando actualizaciones eficientes de datos de perfiles y enlaces sin recargar la página.
-**@tanstack/react-query-devtools**: Proporciona herramientas de depuración para React Query, facilitando la inspección de la caché durante el desarrollo.
-**@dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities**: Habilita la funcionalidad de drag-and-drop para reordenar enlaces en el perfil, ofreciendo una experiencia intuitiva.
-**Axios**: Cliente HTTP basado en promesas para realizar solicitudes a la API del backend, usado para autenticación, actualizaciones de perfil y gestión de enlaces.
-**Sonner**: Librería ligera de notificaciones toast para mostrar mensajes de éxito y error a los usuarios (por ejemplo, tras login o actualizaciones de perfil).
-**react-slugify**: Genera slugs amigables para URLs a partir de los identificadores de usuario, asegurando URLs limpias y compartibles.
-**@heroicons/react**: Suministra íconos SVG para botones, navegación y otros elementos de la interfaz.

#### Backend

El backend está construido con Node.js, Express, MongoDB y TypeScript, proporcionando una API RESTful segura y escalable para la gestión de usuarios y enlaces.

-**MongoDB & Mongoose**: MongoDB es la base de datos NoSQL para almacenar datos de usuarios y enlaces, mientras que Mongoose proporciona un ORM para validación de esquemas y modelado de datos.
-**jsonwebtoken**: Implementa autenticación basada en JWT, generando y verificando tokens para sesiones de usuario seguras.
-**bcrypt**: Hashea contraseñas de usuario para un almacenamiento seguro, protegiendo datos sensibles.
-**express-validator**: Valida y sanitiza los datos de las solicitudes entrantes, asegurando entradas seguras y correctas para los endpoints de la API.
-**cloudinary**: Gestiona la carga de imágenes para fotos de perfil, proporcionando almacenamiento en la nube y optimización de imágenes.
-**formidable**: Analiza datos de formularios multipart para manejar la carga de archivos (imágenes de perfil).
-**slug**: Genera slugs amigables para URLs a partir de los identificadores de usuario, en sintonía con la funcionalidad del frontend.
-**uuid**: Genera identificadores únicos para enlaces u otras entidades, asegurando unicidad en la base de datos.
-**cors**: Habilita Cross-Origin Resource Sharing, permitiendo que el frontend se comunique con el backend.
-**dotenv**: Carga variables de entorno desde un archivo .env, gestionando configuraciones sensibles como JWT_SECRET y credenciales de base de datos.
-**colors**: Mejora los logs en consola con colores, facilitando la depuración durante el desarrollo.
-**nodemon**: Reinicia automáticamente el servidor al detectar cambios en el código, mejorando la eficiencia del desarrollo.

### Estructura del Proyecto

#### Frontend:

-**Construido con React, TypeScript y Tailwind CSS.**
-**Organizado con componentes para formularios, navegación y gestión de enlaces drag-and-drop.**
-**Utiliza React Query para gestión de estado y comunicación con la API, con Axios para solicitudes HTTP.**
-**Desplegable como sitio estático tras compilar con Vite.**


#### Backend:

-**Construido con Node.js, Express y TypeScript.**
-**Usa MongoDB con Mongoose para almacenamiento de datos.**
-**Estructurado con controladores, middleware, modelos y rutas para endpoints de API modulares.**
-**Protegido con autenticación JWT y hash de contraseñas con bcrypt.**

Autora
Desarrollado por Ariadna Reynoso.