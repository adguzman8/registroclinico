import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.tocken.js';

export async function createAccesToken(payload) {

    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: '1d', //tempo en expirar
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });

    }