const { onRequest } = require('firebase-functions/v2/https');
const { onCustomEventPublished } = require("firebase-functions/v2/eventarc");

exports.testFunction2 = onRequest({
  region: 'europe-west2',
  cors: true
}, (req, res) => {
  res.json({ 
    message: 'Test function v2 deployed successfully!', 
    timestamp: new Date().toISOString(),
    project: process.env.GCLOUD_PROJECT || 'unknown',
    version: 'v2',
    runtime: 'nodejs20',
    region: 'europe-west2'
  });
});

exports.eventarcInit = onCustomEventPublished("warmup.event", (event) => {
  console.log("Eventarc warm-up event received:", event);
});
