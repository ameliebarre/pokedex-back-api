import { Injectable } from "@nestjs/common";
import { Attack } from "../interfaces/attack.interface";

@Injectable()
export class AttackService {
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