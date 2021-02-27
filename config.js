const config = {
  dbUrl:
    process.env.DB_URL || "mongodb+srv://edilsonPlataformas:1234@plataformasweb.stfn3.mongodb.net/UPS?retryWrites=true&w=majoritys",
  port: process.env.PORT || 3000,
  host: process.env.HOST || "http://localhost",
  publicRoute: process.env.PUBLIC_ROUTE || "/",
  filesRoute: process.env.FILES_ROUTE || "files",
};

module.exports = config;
