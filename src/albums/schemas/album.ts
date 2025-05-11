import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Song } from 'src/songs/schemas/song';

export type AlbumDocument = HydratedDocument<Album>;

const collection = 'Albums';

@Schema({
  timestamps: true,
  versionKey: false,
  collection: collection,
})
export class Album {
  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    type: [Types.ObjectId],
    ref: 'Songs',
    required: true,
  })
  songs: Song[];
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
