![Logo](https://avatars.githubusercontent.com/u/53447251?s=100)

# Prerequisites:
- **Java** must be installed >= 8

# Installation:
    pnpm add node-db2 # or
    yarn add node-db2 # or
    npm install node-db2


# Usage:
```javascript
const { executeQuery } = require('node-db2');

    executeQuery({
        jdbcUrl: 'jdbc:as400://<database host>/<database name>;<options>',
        userDb: <database user>,
        passwordDb: <database password>,
        query: <query>
    }).then( (data) => {
        console.log(data);
    }).catch( (error) => {
        console.log(error);
    }
```

**Note**: It can also be used via async/await.