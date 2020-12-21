const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "svrless-test-bucket"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://snersg5ys2.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_ebmKMvJJ7",
        APP_CLIENT_ID: "6a4rakpplghr15s79he088idu5",
        IDENTITY_POOL_ID: "us-east-1:f3cf524d-fbe2-42a0-bc08-ac56fd3bd5f3"
    }
}

export default config;