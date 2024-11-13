import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'chunk',
    standalone: true
})
export class ChunkPipe implements PipeTransform {
    transform<T>(value: T[], chunkSize: number): T[][] {
        if (!Array.isArray(value)) {
            throw new Error('Invalid input. Expected an array.');
        }

        if (chunkSize <= 0) {
            throw new Error('Invalid chunk size. Expected a positive integer.');
        }

        const chunks: T[][] = [];
        for (let i = 0; i < value.length; i += chunkSize) {
            chunks.push(value.slice(i, i + chunkSize));
        }
        return chunks;
    }
}