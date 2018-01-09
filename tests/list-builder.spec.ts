import { ListBuilder } from '../src/list-builder'
import { correctDef } from './mockdata/correct.def'
import { incorrectDef } from './mockdata/incorrect.def'
import { expect } from 'chai';
import 'mocha';

describe('registerNodes function', () => {
    beforeEach(() => {
      ListBuilder.resetDefinition();
      ListBuilder.resetList();
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

    it('should add node successfully when list is empty', () => {
      expect(ListBuilder.getDefinition()).to.have.lengthOf(0);
      
      const result = ListBuilder.setDefinition(correctDef);
      expect(result).to.equal(true);

      ListBuilder.addNode({'id': 'node1', 'test': 'testVal'})
      expect(ListBuilder.getList()).to.have.lengthOf(1);

    });

    it('should add node successfully when list restriction is followed', () => {
      expect(ListBuilder.getDefinition()).to.have.lengthOf(0);
      
      const result = ListBuilder.setDefinition(correctDef);
      expect(result).to.equal(true);

      ListBuilder.addNode({'id': 'node1', 'test': 'testVal'})
      expect(ListBuilder.getList()).to.have.lengthOf(1);

      ListBuilder.addNode({'id': 'node2', 'test': 'testVal'})
      expect(ListBuilder.getList()).to.have.lengthOf(2);

    });

    it('should not add node successfully when list restriction is not', () => {
      expect(ListBuilder.getDefinition()).to.have.lengthOf(0);
      
      const result = ListBuilder.setDefinition(correctDef);
      expect(result).to.equal(true);

      ListBuilder.addNode({'id': 'node1', 'test': 'testVal'})
      expect(ListBuilder.getList()).to.have.lengthOf(1);

      let isAdded = ListBuilder.addNode({'id': 'node4', 'test': 'testVal'})
      expect(ListBuilder.getList()).to.have.lengthOf(1);
      expect(isAdded).to.equal(false);

    });


});