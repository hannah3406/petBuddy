export const configuration = () => ({
  environment: process.env.NODE_ENV,
  port:
    process.env.NODE_ENV === 'development'
      ? parseInt(process.env.DEV_API_PORT || '3333', 10)
      : parseInt(process.env.API_PORT || '3000', 10),
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
});
