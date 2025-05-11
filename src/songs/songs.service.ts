import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Song, SongDocument } from './schemas/song';
import { Model } from 'mongoose';
import { CreateSongDTO } from './dto/create-song-dto';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name)
    private readonly songModel: Model<SongDocument>,
  ) {}
  async create(createSongDto: CreateSongDTO): Promise<Song> {
    return await this.songModel.create(createSongDto);
  }

  async find(): Promise<Song[]> {
    return this.songModel.find();
  }

  async findById(id: string): Promise<Song> {
    return this.songModel.findById(id);
  }

  async delete(id: string): Promise<Song> {
    return this.songModel.findByIdAndDelete(id);
  }
}
