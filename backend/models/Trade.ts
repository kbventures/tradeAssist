import mongoose from 'mongoose';


export interface ITrade extends mongoose.Document {
    entryPrice: string,
    executedAmount: Number,
    profitTarget: Number,
    stopLoss: Number,
    description: string,
    pair: 'BTC/USD' | 'ETH/USD' |'ETH/BTC'
    user: mongoose.Types.ObjectId,
    createdAt: Date,
    updatedAt: Date,
}

const TradeSchema = new mongoose.Schema({

    entryPrice: {
        type: String,
        required: true
    },

    executedAmount: {
        type: Number,
        required: true
    },
    profitTarget: {
        type: Number,
        required: true,
    },

    stopLoss: {
        type: Number,
        required: true,
    },
    closedPrice: {
        type: Number
    },
    description: {
        type: String,
        default:""
    },
    pair: {
        type: String,
        required: true,
        enum: ['BTC/USD', 'ETH/USD', 'ETH/BTC']
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
});

const Trade = mongoose.model<ITrade>("Trade", TradeSchema);

export default Trade;