// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Relationship = {
  "ID": "ID",
  "BRIDE": "BRIDE",
  "GROOM": "GROOM"
};

const { RSVPs, Guests } = initSchema(schema);

export {
  RSVPs,
  Guests,
  Relationship
};