import * as crypto from 'crypto';

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MinioService } from 'nestjs-minio-client';

import { BufferedFile } from './file.model';

@Injectable()
export class MinioClientService {
    constructor(
        private readonly minio: MinioService,
        private readonly configService: ConfigService,
    ) {}

    public async upload(file: BufferedFile, baseBucket: string = 'images') {
        if (!(file.mimetype.includes('jpeg') || file.mimetype.includes('png'))) {
            throw new HttpException('Error uploading file', HttpStatus.BAD_REQUEST);
        }

        const temp_filename = Date.now().toString();
        const hashedFileName = crypto.createHash('md5').update(temp_filename).digest('hex');
        const ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        const metaData = { 'Content-Type': file.mimetype };
        const filename = hashedFileName + ext;
        const fileName: string = `${filename}`;
        const fileBuffer = file.buffer;
        const fileSize = file.size;

        await this.minio.client.putObject(baseBucket, fileName, fileBuffer, fileSize, metaData);

        return {
            url: `${baseBucket}/${filename}`,
        };
    }
}
