import { AppDataSource } from './data-source';
import { Contact } from './entities/contact.entitie';
import { User } from './entities/user.entitie';

const userRepository = AppDataSource.getRepository(User);
const contactRepository = AppDataSource.getRepository(Contact);

export { userRepository, contactRepository };
