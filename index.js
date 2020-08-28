const {
  createServer
} = require('@lhci/server')

console.log('Starting server...')

createServer({
  port: process.env.PORT,
  storage: {
    storageMethod: 'sql',
    sqlDialect: process.env.DB_DIARECT,
    sqlConnectionUrl: process.env.DB_CONNECTION_URL,
    sqlDangerouslyResetDatabase: true,
  },
}).then(({
  port
}) => console.log('LHCI listening on port', port))