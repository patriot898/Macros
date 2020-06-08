const testNutrition = {
  uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_43a1eb8826b84bc4a4932cb3dc093a59',
  yield: 4,
  calories: 740,
  totalWeight: 1000,
  dietLabels: ['HIGH_PROTEIN', 'LOW_CARB'],
  healthLabels: [
    'SUGAR_CONSCIOUS',
    'PEANUT_FREE',
    'TREE_NUT_FREE',
    'ALCOHOL_FREE',
    'SULPHITE_FREE'
  ],
  cautions: [],
  totalNutrients: {
    ENERC_KCAL: { label: 'Energy', quantity: 740, unit: 'kcal' },
    FAT: { label: 'Fat', quantity: 25.049999999999997, unit: 'g' },
    FASAT: { label: 'Saturated', quantity: 10.08, unit: 'g' },
    FATRN: { label: 'Trans', quantity: 1.25, unit: 'g' },
    FAMS: {
      label: 'Monounsaturated',
      quantity: 12.704999999999998,
      unit: 'g'
    },
    FAPU: { label: 'Polyunsaturated', quantity: 1.965, unit: 'g' },
    CHOCDF: { label: 'Carbs', quantity: 20.05, unit: 'g' },
    FIBTG: { label: 'Fiber', quantity: 6, unit: 'g' },
    SUGAR: { label: 'Sugars', quantity: 13.149999999999999, unit: 'g' },
    PROCNT: { label: 'Protein', quantity: 112.60000000000001, unit: 'g' },
    CHOLE: { label: 'Cholesterol', quantity: 315, unit: 'mg' },
    NA: { label: 'Sodium', quantity: 420, unit: 'mg' },
    CA: { label: 'Calcium', quantity: 115, unit: 'mg' },
    MG: { label: 'Magnesium', quantity: 160, unit: 'mg' },
    K: { label: 'Potassium', quantity: 3050, unit: 'mg' },
    FE: { label: 'Iron', quantity: 11.799999999999999, unit: 'mg' },
    ZN: { label: 'Zinc', quantity: 27.900000000000002, unit: 'mg' },
    P: { label: 'Phosphorus', quantity: 1205, unit: 'mg' },
    VITA_RAE: { label: 'Vitamin A', quantity: 220, unit: 'µg' },
    VITC: { label: 'Vitamin C', quantity: 68.5, unit: 'mg' },
    THIA: { label: 'Thiamin (B1)', quantity: 0.585, unit: 'mg' },
    RIBF: {
      label: 'Riboflavin (B2)',
      quantity: 0.9450000000000001,
      unit: 'mg'
    },
    NIA: { label: 'Niacin (B3)', quantity: 27.404999999999998, unit: 'mg' },
    VITB6A: { label: 'Vitamin B6', quantity: 3.2399999999999998, unit: 'mg' },
    FOLDFE: { label: 'Folate equivalent (total)', quantity: 90, unit: 'µg' },
    FOLFD: { label: 'Folate (food)', quantity: 90, unit: 'µg' },
    FOLAC: { label: 'Folic acid', quantity: 0, unit: 'µg' },
    VITB12: { label: 'Vitamin B12', quantity: 11.35, unit: 'µg' },
    VITD: { label: 'Vitamin D', quantity: 0.5, unit: 'µg' },
    TOCPHA: { label: 'Vitamin E', quantity: 3.6, unit: 'mg' },
    VITK1: { label: 'Vitamin K', quantity: 47, unit: 'µg' },
    WATER: { label: 'Water', quantity: 834.1999999999999, unit: 'g' }
  },
  totalDaily: {
    ENERC_KCAL: { label: 'Energy', quantity: 37, unit: '%' },
    FAT: { label: 'Fat', quantity: 38.53846153846153, unit: '%' },
    FASAT: { label: 'Saturated', quantity: 50.4, unit: '%' },
    CHOCDF: { label: 'Carbs', quantity: 6.683333333333334, unit: '%' },
    FIBTG: { label: 'Fiber', quantity: 24, unit: '%' },
    PROCNT: { label: 'Protein', quantity: 225.2, unit: '%' },
    CHOLE: { label: 'Cholesterol', quantity: 105, unit: '%' },
    NA: { label: 'Sodium', quantity: 17.5, unit: '%' },
    CA: { label: 'Calcium', quantity: 11.5, unit: '%' },
    MG: { label: 'Magnesium', quantity: 38.095238095238095, unit: '%' },
    K: { label: 'Potassium', quantity: 64.8936170212766, unit: '%' },
    FE: { label: 'Iron', quantity: 65.55555555555556, unit: '%' },
    ZN: { label: 'Zinc', quantity: 253.63636363636363, unit: '%' },
    P: { label: 'Phosphorus', quantity: 172.14285714285714, unit: '%' },
    VITA_RAE: { label: 'Vitamin A', quantity: 24.444444444444443, unit: '%' },
    VITC: { label: 'Vitamin C', quantity: 76.11111111111111, unit: '%' },
    THIA: { label: 'Thiamin (B1)', quantity: 48.75, unit: '%' },
    RIBF: { label: 'Riboflavin (B2)', quantity: 72.6923076923077, unit: '%' },
    NIA: { label: 'Niacin (B3)', quantity: 171.28124999999997, unit: '%' },
    VITB6A: { label: 'Vitamin B6', quantity: 249.23076923076923, unit: '%' },
    FOLDFE: { label: 'Folate equivalent (total)', quantity: 22.5, unit: '%' },
    VITB12: { label: 'Vitamin B12', quantity: 472.9166666666667, unit: '%' },
    VITD: { label: 'Vitamin D', quantity: 3.3333333333333335, unit: '%' },
    TOCPHA: { label: 'Vitamin E', quantity: 24, unit: '%' },
    VITK1: { label: 'Vitamin K', quantity: 39.166666666666664, unit: '%' }
  },
  totalNutrientsKCal: {
    ENERC_KCAL: { label: 'Energy', quantity: 740, unit: 'kcal' },
    PROCNT_KCAL: { label: 'Calories from protein', quantity: 441, unit: 'kcal' },
    FAT_KCAL: { label: 'Calories from fat', quantity: 221, unit: 'kcal' },
    CHOCDF_KCAL: {
      label: 'Calories from carbohydrates',
      quantity: 78,
      unit: 'kcal'
    }
  }
}

const testItemNutrition = {
  text: 'trader joes greek yogurt',
  parsed: [ { food: [Object] } ],
  hints: [
    { food: {
      label: "Trader Joe's Greek Yogurt Honey",
      nutrients: {
        ENERC_KCAL: 80,
        PROCNT: 9.33333,
        FAT: 0,
        CHOCDF: 11.3333
      }
    }, measures: [] }
  ]
}

export default { testNutrition, testItemNutrition } ;
