import Router from 'express'
import { CarController } from '../controller/car.controller.js'

const carRouter = new Router()
const carController = new CarController();

carRouter.post('/cars', carController.addCars)
carRouter.get('/cars', carController.getCarsByOwner)



export default carRouter;
