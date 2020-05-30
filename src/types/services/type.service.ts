import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Type } from "../interfaces/type.interface";

@Injectable()
export class TypeService {

  constructor(@InjectModel('Type') private typeModel: Model<Type>) {}

  /**
   * Create a new type
   * @param {Type} type 
   */
  create(type: Type) {}

  /**
   * Update a type
   * @param {string} slug
   */
  update(slug: string) {}

  /**
   * Delete a type
   * @param {string} slug 
   */
  delete(slug: string) {}
}