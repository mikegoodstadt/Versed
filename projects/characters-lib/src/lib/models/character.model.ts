import { Phenotype } from './phenotype.model';

export class Character {
  uuid = null;
  name = 'Default Character';
  dob = 123;
  species = 'Human';
  phenotype: Phenotype;
  category = ['General'];
}
