import "dotenv/config"

export const PORT = +(process.env.PORT || 3001);
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;