import Router from 'express'
import { OwnerController } from '../controller/owner.controller.js'

const ownerRouter = new Router()
const ownerController = new OwnerController();

ownerRouter.post('/owner', ownerController.createOwner)
ownerRouter.get('/owner', ownerController.getOwners)
ownerRouter.get('/owner/:id', ownerController.getOneOwner)
ownerRouter.put('/owner', ownerController.updateOwner)
ownerRouter.delete('/owner/:id', ownerController.deleteOwner)


export default ownerRouter;
