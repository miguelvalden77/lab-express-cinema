const { Schema, model } = require("mongoose"); // Destructuración de Schema y model

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

//En mayúscula
const Movie = model("Movie", movieSchema) // Nuevo modelo, primero el nombre del modelo y después el esquema a seguir

module.exports = Movie