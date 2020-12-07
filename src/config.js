const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-james-corey",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://z84vtrgo9a.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ClhH27Ad2",
    APP_CLIENT_ID: "2n8njg3lsrnde7usbon5qgbsan",
    IDENTITY_POOL_ID: "us-east-1:b013cc61-6ea3-4383-8f7f-de44ba95c93e",
  },
};