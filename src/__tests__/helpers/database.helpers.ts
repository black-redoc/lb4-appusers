import {AppUser} from '../../models';
import {AppUserRepository} from '../../repositories';
import {testdb} from '../fixtures/datasources/testdb.datasource';

export async function givenEmptyDatabase() {
  let appUserRepository: AppUserRepository = new AppUserRepository(testdb)
  await appUserRepository.deleteAll()
}

export function givenUserData(data?: Partial<AppUser>): Partial<AppUser> {
  return Object.assign(
    {
      id: "1",
      name: 'test_name',
      lastname: 'test_lastname',
      is_militar: true,
      time_created: new Date(),
      is_temporal: true,
      contact_info: {
        address: 'test_address',
        phone: '123456',
        celphone: '123456',
        emergency_name: 'test_emergency_name',
        emergency_phone: '123456',
        country: {
          country_code: '123',
          country_name: 'test_country_name',
        }
      },
      user_document: {
        document: 123,
        document_type: 'test_document_type',
        place_expedition: 'test_city',
        date_expedition: new Date(new Date().setFullYear(2000, 0))
      }
    },
    data
  )
}

export async function givenUser(data?: Partial<AppUser>): Promise<AppUser> {
  return new AppUserRepository(testdb).create(givenUserData(data));
}
