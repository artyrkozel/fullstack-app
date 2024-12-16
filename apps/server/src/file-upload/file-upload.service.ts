import { Injectable } from '@nestjs/common';

import { BufferedFile } from 'src/minio-client/file.model';
import { MinioClientService } from 'src/minio-client/minio-client.service';

@Injectable()
export class FileUploadService {
    constructor(private minioClientService: MinioClientService) {}

    async uploadSingle(image: BufferedFile) {
        const uploaded_image = await this.minioClientService.upload(image);

        return {
            image_url: uploaded_image.url,
        };
    }
}
