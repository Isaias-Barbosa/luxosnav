# 🛍️ LuxosNav — E-commerce com Angular + Spring Boot + JWT

Este projeto é uma aplicação full stack de e-commerce desenvolvida com Angular no front-end e Spring Boot no back-end. Ele implementa autenticação com JWT, proteção de rotas, consumo de API RESTful e uma base sólida para expansão com funcionalidades como carrinho, pedidos e painel administrativo.

---

## 🚀 Tecnologias Utilizadas

### 🧩 Front-end (Angular)
- Angular 17+
- Angular Router
- Reactive Forms
- JWT Decode
- Bootstrap 5
- AuthGuard + HttpInterceptor

### 🛠️ Back-end (Spring Boot)
- Spring Boot 3.x
- Spring Security com JWT
- Spring Web
- Spring Data JPA
- Swagger/OpenAPI
- CORS Configuration

---

## 🔐 Funcionalidades de Autenticação

- Login com username e senha
- Geração de token JWT no back-end
- Armazenamento seguro do token no front-end
- Envio automático do token via interceptor
- Logout com remoção do token
- Proteção de rotas com `AuthGuard`
- Exibição do nome do usuário logado
- Controle de acesso por perfil (ex: ROLE_ADMIN)

---

## 📦 Funcionalidades do Sistema

- ✅ Listagem de produtos (protegida por autenticação)
- ✅ Tela de login com validação reativa
- ✅ Redirecionamento automático para login se não autenticado
- ✅ CORS configurado para integração Angular ↔ Spring
- 🔜 Cadastro de produtos (restrito a admin)
- 🔜 Carrinho de compras
- 🔜 Tela de pedidos
- 🔜 Upload de imagens

---

## 🧪 Como rodar o projeto

### 🔧 Back-end (Spring Boot)

```bash
# Navegue até a pasta do back-end
cd ecommerce-api

# Rode a aplicação
./mvnw spring-boot:run
```
A API estará disponível em: http://localhost:8080

## 💻 Front-end (Angular

# Navegue até a pasta do front-end
cd ecommerce-front

# Instale as dependências
npm install

# Rode a aplicação
ng serve

A aplicação estará disponível em: http://localhost:4200

📚 Documentação da API
Acesse a documentação Swagger em:
http://localhost:8080/swagger-ui.html

## 🧪 Usuário de Teste
Você pode usar o seguinte usuário para testar o login:

Usuário: admin
Senha: admin123

Esse usuário deve estar previamente cadastrado no banco de dados com a role ROLE_ADMIN.

## 📁 Estrutura de Pastas
ecommerce-api/
├── config/           # Configurações de segurança, CORS, Swagger
├── controller/       # Endpoints REST
├── model/            # Entidades JPA
├── repository/       # Interfaces de acesso ao banco
├── security/         # Filtro JWT e geração de token
└── service/          # Lógica de autenticação e regras de negócio

ecommerce-front/
├── auth/             # Login, AuthService, Interceptor, Guard
├── products/         # Listagem de produtos
├── shared/           # Componentes reutilizáveis
└── app.component.*   # Layout principal e navegação



📌 Autor
Desenvolvido por Isaias — 

📝 Licença
Este projeto está licenciado sob a licença MIT. Sinta-se livre para usar, modificar e contribuir!

---



