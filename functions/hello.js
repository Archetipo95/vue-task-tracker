exports.handler = async (event, context) => {
  console.log(context);
  return {
    statusCode: 200,
    body: "Hello, World",
  };
};
