import swaggerUIExpress from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';


export default function configureSwagger(app) {

    const swaggerOptions = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'API',
                version: '1.0.0',
                description: `Authorization through JWT cookie is not supported in Swagger due to browser security restrictions.
                [More information](https://swagger.io/docs/specification/authentication/cookie-authentication/).
                \`Alternatively, you can get your cookie jwt login page:\`(http://localhost:${process.env.PORT}/login)
                `,
            },
            servers: [
                {
                    description: `${process.env.NODE_ENV} server`,
                    url: `http://localhost:${process.env.PORT}`,
                },
            ],
        },
        apis: ['./src/**/*.yaml'],
    };

    const specs = swaggerJsDoc(swaggerOptions);
    app.use('/apidocs', swaggerUIExpress.serve, swaggerUIExpress.setup(specs));

}
