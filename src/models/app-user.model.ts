import {model, property} from '@loopback/repository';
import {ContactInfo} from './contact-info.model';
import {UserDocument} from './user-document.model';
import {User} from './user.model';

@model({settings: {strict: false}})
export class AppUser extends User {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  last_name: string;

  @property({
    type: 'boolean',
    required: true,
  })
  is_militar: boolean;

  @property({
    type: 'date',
    required: true,
  })
  time_created: string;

  @property({
    type: 'boolean',
    required: true,
  })
  is_temporal: boolean;

  @property({
    type: 'object',
    required: true,
  })
  contact_info: ContactInfo;

  @property({
    type: 'object',
    required: true,
  })
  user_document: UserDocument;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AppUser>) {
    super(data);
  }
}

export interface AppUserRelations {
  // describe navigational properties here
}

export type AppUserWithRelations = AppUser & AppUserRelations;
