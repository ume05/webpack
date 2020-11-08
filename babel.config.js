module.exports = api => {
  api.cache(true);
  
  return {
    "presets" : [
      ["@babel/preset-env", {
        targets: {
          ie: "11",
          chrome: "60"
        }
      }]
    ]
  }
}