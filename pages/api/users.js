export default function handler(req, res) {
    // Set appropriate headers to allow cross-origin requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    if (req.method === 'OPTIONS') {
      // Handle preflight request
      res.status(200).end();
      return;
    }
  
    // Handle your API logic here
    // ...
  }
  