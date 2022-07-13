module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_colors.scss";
          @import "@/assets/scss/skeleton.scss";
          @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
};