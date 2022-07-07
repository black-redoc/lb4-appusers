import {
  createStubInstance,
  expect,
  sinon,
  StubbedInstanceWithSinonAccessor,
} from '@loopback/testlab'
import {AppUserRepository} from '../../../repositories'
import {AppUserController} from '../../../controllers'
import {givenUser} from '../../helpers/database.helpers'
import {AppUser} from '../../../models'

describe('AppUserController (unit)', () => {
  let repository: StubbedInstanceWithSinonAccessor<AppUserRepository>
  beforeEach(givenStubbedRepository)

  describe('find()', async () => {
    it('retrieves a list of users', async () => {
      const controller = new AppUserController(repository)
      const user: AppUser = await givenUser()
      repository.stubs.find.resolves([user])

      const users: AppUser[] = await controller.find()
      const expected_name = 'test_name'
      const expected_lastname = 'test_lastname'

      expect(users).to.containEql({name: expected_name, lastname: expected_lastname})
      expect(users.length).to.equal(1)
      sinon.assert.calledWithMatch(repository.stubs.find, {
        where: {name: expected_lastname},
      })
    })
  })

  describe('findById()', async () => {
    it('retrieves an user by id', async () => {
      const controller = new AppUserController(repository)
      const user: AppUser = await givenUser()
      repository.stubs.find.resolves([user])

      const user_result: AppUser = await controller.findById("1")
      const expected_id = "1";
      const expected_name = "test_name";

      expect(user_result).to.containEql({id: expected_id, name: expected_name})
      sinon.assert.calledWithMatch(repository.stubs.find, {
        where: {name: expected_name, id: expected_id}
      })
    })
  })

  describe('count()', async () => {
    it('count all users stored in database', async () => {
      const controller = new AppUserController(repository)
      const user: AppUser = await givenUser()
      repository.stubs.find.resolves([user])

      const expected_id = "1"

      const {count} = await controller.count({id: expected_id})
      expect(count).to.equal(1)
      sinon.assert.calledWithMatch(repository.stubs.find, {
        where: {id: expected_id}
      })
    })
  })

  describe('updateById()', async () => {
    it('update an user stored in database', async () => {
      const controller = new AppUserController(repository)
      const user: AppUser = await givenUser()
      repository.stubs.find.resolves([user])
      const expected_name = 'new_name'
      const expected_id = "1"
      const expected_user = Object.assign({...user, name: expected_name},user)

      await controller.updateById(expected_id, expected_user)
      sinon.assert.calledWithMatch(repository.stubs.find, {
        where: {id: expected_id, name: expected_name}
      })
    })
  })

  describe('deleteById()', async () => {
    it('delete an user stored in database', async () => {
      const controller = new AppUserController(repository)
      const user: AppUser = await givenUser()
      repository.stubs.find.resolves([user])
      const expected_id = "1"

      await controller.deleteById(expected_id)
      sinon.assert.calledWithMatch(repository.stubs.deleteById, expected_id)
    })
  })

  function givenStubbedRepository() {
    repository = createStubInstance(AppUserRepository);
  }
});
