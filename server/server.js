const express = require('express');
const { ApolloServer } = require('apollo-server-express')

// set up db

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    // just copy from activities
})

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

const startApolloServer = async(tyeDefs, resolvers) => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
}

startApolloServer(typeDefs, resolvers)