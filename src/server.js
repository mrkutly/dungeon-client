import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import * as sapper from '@sapper/server';
import { config } from 'dotenv';
config();

let { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

PORT = PORT || 3001;

// create a filestore for sessions 
const FileStore = new sessionFileStore(session);

polka() // You can also use Express
	.use(session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 31536000
		},
		store: new FileStore({
			path: process.env.NOW ? `/tmp/sessions` : `.sessions`
		})
	}))
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => ({
				token: req.session.token
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
