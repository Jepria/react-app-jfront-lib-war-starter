# react-app-jfront-lib-war-starter

[React](https://reactjs.org/) application starter with jfront library in [Lerna](https://lerna.js.org/) monorepo and war
building

---

## Install
1. Clone this repo
2. Install dependencies
```sh
# yarn is fine too
npm i
```
3. Run bootstrap
```sh
npm run bootstrap
```

   This will bootstrap and link between app and lib
4. Now, it's ready!

## Dev flow
1. Run start
```sh
npm run start:dev:lib
npm run start:dev:app
```
2. Try changing the lib, it should reflect the changes directly
3. Now, you can start developing your React library!

## Build war

Being at the root directory, execute

```sh
npm run build:war
```

After successful build the result will be the *packages/jfront-app/target/jfront-app.war* file.

---

### License

Licensed under the [MIT license](./LICENSE). 

