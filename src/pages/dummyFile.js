const mysql = require('mysql2/promise');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

(async () => {
  let password = 'lizarddd';
  

  let conn;
  try {
    conn = await mysql.createConnection({
      host: 'lizard.c6de8wseq94u.us-east-1.rds.amazonaws.com',
      port: 3306,
      database: 'mysql',
      user: 'tomthelizard',
      password,
      ssl: { rejectUnauthorized: false, ca: require('fs').readFileSync('./global-bundle.pem') }
    });

    const [rows] = await conn.execute('SELECT VERSION() AS v');
    console.log(rows[0].v);
    conn.query("USE celebs");
    conn.query("SELECT * FROM celebInfo")
    .then(([rows]) => { // The 'result' is passed to the then() handler
    rows.forEach(rows => {console.log(rows.name)});
  })
  .catch(error => {
    console.error(error);
  });
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  } finally {
    if (conn) await conn.end();
  }
})().catch(console.error);