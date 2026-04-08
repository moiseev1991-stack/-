/**
 * Production entry for hosts (e.g. Plesk Node.js) that expect a startup file in the app root.
 *
 * Prerequisites on the server (same directory as package.json):
 *   npm ci
 *   npm run build
 *
 * Then set the application to run: npm start   (or node server.js)
 * Env: PORT and HOSTNAME are usually set by the panel; defaults suit local smoke tests.
 */
"use strict";

if (!process.env.HOSTNAME) process.env.HOSTNAME = "0.0.0.0";
if (!process.env.PORT) process.env.PORT = "3000";

require("./.next/standalone/server.js");
