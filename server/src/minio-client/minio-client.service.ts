import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';
import { BufferedFile } from './file.model';
import * as crypto from 'crypto'
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MinioClientService {
  constructor(
    private readonly minio: MinioService,
    private readonly configService: ConfigService
  ) {}

  public async upload(file: BufferedFile, baseBucket: string = 'images') {
    
    if(!(file.mimetype.includes('jpeg') || file.mimetype.includes('png'))) {
      throw new HttpException('Error uploading file', HttpStatus.BAD_REQUEST)
    }

    let temp_filename = Date.now().toString()
    let hashedFileName = crypto.createHash('md5').update(temp_filename).digest("hex");
    let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
    const metaData = { 'Content-Type': file.mimetype };
    let filename = hashedFileName + ext
    const fileName: string = `${filename}`;
    const fileBuffer = file.buffer;
    const fileSize = file.size;

    await this.minio.client.putObject(baseBucket, fileName, fileBuffer, fileSize, metaData);

    return  {
      url: `${baseBucket}/${filename}` 
    }
  }
}
