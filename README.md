# Adonis Command to fetch the data from Coingecko API and store the data into the database.

# Command To Run the logic

```typescript
> adonis store:data
// This command will fetch the data from Coingecko API and store the data into the database.

```

## Setup

1. Use the following command to install adonis

```
> npm i -g @adonisjs/cli
```
2. Use the following command to create a new adonis application
```
> adonis new {application_name}
```


### Database

#### I have used PostgreSQL

1. Add host, port, username, password and database for dabase connection
   
   ![database](https://github.com/justvarad123/adonisjsCommand/assets/33244550/d8a0cfea-b548-4102-a77b-c6ac11259be2)
   
### Migrations

1. Create new migrations by using following command

```
> adonis make:migration {migration_name}
```

2. Update schema as per response from Coingecko API
   
   ![schema](https://github.com/justvarad123/adonisjsCommand/assets/33244550/e32250ce-db4c-438a-8f14-1f4fb3ed564c)


3. Run the following command to run startup migrations.

```
> adonis migration:run
```

### Models

Create models by using following command

```
> adonis make:model {model_name}
```

### Command

1. Run following command

```javascript
> adonis make:command {file_name}
// This will create file under App/Commands
```

2. Register your newly created command inside the commands array in the 'start/app.js' file:

```javascript
const commands = [
  'App/Commands/{file_name}',
]
```

3. Create a command and add description of command:

![command](https://github.com/justvarad123/adonisjsCommand/assets/33244550/60c1193c-0534-4a7f-8b1d-80d9a0a5e44b)

4. Add main logic inside `handle()` function:

![handle2](https://github.com/justvarad123/adonisjsCommand/assets/33244550/6f58d39a-5d00-4eba-9e62-6a58452d5e4c)



## Test

Check PostgreSQL Database:

![data](https://github.com/justvarad123/adonisjsCommand/assets/33244550/6e8c2d2f-f0d5-4d8d-8d86-3e0e42cfe4ed)

