import { Municipio, Nacionalidad, Etnias, Ecivil, Academic, Parents, Lenguage } from './../enums/enums';


export interface Ienum {
  municipio: Municipio[];
  nation: Nacionalidad[];
  people: Etnias[];
  ecivil: Ecivil[];
  academic: Academic[];
  parents: Parents[];
  lenguage: Lenguage[];

}
