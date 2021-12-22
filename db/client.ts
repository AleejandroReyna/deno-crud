import { dotenv, Client as dbClient  } from "../depts.ts";

// Get config enviroment variables
const { HOSTNAME, USERNAME, DB, PASSWORD } = dotenv.config();

// Generate and export default MySQL client
export const Client = await new dbClient().connect({
    hostname: HOSTNAME,
    username: USERNAME,
    db: DB,
    poolSize: 3,
    password: PASSWORD
});
