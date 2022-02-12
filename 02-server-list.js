export async function main(ns) {
  let servers = {};
  ns.scan("home").forEach(server => servers[server] = 1);
  ns.tprint(servers);
}
