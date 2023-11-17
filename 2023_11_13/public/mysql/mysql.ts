import { createConnection, Connection} from "mysql";

export const connection: Connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node'
})

