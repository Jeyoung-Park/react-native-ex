module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd694d427b231467b7c27ecbcd1b36a1d'),
  },
});
