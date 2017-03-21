export interface IModel {
  all: object,
  create: object,
  update: object,
  readById: object,
  deleteById: object,
}

export interface modelInterface {
  id: string;
  name: string;
  relatedChild?: modelInterface[];
  nearNode?: modelInterface;
}

export interface eventModeInterface extends modelInterface {
  relatedChild: modelInterface[];
  nearNode?: modelInterface;
}
