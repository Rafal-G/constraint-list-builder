import { ListBuilder } from '../src/list-builder'
import { correctDef } from './mockdata/correct.def'
import { incorrectDef } from './mockdata/incorrect.def'
import { expect } from 'chai';
import 'mocha';

describe('registerNodes function', () => {
    beforeEach(() => {
      ListBuilder.resetDefinition();
    });

    it('should return true with correct definition', () => {
      expect(ListBuilder.getDefinition()).to.have.lengthOf(0);      
      
      const result = ListBuilder.setDefinition(correctDef);
      expect(result).to.equal(true);
      expect(ListBuilder.getDefinition()).to.equal(correctDef);
    });

    it('should return false with and incorrect definition', () => {
      expect(ListBuilder.getDefinition()).to.have.lengthOf(0);

      const result = ListBuilder.setDefinition(incorrectDef);
      expect(result).to.equal(false);
      expect(ListBuilder.getDefinition()).to.have.lengthOf(0);
    });



});