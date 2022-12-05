const { spawn } = require("child_process");

const { formatResultQuery } = require('./utils')

function executeQuery({jdbcUrl, userDb, passwordDb, query}) {

    return new Promise((resolve, reject) => {

        const jarCmd = spawn("java", [
            "-jar",
            `${__dirname}/driver/jt400.jar`,
            jdbcUrl,
            userDb,
            passwordDb
        ]);

        const result = [];

        jarCmd.stdin.write(`${query}\n`);

        jarCmd.stdout.on("error", (err) => {
            reject(`${err}`);
        });

        jarCmd.stdout.on("data", (data) => {
           result.push(data.toString());
        });

        jarCmd.stdin.write("exit");

        jarCmd.stdin.end();

        jarCmd.on("exit", () => {
            resolve(formatResultQuery(result));
        })
    });
}

module.exports = {
    executeQuery
}