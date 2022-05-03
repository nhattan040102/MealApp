class Meal {
    constructor(id, categoryID, mealName, complexity, detail, calories, img) {
        this.id = id,
            this.categoryID = categoryID,
            this.mealName = mealName,
            this.complexity = complexity,
            this.detail = detail,
            this.calories = calories,
            this.img = img
    }
};

export default Meal;