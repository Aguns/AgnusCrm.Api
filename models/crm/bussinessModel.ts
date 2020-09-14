import { Model } from 'https://deno.land/x/denodb/mod.ts';
import { DataTypes } from 'https://deno.land/x/denodb/mod.ts';

export class Business extends Model {
    static table = 'businesses';
    static fields = {
      id:  {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      // If we need to set the length for `name`, we can also use
      // an object
      name: {
        type: DataTypes.STRING,
        length: 25,
      },
    };  
}