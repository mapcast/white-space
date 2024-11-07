import httpProxy from 'http-proxy';
import Cookies from 'cookies';

const API_URL = "http://localhost:8090";
const proxy = httpProxy.createProxyServer();

export const config = {
	api: {
		bodyParser: false,
	},
}

export default (req: any, res: any) => {
	return new Promise<void>(async (resolve, reject) => {
        req.url = req.url.replace(/^\/api/, '');
        console.log(req.url);
        const cookies = new Cookies(req, res)
		const token = cookies.get('token');
        if(token) req.headers['Authorization'] = `Bearer ${decodeURIComponent(token)}`;
        else req.headers['Authorization'] = `Bearer `;
        proxy.once('error', reject);

        proxy.web(req, res, {
            target: API_URL,
            autoRewrite: false,
            selfHandleResponse: false,
        });
	})
}