import { Request, Response, NextFunction } from "express";
import { ContactController } from "../controllers/controller";

export class Routes {
    public contactController: ContactController = new ContactController();
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
        // Get all contacts
        app.route('/contact')
            .get((req: Request, res: Response, next: NextFunction) => {
                // middleware          
                if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                    res.status(401).send('You shall not pass!');
                } else {
                    next();
                }
            }, this.contactController.getContacts)
            // Create a new contact   
            .post((req: Request, res: Response, next: NextFunction) => {
                // middleware          
                if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                    res.status(401).send('You shall not pass!');
                } else {
                    next();
                }
            }, this.contactController.addNewContact)

        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get(this.contactController.getContactWithID)
            // update a specific contact
            .put(this.contactController.updateContact)
            // delete a specific contact
            .delete(this.contactController.deleteContact)
    }
}