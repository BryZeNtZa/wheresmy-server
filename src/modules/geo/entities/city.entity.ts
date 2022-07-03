import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'cities' })
export class City {
  @PrimaryColumn()
  id: number;

  @Column()
  state_id: string;

  @Column()
  secret: string;

  @Column()
  country_id: number;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column()
  name: string;
}
