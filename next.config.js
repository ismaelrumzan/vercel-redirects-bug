module.exports = {
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
  },

  async redirects() {
    return [
      {
        source: "/google",
        destination: "https://www.google.com",
        permanent: false,
      },
      {
        source: "/de/google",
        destination: "https://www.google.com",
        permanent: false,
      },
      {
        source: "/de/microsoft",
        destination: "https://www.microsoft.com",
        permanent: false,
      },
    ];
  },
};
