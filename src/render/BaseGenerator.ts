import {IGenerator} from './interface/IGenerator';
import {EventPositionEntity} from '../entity/EventPositionEntity';

export class BaseGenerator implements IGenerator {

  buildBody(node): string {
    return '';
  }

  build(entities: EventPositionEntity[]) {
    return '';
  }

}
