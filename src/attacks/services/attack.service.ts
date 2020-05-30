import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Attack } from "../interfaces/attack.interface";

@Injectable()
export class AttackService {

  constructor(@InjectModel('Attack') private catModel: Model<Attack>) {}

  /**
   * Create a new attack
   * @param {Attack} attack
   */
  create(attack: Attack) {}

  /**
   * Update an attack
   * @param {string} slug
   */
  update(slug: string) {}

  /**
   * Delete an attack
   * @param {string} slug
   */
  delete(slug: string) {}
}