import { Injectable } from '@nestjs/common';
import { Album, AlbumDocument } from './schemas/album';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAlbumDTO } from './dto/create-album-dto';
import { Song } from 'src/songs/schemas/song';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Album.name)
    private readonly albumModel: Model<AlbumDocument>,
  ) {}

  async create(createAlbumDto: CreateAlbumDTO): Promise<Album> {
    return await this.albumModel.create(createAlbumDto);
  }

  async find(): Promise<Album[]> {
    return this.albumModel.find().populate('songs', null, Song.name);
  }
}
