import {Entity, model, property} from '@loopback/repository';

@model()
export class DocumentType extends Entity {
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
  document_type_name: string;


  constructor(data?: Partial<DocumentType>) {
    super(data);
  }
}

export interface DocumentTypeRelations {
  // describe navigational properties here
}

export type DocumentTypeWithRelations = DocumentType & DocumentTypeRelations;
