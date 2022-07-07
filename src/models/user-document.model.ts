import {Entity, model, property} from '@loopback/repository';
import {DocumentType} from './document-type.model';

@model()
export class UserDocument extends Entity {
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
  document: string;

  @property({
    type: 'object',
    required: true,
  })
  document_type: DocumentType;

  @property({
    type: 'string',
    required: true,
  })
  place_expedition: string;

  @property({
    type: 'date',
    required: true,
  })
  date_expedition: string;


  constructor(data?: Partial<UserDocument>) {
    super(data);
  }
}

export interface UserDocumentRelations {
  // describe navigational properties here
}

export type UserDocumentWithRelations = UserDocument & UserDocumentRelations;
