import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Room from '../models/Tests';

// @Desc Get All Tests
// @Route /api/tests
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

    const count = await Room.countDocuments({ ...keyword, ...numOfBeds, ...category })

    const rooms = await Room.find({ ...keyword, ...numOfBeds, ...category }).limit(pageSize)
    .skip(pageSize * (page - 1));
    res.status(201).json({
        rooms,
        page,
        pages: Math.ceil(count / pageSize),
        count
    });
})




