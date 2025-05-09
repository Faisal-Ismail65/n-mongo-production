import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SongDocument = HydratedDocument<Song>;

const collection = 'songs';

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
}

export const SongSchema = SchemaFactory.createForClass(Song);
