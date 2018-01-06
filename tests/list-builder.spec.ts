import { ListBuilder } from '../src/list-builder'
import { correctDef } from './mockdata/correct.def'
import { incorrectDef } from './mockdata/incorrect.def'
import { expect } from 'chai';
import 'mocha';

describe('registerNodes function', () => {

    it('should return true with correct definition', () => {
      const result = ListBuilder.setDefinition(correctDef);
      expect(result).to.equal(true);
    });
  
    it('should return false with and incorrect definition', () => {
      const result = ListBuilder.setDefinition(incorrectDef);
      expect(result).to.equal(false);
    });

  });