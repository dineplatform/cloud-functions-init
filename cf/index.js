const { onRequest } = require('firebase-functions/v2/https');

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