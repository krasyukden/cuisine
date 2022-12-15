
  export interface Us {
      amount: number;
      unitShort: string;
      unitLong: string;
  }

  export interface Metric {
      amount: number;
      unitShort: string;
      unitLong: string;
  }

  export interface Measures {
      us: Us;
      metric: Metric;
  }

  export interface ExtendedIngredient {
      id: number;
      aisle: string;
      image: string;
      consistency: string;
      name: string;
      nameClean: string;
      original: string;
      originalName: string;
      amount: number;
      unit: string;
      meta: string[];
      measures: Measures;
  }

  export interface Ingredient {
      id: number;
      name: string;
      localizedName: string;
      image: string;
  }

  export interface Temperature {
      number: number;
      unit: string;
  }

  export interface Equipment {
      id: number;
      name: string;
      localizedName: string;
      image: string;
      temperature: Temperature;
  }

  export interface Length {
      number: number;
      unit: string;
  }

  export interface Step {
      number: number;
      step: string;
      ingredients: Ingredient[];
      equipment: Equipment[];
      length: Length;
  }

  export interface AnalyzedInstruction {
      name: string;
      steps: Step[];
  }

  export interface Recipe {
      vegetarian: boolean;
      vegan: boolean;
      glutenFree: boolean;
      dairyFree: boolean;
      veryHealthy: boolean;
      cheap: boolean;
      veryPopular: boolean;
      sustainable: boolean;
      lowFodmap: boolean;
      weightWatcherSmartPoints: number;
      gaps: string;
      preparationMinutes: number;
      cookingMinutes: number;
      aggregateLikes: number;
      healthScore: number;
      creditsText: string;
      license: string;
      sourceName: string;
      pricePerServing: number;
      extendedIngredients: ExtendedIngredient[];
      id: number;
      title: string;
      readyInMinutes: number;
      servings: number;
      sourceUrl: string;
      image: string;
      imageType: string;
      summary: string;
      cuisines: string[];
      dishTypes: string[];
      diets: string[];
      occasions: string[];
      instructions: string;
      analyzedInstructions: AnalyzedInstruction[];
      originalId?: any;
      spoonacularSourceUrl: string;
  }

  export interface RootObject {
      recipes: Recipe[];
  }

  



    export interface Result {
        id: number;
        title: string;
        image: string;
        imageType: string;
    }

    export interface RootResult {
        results: Result[];
        offset: number;
        number: number;
        totalResults: number;
    }


    


    

        export interface Us {
            amount: number;
            unitShort: string;
            unitLong: string;
        }
    
        export interface Metric {
            amount: number;
            unitShort: string;
            unitLong: string;
        }
    
        export interface Measures {
            us: Us;
            metric: Metric;
        }
    
        export interface ExtendedIngredient {
            id: number;
            aisle: string;
            image: string;
            consistency: string;
            name: string;
            nameClean: string;
            original: string;
            originalName: string;
            amount: number;
            unit: string;
            meta: string[];
            measures: Measures;
        }
    
        export interface ProductMatch {
            id: number;
            title: string;
            description: string;
            price: string;
            imageUrl: string;
            averageRating: number;
            ratingCount: number;
            score: number;
            link: string;
        }
    
        export interface WinePairing {
            pairedWines: string[];
            pairingText: string;
            productMatches: ProductMatch[];
        }
    
        export interface Ingredient {
            id: number;
            name: string;
            localizedName: string;
            image: string;
        }
    
        export interface Equipment {
            id: number;
            name: string;
            localizedName: string;
            image: string;
        }
    
        export interface Length {
            number: number;
            unit: string;
        }
    
        export interface Step {
            number: number;
            step: string;
            ingredients: Ingredient[];
            equipment: Equipment[];
            length: Length;
        }
    
        export interface AnalyzedInstruction {
            name: string;
            steps: Step[];
        }
    
        export interface RootObject {
            vegetarian: boolean;
            vegan: boolean;
            glutenFree: boolean;
            dairyFree: boolean;
            veryHealthy: boolean;
            cheap: boolean;
            veryPopular: boolean;
            sustainable: boolean;
            lowFodmap: boolean;
            weightWatcherSmartPoints: number;
            gaps: string;
            preparationMinutes: number;
            cookingMinutes: number;
            aggregateLikes: number;
            healthScore: number;
            creditsText: string;
            license: string;
            sourceName: string;
            pricePerServing: number;
            extendedIngredients: ExtendedIngredient[];
            id: number;
            title: string;
            readyInMinutes: number;
            servings: number;
            sourceUrl: string;
            image: string;
            imageType: string;
            summary: string;
            cuisines: any[];
            dishTypes: string[];
            diets: string[];
            occasions: string[];
            winePairing: WinePairing;
            instructions: string;
            analyzedInstructions: AnalyzedInstruction[];
            originalId?: any;
            spoonacularSourceUrl: string;
        }
    
    
    
    



