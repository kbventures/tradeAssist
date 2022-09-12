

export interface ITrade {
    _id: string,
    entryPrice: string
    executedAmount: Number,
    profitTarget: Number,
    stopLoss: Number,
    closedPrice: Number,
    description: String,
    pair: 'BTC/USD'|'ETH/USD'|'ETH/USD',
    createdAt: Date,
}

export type TCreateTrade = Pick<ITrade, "entryPrice" | "executedAmount" | "profitTarget" | "stopLoss" | "closedPrice" | "description" | "pair" | "createdAt">


