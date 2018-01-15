import { ListBuilder } from '../src/list-builder'
import { correctDef } from './mockdata/correct.def'
import { incorrectDef } from './mockdata/incorrect.def'
import { expect } from 'chai';
import 'mocha';

describe('registerNodes function', () => {
    let listBuilder;
    beforeEach(() => {
      listBuilder = new ListBuilder()
    });

    it('should return true with correct definition', () => {
      expect(listBuilder.getDefinition()).to.have.lengthOf(0);      
      
      const result = listBuilder.setDefinition(correctDef);
      expect(result).to.equal(true);
      expect(listBuilder.getDefinition()).to.equal(correctDef);
    });

    it('should return false with and incorrect definition', () => {
      expect(listBuilder.getDefinition()).to.have.lengthOf(0);

      const result = listBuilder.setDefinition(incorrectDef);
      expect(result).to.equal(false);
      expect(listBuilder.getDefinition()).to.have.lengthOf(0);
    });

    it('should throw an exception when node without id is being added', () => {
      expect(listBuilder.getDefinition()).to.have.lengthOf(0);
      
      const result = listBuilder.setDefinition(correctDef);
      expect(result).to.equal(true);

      //Have put method in anon function for it to execute.
      expect(() => {
        listBuilder.addNode({'test': 'testVal'})
      }).to.throw('The node that\'s being added has no id field');

    });

    it('should add node successfully when list is empty', () => {
      expect(listBuilder.getDefinition()).to.have.lengthOf(0);
      
      const result = listBuilder.setDefinition(correctDef);
      expect(result).to.equal(true);

      listBuilder.addNode({'id': 'node1', 'test': 'testVal'})
      expect(listBuilder.getList()).to.have.lengthOf(1);

    });

    it('should add node successfully when list restriction is followed', () => {
      expect(listBuilder.getDefinition()).to.have.lengthOf(0);
      
      const result = listBuilder.setDefinition(correctDef);
      expect(result).to.equal(true);

      listBuilder.addNode({'id': 'node1', 'test': 'testVal'})
      expect(listBuilder.getList()).to.have.lengthOf(1);

      listBuilder.addNode({'id': 'node2', 'test': 'testVal'})
      expect(listBuilder.getList()).to.have.lengthOf(2);

    });

    it('should not add node successfully when list restriction is not', () => {
      expect(listBuilder.getDefinition()).to.have.lengthOf(0);
      
      const result = listBuilder.setDefinition(correctDef);
      expect(result).to.equal(true);

      listBuilder.addNode({'id': 'node1', 'test': 'testVal'})
      expect(listBuilder.getList()).to.have.lengthOf(1);

      let isAdded = listBuilder.addNode({'id': 'node4', 'test': 'testVal'})
      expect(listBuilder.getList()).to.have.lengthOf(1);
      expect(isAdded).to.equal(false);

    });


});