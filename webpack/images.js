module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|svg|gif)$/,
          loader: "file-loader",
          options: {
            name: "file-loader?name=images/[name].[ext]",
          },
        },
      ],
    },
  };
};
