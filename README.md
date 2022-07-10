# GraphQL-service

## Инсталляция

1. Репозиторий с микросервисами находится здесь: https://github.com/rolling-scopes-school/node-graphql-service
2. Инструкции по запуску микросервисов находятся в файле readme.md вышеназванного репозитория
3. Склонируйте мой репозиторий в отдельную папку
4. Перейдите в ветку dev
5. Запустите команду npm install
6. Переименуйте файл .env.example в .env

## Использование

1. Для запуска приложения введите команду npm run start
2. После запуска вы увидите в вашем терминале:
        🚀  Server is running!
        🔉  Listening on port 4000
        📭  Query at https://studio.apollographql.com/dev

3. Перейдите в вашем браузере по адресу http://localhost:4000/
4. Зарегистрируйтесь(пример):
    Operation: Mutation
    ```
    mutation Mutation($content: UserInput!) {
        register(content: $content) {
            id
            firstName
            lastName
            password
            email
        }
    }
    ```
    Variables
    ```
    JSON
    {
        "content": {
            "firstName": "TestName",
            "lastName": "TestSurname",
            "password": "testpassword",
            "email": "test@mail.ru"
        }
    }
    ```
    Response  STATUS 200 | 400ms | 201B
    ```
    {
        "data": {
            "register": {
            "id": "62caf467128f6f91495de245",
            "firstName": "TestName",
            "lastName": "TestSurname",
            "password": "$2b$10$KAdqnB8EKPhakJIfWIdMvudvNKcmduiIJnAKFUM4X.lNgrkTSsc4S",
            "email": "test@mail.ru"
            }
        }
    }
    ```
5. Залогиньтесь(пример):
    Operation: Query
    ```
    query Query($email: String!, $password: String!) {
        token(email: $email, password: $password) {
            jwt
        }
    }
    ```
    Variables
    ```
    JSON
    {
        "email": "test@mail.ru",
        "password": "$2b$10$KAdqnB8EKPhakJIfWIdMvudvNKcmduiIJnAKFUM4X.lNgrkTSsc4S"
    }
    ```
    Response  STATUS 200 | 120ms | 274B
    ```
    {
        "data": {
            "token": {
            "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNhZjQ2NzEyOGY2ZjkxNDk1ZGUyNDUiLCJmaXJzdE5hbWUiOiJUZXN0TmFtZSIsImxhc3ROYW1lIjoiVGVzdFN1cm5hbWUiLCJlbWFpbCI6InRlc3RAbWFpbC5ydSIsImlhdCI6MTY1NzQ2ODQ2OH0.hdn_I7mRqEBYfCGlGsTWpzlTkO0taCmI35D1BVnosEY"
            }
        }
    }
    ```
6. Обратите внимание, что все мутации, а также запросы фаворитов, должны содержать:
    Headers
    ```
    Authorization | Bearer (ваш jwt token)
    ```
7. Все варианты запросов и мутаций отражены в левой части экрана.
8. В операциях create и update для выбора нужных полей, нажмите на:
    ```
    Arguments
    content: AlbumInput!
    ```
9. Если есть какие-то вопросы - мой дискорд  @Fiery