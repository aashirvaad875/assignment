export interface Beers {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: Volume;
  method: {
    mash_temp: MashTemp[];
    fermentation: {
      temp: Volume;
    };
    twist: null;
  };
  ingredients: {
    malt?: Malt[];
    hops?: Hops[];
    yeast?: string;
  };
  food_pairing: [string];
  brewers_tips: string;
  contributed_by: string;
}

export interface Volume {
  value: number;
  unit: string;
}
export interface Malt {
  name: string;
  amount: Volume;
}

export interface Hops {
  name: string;
  amount: Volume;
  add: string;
  attribute: string;
}
export interface MashTemp {
  temp: Volume;
  duration: number;
}
