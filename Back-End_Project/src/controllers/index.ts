import { ContactService } from '../services/contacts.services';
import { SessionService } from '../services/login.services';
import { UsersService } from '../services/users.services';
import { ContactController } from './contact.controllers';
import { SessionController } from './session.controllers';
import { UsersControllers } from './users.controllers';

const userService = new UsersService();
const usersControllers = new UsersControllers(userService);

const sessionService = new SessionService();
const sessionControllers = new SessionController(sessionService);

const contactService = new ContactService();
const contactController = new ContactController(contactService);

export { usersControllers, sessionControllers, contactController };
