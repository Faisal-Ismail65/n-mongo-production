import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Album } from 'src/albums/schemas/album';

export type SongDocument = HydratedDocument<Song>;

const collection = 'Songs';

@Schema({
  timestamps: true,
  versionKey: false,
  collection: collection,
})
export class Song {
  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  releasedDate: Date;

  @Prop({
    required: true,
  })
  duration: string;

  @Prop({
    required: true,
  })
  lyrics: string;

  @Prop({
    type: Types.ObjectId,
    ref: Album.name,
    required: true,
  })
  album: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);
