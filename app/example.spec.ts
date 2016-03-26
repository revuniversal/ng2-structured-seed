import { Example } from './example';

describe('Example', () => {
  it('True is true', () => expect(true).toEqual(true));
  
  describe('Not much to it', () => {
    let ex: Example = null;
    
    beforeEach(() => {
      ex = new Example('Example name')
    });

    it('it is not null', () => {
      expect(ex).toBeDefined();
    });

    it('setting the name works', () => {
      expect(ex.name).toBe('Example name');
    });
  });
});
