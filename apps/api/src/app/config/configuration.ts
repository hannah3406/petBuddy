export const configuration = () => ({
  environment: process.env.NODE_ENV,
  port: parseInt(process.env.API_PORT || '3333', 10),
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
});
