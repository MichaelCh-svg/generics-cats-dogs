import { Animal } from "./Animal";

export class AnimalEntity {
  static getAnimalsSorted<T extends Animal>(animalList: T[]) {
    return animalList.sort((animal1, animal2) =>
      animal1.trainingPriority < animal2.trainingPriority ? -1 : 1
    );
  }

  static getAnimalsTrainingPriorityList<T extends Animal>(
    animalList: T[]
  ): string {
    return animalList
      .map(
        (animal) =>
          animal.name +
          "'s training priority: " +
          animal.trainingPriority +
          "\n"
      )
      .join("");
  }
}
