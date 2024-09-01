import httpProxy from 'http-proxy';
import Cookies from 'cookies';
import url from 'url';

// Get the actual API_URL as an environment variable. For real
// applications, you might want to get it from 'next/config' instead.
const API_URL = "http://localhost:8081";

const proxy = httpProxy.createProxyServer();

// You can export a config variable from any API route in Next.js.
// We'll use this to disable the bodyParser, otherwise Next.js
// would read and parse the entire request body before we
// can forward the request to the API. By skipping the bodyParser,
// we can just stream all requests through to the actual API.
export const config = {
	api: {
		bodyParser: false,
	},
}

export default (req: any, res: any) => {
	// Return a Promise to let Next.js know when we're done
	// processing the request:
	return new Promise<void>(async (resolve, reject) => {
		// In case the current API request is for logging in,
		// we'll need to intercept the API response.
		// More on that in a bit.
		const pathname = url.parse(req.url).pathname;
        
		// Rewrite the URL: strip out the leading '/api'.
		// For example, '/api/login' would become '/login'.
		// ️You might want to adjust this depending
		// on the base path of your API.
        req.url = req.url.replace(/^\/api/, '');

        const cookies = new Cookies(req, res)
		const token = cookies.get('token');
        if(token) req.headers['Authorization'] = `Bearer ${decodeURIComponent(token)}`;
        else req.headers['Authorization'] = `Bearer `;

        // Don't forget to handle errors:
        proxy.once('error', reject);

        // Forward the request to the API
        proxy.web(req, res, {
            target: API_URL,

            // Don't autoRewrite because we manually rewrite
            // the URL in the route handler.
            autoRewrite: false,

            // In case we're dealing with a login request,
            // we need to tell http-proxy that we'll handle
            // the client-response ourselves (since we don't
            // want to pass along the auth token).
            selfHandleResponse: false,
        });
	})
}