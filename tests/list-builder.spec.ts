import { ListBuilder } from '../src/list-builder'
import { expect } from 'chai';
import 'mocha';

describe('registerNodes function', () => {

    it('should return setting definition', () => {
      const result = ListBuilder.setDefinition();
      expect(result).to.equal('setting definition');
    });
  
  });