import {Injectable} from '@angular/core';

@Injectable()
export class LocalHelperService {

    constructor() {
    }

    static  chunkArray(myArray, chunk_size) {
        let arrayLength = myArray.length;
        let tempArray = [];

        for (let index = 0; index < arrayLength; index += chunk_size) {
            let myChunk = myArray.slice(index, index + chunk_size);
            // Do something if you want with the group
            tempArray.push(myChunk);
        }

        return tempArray;
    }
}
