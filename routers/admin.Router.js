const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const mongoose = require("mongoose");
const Service = require("../models/Service");
const sousService = require("../models/Sous_service");
const User = require("../models/userModel");
const Professionnel = require("../models/professionnelModel");


AdminBro.registerAdapter(AdminBroMongoose);

const contentParent = {
  name: "Users",
  icon: "Accessibility",
};

const locale = {
  translations: {
    labels: {
      // change Heading for Login
      loginWelcome: "WELCOME",
    },
    messages: {
      loginWelcome: "To DWYRTY admin space.",
    },
  },
};

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: "/admin",
  locale,
  resources: [
    {
      resource: User,
      options: {
        parent: contentParent,
        listProperties: [
          "name",
          "lastName",
          "email",
          "ville",
          "date",
          "isVerified",
        ],
        editProperties: [
          "name",
          "lastName",
          "ville",
          "adresse",
          "email",
          "phone",
          "date",
          "isVerified",
        ],
      },
    },
    {
      resource: Professionnel,
      options: {
        parent: contentParent,
        listProperties: [
          "name",
          "lastName",
          "email",
          "ville",
          "date",
          "isVerified",
        ],
        editProperties: [
          "name",
          "lastName",
          "ville",
          "adresse",
          "email",
          "phone",
          "date",
          "rate",
          "isVerified",
        ],
      },
    },
    {
      resource: Service,
      options: {
        listProperties: ["name", "description", "icon", "cardColor"],
      },
    },
  ],
  branding: {
    //new dashboard
    dashboard: {
      handler: async () => ({
        some: 'output',
      }),
      component: AdminBro.bundle('../components/Dashboard'),
    },

    companyName: "DWYRTY",
    softwareBrothers: false,
    logo:'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.15752-9/280268141_686298289291729_6159251290923168743_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=sJwnzXG-ngoAX8tue4s&_nc_ht=scontent.ftun2-1.fna&oh=03_AVIT8aLJcONkx4HPf5g_ImvBHdOfXywu16Rs1P4f57lDpQ&oe=62C7D725',
    theme: {
      colors: {
        primary100: "#B20600",
        primary80: "#EE5007",
        primary60: "#FFBC80",
        primary40: "#143F6B",
        primary20: "white",
        accent: "#B9F8D3",
        hoverBg: "#890F0D",
        filterBg: "#630606",
      },
    },
  },
});

const ADMIN = {
  email: process.env.ADMINBRO_EMAIL || "bnyassine216@gmail.com",
  password: process.env.ADMINBRO_PASSWORD || "ADMIN1",
};
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: process.env.ADMIN_COOKIE_NAME || "Admin",
  cookiePassword: process.env.ADMIN_COOKIE_PASS || "Home_Service_WY12",
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  },
});

module.exports = router;
