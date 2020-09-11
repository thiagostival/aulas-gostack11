
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>; // Quando o tipo for variável;
//techs: string[]; Se utiliza quando for um tipo fácil, quando o array é de um tipo único;
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user  = {
    name,
    email,
    password,
  }

  return user;
}