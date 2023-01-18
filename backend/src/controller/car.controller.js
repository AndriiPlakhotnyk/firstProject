import db from "../db.js"

export class CarController {
    async addCars(req, res) {
        const {brand, model, year, ownerId} = req.body
        const newCar = await db.query('INSERT INTO cars (brand, model, year, user_id) values ($1, $2, $3, $4) RETURNING *', [brand, model, year, ownerId])
        res.json(newCar.rows[0])

    }

    async getCarsByOwner(req, res) {
        const id = req.query.ownerId
        const cars = await db.query('select * from cars where user_id = $1 ', [id])
        res.json(cars.rows)
    }
}