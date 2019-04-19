const cluster = require("cluster");
const os = require("os");


if (cluster.isMaster) {
    let cpuCount = os.cpus().length;
    console.log(`Started with ${cpuCount} cpus`);
    for (let i = 0; i < cpuCount - 1; i++) {
        cluster.fork();
    }

}

if (cluster.isWorker) {
    require("./app");
}