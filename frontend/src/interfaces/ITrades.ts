

export interface ITrades {
    _id: string,
    entryPrice: Number,
    executedAmount: Number,
    profitTarget: Number,
    stopLoss: Number,
    closedPrice: Number,
    description: String,
}

export type TCreateTrade = Pick<ITrades, "entryPrice" | "executedAmount" | "profitTarget" | "stopLoss" | "closedPrice" | "description">


