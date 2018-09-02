import app from './app';
import * as https from 'https';
import * as fs from 'fs';
var path = require('path');
const PORT = 3000;
const httpsOptions = {
    key: fs.readFileSync(path.resolve('./lib/config/key.pem')),
    cert: fs.readFileSync(path.resolve('./lib/config/cert.pem'))
}
https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})