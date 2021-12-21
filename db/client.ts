import { Client as dbClient } from "https://deno.land/x/mysql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

// Get config enviroment variables
const { HOSTNAME, USERNAME, DB, PASSWORD } = config();

// Generate and export default MySQL client
export const Client = await new dbClient().connect({
    hostname: HOSTNAME,
    username: USERNAME,
    db: DB,
    poolSize: 3,
    password: PASSWORD
});