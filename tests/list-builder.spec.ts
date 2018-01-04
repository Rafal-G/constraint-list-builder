import { ListBuilder } from '../src/list-builder'
import { expect } from 'chai';
import 'mocha';

describe('registerNodes function', () => {

    it('should return registering nodes', () => {
      const result = ListBuilder.registerNodes();
      expect(result).to.equal('registering nodes');
    });
  
  });