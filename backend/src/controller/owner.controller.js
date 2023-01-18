import db from "../db.js"

export class OwnerController {
    async createOwner (req, res) {
        const {name, surname, email, phone} = req.body
        const newOwner = await db.query('INSERT INTO owners (name, surname, email, phone) values ($1, $2, $3, $4) RETURNING * ', [name, surname, email, phone])
        console.log(name, surname, email, phone)
        res.json(newOwner.rows[0])
    }

    async getOwners (req, res) {
        const owners = await db.query('SELECT * FROM owners')
        res.json(owners.rows)
    }

    async getOneOwner (req, res) {
        const id = req.params.id
        const owner = await db.query('SELECT * FROM owners where id = $1', [id])
        res.json(owner.rows[0])
    }

    async updateOwner (req, res) {
        const {id, name, surname, email, phone} = req.body
        const owner = await db.query('UPDATE owners set name = $1, surname = $2, email = $3, phone = $4 where id = $5 RETURNING *', [name, surname, email, phone, id])

        res.json(owner.rows[0])
    }

    async deleteOwner (req, res) {
        const id = req.params.id
        const owner = await db.query('DELETE FROM owners where id = $1', [id])
        res.json(owner.rows[0])   
    }

}

