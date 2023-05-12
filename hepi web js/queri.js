server.route({
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!`;
    },
});