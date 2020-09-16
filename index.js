'use strict';

const express = require('express');

const app = express();

app
    .disable('etag')
    .get('/sites/:site', (req, res) => {
        res.end(req.params.site);
    });

app.listen(3000);

console.log('The application is running on port 3000');
