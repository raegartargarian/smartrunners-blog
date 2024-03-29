module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '64b9c86055981417fbc0c45c103820a5'),
    },
  },
});
