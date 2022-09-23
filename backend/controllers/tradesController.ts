import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Trade from '../models/Trade';
import { IUserRequest } from '../models/User';


// @Desc Get All Trades
// @Route /api/trades
// @Method GET
export const getAll = asyncHandler(async(req: Request, res: Response) => {

    const pageSize = 4;
    const page = Number(req.query.pageNumber) || 1;

    const keyword = req.query.keyword ? {
        $or: [
            {name: { $regex: req.query.keyword, $options: "i" }},
            {description: { $regex: req.query.keyword, $options: "i" }},
        ]
    }
    : {};

    const numOfBeds = req.query.numOfBeds ? {numOfBeds: req.query.numOfBeds} : {};

    const category = req.query.roomType ? {category: req.query.roomType} : {};

    const count = await Trade.countDocuments({ ...keyword, ...numOfBeds, ...category })

    const rooms = await Trade.find({ ...keyword, ...numOfBeds, ...category }).limit(pageSize)
    .skip(pageSize * (page - 1));
    res.status(201).json({
        rooms,
        page,
        pages: Math.ceil(count / pageSize),
        count
    });
})


// @Desc Search trades
// @Route /api/trades/search/
// @Method GET
// export const searchTrades = asyncHandler(async(req: Request, res: Response) => {
//     const filterd = await Trade.find({ $and: [ 
//         { $or: [{name: req.query.keyword },{description: req.query.keyword}] }, 
//         {numOfBeds: req.query.numOfBeds}, 
//         {category: req.query.roomType} 
//     ] });
//     res.status(201).json(filterd);
// })

// @Desc Get Single trade
// @Route /api/trades/:id
// @Method GET
export const getSingle = asyncHandler(async (req: Request, res: Response) => {

    const trade = await Trade.findById(req.params.id);

    if(!trade) {
        res.status(401);
        throw new Error("Room not found");
    }

    res.status(201).json(trade);

})

// @Desc Create new trade
// @Route /api/trades
// @Method POST
export const newTrade = asyncHandler(async (req: Request, res: Response) => {

    // req.body.user = req.user._id;

    console.log(req.body.user)

    const trade = await Trade.create(req.body);

    res.status(201).json(trade);

})

// @Desc Update trade
// @Route /api/trades/:id
// @Method PUT
export const updateTrade = asyncHandler(async (req: IUserRequest, res: Response) => {

    let trade = await Trade.findById(req.params.id);

    if(!trade) {
        res.status(401);
        throw new Error("Room not found");
    }

    trade = await Trade.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(201).json(trade);

})

// @Desc Delete trade
// @Route /api/trades/:id
// @Method DELETE
export const deleteTrade = asyncHandler(async (req: IUserRequest, res: Response) => {

    let trade = await Trade.findById(req.params.id);

    if(!trade) {
        res.status(401);
        throw new Error("Room not found");
    }

    trade = await Trade.findByIdAndDelete(req.params.id);

    res.status(201).json({});

})

// @Desc Create Trade Review
// @Route /api/trades/:id/reviews
// @Method POST
// export const createRoomReview = asyncHandler(async (req: IUserRequest, res: Response) => {

//     const room = await Room.findById(req.params.id);

//     if(room) {

//         const alreadyReviewd = room.reviews?.find(review => review.user.toString() === req.user._id.toString());

//         if(alreadyReviewd) {
//             res.status(401);
//             throw new Error("Already reviewed");
//         }

//         const { rating, comment } = req.body;

//         const review = {
//             user: req.user._id,
//             name: req.user.name,
//             rating: Number(rating),
//             comment,
//         }

//         room.reviews?.push(review);

//         room.numOfReviews = room.reviews?.length;

//         room.ratings = room.reviews?.reduce((acc: any, item: any) => item?.rating + acc, 0) / Number(room.reviews?.length);

//         await room.save();

//         res.status(201).json({ message: "Review added" });

//     } else {
//         res.status(401);
//         throw new Error("Room not found");
//     }

// })
