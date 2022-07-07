import {Entity, model, property} from '@loopback/repository';
import {Country} from './country.model';

@model()
export class ContactInfo extends Entity {
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
  address: string;

  @property({
    type: 'object',
    required: true,
  })
  country: Country;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  celphone: string;

  @property({
    type: 'string',
    required: true,
  })
  emergency_name: string;

  @property({
    type: 'string',
    required: true,
  })
  emergency_phone: string;


  constructor(data?: Partial<ContactInfo>) {
    super(data);
  }
}

export interface ContactInfoRelations {
  // describe navigational properties here
}

export type ContactInfoWithRelations = ContactInfo & ContactInfoRelations;
