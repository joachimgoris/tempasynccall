# tempasynccall

- [client.js] contains the example async/await function that will receive the server's response and work with that. 
- [package.json] contains the two NPM/javascript libraries that are used in this little example. 
  - To get those libraries you need to install via the commands:
    - `npm install node-fetch`
    - `npm install axios`
- All other code is to run a little webserver that returns a number and can be safely ignored.

Sources used:
- [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [top level async/await](https://stackoverflow.com/questions/46515764/how-can-i-use-async-await-at-the-top-level)
- [fetch](https://www.npmjs.com/package/node-fetch#json)
- [axios](https://axios-http.com/docs/example)
- [local disable ssl verification](https://stackoverflow.com/questions/52478069/node-fetch-disable-ssl-verification) For completion/can be ignored

[client.js]: ./client.js "javascript client"
[package.json]: ./package.json "package.json"