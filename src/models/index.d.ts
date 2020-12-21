import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Relationship {
  ID = "ID",
  BRIDE = "BRIDE",
  GROOM = "GROOM"
}



export declare class RSVPs {
  readonly id: string;
  constructor(init: ModelInit<RSVPs>);
  static copyOf(source: RSVPs, mutator: (draft: MutableModel<RSVPs>) => MutableModel<RSVPs> | void): RSVPs;
}

export declare class Guests {
  readonly id: string;
  readonly firstName?: string;
  readonly latName?: string;
  readonly email?: string;
  readonly address?: string;
  readonly relationship?: Relationship | keyof typeof Relationship;
  readonly RSVPs?: RSVPs;
  constructor(init: ModelInit<Guests>);
  static copyOf(source: Guests, mutator: (draft: MutableModel<Guests>) => MutableModel<Guests> | void): Guests;
}