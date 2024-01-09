import autoprefixer from "autoprefixer";

const postCssConfig = {
  plugins: {
    autoprefixer: autoprefixer(),
    ...(process.env.NODE_ENV === "production" ? {cssnano: {}} : {}),
  },
};

export default postCssConfig;
