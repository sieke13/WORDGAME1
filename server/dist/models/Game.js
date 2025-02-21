import { Schema, model } from 'mongoose';
// Define the schema for the Game document
const gameSchema = new Schema({
    wordId: {
        type: Schema.Types.ObjectId,
        ref: 'Word',
        required: true
    },
    maskedWord: {
        type: String,
        required: true
    },
    solution: {
        type: String,
        required: true
    },
    guesses: {
        type: [String],
        default: []
    },
    numBadGuesses: {
        type: Number,
        default: 0
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    isWinner: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
const Game = model('Game', gameSchema);
export { Game };
