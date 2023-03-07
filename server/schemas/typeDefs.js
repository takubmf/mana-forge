const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    password: String
    decks: [Deck]
  }

  type Deck {
    deckId: ID
    name: String!
    cards: [Card]!
    format: String
  }

  type Card{
    card_id: ID
    name: String
  }
  
  input CardInput{
    card_id: ID
    name: String
  }

  input DeckInput {
    deckId: String!
    name: String!
    cards: [CardInput]
    format: String!
  }
  

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveDeck(deckData: DeckInput!): User
    removeDeck(deckId: ID!): User

  }
`;

module.exports = typeDefs;
