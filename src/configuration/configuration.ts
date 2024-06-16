export default () => ({
    nodeEnv: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 3001,
    sendgridApiKey: process.env.SENDGRID_API_KEY
});

export const configurationPath = `${process.cwd()}/${process.env.NODE_ENV}.env`;