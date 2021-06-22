class User {
  firstName;
  lastName;
  middleName;

  constructor(data = {}){
      this.firstName = data.firstName || '';
      this.lastName = data.lastName || '';
      this.middleName = data.middleName || '';
  }
}


// Test Suite
describe(`${User.name} Class`, () => {
  let model;
  beforeEach(() => {
    model = new User();
  });
  
  describe('Default values', () => {
    it('first name defaults to empty', () => {
      //assert
      expect(model.firstName).toBe('');
          
    });
  
    it('last name defaults to empty', () => {
      //assert
      expect(model.lastName).toBe('');
          
    });
    
    it('Middle name defaults to empty', () => {
      //assert
      expect(model.middleName).toBe('');
          
    });
  });
});