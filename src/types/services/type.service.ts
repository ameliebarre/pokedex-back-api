import { Injectable } from "@nestjs/common";
import { Type } from "../interfaces/type.interface";

@Injectable()
export class TypeService {
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
   * Delete a Pokemon
   * @param {string} slug 
   */
  delete(slug: string) {}
}